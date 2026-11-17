// Shared progress through a Google Form (writes) and its published Google Sheet (reads).
// Until these four values are filled in, progress stays in each browser only.
var SYNC = {
  formAction: 'https://docs.google.com/forms/d/e/1FAIpQLScKZGrJT8A0fMvNicTCULT5wEZAmyzrBaq4ZjM7LkqfmD9aPg/formResponse',   // https://docs.google.com/forms/d/e/<form id>/formResponse
  nameEntry: 'entry.611276276',    // entry.<number> of the "Trainee" question
  dataEntry: 'entry.2020538090',    // entry.<number> of the "Progress data" question
  sheetCsv: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTxLKSWZJ0ybfwliKeeegRR3lQldYA5CXZTl1MgdZglUhRJ6l45Wniunm3b7hHPNro6yx0whZo4GxKb/pub?output=csv'      // the response sheet published to the web as CSV (File > Share > Publish to web > CSV)
};

var Sync = (function () {
  function enabled() { return !!(SYNC.formAction && SYNC.nameEntry && SYNC.dataEntry); }
  var timer = null;

  function push(trainee, payload) {
    if (!enabled() || !trainee) return;
    clearTimeout(timer);
    timer = setTimeout(function () {
      var body = new URLSearchParams();
      body.append(SYNC.nameEntry, trainee);
      body.append(SYNC.dataEntry, JSON.stringify(payload));
      try { fetch(SYNC.formAction, { method: 'POST', mode: 'no-cors', body: body }); } catch (e) {}
    }, 1200);
  }

  // Minimal CSV parser that handles quoted fields with commas, quotes and line breaks.
  function parseCsv(text) {
    var rows = [], row = [], field = '', q = false;
    for (var i = 0; i < text.length; i++) {
      var c = text[i];
      if (q) {
        if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
        else if (c === '"') q = false;
        else field += c;
      } else if (c === '"') q = true;
      else if (c === ',') { row.push(field); field = ''; }
      else if (c === '\n' || c === '\r') { if (c === '\r' && text[i + 1] === '\n') i++; row.push(field); rows.push(row); row = []; field = ''; }
      else field += c;
    }
    if (field !== '' || row.length) { row.push(field); rows.push(row); }
    return rows;
  }

  // Returns the newest saved progress for this trainee, or null.
  function pull(trainee) {
    if (!SYNC.sheetCsv || !trainee) return Promise.resolve(null);
    return fetch(SYNC.sheetCsv + (SYNC.sheetCsv.indexOf('?') >= 0 ? '&' : '?') + 't=' + Date.now())
      .then(function (r) { return r.ok ? r.text() : ''; })
      .then(function (text) {
        var rows = parseCsv(text || ''), best = null;
        for (var i = 1; i < rows.length; i++) {
          var r = rows[i];
          // Columns from a Google Form sheet: Timestamp, Trainee, Progress data
          if ((r[1] || '').trim().toLowerCase() !== trainee.toLowerCase()) continue;
          try { var d = JSON.parse(r[2]); if (!best || (d.at || 0) >= (best.at || 0)) best = d; } catch (e) {}
        }
        return best;
      })
      .catch(function () { return null; });
  }

  return { enabled: enabled, push: push, pull: pull };
})();
