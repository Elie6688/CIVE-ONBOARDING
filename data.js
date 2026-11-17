// Module content for the CIVE onboarding website.

var AC = 'ArchiCorner';
var AS = 'ASIRI Designs';
var CV = 'CIVE';
var UC = 'UpCodes';
var PD = 'Podium series';
var FH = 'FHA Accessibility Training';
var YT = 'opens YouTube';
var UC_LIST = 'PLMIRK2b7wfxTdQdrGPQ5LVIBjX4XTykr0';
function yt(id) { return 'https://www.youtube.com/watch?v=' + id; }
var FORMA = 'https://acc.autodesk.com/docs/files/projects/f7fa77bd-93e5-4a90-88d7-9a8eb73bbf71?folderUrn=urn%3Aadsk.wipprod%3Afs.folder%3Aco.';
var FORMA_END = '&viewModel=detail&moduleId=folders';
var MODULES = [
  { num: 1, short: 'How US practice works', title: 'How architecture is practiced in the US',
    goal: 'Who does what on a US commercial project: licensed architects, engineers, contractors and the owner; what the AIA is; basic vs. supplemental services; delivery methods; and how a project moves from pre-design to construction administration.',
    empty: 'This module is the live session. Right after it, start Module 2 to set up UpCodes before the code videos.',
    live: { title: 'Session 1 · US building industry roles', topics: 'State boards and the AIA · legal role of the architect and HSW · basic vs. supplemental services · delivery methods and IPD · LOD/LOS by phase · bidding and CA at CIVE', deck: 'CIVE_Design_training_01 · 24 slides' },
    videos: [] },
  { num: 2, short: 'Finding the code: UpCodes', title: 'Finding the code: UpCodes navigation and Copilot search',
    goal: 'Before the ArchiCorner code videos, learn the tool we use to read codes. UpCodes puts the IBC, IECC, accessibility standards and local amendments in one searchable place, filtered to the project location. Learn to navigate it, search it, ask Copilot questions (then open and read the section it cites), and find building products. Keep UpCodes open during every video after this.',
    resources: [
      { title: 'UpCodes website', text: 'Search the codes adopted by each city and county, with local amendments, and ask Copilot. Sign in with your CIVE account.', url: 'https://up.codes', cta: 'Open UpCodes' },
      { title: 'IBC 2021 (model code, not amended) on ICC Digital Codes', text: 'The original 2021 International Building Code as published by the ICC, with no local amendments. Compare it with the adopted version in UpCodes.', url: 'https://codes.iccsafe.org/content/IBC2021P2', cta: 'Open IBC 2021' },
      { title: 'ICC Digital Codes: all the national model codes', text: 'The International Code Council (ICC) publishes the original model codes: IBC, IRC, IFC, IECC, IEBC, IPC, IMC and more. Use it to read a code as written before any AHJ amends it.', url: 'https://codes.iccsafe.org', cta: 'Open ICC codes' }
    ],
    live: null,
    videos: [
      { url: 'https://www.youtube.com/watch?v=CF39aGksTi0&list=' + UC_LIST, ch: UC, title: 'UpCodes how-to series · video 1', why: 'The first video in the UpCodes how-to playlist. Start here to get oriented in the platform.' },
      { url: yt('pqSB2J_Zei0'), ch: UC, title: 'How do I navigate and start using UpCodes?', why: 'Pick a jurisdiction, open its adopted codes and move between chapters and sections.' },
      { url: yt('bEpgH3BdcXI'), ch: UC, title: 'How do I search in UpCodes?', why: 'Search by keyword or section number across the codes adopted for your project.' },
      { url: yt('695G3xNKk_o'), ch: UC, title: 'How do I leverage UpCodes Copilot to accelerate code research?', why: 'Ask code questions in plain English. Copilot answers with section references; always read the cited section before you use the answer on a project.' },
      { url: 'https://www.youtube.com/watch?v=oUspYm1Bsc8&list=' + UC_LIST + '&index=10', ch: UC, title: 'How to find and select building products in UpCodes', why: 'Find products and rated assemblies that meet the code, useful once you start detailing in Module 7.' }
    ] },
  { num: 3, short: 'Occupancy, construction type & podiums', title: 'Reading the IBC: occupancy, construction type, height & area',
    goal: 'The first questions of every commercial code analysis: which AHJ and code edition apply, what the occupancy groups are and how mixed uses are handled, and which construction type you need. Then how a podium building stacks two construction types, and how all of this sets the allowable height and area.',
    live: { title: 'Session 2A · Building codes and code analysis', topics: 'AHJs in Texas · adopted code editions · Chapter 3 occupancy groups · Chapter 6 construction types and cost per sq ft · mixed and separated occupancies', deck: 'CIVE_Design_training_02 · slides 1–27' },
    videos: [
      { url: yt('El6m6avZkW0'), ch: AC, title: 'AC 001 · Intro', why: 'Meet the channel and how its code videos are organized. You will follow this series through Module 6.' },
      { url: yt('uyR_VmEAR64'), ch: AC, title: 'AC 003 · Occupancy Groups', why: 'The A–U letters you will see on every code sheet. Everything else builds on it.' },
      { url: yt('QF15G1sW2w4'), ch: AC, title: 'AC 030 · Occupant Load vs Occupancy Groups', why: 'Two terms new hires mix up constantly, explained side by side.' },
      { url: yt('Qe3gDOTJ4O8'), ch: AC, title: 'AC 033 · Accessory Occupancies: what are they?', why: 'The first mixed-use option (IBC 508.2): a small secondary use, such as offices in a warehouse, that does not change the main occupancy.' },
      { url: 'https://www.youtube.com/watch?v=pBUM1_lC03c&t=556s', ch: 'IBC code video', title: 'Nonseparated Occupancies', why: 'The second mixed-use option (IBC 508.3): no rated separation between uses, but the strictest requirements apply to the whole building. Starts at 9:16.' },
      { url: yt('EKRbNlCBLrs'), ch: AC, title: 'AC 004 · Building Types', why: 'An introduction to IBC construction types.' },
      { url: yt('RuqU5SUFNkU'), ch: AC, title: 'AC 016 · What is the difference between Construction Types I–V?', why: 'Types I to V in depth: materials, combustibility and required fire ratings.' },
      { url: 'https://www.youtube.com/shorts/70MfZDSc6aI', ch: AC, title: 'AC SHORT 007 · Stacked Buildings', why: 'A short on treating one building on top of another as separate buildings. This sets up the podium videos.' },
      { url: yt('mZnpO_eswkM'), ch: PD, title: 'Codes Series · Podium Construction', why: 'The code provisions that allow a podium (IBC 510.2) and what the podium must meet.' },
      { url: 'https://www.youtube.com/watch?v=o1BqXmWfgBc&t=207s', ch: PD, title: 'Design of Wood-Over-Concrete Podium Structures', why: 'How wood-over-concrete podium buildings are designed in practice, a common mixed-use and multifamily type. Starts at 3:27.' },
      { url: yt('iDoXA3UcYiI'), ch: AC, title: 'AC 039 · Determining allowable area for multi-occupancy and multi-story buildings', why: 'How occupancy and construction type turn into a maximum floor area.' },
      { url: yt('I4e8JPzPx8g'), ch: AC, title: 'AC 056 · Building Separation Requirements', why: 'How distance between buildings and to property lines affects walls and openings.' }
    ] },
  { num: 4, short: 'Fire ratings & egress', title: 'Fire-rated assemblies, shafts and means of egress',
    resources: [
      { title: 'UL tested assemblies and sound control test catalogue', text: 'Where to find the rated wall, floor and shaft assemblies you will tag on wall types after these videos.', url: FORMA + 'Sx7X3cBeSaiW6yA_6ytt_A' + FORMA_END }
    ],
    goal: 'How people get out safely. Understand what a fire-rated wall is, what shaft walls are and how elevator hoistways are protected. Then calculate the occupant load, size exits, count how many exits you need and check travel distance. The egress sample series ties it all together, and the last video uses the same occupant load to count plumbing fixtures.',
    live: { title: 'Session 2B · Fire resistance and Chapter 10 egress', topics: 'Section 601 element ratings · 705.5 exterior walls by fire separation distance · occupant load and egress width factors · stairways (1011) · number of exits (1006) · exit passageways (1024) · travel distance (1017)', deck: 'CIVE_Design_training_02 · slides 27–44' },
    videos: [
      { url: yt('5pWQEan5UM0'), ch: AC, red: true, title: 'AC 015 · What is a fire-rated wall?', why: 'What a rating means and how assemblies earn it, before you start drawing wall types.', note: 'Fire-rated walls come up on every commercial project, and much of this module builds on them. Watch it more than once if you need to, until you can explain in your own words what a rating means and how a wall earns it.' },
      { url: 'https://m.youtube.com/watch?v=WbHK7Q7Bodw', ch: AC, title: 'AC 036d · What are shaft walls and why use them?', why: 'The rated wall assembly used around stairs, elevators and MEP shafts, built from one side.' },
      { url: yt('01wRRN0Hk68'), ch: AC, title: 'AC 048 · Elevator Hoistway Protection', why: 'Rated shafts, elevator lobbies and hoistway door protection in multistory commercial buildings.' },
      { url: yt('QX3UWV-kOK4'), ch: AC, title: 'AC 014 · The Best IBC Chapter 10 Overview Ever! (In 10 minutes)', why: 'The big picture of means of egress (exit access, exit, exit discharge) before you start the calculations.' },
      { url: yt('-zAID2rWGbg'), ch: AC, title: 'AC 010 · Egress: How to calculate occupant loads (1 of 2) · The basics', why: 'Area divided by the load factor. This number drives every egress calculation.' },
      { url: yt('s2tGFQhP1HY'), ch: AC, title: 'AC 022 · Egress: How to calculate occupant loads (2 of 2) · Gross vs. net', why: 'When to use gross and when to use net square footage.' },
      { url: yt('VtpKAEmxc9E'), ch: AC, title: 'AC 011 · Egress: How to calculate egress widths', why: 'Turn the occupant load into door, corridor and stair widths.' },
      { url: 'https://www.youtube.com/watch?v=TwPPn-tJtvk&t=883s', ch: AC, title: 'AC 021 · Stair ADA and IBC requirements', why: 'Risers, treads, handrails and landings for egress stairs, under both the IBC and ADA. Starts at 14:43.' },
      { url: yt('MmBzY3_Dejg'), ch: AC, title: 'AC 013 · Egress: How many exits are required from a space?', why: 'When one exit is enough and when you need two or more.' },
      { url: yt('gZ5oB5L4NOA'), ch: 'IBC code video', title: 'Exit access, exit and exit discharge', why: 'The three parts of every means of egress, and where one ends and the next begins. Travel distance in the next video is measured along the exit access.' },
      { url: yt('_WhcoLsLnyk'), ch: AC, title: 'AC 029 · Number of exits, travel distance & common path of egress travel', why: 'The distance limits plan reviewers check first.' },
      { url: yt('YgQXnVVouoU'), ch: AC, title: 'AC 043 · Egress example', why: 'A worked example that combines the steps above.' },
      { url: yt('O_GHpck1E5s'), ch: AC, title: 'AC 059 · Egress sample (1 of 5): Occupant loads', why: 'Start of a full egress walkthrough on one plan.' },
      { url: yt('YDXaJF7S81s'), ch: AC, title: 'AC 060 · Egress sample (2 of 5): Number of exits and distance between exits', why: 'Exit count and the separation rule between exits.' },
      { url: yt('jsHZmoVOtDw'), ch: AC, title: 'AC 061 · Egress sample (3 of 5): Paths of travel', why: 'Tracing travel distance on the plan. Parts 4 and 5 are on the channel if you want to finish the series.' },
      { url: yt('Wy5fxITVnis'), ch: AC, title: 'AC 050 · How to calculate plumbing count', why: 'The same occupant load also sets the required number of toilets, lavatories and drinking fountains (IBC Chapter 29).' }
    ] },
  { num: 5, short: 'Site works & planning', title: 'Site works and planning',
    goal: 'How to read the documents a site starts from: surveys, plats, rights-of-way and easements. Then how the civil engineer handles stormwater detention, and how the architectural and civil site plans fit together.',
    empty: 'No videos for this module. It is covered entirely in the live session, so bring a current CIVE project survey and civil site plan to review together.',
    live: { title: 'Session 3 · Site works and planning', topics: 'Boundary, ALTA and topographic surveys · legal descriptions and recorded plats · ROW and easements · architectural vs. civil site plan · detention basins, swales, parking and underground systems · plan and profile', deck: 'CIVE_Design_training_03 · 20 slides' },
    videos: [
      { url: 'https://elie6688.github.io/CIVE-ONBOARDING/fire-access-roads.html', where: 'opens the presentation', cta: 'Start presentation', ch: CV, title: 'Designing fire apparatus access roads (CIVE presentation)', why: 'Fire lanes, hose lay, turning radii, turnarounds, hydrants and FDCs under IFC Section 503 and Appendix D, a site plan checklist, and an exercise on a CIVE fire lane plan. It opens as a slideshow: click or use the arrow keys to move between slides, and press F for full screen.', note: 'Fire access requirements change from one IFC edition to the next and with each AHJ’s amendments. Always check the AHJ’s adopted code before you lay out a fire lane.', red: true }
    ] },
  { num: 6, short: 'Accessibility: ADA, TAS & FHA', title: 'Accessibility law and codes',
    goal: 'Three overlapping rule sets: the federal ADA, the building code’s own accessibility chapter (and TAS in Texas), and the Fair Housing Act for multifamily. Learn how they relate, the key dimensions, and the Accessible, Type A and Type B dwelling units, before the session covers toilet rooms and HUD safe harbors.',
    resTitle: 'Standards locations and websites',
    resources: [
      { title: 'Fair Housing Act Design Manual (FHADM)', text: 'HUD’s design manual for the seven FHA requirements, with dimensioned diagrams for multifamily units and common areas. Open the PDF in the CIVE folder, or read it on UpCodes.', url: FORMA + '12pL3LHyRaCmoYGvRmrp2w' + FORMA_END, alt: { cta: 'Open on UpCodes', url: 'https://up.codes/viewer/fair-housing-act-1998' } },
      { title: 'ANSI A117.1-1986 (ansi_a117.1_1986.pdf)', text: 'The technical standard the FHADM refers to for detailed dimensions and requirements. Read it alongside the FHADM. It is in the same folder.', url: FORMA + '12pL3LHyRaCmoYGvRmrp2w' + FORMA_END },
      { title: 'U.S. Access Board ADA guides', text: 'The 2010 ADA Standards explained chapter by chapter with clear illustrations. Better illustrated, so start here.', url: 'https://www.access-board.gov/ada/guides/', cta: 'Open website' },
      { title: 'ADA Standards on UpCodes', text: 'The full text of the ADA Standards, searchable.', url: 'https://up.codes/viewer/ada', cta: 'Open website' }
    ],
    live: { title: 'Session 4 · Accessibility law and codes', topics: 'TAS 2012 / ADA 2010 · floor surfaces, clear floor and turning space · operable parts · parking · accessible routes · doors and gates · toilet rooms · Fair Housing Act safe harbors and the HUD design manual', deck: 'CIVE_Design_training_05 · 17 slides' },
    videos: [
      { url: yt('m6f2FjbO_JM'), ch: AC, title: 'AC 006 · ADA vs. Building Code Accessibility', why: 'Start here: why a project must meet both the civil-rights law and the building code, and how they differ.' },
      { url: yt('isMqyTSqz04'), ch: AC, title: 'AC 005 · Typical ADA requirements for ramps (updated April 2022)', why: 'Slope, rise, landings and handrails: the ramp rules you will draw most often.' },
      { url: 'https://www.access-board.gov/ada/guides/animations/', where: 'opens access-board.gov', cta: 'Open animations', ch: 'US Access Board', title: 'U.S. Access Board · ADA Standards animations (watch them all)', why: 'Short animated videos from the U.S. Access Board, the federal agency that develops the ADA accessibility guidelines, showing key requirements visually. Watch every animation on the page.' },
      { url: yt('x0QwmN_DCFk'), ch: AC, title: 'AC 007 · ADA size and clearance requirements (updated)', why: 'Wheelchair space, turning circles and reach ranges. Have the Access Board guides open alongside.' },
      { url: 'https://www.youtube.com/watch?v=U2jQpejrRcg&t=1216s', ch: AC, title: 'AC 020 · Accessibility requirements for restrooms', why: 'Toilet room layouts, grab bars and clearances. This is the California edition, so check every dimension against TAS 2012 and the 2010 ADA for our Texas projects. Starts at 20:16.' },
      { url: yt('DfdSbOkJ928'), ch: AC, title: 'AC 070 · Dimensions "Minimum" vs "Clear": which to use?', why: 'How to read the dimensions in accessibility diagrams: when a number is a minimum and when it must be a clear, unobstructed space, and how that changes what you draw.' },
      { url: yt('hm3HS6o8G74'), ch: AC, title: 'AC 012 · ADA Requirements for Toilets: Water Closets', why: 'Water closet centerline, clearances, seat height, grab bars and flush controls.' },
      { url: yt('-Xfb_AdECjQ'), ch: AC, title: 'AC 035 · Accessible Units, Type A Units and Type B Units', why: 'The three dwelling-unit levels in multifamily projects and how many of each you need.' },
      { after: true, url: 'https://www.ganjingworld.com/video/1fmfhn832qfBapXK8yT9T7k2K12j1c', where: 'opens Gan Jing World', ch: FH, title: 'The Fair Housing Act’s accessibility requirements: overview (session 1, with ASL)', why: 'The first session of the FHA training series. It builds on the FHA part of the live session and prepares you for multifamily projects.' }
    ] },
  { num: 7, short: 'Detailing the envelope', title: 'Detailing the building envelope',
    goal: 'Learn to detail a whole building envelope: the control layers (water, air, vapor, heat), how claddings like brick, stucco and rainscreen systems behave, and the details that leak most often: window heads and sills, roofs and parapets. This is the background for wall-type studies in DD and wall sections in CDs.',
    noteTitle: 'Read before watching: code minimum vs. high performance',
    note: 'ASIRI Designs focuses on high-performance buildings that go beyond code. You do not need to apply every strategy they show. In the US, the architect is responsible for meeting the minimum requirements of the codes adopted by the AHJ; going further is a choice made with the owner and the project scope. Use these videos to understand how buildings perform, then apply that understanding to our drawings within code and project requirements.',
    resources: [
      { title: 'ASIRI Designs details', text: 'All ASIRI Designs details, in Forma Data Management.', url: FORMA + '_5RW-hRJSce0KciYjTw5Ww' + FORMA_END },
      { title: 'Brick details', text: 'Brick veneer details: ties, drainage cavity, flashing, weeps and openings.', url: FORMA + 'I23bZIhMQ5GwQYHC5_94vw' + FORMA_END },
      { title: 'Fiber cement board details', text: 'Fiber cement cladding details, including rainscreen installations.', url: FORMA + '0RyXWiLlRGqfaVXWWlDDqA' + FORMA_END },
      { title: 'Stucco details', text: 'Stucco wall, opening and parapet details.', url: FORMA + 'tmHSOGiDQmihXB-skQ6l5w' + FORMA_END },
      { title: 'UL tested assemblies and sound control test catalogue', text: 'Fire-rated and acoustic wall, floor and roof assemblies to reference on wall types.', url: FORMA + 'Sx7X3cBeSaiW6yA_6ytt_A' + FORMA_END },
      { title: 'Architectural Graphic Standards', text: 'The standard reference for typical construction details. Look here first when you need a detail you have not drawn before.', url: FORMA + '12pL3LHyRaCmoYGvRmrp2w' + FORMA_END }
    ],
    live: null,
    videos: [
      { url: yt('yrHjqOMAZno'), ch: AS, title: 'Air barriers vs. vapor barriers: you need to know the difference', why: 'Start here: the two control layers people confuse most.' },
      { url: yt('K6HR2ftXFss'), ch: AS, title: 'You are using vapor barriers wrong: what you need to know', why: 'Where a vapor retarder belongs, and why a hot, humid climate like Houston changes the answer.' },
      { url: yt('1c-4AYdVGNg'), ch: AS, title: 'Continuous insulation explained (it is becoming code!)', why: 'Why the energy code increasingly asks for insulation outside the studs.' },
      { url: yt('y-dDATJrOxo'), ch: AS, title: 'Building science blind spots: material compatibility', why: 'Why membranes, sealants and flashings from different systems must be checked for compatibility.' },
      { url: yt('Y4-H2FPuqd8'), ch: AS, title: 'Reservoir claddings explained (brick, stucco and stone)', why: 'How absorbent claddings store and release water, and the air gap and drainage they need behind them.' },
      { url: yt('FwlZK7TpcSY'), ch: 'Building science', title: 'Rainscreens explained', why: 'The drained and vented gap behind cladding, used with fiber cement, metal panels and other rainscreen systems.' },
      { url: yt('WTZHQuicuwQ'), ch: AS, title: 'Continuous exterior insulation with stucco (not EIFS!)', why: 'A stucco wall with exterior insulation, and how it differs from EIFS.' },
      { url: yt('uiIngLQw_lw'), ch: AS, title: 'You have been flashing windows wrong: the key to leak-free windows', why: 'Window head, jamb and sill flashing sequence, the most common leak in our details.' },
      { url: yt('EBM-9q7UW-s'), ch: 'Building science', title: 'Flashing at windows (head, end dam and sill details)', why: 'Head flashing, end dams and sill pans drawn detail by detail, the way you will draw them in a CD set.' },
      { url: yt('KdhBPtqrQxQ'), ch: AS, title: 'Why you need an air barrier in your roof', why: 'Carrying the air barrier from the wall into the roof assembly.' },
      { url: yt('3hOY38uOXxE'), ch: AS, title: 'Exterior insulation for roofs (3 different ways)', why: 'Roof assemblies and where the insulation goes.' },
      { url: yt('lRFvaxJI5eQ'), ch: 'Building science', title: 'What’s the best way to waterproof a flat roof?', why: 'Low-slope roof membranes compared, so you can choose and detail the right one for a commercial roof.' },
      { url: 'https://www.youtube.com/watch?v=Lptv5mAGPSo&t=203s', ch: 'Building science', title: 'The problem with liquid applied roofing', why: 'Where liquid-applied membranes fail and what to watch for when one is specified. Starts at 3:23.' },
      { url: yt('-6y2ooXxqfU'), ch: AS, title: 'Flat roof parapet details explained (for architects and contractors)', why: 'A detail you will draw on almost every commercial project.' },
      { url: yt('dHkLeJp1Of0'), ch: AS, title: 'Leak-free stucco parapets for any climate', why: 'The parapet detail again, this time with stucco cladding.' },
      { url: yt('nZjdJ97Le1Y'), ch: 'Envelope', title: 'Roof parapet metal coping', why: 'How the metal coping caps the parapet: sloped top, cleats, drip edges and how the roof membrane laps under it.' },
      { url: yt('50FQpdnT-64'), ch: 'Building science', title: 'Essentials of good indoor air quality', why: 'Ventilation, filtration and source control: the Welfare part of HSW once the envelope is tight.' },
      { url: yt('_Py8_IYJahs'), ch: AS, title: 'The unintended consequences of energy efficiency', why: 'Tighter, better-insulated buildings bring new moisture risks. This prepares you for energy compliance.' }
    ] },
  { num: 8, short: 'Energy code: COMcheck', title: 'Energy code compliance with COMcheck',
    goal: 'In DD we check the envelope, lighting and mechanical systems against the IECC (or ASHRAE 90.1) using COMcheck. This walkthrough recorded at CIVE shows how we set up and run a COMcheck report on our projects.',
    live: { title: 'Covered in Session 1 (DD phase) and this recording', topics: 'Energy modeling in DD: Autodesk Insight and COMcheck · envelope U-values · fenestration · lighting power', deck: 'CIVE_Design_training_01 · slide 19' },
    videos: [ { comcheck: true, where: 'opens Autodesk Construction Cloud', ch: CV, title: 'How to do a COMcheck: CIVE walkthrough', why: 'Recorded by CIVE, hosted on Autodesk Construction Cloud (sign in with your CIVE ACC account). Follow along on a current project and save your report for review.' } ] },
  { num: 9, short: 'IBC required videos', title: 'IBC required videos',
    goal: 'Two more IBC videos your trainer requires, both on safety glazing (IBC Section 2406): where glass in and around doors must be tempered or laminated safety glazing. This affects door and storefront elevations and the glazing notes in your CDs.',
    live: null,
    videos: [
      { url: yt('1rJ2oK0qiYg'), ch: AC, title: 'AC 064 · Safety Glazing · In doors', why: 'When glass in a door is a hazardous location and must be safety glazing (IBC 2406). Have UpCodes open to Section 2406 alongside.' },
      { url: 'https://www.youtube.com/watch?v=lnPdHQWLmGc&t=66s', ch: AC, title: 'AC 065 · Safety Glazing · Adjacent to doors', why: 'When glass next to a door must be safety glazing, based on its distance from the door and its height above the floor. Starts at 1:06.' }
    ] },
  { num: 10, short: 'Rated assemblies, products and sets', title: 'Exercise: rated assemblies, product specs and reading a CIVE set',
    goal: 'Learn where a set’s content comes from, then how a finished set reads. First, add a UL fire-rated assembly to a Revit wall type with the USG Assembly Builder plugin. Second, find a manufacturer’s product with its details, BIM model and CSI specification. Then open a CIVE project in ACC Sheets and walk through the architecture set in order. It starts with the General sheets at G-000 (cover, sheet index, code analysis, life safety), then the A sheets: site, plans, elevations, sections, wall sections, details and schedules. Last, study a go-by project with strong details.',
    live: null,
    videos: [
      { url: yt('aplnil0CGx8'), ch: 'USG', title: 'Add a UL fire-rated assembly to a Revit wall type (USG Assembly Builder)', why: 'Shows how the USG Assembly Builder plugin for Revit builds a wall type from a tested UL fire-rated assembly, so the layers, rating and UL design number in the model match the tested design.', noteLabel: 'Try it.', note: 'Pick a 1-hour and a 2-hour partition from the example set. Find a matching UL design and build both wall types in a practice Revit file. Check that the wall tag and the wall type schedule show the UL number and the rating.',
        links: [{ title: 'USG Assembly Builder plugin', text: 'Download the Revit plugin and search tested UL fire-rated and acoustical assemblies.', url: 'https://www.usg.com/en-US/software/assembly-builder', cta: 'Open website' }] },
      { url: yt('GTsau4Y9z9k'), ch: 'ARCAT', title: 'Find and specify a building product: details, BIM models and CSI specs', why: 'Learn how to use ARCAT to pull a manufacturer’s product data for the set: the CAD and Revit details, the BIM model, the submittal data and the CSI MasterFormat specification section.', noteLabel: 'Try it.', note: 'For one of your wall types, find the product on ARCAT or the manufacturer’s site. Download its detail, its BIM model and its CSI specification section (for gypsum board assemblies, Section 09 21 16). Note which spec section number goes on the wall type legend.',
        links: [{ title: 'ARCAT', text: 'Free building product library. Search by manufacturer or CSI MasterFormat section and download CAD details, BIM models and specifications.', url: 'https://www.arcat.com/', cta: 'Open ARCAT' }] },
      { url: 'https://acc.autodesk.com/build/sheets/projects/be882361-4571-4dc7-8d1b-70c030cd0eac', where: 'opens Autodesk Construction Cloud', cta: 'Open sheets', ch: CV, title: 'Example project: architecture set in ACC Sheets', why: 'In ACC, open Sheets and start with G-000, then page through the set in order.', noteLabel: 'Exercise.', note: 'List the sheet series in order and what each one holds. Find the code analysis and the life safety plan. Pick one wall type and trace it from the floor plan to the wall section and its detail. Bring your notes and questions to the live session.' },
      { url: 'https://acc.autodesk.com/build/files/projects/1c91008c-d477-450a-8b03-bb9742ba9c7a?folderUrn=urn%3Aadsk.wipprod%3Afs.folder%3Aco.YoByj9hGSE-VBz4VCpEXng&viewModel=detail&moduleId=folders', where: 'opens Autodesk Construction Cloud', cta: 'Open folder', ch: CV, title: 'Go-by project: a well-detailed set', why: 'Use it as a go-by. Compare how its wall sections, envelope details and schedules are drawn and referenced with what you learned in Module 7.' }
    ] },
  { num: 11, short: 'Design set checklists', title: 'Design set checklists: check before every submission',
    goal: 'Before you submit any design phase (SD, DD, CD or permit set), go through the CIVE design set checklist for that phase. It catches the missing sheets, code items and coordination issues reviewers flag most. Open the folder, pick the checklist for your phase and complete it before the set goes out.',
    live: null,
    videos: [
      { url: 'https://acc.autodesk.com/docs/files/projects/f7fa77bd-93e5-4a90-88d7-9a8eb73bbf71?folderUrn=urn%3Aadsk.wipprod%3Afs.folder%3Aco.MpC73hIPRjSMj8hFJ2q_yg&viewModel=detail&moduleId=folders', where: 'opens Autodesk Construction Cloud', cta: 'Open folder', ch: CV, title: 'CIVE design set checklists (Autodesk Construction Cloud)', why: 'One checklist per design phase. Use it before each SD, DD, CD and permit submission, not just once. Sign in with your CIVE ACC account. Tick this box once you know where the checklists are and have reviewed them.', note: 'Make this a habit: open the checklist for your phase before every submission and finish it before the set is issued.' },
      { url: FORMA + '12pL3LHyRaCmoYGvRmrp2w' + FORMA_END, where: 'opens Autodesk Construction Cloud', cta: 'Open folder', ch: CV, title: 'United States National CAD Standard (NCS) · file: U_S_N_C_S-v4', why: 'The US standard for organizing a drawing set: sheet types and numbering, sheet order, drawing and detail references, layers, symbols and notes. Open the folder and look for the file U_S_N_C_S-v4.', note: 'CIVE is still implementing the NCS in our Revit templates, so our sets may not follow it everywhere yet. If anything about set organization or drafting conventions is unclear during DD or CD, check the book.' }
    ] }
];
var COM_URL = 'https://acc.autodesk.com/docs/files/projects/839b56c2-451d-42f6-806c-27d1df84af02?folderUrn=urn%3Aadsk.wipprod%3Afs.folder%3Aco.AqRBjGfhTZiJudsHxJw34Q&entityId=urn%3Aadsk.wipprod%3Adm.lineage%3Ac_mg44S4ToKi5Gk2vysyNA&viewModel=detail&moduleId=folders';
var KEY = 'cive-onboarding-v3';
function vkey(v) { return v.title; }
function tagColors(ch) {
  if (ch === AC) return 'background:#E8EEFC;color:#1A3F9E';
  if (ch === AS) return 'background:#E3F1EC;color:#1D5E48';
  if (ch === CV) return 'background:#FBEADB;color:#8A3B09';
  if (ch === UC) return 'background:#EFE8FB;color:#5B2E9E';
  return 'background:#ECEAE4;color:#3D4048';
}
function fmtDate(ts) {
  try { return new Date(ts).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }); } catch (e) { return ''; }
}
function mailto(to, subject, lines) {
  return 'mailto:' + to + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(lines.join('\n'));
}


var GLOSSARY = "<section style=\"background: #FFFFFF; border: 1px solid #DEDCD5; border-radius: 16px; padding: 28px; display: flex; flex-direction: column; gap: 18px\">\n<div style=\"display: flex; flex-direction: column; gap: 4px\">\n<h2 style=\"margin: 0; font-family: 'Space Grotesk', Inter, sans-serif; font-size: 24px\">US terms you will hear in week one</h2>\n<p style=\"margin: 0; color: #3D4048\">Keep this open while you watch. The videos use these abbreviations without explaining them.</p>\n</div>\n<div style=\"display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 12px\">\n<div style=\"background: #F7F6F2; border-radius: 10px; padding: 14px 16px\"><div style=\"font-weight: 700\">AHJ</div><div style=\"font-size: 14px; color: #3D4048\">Authority Having Jurisdiction: the city, county or agency that reviews and approves the project (building, fire marshal, planning, TxDOT, utilities).</div></div>\n<div style=\"background: #F7F6F2; border-radius: 10px; padding: 14px 16px\"><div style=\"font-weight: 700\">IBC / IRC</div><div style=\"font-size: 14px; color: #3D4048\">International Building Code covers commercial and multifamily buildings, our focus. The International Residential Code covers one- and two-family homes and townhouses. Each city adopts an edition, often with local amendments.</div></div>\n<div style=\"background: #F7F6F2; border-radius: 10px; padding: 14px 16px\"><div style=\"font-weight: 700\">UpCodes</div><div style=\"font-size: 14px; color: #3D4048\">An online code library with each jurisdiction\u2019s adopted codes and amendments in one place. Copilot is its AI assistant; always open and read the section it cites.</div></div>\n<div style=\"background: #F7F6F2; border-radius: 10px; padding: 14px 16px\"><div style=\"font-weight: 700\">IECC</div><div style=\"font-size: 14px; color: #3D4048\">International Energy Conservation Code: insulation, glazing, lighting and HVAC efficiency minimums. COMcheck shows compliance for commercial buildings.</div></div>\n<div style=\"background: #F7F6F2; border-radius: 10px; padding: 14px 16px\"><div style=\"font-weight: 700\">IFC</div><div style=\"font-size: 14px; color: #3D4048\">International Fire Code, enforced by the fire marshal: fire lanes, hydrants, sprinklers and alarms.</div></div>\n<div style=\"background: #F7F6F2; border-radius: 10px; padding: 14px 16px\"><div style=\"font-weight: 700\">ADA / TAS / FHA</div><div style=\"font-size: 14px; color: #3D4048\">2010 ADA Standards (federal) and Texas Accessibility Standards 2012, enforced by TDLR. Multifamily housing must also meet the Fair Housing Act.</div></div>\n<div style=\"background: #F7F6F2; border-radius: 10px; padding: 14px 16px\"><div style=\"font-weight: 700\">HSW</div><div style=\"font-size: 14px; color: #3D4048\">Health, Safety and Welfare: the public interest an architect's license exists to protect.</div></div>\n<div style=\"background: #F7F6F2; border-radius: 10px; padding: 14px 16px\"><div style=\"font-weight: 700\">P&amp;Z</div><div style=\"font-size: 14px; color: #3D4048\">Planning and Zoning: land use, setbacks, height, parking and landscape rules, separate from the building code.</div></div>\n<div style=\"background: #F7F6F2; border-radius: 10px; padding: 14px 16px\"><div style=\"font-weight: 700\">SD \u00b7 DD \u00b7 CD \u00b7 CA</div><div style=\"font-size: 14px; color: #3D4048\">Schematic Design, Design Development, Construction Documents, Construction Administration: the standard AIA design phases.</div></div>\n<div style=\"background: #F7F6F2; border-radius: 10px; padding: 14px 16px\"><div style=\"font-weight: 700\">LOD / LOS</div><div style=\"font-size: 14px; color: #3D4048\">Level of Development of the model and Level of Specification. Each phase raises both (for example LOD 200 in SD, LOD 300 in DD).</div></div>\n<div style=\"background: #F7F6F2; border-radius: 10px; padding: 14px 16px\"><div style=\"font-weight: 700\">Occupancy group</div><div style=\"font-size: 14px; color: #3D4048\">IBC Chapter 3 classification by use (A, B, E, F, H, I, M, R, S, U). It drives almost every other code requirement.</div></div>\n<div style=\"background: #F7F6F2; border-radius: 10px; padding: 14px 16px\"><div style=\"font-weight: 700\">Construction type</div><div style=\"font-size: 14px; color: #3D4048\">IBC Chapter 6, Types I to V, by how combustible and fire-resistant the structure is. Together with occupancy, it sets allowable height and area.</div></div>\n<div style=\"background: #F7F6F2; border-radius: 10px; padding: 14px 16px\"><div style=\"font-weight: 700\">Podium</div><div style=\"font-size: 14px; color: #3D4048\">A concrete (Type IA) base with a separate wood-frame building (often Type IIIA or VA) stacked above, common for mixed-use and multifamily projects.</div></div>\n<div style=\"background: #F7F6F2; border-radius: 10px; padding: 14px 16px\"><div style=\"font-weight: 700\">Means of egress</div><div style=\"font-size: 14px; color: #3D4048\">IBC Chapter 10: the path out of a building (exit access, exit, exit discharge), sized from the occupant load.</div></div>\n</div>\n</section>";
