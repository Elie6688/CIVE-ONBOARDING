// CIVE New Architect Onboarding: standalone website.
// Module content lives in data.js. Set TRAINER_EMAIL to show the "Email to trainer" buttons.
var TRAINER_EMAIL = '';
var BASE = window.SITE_BASE || '';
var TRAINEE = window.TRAINEE || null;
var INTRO_VIDEO = BASE + 'assets/welcome-to-cive.mp4';
var LOGO = BASE + 'assets/cive-logo.png';
var STORE_KEY = KEY + (TRAINEE ? '-' + TRAINEE.toLowerCase() : '');

(function () {
  var app = document.getElementById('app');
  var state = { view: 'intro', sel: 0, done: {}, qa: {}, drafts: {}, open: {}, music: false, at: 0, synced: null };
  var music = null, introUnlock = null, introStarted = false;

  try {
    var raw = window.localStorage.getItem(STORE_KEY);
    if (raw) { var s = JSON.parse(raw); state.done = s.done || {}; state.qa = s.qa || {}; state.sel = typeof s.sel === 'number' ? s.sel : 0; state.at = s.at || 0; }
  } catch (e) {}
  function persist() {
    state.at = Date.now();
    var data = { sel: state.sel, done: state.done, qa: state.qa, at: state.at };
    try { window.localStorage.setItem(STORE_KEY, JSON.stringify(data)); } catch (e) {}
    if (TRAINEE && Sync.enabled()) { var M = model(); data.pct = M.pct; data.count = M.count; data.total = M.total; Sync.push(TRAINEE, data); state.synced = true; }
  }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  // ---------- data model (same rules as the dashboard) ----------
  function model() {
    var total = 0, count = 0, next = null, qTotal = 0, allLines = [];
    var mods = MODULES.map(function (m, mi) {
      var md = 0, bi = 0;
      var vids = m.videos.map(function (v) {
        var k = vkey(v), url = v.comcheck ? COM_URL : (v.url || ''), isDone = !!state.done[k], qs = state.qa[k] || [];
        total++; if (isDone) { count++; md++; }
        if (!isDone && !next && url) next = { m: m.num, mi: mi, title: v.title, ch: v.ch, url: url, where: v.where || YT };
        if (!v.after) bi++;
        qTotal += qs.length;
        if (qs.length) { allLines.push('Module ' + m.num + ' · ' + v.title); qs.forEach(function (q, i) { allLines.push('  ' + (i + 1) + '. ' + q.t); }); allLines.push(''); }
        return { k: k, v: v, url: url, done: isDone, qs: qs, step: v.after ? 'After the live session' : 'Step ' + bi, mod: m };
      });
      return { m: m, mi: mi, vids: vids, md: md, n: vids.length };
    });
    return { mods: mods, total: total, count: count, next: next, qTotal: qTotal, allLines: allLines, pct: total ? Math.round(count / total * 100) : 0 };
  }

  // ---------- views ----------
  function progressCard(M) {
    var h = '<div class="progress card-box"><div class="pc-top"><span class="muted-s">Your progress</span><span class="pct">' + M.pct + '%</span></div>' +
      '<div class="bar"><div class="bar-fill" style="width:' + M.pct + '%"></div></div>' +
      '<div class="pc-row"><span>' + M.count + ' of ' + M.total + ' items done</span><button class="linkbtn" data-a="reset">Reset</button></div>' +
      (TRAINEE ? '<div class="pc-row"><span>' + (Sync.enabled() ? (state.synced === false ? 'Could not load saved progress' : 'Progress saved online for ' + esc(TRAINEE)) : 'Saved on this computer only') + '</span></div>' : '') +
      '<div class="pc-row pc-q"><span>' + (M.qTotal === 1 ? '1 question saved' : M.qTotal + ' questions saved') + '</span>';
    if (TRAINER_EMAIL && M.qTotal) h += '<a class="pc-mail" href="' + esc(mailto(TRAINER_EMAIL, 'Onboarding questions', M.allLines)) + '">Email all my questions</a>';
    return h + '</div></div>';
  }

  function welcomeView(M) {
    return '<section class="welcome card-box" aria-label="Welcome">' +
      '<div class="w-logo"><img src="' + LOGO + '" alt="CIVE logo"></div>' +
      '<div class="w-text"><div class="eyebrow">Welcome to the team</div><h1 class="w-title">Welcome to CIVE' + (TRAINEE ? ', ' + esc(TRAINEE) : '') + '</h1>' +
      '<p class="w-lead">We’re so glad you’re here. You are now part of <strong>CIVE</strong>, an architecture, engineering and construction (AEC) firm headquartered in Houston, Texas, where architects, engineers and builders work side by side to take projects from the first sketch to the finished building.</p>' +
      '<p class="w-body">This dashboard is your first project with us. It walks you through how architecture is practiced in the US, how to find and read the building codes, and how we detail and document our buildings. Go one module at a time, write down every question, and bring them to our live sessions. Nobody expects you to know it all on day one, and every one of us started where you are now.</p>' +
      '<div class="chips"><span class="chip c-blue">11 modules</span><span class="chip c-orange">Live sessions with the CIVE team</span><span class="chip c-green">Learn at your own pace</span></div>' +
      '<div><button class="iconbtn" data-a="music" aria-label="' + (state.music ? 'Mute welcome music' : 'Turn welcome music back on') + '" title="' + (state.music ? 'Mute welcome music' : 'Turn welcome music back on') + '">' +
      (state.music ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5L6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/></svg>'
        : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5L6 9H2v6h4l5 4z"/><path d="M22 9l-6 6M16 9l6 6"/></svg>') +
      '</button></div></div></section>' +
      '<header class="head"><div class="head-left"><h2 class="ready">Ready to start?</h2>' +
      '<p class="muted">Eleven modules, from how US practice works to reading a CIVE set and the design set checklists, each paired with videos and live sessions. Your progress and questions are saved in this browser, so you can stop and come back at any time.</p>' +
      '<div><button class="primary big" data-a="start">' + (M.count > 0 ? 'Continue the training' : 'Start the training') + ' →</button></div></div>' + progressCard(M) + '</header>';
  }

  function videoRow(it, after) {
    var v = it.v, open = !!state.open[it.k];
    var h = '<div class="vcard' + (it.done ? ' is-done' : '') + (after ? ' is-after' : '') + '"><div class="vrow">' +
      '<button class="check' + (it.done ? ' on' : '') + '" data-a="toggle" data-k="' + esc(it.k) + '" aria-pressed="' + it.done + '" aria-label="' + (it.done ? 'Mark as not done: ' : 'Mark as done: ') + esc(v.title) + '">' +
      (it.done ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="5 12 10 17 19 7"/></svg>' : '') + '</button>' +
      '<div class="vtext"><div class="vmeta"><span class="step' + (after ? ' step-after' : '') + '">' + esc(it.step) + '</span><span class="tag" style="' + tagColors(v.ch) + '">' + esc(v.ch) + '</span></div>' +
      '<span class="vtitle' + (v.red ? ' red' : '') + '">' + esc(v.title) + '</span><span class="why">' + esc(v.why) + '</span>';
    if (v.note) h += '<div class="note' + (v.red ? ' note-red' : '') + '"><strong>' + esc(v.noteLabel || 'Key video.') + '</strong> ' + esc(v.note) + '</div>';
    h += '</div><div class="vbtns"><button class="qabtn' + (open ? ' on' : '') + '" data-a="qa" data-k="' + esc(it.k) + '" aria-expanded="' + open + '">Q&amp;A' + (it.qs.length ? ' (' + it.qs.length + ')' : '') + '</button>' +
      (it.url ? '<a class="watch" href="' + esc(it.url) + '" target="_blank" rel="noopener">▶ ' + esc(v.cta || 'Watch') + '</a>' : '<span class="soon">Link coming soon</span>') + '</div></div>';
    if (open) {
      h += '<div class="qa"><div class="qa-h">Q&amp;A · your questions on this item</div>';
      it.qs.forEach(function (q, i) {
        h += '<div class="q"><span class="q-q">Q</span><span class="q-t">' + esc(q.t) + '</span><span class="q-d">' + esc(fmtDate(q.at)) + '</span><button class="q-x" data-a="delq" data-k="' + esc(it.k) + '" data-i="' + i + '" aria-label="Delete this question">✕</button></div>';
      });
      var id = 'q-' + btoa(unescape(encodeURIComponent(it.k))).replace(/[^A-Za-z0-9]/g, '').slice(0, 24);
      h += '<label for="' + id + '" class="qa-l">Add a question (timestamps help, e.g. “At 4:10, why…”)</label>' +
        '<textarea id="' + id + '" rows="2" data-draft="' + esc(it.k) + '" placeholder="Type your question about this item">' + esc(state.drafts[it.k] || '') + '</textarea>' +
        '<div class="qa-act"><button class="dark" data-a="addq" data-k="' + esc(it.k) + '">Save question</button>';
      if (TRAINER_EMAIL && it.qs.length) h += '<a class="watch" href="' + esc(mailto(TRAINER_EMAIL, 'Onboarding question · Module ' + it.mod.num + ' · ' + v.title, ['Item: ' + v.title, it.url, ''].concat(it.qs.map(function (q, i) { return (i + 1) + '. ' + q.t; })))) + '">Email to trainer</a>';
      h += '<span class="muted-s">Saved in this browser. Bring them to the live session.</span></div></div>';
    }
    return h + '</div>';
  }

  function trainingView(M) {
    var cur = M.mods[state.sel], m = cur.m;
    var h = '<header class="head"><div class="head-left"><div class="eyebrow grey">CIVE, Inc · New Architect Onboarding' + (TRAINEE ? ' · ' + esc(TRAINEE) : '') + '</div>' +
      '<h1 class="t-title">Your path to designing buildings in the US</h1>' +
      '<p class="muted">Step by step, you will learn to find the code, understand it, and turn it into drawings that pass review. Each module pairs short videos with a live session with the CIVE team. Note your questions under any video as you go, and bring them to the session.</p>' +
      '<div><button class="ghost" data-a="welcome">← Welcome page</button></div></div>' + progressCard(M) + '</header>';
    if (M.next) h += '<a class="upnext" href="' + esc(M.next.url) + '" target="_blank" rel="noopener"><span class="un-ic">▶</span><span class="un-t"><span class="un-e">Up next · Module ' + M.next.m + '</span><span class="un-n">' + esc(M.next.title) + '</span></span><span class="un-w">' + esc(M.next.ch) + ' · ' + esc(M.next.where) + '</span></a>';
    h += '<div class="layout"><nav class="nav" aria-label="Modules"><div class="eyebrow grey">Learning path</div>';
    M.mods.forEach(function (x) {
      var on = x.mi === state.sel, complete = x.n > 0 && x.md === x.n;
      h += '<button class="navbtn' + (on ? ' on' : '') + '" data-a="sel" data-i="' + x.mi + '"' + (on ? ' aria-current="true"' : '') + '><span class="num' + (complete ? ' done' : on ? ' cur' : '') + '">' + x.m.num + '</span><span class="nav-t"><span class="nav-n">' + esc(x.m.short) + '</span><span class="nav-m">' +
        (x.n === 0 ? 'Live session only' : x.md + '/' + x.n + ' done' + (x.m.live ? ' · live session' : '')) + '</span></span></button>';
    });
    h += '</nav><main class="main"><section class="card-box mod"><div class="eyebrow">Module ' + m.num + '</div><h2 class="m-title">' + esc(m.title) + '</h2><p class="muted">' + esc(m.goal) + '</p>';
    if (m.note) h += '<div class="note big-note"><strong>' + esc(m.noteTitle || 'Note') + '</strong><br>' + esc(m.note) + '</div>';
    if (m.resources && m.resources.length) {
      h += '<div class="eyebrow grey">CIVE reference folders</div>';
      m.resources.forEach(function (r) { h += '<div class="res"><div class="res-t"><span class="res-n">' + esc(r.title) + '</span><span class="why">' + esc(r.text) + '</span></div><a class="watch" href="' + esc(r.url) + '" target="_blank" rel="noopener">' + esc(r.cta || 'Open folder') + '</a></div>'; });
    }
    if (m.live) h += '<div class="live"><div class="live-e">Live session with CIVE · after the videos</div><div class="live-n">' + esc(m.live.title) + '</div><div class="why">' + esc(m.live.topics) + '</div><div class="live-d">' + esc(m.live.deck) + ' · Date: [TBD]</div></div>';
    h += '</section><section class="list"><div class="list-h"><h3>Watch in this order</h3><span class="muted-s">' + (cur.n ? cur.md + ' of ' + cur.n + ' done' : '') + '</span></div>';
    var before = cur.vids.filter(function (x) { return !x.v.after; }), after = cur.vids.filter(function (x) { return x.v.after; });
    if (!cur.n) h += '<div class="empty">' + esc(m.empty || '') + '</div>';
    before.forEach(function (it) { h += videoRow(it, false); });
    h += '</section>';
    if (after.length) { h += '<section class="list"><div class="list-h"><h3>Required after the live session</h3></div><p class="muted-s">Watch this once the live session is done. It is a prerequisite for the next module.</p>'; after.forEach(function (it) { h += videoRow(it, true); }); h += '</section>'; }
    h += '<div class="pager"><button class="ghost" data-a="prev">← Previous module</button><button class="primary" data-a="next">Next module →</button></div></main></div>';
    h += GLOSSARY + '<footer class="foot">Videos: UpCodes, ArchiCorner, ASIRI Designs and others as tagged. Codes change; always confirm the edition your AHJ has adopted. Progress and questions are saved in this browser only.</footer>';
    return h;
  }

  function introView() {
    return '<div class="intro" aria-label="Welcome video"><video id="intro-video" src="' + INTRO_VIDEO + '" autoplay muted playsinline preload="auto"></video>' +
      '<button class="skip" data-a="skip">Skip intro →</button></div>';
  }

  function render() {
    var M = model();
    var html = state.view === 'intro' ? introView() : '<div class="wrap">' + (state.view === 'welcome' ? welcomeView(M) : trainingView(M)) + '</div>';
    app.innerHTML = html;
    if (state.view === 'intro') setupIntro();
  }

  // ---------- intro video ----------
  function setupIntro() {
    var v = document.getElementById('intro-video');
    if (!v) return;
    v.addEventListener('ended', finishIntro);
    var tryPlay = function () {
      if (introStarted) return; introStarted = true;
      v.muted = false;
      var p = v.play();
      if (p && p.catch) p.catch(function () {
        // The browser blocked sound before any click: keep the video playing silently,
        // and bring the sound in at the visitor's first click, tap or key press.
        v.muted = true; var q = v.play(); if (q && q.catch) q.catch(function () {});
        introUnlock = function () { removeUnlock(); if (state.view === 'intro') { v.muted = false; var r = v.play(); if (r && r.catch) r.catch(function () {}); } };
        document.addEventListener('pointerdown', introUnlock, true); document.addEventListener('keydown', introUnlock, true);
      });
    };
    tryPlay();
    v.addEventListener('canplay', function () { if (v.paused && state.view === 'intro') { introStarted = false; tryPlay(); } });
    v.addEventListener('error', finishIntro);
  }
  function removeUnlock() {
    if (introUnlock) { document.removeEventListener('pointerdown', introUnlock, true); document.removeEventListener('keydown', introUnlock, true); introUnlock = null; }
  }
  function finishIntro() {
    if (state.view !== 'intro') return;
    var v = document.getElementById('intro-video'); if (v) { try { v.pause(); } catch (e) {} }
    removeUnlock();
    state.view = 'welcome'; render(); startMusic(); window.scrollTo(0, 0);
  }

  // ---------- original welcome music, generated in the browser ----------
  function startMusic() {
    var AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
    var ctx; try { ctx = new AC(); } catch (e) { return; }
    var master = ctx.createGain(); master.gain.setValueAtTime(0, ctx.currentTime); master.gain.linearRampToValueAtTime(0.55, ctx.currentTime + 2.5);
    var delay = ctx.createDelay(1.0); delay.delayTime.value = 0.36; var fb = ctx.createGain(); fb.gain.value = 0.32; var wet = ctx.createGain(); wet.gain.value = 0.28;
    master.connect(ctx.destination); master.connect(delay); delay.connect(fb); fb.connect(delay); delay.connect(wet); wet.connect(ctx.destination);
    var lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 1400; lp.connect(master);
    function hz(m) { return 440 * Math.pow(2, (m - 69) / 12); }
    function pad(m, t, d) { var o = ctx.createOscillator(), g = ctx.createGain(); o.type = 'triangle'; o.frequency.value = hz(m); o.detune.value = (Math.random() - 0.5) * 8; g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.045, t + 1.2); g.gain.setValueAtTime(0.045, t + d - 1.0); g.gain.linearRampToValueAtTime(0, t + d + 0.6); o.connect(g); g.connect(lp); o.start(t); o.stop(t + d + 0.7); }
    function pluck(m, t) { var o = ctx.createOscillator(), g = ctx.createGain(); o.type = 'sine'; o.frequency.value = hz(m); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.07, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0008, t + 1.6); o.connect(g); g.connect(master); o.start(t); o.stop(t + 1.7); }
    var chords = [[48, 55, 64, 71], [45, 52, 60, 67], [41, 48, 57, 64], [43, 50, 59, 65]], bar = 3.6, i = 0, t = ctx.currentTime + 0.15;
    function schedule() { while (t < ctx.currentTime + bar * 2) { var c = chords[i % 4]; pad(c[0] - 12, t, bar); c.forEach(function (m) { pad(m, t, bar); }); [c[1] + 12, c[2] + 12, c[3] + 12, c[2] + 24, c[3] + 12, c[2] + 12].forEach(function (m, k) { pluck(m, t + k * (bar / 6) + 0.05); }); t += bar; i++; } }
    schedule();
    music = { ctx: ctx, master: master, timer: setInterval(schedule, 800) };
    state.music = true;
    if (ctx.state === 'suspended') {
      var unlock = function () { document.removeEventListener('pointerdown', unlock, true); if (music && music.ctx === ctx) ctx.resume(); };
      music.unlock = unlock; document.addEventListener('pointerdown', unlock, true);
    }
    if (state.view === 'welcome') render();
  }
  function stopMusic() {
    var mu = music; music = null; state.music = false;
    if (!mu) return;
    clearInterval(mu.timer);
    if (mu.unlock) document.removeEventListener('pointerdown', mu.unlock, true);
    try { var now = mu.ctx.currentTime; mu.master.gain.cancelScheduledValues(now); mu.master.gain.setValueAtTime(mu.master.gain.value, now); mu.master.gain.linearRampToValueAtTime(0, now + 0.8); setTimeout(function () { try { mu.ctx.close(); } catch (e) {} }, 1000); } catch (e) {}
  }

  // ---------- events ----------
  app.addEventListener('input', function (e) {
    var k = e.target.getAttribute && e.target.getAttribute('data-draft');
    if (k !== null && k !== undefined) state.drafts[k] = e.target.value;
  });
  app.addEventListener('click', function (e) {
    var b = e.target.closest('[data-a]'); if (!b) return;
    var a = b.getAttribute('data-a'), k = b.getAttribute('data-k');
    if (a === 'skip') return finishIntro();
    if (a === 'music') { if (state.music) stopMusic(); else startMusic(); return render(); }
    if (a === 'start') { stopMusic(); state.view = 'training'; render(); return window.scrollTo(0, 0); }
    if (a === 'welcome') { state.view = 'welcome'; render(); return window.scrollTo(0, 0); }
    if (a === 'reset') { if (confirm('Clear all your checkmarks?')) { state.done = {}; persist(); render(); } return; }
    if (a === 'sel') { state.sel = +b.getAttribute('data-i'); persist(); render(); return window.scrollTo(0, 0); }
    if (a === 'prev' || a === 'next') { state.sel = Math.max(0, Math.min(MODULES.length - 1, state.sel + (a === 'next' ? 1 : -1))); persist(); render(); return window.scrollTo(0, 0); }
    if (a === 'toggle') { if (state.done[k]) delete state.done[k]; else state.done[k] = true; persist(); return render(); }
    if (a === 'qa') { state.open[k] = !state.open[k]; return render(); }
    if (a === 'addq') { var txt = (state.drafts[k] || '').trim(); if (!txt) return; state.qa[k] = (state.qa[k] || []).concat([{ t: txt, at: Date.now() }]); state.drafts[k] = ''; persist(); return render(); }
    if (a === 'delq') { var list = (state.qa[k] || []).slice(); list.splice(+b.getAttribute('data-i'), 1); if (list.length) state.qa[k] = list; else delete state.qa[k]; persist(); return render(); }
  });

  render();
  if (TRAINEE && SYNC.sheetCsv) {
    Sync.pull(TRAINEE).then(function (remote) {
      if (remote && (remote.at || 0) > (state.at || 0)) {
        state.done = remote.done || {}; state.qa = remote.qa || {}; state.at = remote.at || 0;
        if (typeof remote.sel === 'number') state.sel = remote.sel;
        try { window.localStorage.setItem(STORE_KEY, JSON.stringify({ sel: state.sel, done: state.done, qa: state.qa, at: state.at })); } catch (e) {}
      }
      state.synced = remote !== null || state.synced;
      if (state.view !== 'intro') render();
    });
  }
})();
