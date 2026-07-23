/* ═══════════════════════════════════════════════════════════════
   DATA BLOCK — replaced by build.py from a content JSON file.
   The build script reads a content payload (see references/content-schema.md)
   and substitutes this entire comment block with:
     const SRC = { ... };
     const QS = [ ... ];
     const MTA_ANSWERS = [ ... ];
   ═══════════════════════════════════════════════════════════════ */
const SRC = {
  '1A': {
    label: 'Source 1A',
    type: 'Historical Article',
    html: `<div class="sp-body">Construction on the Berlin Wall began early on the morning of Sunday 13 August 1961. It was a desperate attempt &ndash; an effective move by the German Democratic Republic (GDR) &ndash; to stop East Berliners escaping from the Soviet-controlled East German state into the West of the city, which was then occupied by the Americans, British and French.<br><br>Berlin's unique situation as a city half-controlled by Western forces, in the middle of the Soviet Occupation Zone of Germany, made it a focal point for tensions between the Allies and the Soviets and a place where conflicting ideologies were enforced side by side.<br><br>However, as more and more people in the Soviet-controlled East grew disillusioned (dissatisfied) with communism and the increasingly oppressive economic and political conditions, an increasing number began defecting (running away) to the West. By 1961 an estimated 1 500 people a day were fleeing to the West, damaging both the credibility and, more importantly, the workforce of the GDR.<br><br>In a masterfully planned operation, spanning (taking) just 24 hours, the streets of Berlin were torn up, barricades of paving stones were erected, tanks were gathered at crucial places and subways and local railway services were interrupted, so that within a day the West of Berlin was completely sealed off from the East. As of that same day, inhabitants of East Berlin and the GDR were no longer allowed to enter the West of the city &ndash; including the 60 000 who had been commuters (travellers).</div>`,
    attr: 'From \'Berlin Local Life\', Travel Guide by D Rhodes, 31 March 2015'
  },
  '1B': {
    label: 'Source 1B',
    type: 'Historical Account',
    html: `<div class="sp-body">Hans Peters was on border duty in the French Sector of West Berlin. At 2.20 a.m., six trucks roared towards him, headlights blazing. Eighty yards away they stopped. A moment later, the street was full of armed soldiers who set up machine guns aimed at the French Sector. Two guards approached carrying coils (rolls) of barbed wire. At the invisible border line between the Soviet and French Sectors the squads cordoned off (blocked) the street. In the houses no one stirred (moved).<br><br>At 4.45 a.m. Ursula Heinemann awoke in her East Berlin flat to another working day at the Plaza Hotel in West Berlin. She walked to the nearby station and went to the ticket counter. 'Nein! Nein! [No! No!] Take your pfennigs (money) back! It's all over now with trips to Berlin.' At that moment Ursula saw five armed East German transport police heading her way. She turned and ran back to her flat. 'They've closed the border!' She decided that she must cross to the West. Near the United States Sector she slipped through an orchard and reached the barbed wire border. Ursula crawled forward on her stomach. She felt the metal barbs tearing her skin. At last she reached a border post. A moment later, she was in West Berlin.<br><br>By early morning East German police and soldiers had cut the city in two. The seal-off operation went on. Only a few crossing points stayed open, protected by tanks, armoured cars and water cannons. Nevertheless, some were still determined to risk death by crossing from East to West.</div>`,
    attr: 'From The Great Power Conflict After 1945 by P Fisher'
  },
  '1C': {
    label: 'Source 1C',
    type: 'Newspaper Article',
    html: `<div class="sp-body">Siegfried Noffke was a 22-year-old who had been separated from his family by a momentous (important), tragic (sad) event that took the world by surprise. Noffke, an East Berliner, had been visiting relatives in capitalist West Berlin that evening. Like hundreds of others, he returned to a crossing point into East Berlin on the morning of 13 August but found it barred (blocked) by border police with machine guns. His only chance of contact with his wife and daughter, left in the East, was to wave at them across the barbed-wire divide.<br><br>He decided that his only chance was to smuggle his family into the West. He joined a group that had started to dig a tunnel from West Berlin's Sebastian Strasse that aimed to break through under the Wall into East Berlin's Heinrich Heine Strasse, a distance of some 200 yards.<br><br>On the morning of 28 June 1962, the tunnel diggers had almost reached their goal. But when Noffke and his team broke through, they were met by East Germany's notorious Stasi secret police. Noffke, one of the first out, was instantly machine-gunned to death. His colleagues were arrested and put on trial for 'anti-state provocation' (challenging the state). Unbeknown (not known) to the tunnel-diggers, Jurgen Henning, a Stasi mole (spy), had joined the group early on and had kept the East Berlin authorities fully informed. Noffke's wife was jailed in East Germany for 'anti-Communist conspiracy (plot against communism)'.</div>`,
    attr: 'From The Independent, \'Revealed: Tragic Victims of the Berlin Wall\' by T Paterson, 12 August 2006'
  },
  '1D': {
    label: 'Source 1D',
    type: 'Political Cartoon',
    html: `<img class="sp-img" src="1D.png" alt="A black-and-white cartoon. East German soldiers bounce over the Berlin Wall towards the Western Sector using springs on their boots, several flying through the air. A signpost reads 'ACHTUNG! WESTERN SECTOR DEFECTORS WELCOME'. The wall carries a mock-accent label about being built by the Communist Bloc. Two uniformed generals watch from the foreground."><div class="sp-body" style="margin-top:12px;">Caption: 'The men are becoming more jumpy as the Berlin Crisis deepens, Comrade &hellip;'</div>`,
    attr: 'Cartoon by J Hook, The Mercury newspaper, Australia, 29 August 1961'
  },
  'compare': {
    label: 'Sources 1A + 1B',
    type: 'Comparison',
    html: `<div class="sp-body"><strong>Source 1A</strong><br><br>&hellip; In a masterfully planned operation, spanning just 24 hours, the streets of Berlin were torn up, barricades of paving stones were erected, tanks were gathered at crucial places &hellip; so that within a day the West of Berlin was completely sealed off from the East. &hellip;</div><div class="sp-body" style="margin-top:12px;"><strong>Source 1B</strong><br><br>&hellip; At 2.20 a.m., six trucks roared towards him &hellip; the street was full of armed soldiers who set up machine guns &hellip; Two guards approached carrying coils of barbed wire &hellip; By early morning East German police and soldiers had cut the city in two. &hellip;</div>`,
    attr: 'Re-read both sources, then explain how they connect.'
  },
  'para': {
    label: 'Paragraph Task',
    type: 'Q1.6, 8 marks',
    html: `<div class="sp-body">Now build an eight-mark paragraph answering the guiding question: <em>How were the lives of Berliners affected by the construction of the Berlin Wall in 1961?</em><br><br>Work through it in four steps &ndash; a topic sentence, evidence from the sources, your own knowledge, and a synthesising conclusion. Choose the strongest option at each step.</div>`,
    attr: 'Build the paragraph one move at a time.'
  },
  'mta': {
    label: 'Mark This Answer',
    type: 'Evaluative Task',
    html: `<div class="sp-body">Below are two learner paragraphs answering the same eight-mark question. Read each one carefully and mark it against the six criteria, deciding for each criterion whether the paragraph does it fully, partially, or not at all.</div>`,
    attr: 'Mark like an examiner.'
  },
};

const QS = [
  {id: 'q1', src: '1A', num: '1.1.1', m: 1, t: 'When, according to the source, did the construction of the Berlin Wall begin?', lv: 1, ll: 'Extraction', opts: ['Early on the morning of Sunday 13 August 1961.', 'On the morning of Thursday 28 June 1962.', 'During the night of 9 November 1989.', 'In the early spring of March 1946.'], c: 0, fb: 'The source\'s opening line states construction began \'early on the morning of Sunday 13 August 1961\'. The other dates belong to different events: the 1962 tunnel break-in, the Wall\'s fall in 1989, and Churchill\'s 1946 speech.'},
  {id: 'q2', src: '1A', num: '1.1.2', m: 1, t: 'Give ONE reason, according to the source, why the German Democratic Republic (GDR) constructed the Berlin Wall.', lv: 1, ll: 'Extraction', opts: ['To stop East Berliners escaping into the West of the city.', 'To protect East Berliners from a Western military invasion.', 'To create more jobs for unemployed East German workers.', 'To reunite the divided city under a single government.'], c: 0, fb: 'The source says the Wall was \'a desperate attempt ... to stop East Berliners escaping ... into the West of the city\'. The other options are not given as reasons in the source.'},
  {id: 'q3', src: '1A', num: '1.1.3', m: 2, t: 'Define the concept communism in your own words.', lv: 1, ll: 'Concept', opts: ['A political and economic system where the state owns property and wealth is shared collectively.', 'A system where private individuals own businesses and compete freely for their own profit.', 'A form of government in which a single monarch inherits and holds absolute power.', 'A policy of expanding a nation\'s power by conquering and ruling foreign colonies.'], c: 0, fb: 'Communism is a system of collective, state ownership with shared wealth. The other options describe capitalism, monarchy and imperialism.'},
  {id: 'q4', src: '1A', num: '1.1.4(a)', m: 2, t: 'Explain why you think the fleeing of people to the West in 1961 ended up damaging \'the credibility of the GDR\'.', lv: 2, ll: 'Interpretation', opts: ['Mass defection showed the world that people rejected communist rule, making the GDR look like a failing, unpopular state.', 'It proved that the GDR had a strong, growing economy that was attracting many new foreign workers.', 'It showed the world that the Western powers were secretly kidnapping ordinary East German citizens.', 'It demonstrated that the GDR government was clearly popular and deeply trusted by its own people.'], c: 0, fb: 'People fleeing in huge numbers made it obvious that they rejected the communist GDR, which damaged its credibility. The other options reverse that meaning or invent kidnapping.'},
  {id: 'q5', src: '1A', num: '1.1.4(b)', m: 2, t: 'Explain why you think the fleeing of people to the West in 1961 ended up damaging \'the workforce of the GDR\'.', lv: 2, ll: 'Interpretation', opts: ['Losing about 1 500 workers a day stripped the GDR of the skilled labour it needed to run its economy.', 'The fleeing workers physically took all of the GDR\'s factory machinery with them to the West.', 'Those who left were quickly replaced by even more productive workers sent from the Soviet Union.', 'The workforce grew far too large, so the GDR could no longer afford to pay everyone\'s wages.'], c: 0, fb: 'Around 1 500 people fleeing daily drained the GDR of workers, crippling its economy. The other options reverse the effect or invent stolen machinery.'},
  {id: 'q6', src: '1A', num: '1.1.5', m: 2, t: 'Quote TWO pieces of evidence from the source which indicate that \'within a day the West of Berlin was completely sealed off from the East\'. Choose TWO responses.', lv: 1, ll: 'Extraction', multi: true, mx: 2, opts: ['The streets of Berlin were torn up', 'Barricades of paving stones were erected', 'New shopping centres were opened in the West', 'Free trains were provided to cross the border', 'The Americans and British left the city entirely'], c: [0, 1], fb: 'The source lists how the city was sealed: \'the streets of Berlin were torn up, barricades of paving stones were erected, tanks were gathered ...\'. The other options are not in the source.'},
  {id: 'q7', src: '1B', num: '1.2.1', m: 3, t: 'Identify THREE incidents in the source that Hans Peters witnessed at 2.20 a.m. (13 August 1961) while on border duty in the French Sector. Choose THREE responses.', lv: 1, ll: 'Extraction', multi: true, mx: 3, opts: ['Six trucks roared towards him with headlights blazing', 'Armed soldiers set up machine guns aimed at the French Sector', 'Two guards approached carrying coils of barbed wire', 'A large crowd of civilians cheered the soldiers on', 'Ursula Heinemann crawled across the barbed wire border', 'Tanks fired water cannons directly at the crowd'], c: [0, 1, 2], fb: 'Peters saw the six trucks, the soldiers setting up machine guns, and the guards with barbed wire. The other options did not happen at his post at 2.20 a.m.'},
  {id: 'q8', src: '1B', num: '1.2.2', m: 4, t: 'Comment on what is implied by the words, \'It\'s all over now with trips to Berlin\', in the context of what happened on 13 August 1961.', lv: 2, ll: 'Interpretation', opts: ['It implies the border had been sealed overnight, so East Berliners could no longer travel or commute freely into West Berlin.', 'It implies that all of the public transport in the city of Berlin had permanently broken down that day.', 'It implies that tourists had simply lost interest in visiting the divided city of Berlin.', 'It implies that the war between East and West Germany had at last come to an end.'], c: 0, fb: 'The ticket clerk\'s words mean the border is shut, ending free movement into West Berlin. The other options misread it as a transport fault, lost tourism, or the end of a war.'},
  {id: 'q9', src: '1B', num: '1.2.3', m: 4, t: 'Explain why a historian would regard this source as reliable when researching an account of what transpired on the morning of 13 August 1961.', lv: 3, ll: 'Reliability', opts: ['It gives detailed first-hand eyewitness accounts from people who were actually present in Berlin that morning.', 'It was written by a GDR government official whose job was to promote the state\'s official policies.', 'It was published more than fifty years later by an author whose identity is completely unknown.', 'It contains only the personal opinions of the historian rather than any specific factual detail.'], c: 0, fb: 'The source\'s reliability comes from its detailed eyewitness accounts (Peters and Heinemann) by people who were there. The other options describe features that would weaken reliability, not strengthen it.'},
  {id: 'q10', src: 'compare', num: '1.3', m: 4, t: 'Study Source 1A and Source 1B. Explain how the information in Source 1A supports the evidence in Source 1B regarding events that took place in Berlin on 13 August 1961.', lv: 3, ll: 'Comparison', opts: ['Both describe the overnight sealing of the city: 1A explains the streets were torn up and Berlin sealed off, while 1B shows soldiers and barbed wire closing the border.', 'They contradict each other: 1A says the border stayed fully open while 1B says it was sealed shut with barbed wire.', 'Both argue that the Western powers, and not the GDR, were the ones responsible for building the Berlin Wall.', '1A supports 1B by proving that not a single person was able to escape from East to West Berlin at all.'], c: 0, fb: 'Both sources describe the rapid overnight sealing of Berlin, 1A in general terms and 1B through eyewitnesses. They agree; they do not contradict, blame the West, or claim no one escaped (1B shows Ursula escaping).'},
  {id: 'q11', src: '1C', num: '1.4.1', m: 2, t: 'Why, according to the source, was Noffke in West Berlin on the evening before the construction of the Berlin Wall?', lv: 1, ll: 'Extraction', opts: ['He had been visiting his relatives in capitalist West Berlin that evening.', 'He was working a night shift at a large factory in West Berlin.', 'He was buying machine guns from the West Berlin border police.', 'He was digging an escape tunnel underneath the Berlin Wall.'], c: 0, fb: 'The source says Noffke \'had been visiting relatives in capitalist West Berlin that evening\'. The tunnel came later, and the other options are not in the source.'},
  {id: 'q12', src: '1C', num: '1.4.2', m: 2, t: 'Explain the concept capitalist in the context of West Berlin.', lv: 2, ll: 'Concept', opts: ['An economic system based on private ownership and free trade, which West Berlin followed under the Western powers.', 'A system in which the state owns all property and shares the wealth equally among the people.', 'A military alliance that was formed in order to defend Western Europe against Soviet attack.', 'A government that was controlled directly from Moscow by the Soviet Communist Party.'], c: 0, fb: 'Capitalist West Berlin ran on private ownership and free trade under the Western powers. The other options describe communism, a military alliance, and Soviet control.'},
  {id: 'q13', src: '1C', num: '1.4.3', m: 4, t: 'What conclusions can be drawn from the fact that Noffke and a group were prepared to dig a tunnel of 200 yards to smuggle their families to the West?', lv: 2, ll: 'Interpretation', opts: ['It shows how desperate separated families were, and how far they would risk their lives to escape communist control.', 'It shows that tunnelling under the Wall was an easy and completely safe way to cross the border.', 'It shows that the East German authorities actively encouraged their people to leave for the West.', 'It shows that most East Berliners were quite content to stay living under communist rule.'], c: 0, fb: 'The huge effort and risk shows the desperation of divided families to escape. The other options wrongly call it safe, claim the GDR encouraged leaving, or say people were content.'},
  {id: 'q14', src: '1C', num: '1.4.4(a)', m: 1, t: 'How, according to the source, was the East German (Stasi) secret police able to deal with Noffke after the tunnel was completed?', lv: 1, ll: 'Extraction', opts: ['He was instantly machine-gunned to death.', 'He was arrested and put on trial.', 'He was jailed for anti-Communist conspiracy.', 'He was allowed to escape into the West.'], c: 0, fb: 'The source states Noffke \'was instantly machine-gunned to death\'. Arrest and jail were the fates of his colleagues and wife, not Noffke.'},
  {id: 'q15', src: '1C', num: '1.4.4(b)', m: 1, t: 'How, according to the source, was the East German (Stasi) secret police able to deal with Noffke\'s colleagues?', lv: 1, ll: 'Extraction', opts: ['They were arrested and put on trial for \'anti-state provocation\'.', 'They were instantly machine-gunned to death at the tunnel.', 'They were welcomed and then rewarded by the Stasi police.', 'They all escaped safely across into West Berlin.'], c: 0, fb: 'The colleagues \'were arrested and put on trial for anti-state provocation\'. Noffke was the one shot dead; the other options are not in the source.'},
  {id: 'q16', src: '1C', num: '1.4.4(c)', m: 1, t: 'How, according to the source, was the East German (Stasi) secret police able to deal with Noffke\'s wife?', lv: 1, ll: 'Extraction', opts: ['She was jailed for \'anti-Communist conspiracy\'.', 'She was reunited with her family.', 'She was machine-gunned at the border.', 'She was given a Stasi police job.'], c: 0, fb: 'The source says Noffke\'s wife \'was jailed in East Germany for anti-Communist conspiracy\'. The other options are not in the source.'},
  {id: 'q17', src: '1D', num: '1.5.1', m: 2, t: 'Explain whether you would consider the words, \'The men are becoming more jumpy as the Berlin Crisis deepens, Comrade …\', to be an appropriate caption for the cartoon.', lv: 2, ll: 'Interpretation', opts: ['Yes: it is a pun, as the soldiers are literally shown springing over the wall while \'jumpy\' also means increasingly nervous.', 'No: the caption suggests calm while the cartoon actually shows the soldiers standing perfectly still.', 'Yes: it shows that the Western generals were becoming frightened of a sudden Soviet attack.', 'No: the cartoon is really about happy tourists rather than about any nervous soldiers.'], c: 0, fb: 'The caption is a pun: the soldiers are literally jumping (on springs) and \'jumpy\' also means nervous, so it fits well. The other options misread the cartoon.'},
  {id: 'q18', src: '1D', num: '1.5.2', m: 2, t: 'Comment on the implication of the message on the signpost on the Western Sector side, \'… DEFECTORS WELCOME\'.', lv: 2, ll: 'Interpretation', opts: ['It implies the West openly welcomed East Germans who fled, mocking the GDR by encouraging its people to defect.', 'It implies that the West wanted to send all of the defectors straight back to the East.', 'It implies that defectors would be arrested the very moment they reached the West.', 'It implies that only Western soldiers were being allowed to cross over into the East.'], c: 0, fb: 'The sign shows the West welcoming defectors, mocking the GDR whose people were fleeing. The other options reverse the West\'s stance.'},
  {id: 'q19', src: '1D', num: '1.5.3', m: 2, t: 'What conclusion can you draw from the body language of the two generals in the foreground, in the context of defections that were taking place?', lv: 2, ll: 'Interpretation', opts: ['They look powerless and dismayed, unable to stop their own soldiers from fleeing to the West.', 'They look proud and confident that the wall has completely stopped all of the defections.', 'They look relaxed because they fully support their soldiers escaping into the West.', 'They look busy happily welcoming brand-new recruits into the East German army.'], c: 0, fb: 'The generals appear helpless as their own men defect, underlining the GDR\'s failure to stop the flow. The other options misread their body language.'},
  {id: 'q20', src: 'para', num: '1.6a', m: 2, t: 'Choose the best topic sentence for a paragraph explaining how the lives of Berliners were affected by the construction of the Berlin Wall in 1961.', lv: 3, ll: 'Synthesis', opts: ['The construction of the Berlin Wall in 1961 disrupted the lives of Berliners by dividing families and trapping people on either side.', 'The Berlin Wall was built out of concrete blocks and stood in the city for nearly three decades.', 'Berlin was a city that had been divided into Soviet, American, British and French sectors.', 'Many different kinds of people lived in the city of Berlin during the course of the 1960s.'], c: 0, fb: 'A topic sentence must answer the question and set up an argument. Only the first states how the Wall affected Berliners\' lives. The others are facts or vague background.'},
  {id: 'q21', src: 'para', num: '1.6b', m: 2, t: 'Which piece of source evidence best supports the topic sentence about the Wall disrupting Berliners\' lives?', lv: 3, ll: 'Synthesis', opts: ['Source 1B shows the border sealed overnight, forcing people like Ursula to risk their lives crawling across barbed wire.', 'Source 1A mentions that Berlin lay in the middle of the Soviet Occupation Zone of Germany.', 'Source 1C notes that the newspaper article was published in the year 2006.', 'Source 1D was drawn by the cartoonist J Hook for an Australian newspaper.'], c: 0, fb: 'Good evidence connects to the claim. Source 1B shows the human cost of the sealed border. The others are background, a publication date, or an irrelevant detail.'},
  {id: 'q22', src: 'para', num: '1.6c', m: 2, t: 'Which piece of your own knowledge best strengthens the argument about how the Wall affected Berliners?', lv: 3, ll: 'Synthesis', opts: ['Families were split for 28 years until the Wall fell in 1989; many died trying to cross.', 'The United Nations was founded in 1945 to help keep international peace and security.', 'The Marshall Plan of 1947 gave American economic aid to the countries of Western Europe.', 'Nelson Mandela was released from prison in South Africa in the year 1990.'], c: 0, fb: 'Own knowledge must fit the topic. The 28-year division and the deaths at the Wall directly show its effect on Berliners. The others belong to different topics.'},
  {id: 'q23', src: 'para', num: '1.6d', m: 2, t: 'Choose the best concluding sentence that synthesises the paragraph\'s argument.', lv: 3, ll: 'Synthesis', opts: ['In this way, the Wall made everyday life in Berlin one of separation, fear and danger.', 'Therefore, life in the city of Berlin carried on completely unchanged after the Wall was built.', 'As a result, all Berliners were perfectly happy to be safely divided from one another.', 'This shows that the Berlin Wall was mainly built in order to improve the city\'s roads.'], c: 0, fb: 'A conclusion should draw the argument together. The first captures the separation, fear and danger the Wall caused. The others contradict the evidence or trivialise it.'},
];

const MTA_ANSWERS = [
  {label: 'Answer A', text: 'The Berlin Wall affected the lives of Berliners a lot. The wall was built in 1961 to stop people from leaving East Berlin and going to the West. Source 1B says that the border was closed and people could not cross over anymore. Families were separated and some people tried to escape. This made life very hard for the people who were living in Berlin at that time.', expLv: 0, expM: '?-5', crit: [{q: 'Does it have a clear topic sentence addressing the question?', cor: 'partial', exp: 'It states the Wall affected lives \'a lot\' but does not clearly set out HOW, so the topic is only loosely framed.'}, {q: 'Does it use specific evidence from the sources?', cor: 'partial', exp: 'It refers to Source 1B but only generally, without the specific detail such as Ursula crawling across the barbed wire.'}, {q: 'Does it include own knowledge beyond the sources?', cor: 'no', exp: 'It stays inside the sources. There is no outside fact such as the 28-year division or the deaths at the Wall.'}, {q: 'Does it explain WHY (analysis), not just WHAT (description)?', cor: 'no', exp: 'It mainly describes what happened and ends with \'life was very hard\', without analysing how or why lives changed.'}, {q: 'Does it have a concluding sentence that synthesises?', cor: 'partial', exp: 'The last sentence restates that life was hard but does not pull the argument together.'}, {q: 'Is it a coherent paragraph, not a list of disconnected sentences?', cor: 'yes', exp: 'The sentences follow on from one another and read as a connected paragraph.'}]},
  {label: 'Answer B', text: 'The construction of the Berlin Wall in 1961 turned the daily lives of Berliners upside down. Overnight, as Source 1B describes, the border was sealed with barbed wire and machine guns, so commuters like Ursula Heinemann suddenly could not reach their jobs and had to risk their lives crawling across to the West. Source 1C shows how families were torn apart, driving Siegfried Noffke to dig a tunnel that cost him his life. Beyond the sources, the Wall went on to divide the city for 28 years, and more than a hundred people were shot trying to cross it before it fell in 1989. For ordinary Berliners, the Wall meant separation from family, the loss of work, and the constant danger of death if they tried to escape.', expLv: 0, expM: '?-8', crit: [{q: 'Does it have a clear topic sentence addressing the question?', cor: 'yes', exp: 'The first sentence states directly that the Wall turned Berliners\' daily lives upside down, answering the question.'}, {q: 'Does it use specific evidence from the sources?', cor: 'yes', exp: 'It draws specifically on Source 1B (Ursula, the sealed border) and Source 1C (Noffke\'s tunnel).'}, {q: 'Does it include own knowledge beyond the sources?', cor: 'yes', exp: 'It adds the 28-year division and the deaths at the Wall before 1989, accurate facts from beyond the sources.'}, {q: 'Does it explain WHY (analysis), not just WHAT (description)?', cor: 'yes', exp: 'It explains how the sealed border cut off work and split families, moving beyond description into effect and cause.'}, {q: 'Does it have a concluding sentence that synthesises?', cor: 'yes', exp: 'The closing sentence ties separation, lost work and danger together into one clear statement.'}, {q: 'Is it a coherent paragraph, not a list of disconnected sentences?', cor: 'yes', exp: 'It flows logically from claim to evidence to own knowledge to conclusion.'}]},
];

/* ═══ KULA LEARN BRIDGE ═══
   Reports results to a parent Kula Learn page via postMessage.
   See project doc: Kula_Revise_results_payload_spec.md (spec v1).
   KR_META is injected by build.py from paper.json meta. The bridge is
   inert unless (a) identity fields are present, (b) the page is inside
   an iframe, and (c) the host origin was passed as ?host=<origin>.   */
const KR_META = {interactiveId: 'history-p1-2024-nov-q1', paper: 'P1', section: 'A', questionNumber: 1, paperRef: 'DBE November 2024'};
const KR_SPEC_VERSION = 1;
var krHostOrigin = '';
try {
    krHostOrigin = new URLSearchParams(location.search).get('host') || '';
} catch (e) {}
function krPost(type, payload) {
    if (!krHostOrigin || !KR_META || !KR_META.interactiveId || window.parent === window)
        return;
    try {
        window.parent.postMessage({
            source: 'kula-revise',
            specVersion: KR_SPEC_VERSION,
            type: type,
            payload: Object.assign({
                interactiveId: KR_META.interactiveId,
                paper: KR_META.paper,
                section: KR_META.section,
                questionNumber: KR_META.questionNumber,
                paperRef: KR_META.paperRef
            }, payload)
        }, krHostOrigin);
    } catch (e) {}
}
function krCompletedPayload() {
    const cappedEarM = Math.min(earM, totM);
    const p = totM ? Math.round(cappedEarM / totM * 100) : 0;
    const dbeLevel = p >= 80 ? 7 : p >= 70 ? 6 : p >= 60 ? 5 : p >= 50 ? 4 : p >= 40 ? 3 : p >= 30 ? 2 : 1;
    const lb = { 1: { e: 0, t: 0 }, 2: { e: 0, t: 0 }, 3: { e: 0, t: 0 } };
    QS.forEach(q => {
        lb[q.lv].t += q.m;
        if (ans[q.id] && ans[q.id].me)
            lb[q.lv].e += ans[q.id].me;
    });
    const wrong = QS.filter(q => ans[q.id] && ans[q.id].done && !ans[q.id].ok).map(q => ({
        id: q.id,
        num: q.num,
        level: q.lv,
        marks: q.m
    }));
    const slow = Object.entries(perQuestionTime).map(([id, t]) => {
        const q = QS.find(qq => qq.id === id);
        return q ? { num: q.num, seconds: t } : null;
    }).filter(Boolean).sort((a, b) => b.seconds - a.seconds).slice(0, 3);
    return {
        learnerName: learnerName || '',
        marksEarned: cappedEarM,
        marksTotal: totM,
        percent: p,
        dbeLevel: dbeLevel,
        levelBreakdown: {
            l1: { earned: lb[1].e, total: lb[1].t },
            l2: { earned: lb[2].e, total: lb[2].t },
            l3: { earned: lb[3].e, total: lb[3].t }
        },
        wrongQuestions: wrong,
        slowestQuestions: slow,
        totalTimeSeconds: Math.floor((Date.now() - totalStartTime) / 1000),
        completedAt: new Date().toISOString()
    };
}
var krCompletedSent = false;
var krMtaSubmitted = {};

// ═══ STATE ═══
let ans = {}
  , curQ = 0
  , totM = 0
  , earM = 0;
QS.forEach(q => {
    totM += q.m
}
);
let mtaState = {};
let learnerName = '';

// ═══ OPTION SHUFFLE (kills position bias: correct answer no longer always A/B) ═══
const ORIG_OPTS = QS.map(q => ({
    opts: q.opts.slice(),
    c: Array.isArray(q.c) ? q.c.slice() : q.c
}));
let optPerms = {};
const PERM_KEY = 'cwo-perms-v1';
function loadPerms() {
    try {
        const s = localStorage.getItem(PERM_KEY);
        if (s)
            optPerms = JSON.parse(s) || {}
    } catch (e) {
        optPerms = {}
    }
}
function savePerms() {
    try {
        localStorage.setItem(PERM_KEY, JSON.stringify(optPerms))
    } catch (e) {}
}
function applyShuffle() {
    QS.forEach( (q, qi) => {
        const orig = ORIG_OPTS[qi];
        if (!orig.opts || orig.opts.length < 2)
            return;
        let perm = optPerms[q.id];
        if (!perm || perm.length !== orig.opts.length) {
            perm = orig.opts.map( (_, i) => i);
            for (let i = perm.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [perm[i],perm[j]] = [perm[j], perm[i]];
            }
            optPerms[q.id] = perm;
        }
        const oldToNew = {};
        perm.forEach( (oi, ni) => {
            oldToNew[oi] = ni
        }
        );
        q.opts = perm.map(i => orig.opts[i]);
        if (Array.isArray(orig.c)) {
            q.c = orig.c.map(i => oldToNew[i]).sort( (a, b) => a - b);
        } else {
            q.c = oldToNew[orig.c];
        }
    }
    );
    savePerms();
}
loadPerms();
applyShuffle();
const NAME_KEY = 'cwo-name';
function firstName() {
    return (learnerName || '').trim().split(/\s+/)[0] || '';
}
function escHtml(s) {
    return String(s).replace(/[&<>"']/g, function(c) {
        return {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        }[c]
    });
}

// ═══ RENDER ═══

// Add skill guide button for every question type
var SKILL_MAP = {
    'Extraction': {
        modal: 'extraction-modal',
        text: 'Not sure how to find the answer? Tap here for extraction tips'
    },
    'Concept': {
        modal: 'concept-modal',
        text: 'Need help defining concepts in your own words? Tap for guidance'
    },
    'Interpretation': {
        modal: 'interpretation-modal',
        text: 'Struggling to explain WHY, not just WHAT? Tap for interpretation tips'
    },
    'Analysis': {
        modal: 'analysis-modal',
        text: 'Not sure how to combine source + own knowledge? Tap for help'
    },
    'Reliability': {
        modal: 'reliability-modal',
        text: 'Not sure how to evaluate reliability? Tap for a step-by-step guide'
    },
    'Comparison': {
        modal: 'comparison-modal',
        text: 'Need help comparing sources? Tap for comparison tips'
    },
    'Synthesis': {
        modal: 'synthesis-modal',
        text: 'Need help building your paragraph? Tap for the step-by-step method'
    }
};
// ═══ SKILL GUIDE MODALS ═══
// Source: /History/G12 Skills/index.html SKILLS array; content adapted into modal markup
const SKILL_DATA = {
    extraction: {
        title: 'Extraction',
        sub: 'Finding information in sources',
        intro: 'Extraction questions ask you to <strong>find specific information that is directly stated in the source</strong>. The answer is IN the text, with no interpretation needed.',
        steps: [['Read the question first, then the source.', 'Underline the KEY WORDS. What exactly are you being asked to find? A person? A reason? A city? A date?'], ['Scan the source for those key words', 'or their synonyms. The answer is usually within one or two sentences of where the key words appear.'], ['Check your answer is actually IN the source.', 'If you can\'t point to the exact sentence, you\'re probably interpreting rather than extracting.'], ['Count carefully.', 'If the question says "identify TWO reasons," give exactly two. Missing one loses marks; adding extras wastes time.']],
        example: '<strong>Q:</strong> "Who replaced Byrnes as Secretary of State?" → Scan for "Byrnes" → "George Marshall" = 1 mark.',
        warn: 'Using your own knowledge instead of the source. Giving information that\'s true but not in THIS source. Wrong count of points.'
    },
    concept: {
        title: 'Concept Definition',
        sub: 'Explaining terms in your own words',
        intro: '"Define the concept… in your own words" tests whether you understand a term well enough to explain it <strong>without copying the source</strong>.',
        steps: [['Identify what KIND of thing it is.', 'Policy? Metaphor? Ideology? Process? Place it in a category first: "The Iron Curtain was a metaphor…"'], ['Explain what it means, not just what it is.', 'Say what it involved, who it affected, why it mattered. A definition that could apply to anything is too vague.'], ['Connect to the historical context', 'when the question says "in the context of." Link to the specific period, event, or situation.']],
        example: '<strong>Iron Curtain:</strong> A metaphor (category) for the dividing line separating communist Eastern Europe from capitalist Western Europe (meaning), after the USSR extended its sphere of influence post-1945 (context).',
        warn: 'Repeating the source word-for-word. Vague definitions without context. Confusing similar concepts (Iron Curtain vs Berlin Wall).'
    },
    interpretation: {
        title: 'Interpretation',
        sub: 'Explaining what evidence means and why it matters',
        intro: 'Interpretation questions ask you to go <strong>beyond what the source says</strong> to explain what it <strong>means</strong>, what it <strong>implies</strong>, or <strong>why it matters</strong>.',
        steps: [['Start with what the source SAYS, then explain what it MEANS.', 'Use bridge phrases: "This suggests…" / "This implies…" / "The significance is…"'], ['Ask WHY, not just WHAT.', 'Why did it happen? Why does it matter? What were the consequences?'], ['Consider language and purpose.', '"Armageddon" is much stronger than "important meeting". What does that word choice reveal?'], ['For "comment on" questions:', 'Interpret + explain significance. Connect to the bigger historical picture.']],
        example: '<strong>Weak:</strong> "Acheson called it \'Armageddon.\'" (just repeats source). <strong>Strong:</strong> Acheson used apocalyptic language because he saw the decision as existential, revealing the Cold War mentality where every decision was framed as good vs evil.',
        warn: 'Repeating the source without explaining meaning. If every sentence starts "The source says…" you\'re describing, not interpreting.'
    },
    analysis: {
        title: 'Source + Own Knowledge',
        sub: 'Combining evidence with what you\'ve studied',
        intro: 'These questions require <strong>two things</strong>: evidence from the source AND additional information from your own studies. You need both.',
        steps: [['Identify what the SOURCE tells you.', 'What evidence or clues does it provide? Start your answer by referring to the source.'], ['Add what you KNOW from your studies.', 'Additional facts, context, or background that helps explain what the source shows.'], ['LINK them together.', 'Show how your knowledge EXPLAINS what the source shows, or how the source CONFIRMS what you\'ve studied.']],
        example: '<strong>Source:</strong> Cartoon shows Greece/Turkey outside the Soviet bloc. <strong>Own K:</strong> The Truman Doctrine (1947) provided US aid to these countries. <strong>Link:</strong> The source shows the outcome; my knowledge explains the cause.',
        warn: 'Using only the source (no own knowledge). Using only own knowledge (no source). Listing both without connecting them.'
    },
    reliability: {
        title: 'Reliability & Bias',
        sub: 'Evaluating whether you can trust a source',
        intro: 'Reliability questions ask: <strong>can a historian trust this source?</strong> The answer is almost never simply "yes" or "no." Weigh strengths against limitations.',
        steps: [['WHO created it?', 'First-hand knowledge? Insider access? Eyewitness? Politician with an agenda?'], ['WHEN was it created?', 'During the events (immediate but less reflective) or after (more perspective, but shaped by hindsight)?'], ['WHY was it created?', 'To inform? Persuade? Justify? Rally support? Purpose shapes content.'], ['WHAT perspective does it represent?', 'Every source has a perspective. That doesn\'t make it unreliable, but a historian needs to be aware of it.']],
        example: '<strong>Churchill\'s Iron Curtain speech:</strong> Reliable because he had first-hand experience at Yalta/Potsdam (WHO) and the speech was contemporaneous (WHEN). However, his anti-communist stance and goal of rallying US support (WHY) mean the language may overstate the threat.',
        warn: '"Reliable because it\'s a primary source": primary sources can be biased. "Unreliable because biased": all sources have a perspective. Always weigh both sides.'
    },
    comparison: {
        title: 'Source Comparison',
        sub: 'Finding connections between two sources',
        intro: 'Comparison questions ask you to find <strong>connections between sources</strong>. How does one support, contradict, or extend another? Discuss BOTH together, not separately.',
        steps: [['Identify the THEME that connects them.', 'What topic or idea do both sources address? This is your bridge.'], ['Find specific EVIDENCE in each source', 'that relates to this shared theme. Concrete details from both, not vague summaries.'], ['Explain the CONNECTION.', 'Use linking phrases: "Source A states… and this is supported by Source B which shows…" / "Together, these sources demonstrate…"'], ['For 4-mark questions:', 'TWO comparison points, each with evidence from both sources and an explanation of the connection. 2×2 = 4 marks.']],
        example: '<strong>Theme:</strong> Both address Soviet expansion. <strong>1A:</strong> Churchill warns of Iron Curtain from Stettin to Trieste. <strong>1C:</strong> Acheson shows the threat materialising in Greece/Turkey. <strong>Link:</strong> 1C confirms and escalates the warning Churchill made in 1A.',
        warn: 'Describing each source separately without connections. Saying "the sources are similar" without explaining HOW. Comparing authors instead of content.'
    },
    synthesis: {
        title: 'Paragraph Writing',
        sub: 'Synthesising sources + own knowledge into an argument',
        intro: 'The paragraph question tests <strong>synthesis</strong>: weaving source evidence and your own knowledge into a coherent argument. It\'s assessed holistically.',
        steps: [['TOPIC SENTENCE:', 'Address the question directly in your first sentence. State your argument. Don\'t start with background; start with your answer.'], ['SOURCE EVIDENCE:', 'Use specific evidence from at least TWO sources. Reference them by number (Source 1A, Source 1C).'], ['OWN KNOWLEDGE:', 'Add at least ONE piece of information not in the sources. It must support your argument.'], ['CONCLUDING SENTENCE:', 'Return to the question. Name the mechanism: HOW and WHY, not just WHAT.']],
        example: '<strong>L3 (6–8):</strong> Clear topic sentence → specific source evidence woven in → own knowledge that extends the argument → conclusion that synthesises (shows HOW and WHY).',
        warn: 'A list of disconnected facts with no topic sentence. Naming sources without using their evidence. Missing own knowledge.'
    }
};

function injectSkillModals() {
    const host = document.getElementById('modals');
    if (!host || host.children.length)
        return;
    const slugFromMap = {};
    Object.keys(SKILL_MAP).forEach(k => {
        const slug = k.toLowerCase();
        const id = SKILL_MAP[k].modal;
        const dataKey = slug === 'synthesis' ? 'synthesis' : slug;
        const d = SKILL_DATA[dataKey];
        if (!d)
            return;
        const stepsHtml = d.steps.map( (s, i) => '<div class="skill-step"><span class="skill-step-num">' + (i + 1) + '</span><div class="skill-step-text"><strong>' + s[0] + '</strong> ' + s[1] + '</div></div>').join('');
        const html = '<div class="modal-overlay" id="' + id + '" onclick="closeSkillModal(event,\'' + id + '\')">' + '<div class="modal" onclick="event.stopPropagation()">' + '<div class="modal-hd"><span class="modal-title">' + d.title + '</span><button class="modal-close" aria-label="Close" onclick="closeSkillModal(null,\'' + id + '\')">×</button></div>' + '<div class="modal-body">' + '<h3>' + d.sub + '</h3>' + '<p>' + d.intro + '</p>' + stepsHtml + '<div class="skill-example"><strong>Example.</strong> ' + d.example + '</div>' + '<div class="skill-warn"><strong>Common mistakes.</strong> ' + d.warn + '</div>' + '</div>' + '</div></div>';
        host.insertAdjacentHTML('beforeend', html);
    }
    );
}
function closeSkillModal(e, id) {
    if (e && e.target !== e.currentTarget)
        return;
    const m = document.getElementById(id);
    if (m)
        m.classList.remove('show');
}
window.closeSkillModal = closeSkillModal;

function addSkillHint() {
    const q = QS[curQ];
    if (!q)
        return;
    var skill = SKILL_MAP[q.ll];
    if (!skill)
        return;
    injectSkillModals();
    // Find or create hint area
    var hintDiv = document.querySelector('.qp-hint');
    var panel = document.querySelector('.q-panel');
    if (!hintDiv) {
        // Create a hint div after qp-text
        var qt = panel.querySelector('.qp-text');
        hintDiv = document.createElement('div');
        hintDiv.className = 'qp-hint';
        hintDiv.innerHTML = '';
        qt.after(hintDiv);
    }
    if (!hintDiv.querySelector('.hint-btn')) {
        var btn = document.createElement('button');
        btn.className = 'hint-btn';
        btn.onclick = function(e) {
            e.stopPropagation();
            document.getElementById(skill.modal).classList.add('show')
        }
        ;
        btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> ' + skill.text + ' <span class="hint-pulse"></span>';
        hintDiv.appendChild(btn);
    }
}

// ═══ TIMER ═══
var qStartTime = 0
  , totalStartTime = Date.now()
  , qTimerInterval = null
  , totalTimerInterval = null;
var questionTimes = {};
// track actual time per question

function startQTimer() {
    qStartTime = Date.now();
    if (qTimerInterval)
        clearInterval(qTimerInterval);
    qTimerInterval = setInterval(updateQTimer, 1000);
    updateQTimer();
}

function updateQTimer() {
    const q = QS[curQ];
    if (!q)
        return;
    const elapsed = Math.floor((Date.now() - qStartTime) / 1000);
    const recommended = Math.max(30, (q.m || 1) * 45);
    const remaining = recommended - elapsed;
    const display = document.getElementById('q-timer');
    if (!display)
        return;

    if (remaining > 0) {
        const m = Math.floor(remaining / 60);
        const s = remaining % 60;
        display.textContent = m + ':' + (s < 10 ? '0' : '') + s;
        if (remaining > recommended * 0.3) {
            display.className = 'timer-display timer-ok';
        } else {
            display.className = 'timer-display timer-warn';
        }
    } else {
        const over = Math.abs(remaining);
        const m = Math.floor(over / 60);
        const s = over % 60;
        display.textContent = '+' + m + ':' + (s < 10 ? '0' : '') + s;
        display.className = 'timer-display timer-over';
    }
}

function stopQTimer() {
    if (qTimerInterval) {
        clearInterval(qTimerInterval);
        qTimerInterval = null
    }
    const q = QS[curQ];
    if (q)
        questionTimes[q.id] = Math.floor((Date.now() - qStartTime) / 1000);
}

function startTotalTimer() {
    totalStartTime = Date.now();
    totalTimerInterval = setInterval(updateTotalTimer, 1000);
}

function updateTotalTimer() {
    const elapsed = Math.floor((Date.now() - totalStartTime) / 1000);
    const m = Math.floor(elapsed / 60);
    const s = elapsed % 60;
    const display = document.getElementById('total-timer');
    if (display)
        display.textContent = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
}

function getTotalTime() {
    const elapsed = Math.floor((Date.now() - totalStartTime) / 1000);
    const m = Math.floor(elapsed / 60);
    const s = elapsed % 60;
    return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
}

function beginExam() {
    // capture name from input (required ≥2 chars)
    const inp = document.getElementById('learner-name');
    if (inp) {
        const v = (inp.value || '').trim();
        if (v.length < 2) {
            inp.focus();
            return;
        }
        learnerName = v;
        try {
            localStorage.setItem(NAME_KEY, learnerName);
        } catch (e) {}
    }
    document.getElementById('start-overlay').style.display = 'none';
    startTotalTimer();
    startQTimer();
    krPost('kr:started', {
        learnerName: learnerName || '',
        startedAt: new Date().toISOString()
    });
}
function onNameInput() {
    const inp = document.getElementById('learner-name');
    const btn = document.getElementById('begin-btn');
    if (!inp || !btn)
        return;
    btn.disabled = (inp.value || '').trim().length < 2;
}
window.onNameInput = onNameInput;

// ── Paragraph builder: live "your paragraph so far" panel + model comparison ──
function paraModelText() {
    if (typeof MTA_ANSWERS === 'undefined' || !MTA_ANSWERS || !MTA_ANSWERS.length)
        return '';
    var strong = MTA_ANSWERS.filter(function(a) {
        return (a.expM || '').indexOf('8') > -1;
    });
    var pick = strong.length ? strong[strong.length - 1] : MTA_ANSWERS[MTA_ANSWERS.length - 1];
    return pick ? pick.text : '';
}
function paraPanelHtml() {
    var ids = QS.filter(function(q) {
        return q.src === 'para';
    }).map(function(q) {
        return q.id;
    });
    if (!ids.length)
        return '';
    var chosen = [];
    ids.forEach(function(id) {
        var qq = QS.find(function(x) {
            return x.id === id;
        });
        var a = ans[id];
        if (qq && a && a.done && a.sel != null && !Array.isArray(a.sel))
            chosen.push(qq.opts[a.sel]);
    });
    if (!chosen.length)
        return '';
    var para = chosen.join(' ');
    var complete = chosen.length === ids.length;
    var onLast = QS[curQ].id === ids[ids.length - 1];
    var html = '<div class="para-build"><div class="para-build-h">&#9998; Your paragraph so far</div><div class="para-build-body">' + para + '</div>';
    if (!complete)
        html += '<div class="para-build-note">Keep choosing &mdash; each line you pick is added here, so you can watch your paragraph take shape rather than just picking options.</div>';
    html += '</div>';
    if (complete && onLast) {
        var model = paraModelText();
        if (model)
            html += '<div class="para-model"><div class="para-model-h">&#9733; A full-mark example</div><div class="para-model-body">' + model + '</div><div class="para-build-note">Compare this with the paragraph you built above. Notice how it weaves source evidence and your own knowledge into one flowing argument.</div></div>';
    }
    return html;
}

function render() {
    const q = QS[curQ];
    const s = SRC[q.src];
    const L = 'ABCDE';
    const isLast = curQ === QS.length - 1;
    const isFirst = curQ === 0;

    // Update top bar
    document.getElementById('tb-sec').textContent = s.label;
    document.getElementById('tb-qn').textContent = curQ + 1;
    document.getElementById('tb-qt').textContent = QS.length;
    const pct = Math.round(((curQ) / QS.length) * 100);
    document.getElementById('tb-fill').style.width = pct + '%';

    let html = `
  
  <div class="source-panel">
    <div class="sp-header"><span class="sp-label">${s.label}</span><span class="sp-type">${s.type}</span></div>
    <button class="sp-toggle" onclick="toggleSource(this)">▾ Hide source to focus on the question</button>
    <div class="sp-collapsible">${s.html}
    <div class="sp-attr">${s.attr}</div></div>
  </div>
  <div class="q-panel">
    <div class="qp-meta">
      <span class="qp-num">Q${q.num}</span>
      <span class="cc c${q.lv}">${q.ll}</span>
      <span class="qp-marks">${q.m} mark${q.m > 1 ? 's' : ''}</span>
    </div>
    <div class="qp-text">${q.t}</div>
    ${q.h ? `<div class="qp-hint">${q.h}</div>` : ''}
    <div class="ol" id="opts">${q.opts.map( (o, i) => `<button class="ob${ans[q.id]?.done ? (q.multi ? (q.c.includes(i) ? ' ok' : ((ans[q.id].sel || []).includes(i) ? ' no' : ' dim')) : (i === q.c ? ' ok' : (i === ans[q.id].sel ? ' no' : ' dim'))) : ((ans[q.id]?.sel != null && !q.multi && ans[q.id].sel === i) ? ' sel' : (q.multi && (ans[q.id]?.sel || []).includes(i) ? ' sel' : ''))}" data-i="${i}" ${ans[q.id]?.done ? 'disabled' : ''} onclick="${q.multi ? `tmm(${i},${q.mx})` : `sll(${i})`}"><span class="ol2">${L[i]}.</span><span style="flex:1">${o}</span><span class="om">${ans[q.id]?.done ? (q.multi ? (q.c.includes(i) ? '✓' : ((ans[q.id].sel || []).includes(i) ? '✗' : '')) : (i === q.c ? '✓' : (i === ans[q.id].sel ? '✗' : ''))) : ''}</span></button>`).join('')}</div>
    ${!ans[q.id]?.done ? `<div style="text-align:right;margin-top:.8rem"><button class="bs" id="sub-btn" onclick="submitQ()" ${ans[q.id]?.sel == null || (q.multi && (!ans[q.id]?.sel || ans[q.id].sel.length < q.mx)) ? 'disabled' : ''}>Submit</button></div>` : ''}
    <div class="fb ${ans[q.id]?.done ? ' show' : ''}${ans[q.id]?.ok ? ' fbg' : ''}${ans[q.id]?.done && !ans[q.id]?.ok ? ' fbb' : ''}" id="fb" aria-live="polite" role="status">${ans[q.id]?.done ? `<div class="fbl ${ans[q.id].ok ? 'flg' : 'flb'}">${ans[q.id].ok ? '✓ Correct, ' + q.m + ' mark' + (q.m > 1 ? 's' : '') + ' earned' : '✗ Not quite. 0 marks'}</div><div>${q.fb}</div>` : ''}</div>
    ${q.src === 'para' ? paraPanelHtml() : ''}
    <div class="nav-row">
      <button class="b2" onclick="prev()" ${isFirst ? 'disabled' : ''}>← Previous</button>
      ${isLast ? `<button class="bs" onclick="showResults()">View Results →</button>` : `<button class="bs" onclick="next()">Next →</button>`}
    </div>
  </div>`;

    document.getElementById('app').innerHTML = html;

    addSkillHint();
    // Mobile: start collapsed
    if (window.innerWidth < 600) {
        const col = document.querySelector('.sp-collapsible');
        const tgl = document.querySelector('.sp-toggle');
        if (col && !ans[q.id]?.done) {
            col.style.display = 'none';
            if (tgl)
                tgl.textContent = '▸ Show source';
        }
    }
    // Desktop: restore source panel scroll position between questions
    if (window.innerWidth >= 900) {
        const col = document.querySelector('.sp-collapsible');
        if (col && typeof __srcScroll === 'number')
            col.scrollTop = __srcScroll;
        if (col) {
            col.addEventListener('scroll', function() {
                __srcScroll = col.scrollTop
            });
        }
    }
    // restart per-question timer on every render that shows a new question
    if (__lastRenderedQ !== curQ) {
        if (__lastRenderedQ != null) {
            // accumulate time into perQuestionTime
            const prevQ = QS[__lastRenderedQ];
            if (prevQ) {
                const dt = Math.floor((Date.now() - qStartTime) / 1000);
                perQuestionTime[prevQ.id] = (perQuestionTime[prevQ.id] || 0) + dt;
            }
        }
        __lastRenderedQ = curQ;
        qStartTime = Date.now();
    }
    saveState();
}
var __lastRenderedQ = null;
var __srcScroll = 0;
var perQuestionTime = {};

function sll(i) {
    const q = QS[curQ];
    if (ans[q.id]?.done)
        return;
    ans[q.id] = ans[q.id] || {};
    ans[q.id].sel = i;
    render()
}
function tmm(i, mx) {
    const q = QS[curQ];
    if (ans[q.id]?.done)
        return;
    ans[q.id] = ans[q.id] || {};
    ans[q.id].sel = ans[q.id].sel || [];
    const a = ans[q.id].sel
      , p = a.indexOf(i);
    if (p > -1)
        a.splice(p, 1);
    else if (a.length < mx)
        a.push(i);
    render()
}

function submitQ() {
    stopQTimer();
    const q = QS[curQ];
    if (ans[q.id]?.done)
        return;
    let ok;
    if (q.multi) {
        const s = (ans[q.id].sel || []).sort()
          , c = [...q.c].sort();
        ok = s.length === c.length && s.every( (v, i) => v === c[i]);
    } else
        ok = ans[q.id].sel === q.c;
    ans[q.id].done = true;
    ans[q.id].ok = ok;
    ans[q.id].me = ok ? q.m : 0;
    // accumulate question time on submit
    const dt = Math.floor((Date.now() - qStartTime) / 1000);
    perQuestionTime[q.id] = (perQuestionTime[q.id] || 0) + dt;
    qStartTime = Date.now();
    uScore();
    saveState();
    render();
}

function next() {
    if (curQ < QS.length - 1) {
        curQ++;
        render();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
}
function prev() {
    if (curQ > 0) {
        curQ--;
        render();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
}

function uScore() {
    earM = 0;
    Object.values(ans).forEach(a => {
        if (a.done && a.me)
            earM += a.me
    }
    );
    const shown = Math.min(earM, totM);
    document.getElementById('tb-e').textContent = shown;
    const p = Math.min(100, Math.round(shown / totM * 100));
    document.getElementById('tb-fill').style.width = p + '%'
}

// ═══ MTA ═══
function goMTA() {
    stopQTimer();
    const s = SRC['mta'];
    let html = `<div class="source-panel">
    <div class="sp-header"><span class="sp-label">${s.label}</span><span class="sp-type">${s.type}</span></div>
    ${s.html}<div class="sp-attr">${s.attr}</div></div>
  <div class="q-panel" style="min-height:auto">`;

    MTA_ANSWERS.forEach( (a, ai) => {
        html += `<div style="margin:1.5rem 0">
    <div class="qp-meta"><span class="qp-num">${a.label}</span><span class="qp-marks" style="color:var(--gold);font-weight:700">Evaluate this answer</span></div>
    <div class="mta-box">${a.text}</div>
    <div id="rubric-${ai}">${a.crit.map( (cr, ci) => `
      <div class="rr"><span class="rl">${cr.q}</span>
      <div class="rbs">
        <button class="rb" onclick="markR(${ai},${ci},'yes')">Yes</button>
        <button class="rb" onclick="markR(${ai},${ci},'partial')">Partial</button>
        <button class="rb" onclick="markR(${ai},${ci},'no')">No</button>
      </div></div>
      <div class="fb" id="rfb-${ai}-${ci}"></div>`).join('')}</div>
    <div style="text-align:right;margin-top:.5rem"><button class="bs" id="mta-sub-${ai}" onclick="subMTA(${ai})">Check My Evaluation</button></div>
    <div class="fb" id="mta-fb-${ai}"></div></div>`;
    }
    );

    html += `<div class="nav-row">
    <button class="b2" onclick="curQ=QS.length-1;render();window.scrollTo({top:0,behavior:'smooth'})">← Back to questions</button>
    <button class="bs" onclick="showResults()">View Results →</button>
  </div></div>`;

    document.getElementById('app').innerHTML = html;
    document.getElementById('tb-sec').textContent = 'Mark This Answer';
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function markR(ai, ci, val) {
    mtaState[ai] = mtaState[ai] || {};
    mtaState[ai][ci] = val;
    const row = document.querySelectorAll(`#rubric-${ai} .rr`)[ci];
    row.querySelectorAll('.rb').forEach(b => {
        b.classList.remove('ry', 'rn', 'rp');
        if (b.textContent.toLowerCase() === val)
            b.classList.add(val === 'yes' ? 'ry' : val === 'no' ? 'rn' : 'rp')
    }
    );
}

var bonusMarks = 0;
function subMTA(ai) {
    const a = MTA_ANSWERS[ai];
    const state = mtaState[ai] || {};
    let score = 0;
    a.crit.forEach( (cr, ci) => {
        const uv = state[ci] || '';
        const ok = uv === cr.cor;
        if (ok)
            score++;
        const fb = document.getElementById(`rfb-${ai}-${ci}`);
        fb.className = `fb show ${ok ? 'fbg' : 'fbb'}`;
        fb.innerHTML = `<div class="fbl ${ok ? 'flg' : 'flb'}">${ok ? '✓ Correct, 1 bonus mark' : '✗ The answer is: ' + cr.cor}</div><div>${cr.exp}</div>`;
    }
    );
    bonusMarks += score;
    const mfb = document.getElementById(`mta-fb-${ai}`);
    mfb.className = 'fb show fbg';
    mfb.innerHTML = `<div class="fbl flg">${score}/${a.crit.length} correct: ${score} bonus marks earned</div><div>This answer would earn approximately <strong>${ai === 0 ? '4–5 marks (Level 2)' : '7–8 marks (Level 3)'}</strong>. ${ai === 0 ? 'This answer shows understanding and uses source references, but lacks the analytical depth and clear causal argument needed for top marks.' : 'Strong synthesis: source evidence and own knowledge woven into a coherent argument with a clear line of reasoning.'}</div>`;
    document.getElementById(`mta-sub-${ai}`).classList.add('hidden');
    document.getElementById('tb-e').textContent = earM + (bonusMarks > 0 ? ' +' + bonusMarks + ' bonus' : '');
    krMtaSubmitted[ai] = true;
    if (Object.keys(krMtaSubmitted).length >= MTA_ANSWERS.length) {
        krPost('kr:bonus-completed', {
            learnerName: learnerName || '',
            bonusMarks: bonusMarks,
            bonusCompletedAt: new Date().toISOString()
        });
    }
}

// ═══ RESULTS ═══
function showResults() {
    stopQTimer();
    if (totalTimerInterval) {
        clearInterval(totalTimerInterval);
        totalTimerInterval = null;
    }
    if (!krCompletedSent) {
        krCompletedSent = true;
        try {
            krPost('kr:completed', krCompletedPayload());
        } catch (e) {}
    }
    const cappedEarM = Math.min(earM, totM);
    const p = Math.round(cappedEarM / totM * 100);
    let g, gc, cm;
    if (p >= 80) {
        g = 'Level 7';
        gc = 'var(--ok)';
        cm = 'Outstanding. Thorough understanding of source analysis, interpretation, evaluation and synthesis.';
    } else if (p >= 70) {
        g = 'Level 6';
        gc = 'var(--ok)';
        cm = 'Meritorious. Strong source skills; refine evaluation and comparison for full marks.';
    } else if (p >= 60) {
        g = 'Level 5';
        gc = 'var(--blue-lt)';
        cm = 'Substantial. You handle extraction and interpretation well. Develop your evaluation and synthesis skills.';
    } else if (p >= 50) {
        g = 'Level 4';
        gc = 'var(--warn)';
        cm = 'Adequate. Extraction is solid. Focus on moving from WHAT to WHY: interpretation and evaluation.';
    } else if (p >= 40) {
        g = 'Level 3';
        gc = 'var(--warn)';
        cm = 'Moderate. You can find information but struggle with interpretation. Ask: what does this evidence MEAN?';
    } else if (p >= 30) {
        g = 'Level 2';
        gc = 'var(--bad)';
        cm = 'Elementary. Start with careful source reading and extraction before attempting higher-order questions.';
    } else {
        g = 'Level 1';
        gc = 'var(--bad)';
        cm = 'Not yet achieved. Focus on reading sources carefully to find specific information.';
    }

    let lb = {
        1: {
            e: 0,
            t: 0
        },
        2: {
            e: 0,
            t: 0
        },
        3: {
            e: 0,
            t: 0
        }
    };
    QS.forEach(q => {
        lb[q.lv].t += q.m;
        if (ans[q.id]?.me)
            lb[q.lv].e += ans[q.id].me
    }
    );

    const fn = firstName();
    const heading = fn ? 'Well done, ' + escHtml(fn) : 'Examination Complete';
    document.getElementById('app').innerHTML = `
  <div style="padding:1rem">
  <div class="rc">
    <div class="hero-ey" style="color:var(--red)">${heading}</div>
    <div class="rs-num" style="color:${gc}">${cappedEarM}</div>
    <div class="rt">out of ${totM} marks, ${p}%</div>
    <div style="font-family:'Playfair Display',serif;font-size:1.4rem;font-weight:700;color:${gc};margin-top:.8rem">${g}</div>
    <p style="margin-top:.6rem;font-size:.88rem;color:var(--txt2);max-width:500px;margin:auto">${cm}</p>
    <div style="margin-top:1rem;padding:.7rem 1.1rem;background:#FEF9E7;border:1px solid #D4A745;border-radius:4px;display:inline-block"><span style="font-size:.62rem;text-transform:uppercase;letter-spacing:.18em;font-weight:700;color:#D4A745">Bonus &middot; Mark This Answer</span><br><span style="font-family:Playfair Display,serif;font-size:1.6rem;font-weight:700;color:#D4A745">+${bonusMarks}</span><span style="font-size:.8rem;color:#5D6D7E"> / 12 extra</span></div>
  </div>
  <div style="text-align:center;margin-top:1.5rem">
    <button class="bs" onclick="location.reload()">Try Again</button>
    ${p >= 70 ? `<div style="margin-top:1.5rem;padding:1.2rem;background:linear-gradient(135deg,#1B4F72,#2E86C1);border-radius:6px;text-align:center"><div style="font-size:.7rem;text-transform:uppercase;letter-spacing:.25em;color:#D4A745;font-weight:700;margin-bottom:.4rem">★ Bonus Section Unlocked</div><div style="color:#fff;font-size:.95rem;margin-bottom:.8rem">You scored ${p}%. Well done! You've unlocked the bonus round: mark two sample paragraph answers like an examiner to earn up to 12 bonus marks.</div><button class="bs" style="background:#D4A745;color:#1C2733" onclick="goMTA()">Start Bonus Section →</button></div>` : `<div style="margin-top:1rem;padding:1rem;background:var(--frost);border:1px solid var(--bdr);border-radius:4px"><div style="font-size:.82rem;color:var(--txt2)"><strong>Bonus round locked.</strong> Score 70% or higher to unlock it and earn up to 12 extra marks by marking two sample answers like an examiner.</div></div>`}
    </div>
  </div>`;
    // ── Level breakdown bars + per-question time analytics + review-wrong button ──
    try {
        const wrong = QS.filter(q => ans[q.id] && ans[q.id].done && !ans[q.id].ok);
        // top-time questions
        const times = Object.entries(perQuestionTime).map( ([id,t]) => {
            const q = QS.find(qq => qq.id === id);
            return q ? {
                num: q.num,
                t: t
            } : null;
        }
        ).filter(Boolean).sort( (a, b) => b.t - a.t).slice(0, 3);
        const fmtT = s => {
            const m = Math.floor(s / 60)
              , ss = s % 60;
            return (m > 0 ? m + 'm ' : '') + ss + 's';
        }
        ;
        const extra = document.createElement('div');
        extra.className = 'si';
        extra.style.cssText = 'background:var(--white);border:1px solid var(--bdr);border-radius:4px;margin:1rem';
        extra.innerHTML = '<h2>Level Score Bars</h2>' + [{
            l: 'L1: Extraction/Concept',
            d: lb[1]
        }, {
            l: 'L2: Interpretation/Own knowledge',
            d: lb[2]
        }, {
            l: 'L3: Analysis/Comparison/Reliability',
            d: lb[3]
        }].map(x => {
            const pct = x.d.t ? Math.round(x.d.e / x.d.t * 100) : 0;
            const col = pct >= 70 ? 'var(--ok)' : pct >= 40 ? 'var(--warn)' : 'var(--bad)';
            return '<div class="lvl-bar"><span class="ll">' + x.l + '</span><span class="lt"><span class="lt-f" style="width:' + pct + '%;background:' + col + '"></span></span><span class="lv">' + x.d.e + '/' + x.d.t + ' · ' + pct + '%</span></div>';
        }
        ).join('') + (times.length ? ('<h2 style="margin-top:1rem">Slowest Questions</h2><div class="time-list">' + times.map(t => '<div class="ti"><span>Q' + t.num + '</span><span>' + fmtT(t.t) + '</span></div>').join('') + '</div>') : '') + (wrong.length ? ('<div style="text-align:center;margin-top:1rem"><button class="bs" onclick="reviewWrong()">Review Wrong Answers (' + wrong.length + ')</button></div>') : '');
        document.querySelector('#app > div').appendChild(extra);
    } catch (e) {}
    // Clear persisted state: exam complete
    try {
        localStorage.removeItem('cwo-june2025-v1');
        localStorage.removeItem(PERM_KEY);
    } catch (e) {}
    // Add time to results
    var timeHtml = document.querySelector('.top-bar');
    if (timeHtml)
        timeHtml.classList.add('hidden');
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ═══ INIT ═══
document.getElementById('tb-t').textContent = totM;
document.getElementById('tb-qt').textContent = QS.length;

// Apply persisted theme BEFORE first render
(function initTheme() {
    try {
        const t = localStorage.getItem('cwo-theme');
        if (t === 'dark')
            document.documentElement.setAttribute('data-theme', 'dark');
    } catch (e) {}
}
)();

// Inject theme toggle into top bar
(function injectThemeToggle() {
    const bar = document.querySelector('.top-bar');
    if (!bar)
        return;
    let btn = document.getElementById('theme-toggle');
    if (!btn) {
        btn = document.createElement('button');
        btn.className = 'theme-toggle';
        btn.id = 'theme-toggle';
        btn.setAttribute('aria-label', 'Toggle dark mode');
        btn.title = 'Toggle dark mode';
        bar.appendChild(btn);
    }
    btn.textContent = document.documentElement.getAttribute('data-theme') === 'dark' ? '☀︎' : '☾';
    btn.onclick = function() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (isDark) {
            document.documentElement.removeAttribute('data-theme');
            btn.textContent = '☾';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            btn.textContent = '☀︎';
        }
        try {
            localStorage.setItem('cwo-theme', isDark ? 'light' : 'dark');
        } catch (e) {}
    }
    ;
}
)();

// ── Persistence: save/load state ──
const STORE_KEY = 'cwo-june2025-v1';
function saveState() {
    try {
        // accumulate current question time before saving
        const liveDt = (qStartTime ? Math.floor((Date.now() - qStartTime) / 1000) : 0);
        localStorage.setItem(STORE_KEY, JSON.stringify({
            ans: ans,
            curQ: curQ,
            perQuestionTime: perQuestionTime,
            bonusMarks: bonusMarks,
            mtaState: mtaState,
            totalElapsedAt: Date.now(),
            totalStartTime: totalStartTime,
            version: 1
        }));
    } catch (e) {}
}
function loadState() {
    try {
        const raw = localStorage.getItem(STORE_KEY);
        if (!raw)
            return null;
        const o = JSON.parse(raw);
        if (!o || o.version !== 1)
            return null;
        return o;
    } catch (e) {
        return null;
    }
}
function clearState() {
    try {
        localStorage.removeItem(STORE_KEY);
        localStorage.removeItem(PERM_KEY);
    } catch (e) {}
}

// Patch sll/tmm/next/prev/markR/subMTA to persist
(function patchPersist() {
    const _sll = sll
      , _tmm = tmm
      , _next = next
      , _prev = prev
      , _markR = markR
      , _subMTA = subMTA;
    sll = function(i) {
        _sll(i);
        saveState();
    }
    ;
    tmm = function(i, mx) {
        _tmm(i, mx);
        saveState();
    }
    ;
    next = function() {
        _next();
        saveState();
    }
    ;
    prev = function() {
        _prev();
        saveState();
    }
    ;
    markR = function(a, c, v) {
        _markR(a, c, v);
        saveState();
    }
    ;
    subMTA = function(a) {
        _subMTA(a);
        saveState();
    }
    ;
    // expose globally
    window.sll = sll;
    window.tmm = tmm;
    window.next = next;
    window.prev = prev;
    window.markR = markR;
    window.subMTA = subMTA;
}
)();

// ── Source toggle handler (replaces inline onclick string) ──
function toggleSource(btn) {
    const col = btn.nextElementSibling;
    if (!col)
        return;
    const isHidden = col.style.display === 'none';
    col.style.display = isHidden ? 'block' : 'none';
    btn.textContent = isHidden ? '▾ Hide source to focus on the question' : '▸ Show source';
}
window.toggleSource = toggleSource;

// ── Review-wrong mode ──
var reviewMode = false
  , reviewQueue = []
  , reviewIdx = 0
  , _origCurQ = null;
function reviewWrong() {
    const wrongIdx = QS.map( (q, i) => ({
        q,
        i
    })).filter(x => ans[x.q.id] && ans[x.q.id].done && !ans[x.q.id].ok).map(x => x.i);
    if (!wrongIdx.length)
        return;
    reviewMode = true;
    reviewQueue = wrongIdx;
    reviewIdx = 0;
    _origCurQ = curQ;
    // reset done flag so the question can be re-attempted; preserve original record
    wrongIdx.forEach(i => {
        const id = QS[i].id;
        if (ans[id]) {
            ans[id]._prev = Object.assign({}, ans[id]);
            delete ans[id].done;
            delete ans[id].ok;
            delete ans[id].me;
            delete ans[id].sel;
        }
    }
    );
    curQ = reviewQueue[reviewIdx];
    // restore top bar if hidden
    const tb = document.querySelector('.top-bar');
    if (tb)
        tb.classList.remove('hidden');
    render();
}
window.reviewWrong = reviewWrong;

// ── Keyboard shortcuts ──
document.addEventListener('keydown', function(e) {
    // ignore when typing in input/textarea
    const tag = (e.target && e.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea' || e.target.isContentEditable)
        return;
    // ignore when start overlay is showing or any modal is open
    const startVis = document.getElementById('start-overlay');
    if (startVis && startVis.style.display !== 'none')
        return;
    if (document.querySelector('.modal-overlay.show'))
        return;
    // number keys 1-9: select option
    if (e.key >= '1' && e.key <= '9') {
        const idx = parseInt(e.key, 10) - 1;
        const opts = document.querySelectorAll('#opts .ob');
        if (opts[idx] && !opts[idx].disabled) {
            opts[idx].click();
            e.preventDefault();
        }
        return;
    }
    if (e.key === 'Enter') {
        const sub = document.getElementById('sub-btn');
        if (sub && !sub.disabled) {
            sub.click();
            e.preventDefault();
            return;
        }
        const q = QS[curQ];
        if (q && ans[q.id] && ans[q.id].done) {
            // advance
            if (curQ < QS.length - 1) {
                next();
                e.preventDefault();
            }
        }
        return;
    }
    if (e.key === 'ArrowLeft') {
        if (curQ > 0) {
            prev();
            e.preventDefault();
        }
    } else if (e.key === 'ArrowRight') {
        const q = QS[curQ];
        if (q && ans[q.id] && ans[q.id].done && curQ < QS.length - 1) {
            next();
            e.preventDefault();
        }
    }
});

// ── beforeunload guard ──
window.addEventListener('beforeunload', function(e) {
    const anyAnswered = Object.values(ans).some(a => a && a.done);
    const completed = document.querySelector('.rc') != null;
    if (anyAnswered && !completed) {
        e.preventDefault();
        e.returnValue = '';
        return '';
    }
});

// ── Service worker registration + auto-reload when a fresh version takes over ──
if ('serviceWorker'in navigator) {
    try {
        navigator.serviceWorker.register('sw.js').catch(function() {});
        // When a new SW takes control, reload once so users immediately see the new code.
        let _reloaded = false;
        navigator.serviceWorker.addEventListener('message', function(ev) {
            if (ev.data && ev.data.type === 'SW_UPDATED' && !_reloaded) {
                _reloaded = true;
                location.reload();
            }
        });
    } catch (e) {}
}

// ── Resume / fresh-start flow ──
(function startFlow() {
    // Load persisted name and prefill input
    try {
        const n = localStorage.getItem(NAME_KEY);
        if (n) {
            learnerName = n;
        }
    } catch (e) {}
    // Optional: host (Kula Learn) can personalise by passing ?name=... in the iframe URL.
    // The learner is never asked to type their name; if no name is supplied, greetings stay generic.
    try {
        const qn = new URLSearchParams(location.search).get('name');
        if (qn && qn.trim()) {
            learnerName = qn.trim();
        }
    } catch (e) {}
    const nameInp = document.getElementById('learner-name');
    if (nameInp) {
        if (learnerName) {
            nameInp.value = learnerName;
        }
        onNameInput();
    }
    const saved = loadState();
    const overlay = document.getElementById('start-overlay');
    // expose original beginExam, then replace
    const _beginExam = window.beginExam;
    window.beginExam = function() {
        clearState();
        ans = {};
        curQ = 0;
        earM = 0;
        perQuestionTime = {};
        mtaState = {};
        bonusMarks = 0;
        __lastRenderedQ = null;
        _beginExam();
        render();
    }
    ;
    window.resumeExam = function() {
        if (saved) {
            ans = saved.ans || {};
            curQ = saved.curQ || 0;
            perQuestionTime = saved.perQuestionTime || {};
            mtaState = saved.mtaState || {};
            bonusMarks = saved.bonusMarks || 0;
        }
        overlay.style.display = 'none';
        startTotalTimer();
        startQTimer();
        uScore();
        render();
    }
    ;
    window.startOver = function() {
        clearState();
        window.beginExam();
    }
    ;

    if (saved && Object.keys(saved.ans || {}).length > 0) {
        // Show resume prompt by injecting into existing start overlay
        const bd = overlay.querySelector('.sm-bd');
        if (bd) {
            const answered = Object.values(saved.ans).filter(a => a && a.done).length;
            const resumeBox = document.createElement('div');
            resumeBox.className = 'coach-box';
            resumeBox.style.background = 'linear-gradient(135deg,#1B4F72,#2E86C1)';
            const fn = firstName();
            const welcome = fn ? ('Welcome back, ' + escHtml(fn) + '. Resume your previous attempt?') : 'Resume your previous attempt?';
            resumeBox.innerHTML = '<div class="coach-title">' + welcome + '</div>' + '<p>You answered <strong>' + answered + '</strong> question' + (answered !== 1 ? 's' : '') + ' last time. Pick up where you left off, or start fresh.</p>' + '<div style="display:flex;gap:.5rem;margin-top:.6rem"><button class="bs" style="flex:1" onclick="resumeExam()">Resume</button>' + '<button class="b2" style="flex:1;background:rgba(255,255,255,.1);color:#fff;border-color:rgba(255,255,255,.3)" onclick="startOver()">Start Over</button></div>';
            bd.insertBefore(resumeBox, bd.firstChild);
        }
    }
    // Keyboard shortcuts hint at bottom of overlay
    // (keyboard tip already lives in the static start-overlay markup — no second copy)
}
)();

render();
