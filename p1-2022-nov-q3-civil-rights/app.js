/* ═══════════════════════════════════════════════════════════════
   DATA BLOCK — replaced by build.py from a content JSON file.
   The build script reads a content payload (see references/content-schema.md)
   and substitutes this entire comment block with:
     const SRC = { ... };
     const QS = [ ... ];
     const MTA_ANSWERS = [ ... ];
   ═══════════════════════════════════════════════════════════════ */
const SRC = {
  '3A': {
    label: 'Source 3A',
    type: 'Historical Account',
    html: `<div class="sp-body">On 2 January 1965, Martin Luther King Jr and the Southern Christian Leadership Conference (SCLC) joined the Student Non-Violent Coordinating Committee (SNCC), the Dallas County Voters League and other local African American activists in a voting rights campaign in Selma where, in spite of repeated registration attempts by local blacks, only two per cent were on the voters' roll. The SCLC had chosen to focus its efforts in Selma because they anticipated that the notorious (shameful) brutality of local law enforcement, under Sheriff Jim Clark, would attract national attention and pressure President Lyndon B Johnson and Congress to enact (pass) new national voting rights legislation &hellip;<br><br>In response to Jackson's death (a civil rights activist), activists in Selma and Marion set out on 7 March to march from Selma to the state capitol in Montgomery. While King was in Atlanta, his SCLC colleague, Hosea Williams, and SNCC leader, John Lewis, led the march. The marchers made their way through Selma across the Edmund Pettus Bridge where they faced a blockade of State Troopers and local lawmen commanded by Clark and Major John Cloud, who ordered the marchers to disperse. When they did not, Cloud ordered his men to advance. Cheered on by white onlookers, the troopers attacked the crowd with clubs and tear gas. Mounted police chased retreating marchers and continued to beat them. Television coverage of 'Bloody Sunday', as the event became known, triggered (started) national outrage (anger).</div>`,
    attr: 'From https://www.politico.com/story/2018/03/07/this-day-in-politics-march-7-1965, accessed 6 February 2022'
  },
  '3B': {
    label: 'Source 3B',
    type: 'Testimony Extract',
    html: `<div class="sp-body"><strong>Attorney Hall:</strong> Then what happened?<br><br><strong>John Lewis:</strong> He said, 'I am Major Cloud, and this is an unlawful assembly. This demonstration will not continue. You have been banned by the Governor. I am going to order you to disperse.' Mr Williams (an SCLC activist) said, 'Mr Major, I would like to have a word, can we have a word?' And he said, 'No, I will give you two minutes to leave.' And again, Mr Williams said, 'Can I have a word?' He said, 'There will be no word.' And in about a minute or more Major Cloud ordered the State Troopers to advance &hellip; they came rushing in, knocking us down and pushing us.<br><br><strong>Attorney Hall:</strong> Were any words said by the State Troopers?<br><br><strong>John Lewis:</strong> Well, the State Troopers &hellip; most of them kept saying, 'Move back, move back &hellip;' and hurled insults at us.<br><br><strong>Attorney Hall:</strong> Was tear gas used by the State Troopers?<br><br><strong>John Lewis:</strong> &hellip; when we were forced back, most of the people in line knelt in a prayerful manner &hellip; the Major ordered the State Troopers to put on their gas masks, and they started throwing gas, and people became sick and started vomiting, and some of us were forced off the highway and behind some buildings in the woods.</div>`,
    attr: 'From the testimony of John Lewis (chairperson of SNCC) at a federal hearing, National Archives, accessed 12 February 2022'
  },
  '3C': {
    label: 'Source 3C',
    type: 'Reflective Writing',
    html: `<div class="sp-body">We felt that the State Troopers, who had been severely criticised over their terrible acts two weeks earlier even by conservative Alabama papers, would never again engage in this kind of violence. I shall never forget my agony (pain) of conscience for not being there when I heard of the dastardly (shameful) acts perpetrated (committed) against non-violent demonstrators that Sunday. As a result, I felt that I had to lead a march on the following Tuesday and decided to spend Monday mobilising for it.<br><br>The next question was whether the confrontation had to be a violent one &hellip; We determined to seek the middle course. We would march until we faced the State Troopers. We would not disengage until they made clear that they are going to use force. We would disengage (split up) then, having made our point, revealing the continued presence of violence, and showing clearly who are the oppressed and who are the oppressors, hoping, finally, that the national administration in Washington would feel and respond to the shocked reactions with action.<br><br>On Tuesday morning, 9 March 1965, Judge Frank M Johnson of the federal district court in Montgomery issued an order enjoining (ordering) me and the local Selma leadership &hellip; from peacefully marching to Montgomery.</div>`,
    attr: 'From A Testament of Hope, The Essential Writings and Speeches of Martin Luther King, Jr. by JM Washington'
  },
  '3D': {
    label: 'Source 3D',
    type: 'Photograph',
    html: `<img class="sp-img" src="3D.png" alt="A black-and-white aerial photograph looking down Dexter Avenue in Montgomery, showing a vast crowd of roughly 25 000 marchers filling the wide street and gathering in front of the domed Alabama State Capitol building."><div class="sp-body" style="margin-top:12px;">An aerial photograph taken at Dexter Avenue in front of the Alabama State Capitol in Montgomery on 25 March 1965. It shows some 25 000 marchers who managed to arrive at Montgomery on their third attempt after leaving Selma on 21 March 1965.</div>`,
    attr: 'From The Civil Rights Movement: A Photographic History by S Kasher'
  },
  'compare': {
    label: 'Sources 3A + 3B',
    type: 'Comparison',
    html: `<div class="sp-body"><strong>Source 3A (Politico account)</strong><br><br>&hellip; they faced a blockade of State Troopers &hellip; commanded by Clark and Major John Cloud, who ordered the marchers to disperse. When they did not, Cloud ordered his men to advance &hellip; the troopers attacked the crowd with clubs and tear gas. Mounted police chased retreating marchers and continued to beat them.</div><div class="sp-body" style="margin-top:12px;"><strong>Source 3B (John Lewis' testimony)</strong><br><br>&hellip; Major Cloud ordered the State Troopers to advance &hellip; knocking us down and pushing us &hellip; they started throwing gas, and people became sick and started vomiting, and some of us were forced off the highway and behind some buildings in the woods.</div>`,
    attr: 'Re-read both sources, then explain how they connect.'
  },
  'para': {
    label: 'Paragraph Task',
    type: 'Q3.6, 8 marks',
    html: `<div class="sp-body">Now build an eight-mark paragraph answering the guiding question: <em>What were the challenges encountered by civil rights protestors who participated in the Selma to Montgomery marches in March 1965?</em><br><br>Work through it in four steps &ndash; a topic sentence, evidence from the sources, your own knowledge, and a synthesising conclusion. Choose the strongest option at each step.</div>`,
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
  {id: 'q1', src: '3A', num: '3.1.1', m: 3, t: 'List THREE organisations in the source that participated in the voting rights campaign in Selma on 2 January 1965. Choose THREE responses.', lv: 1, ll: 'Extraction', multi: true, mx: 3, opts: ['Southern Christian Leadership Conference (SCLC)', 'Student Non-Violent Coordinating Committee (SNCC)', 'Dallas County Voters League', 'The Ku Klux Klan of Alabama', 'The Alabama State Troopers'], c: [0, 1, 2], fb: 'The source names the SCLC, the SNCC and the Dallas County Voters League. The Klan and the State Troopers opposed the campaign, they did not take part in it.'},
  {id: 'q2', src: '3A', num: '3.1.2', m: 2, t: 'Define the term voting rights campaign in your own words.', lv: 1, ll: 'Concept', opts: ['Organised action to win and protect people\'s right to register and vote in elections.', 'A campaign to stop certain groups of people from ever being allowed to vote.', 'A drive to raise money for the candidates running in a national election.', 'A protest calling for all elections in the country to be cancelled at once.'], c: 0, fb: 'A voting rights campaign is organised action to secure and protect people\'s right to register and vote. The other options describe the opposite or something unrelated.'},
  {id: 'q3', src: '3A', num: '3.1.3', m: 2, t: 'Why do you think only two per cent of the local blacks appeared on the voters\' roll in Selma?', lv: 2, ll: 'Interpretation', opts: ['Segregationist barriers, such as unfair literacy tests and intimidation, blocked most African Americans from registering to vote.', 'Most local African Americans freely chose not to bother registering to vote at all.', 'The town of Selma happened to have only a very small African American population.', 'Registration had been made quick and easy for every single resident of Selma.'], c: 0, fb: 'Segregationist barriers like literacy tests and intimidation kept African Americans off the roll. The other options ignore this deliberate obstruction.'},
  {id: 'q4', src: '3A', num: '3.1.4', m: 2, t: 'Name the TWO leaders in the source who led the march from Selma to Montgomery on 7 March 1965. Choose TWO responses.', lv: 1, ll: 'Extraction', multi: true, mx: 2, opts: ['Hosea Williams', 'John Lewis', 'Martin Luther King Jr', 'Sheriff Jim Clark', 'Major John Cloud'], c: [0, 1], fb: 'The source says that while King was in Atlanta, Hosea Williams and John Lewis led the march. Clark and Cloud commanded the troopers who blocked it.'},
  {id: 'q5', src: '3A', num: '3.1.5', m: 2, t: 'Using the information in the source and your own knowledge, explain how demonstrators benefitted from media coverage of the \'Bloody Sunday\' incident.', lv: 2, ll: 'Interpretation', opts: ['National television coverage exposed the police brutality, sparking outrage and sympathy that pushed the government towards the Voting Rights Act.', 'The coverage persuaded the marchers to give up and abandon their campaign for voting rights.', 'The coverage convinced most Americans that the State Troopers had acted fairly and correctly.', 'The coverage kept the events in Selma completely hidden from the rest of the public.'], c: 0, fb: 'Television coverage exposed the brutality and won national sympathy, helping bring about the Voting Rights Act. The other options reverse or deny this effect.'},
  {id: 'q6', src: '3B', num: '3.2.1', m: 2, t: 'Give TWO reasons in the source that Major Cloud provided as to why the demonstration on 7 March 1965 could not occur. Choose TWO responses.', lv: 1, ll: 'Extraction', multi: true, mx: 2, opts: ['It was \'an unlawful assembly\'', 'The marchers had \'been banned by the Governor\'', 'The marchers had failed to pay for a march permit', 'The bridge ahead had been closed for repairs', 'The march had been called off by its own leaders'], c: [0, 1], fb: 'Cloud says it is \'an unlawful assembly\' and that the marchers have \'been banned by the Governor\'. The other options are not in the source.'},
  {id: 'q7', src: '3B', num: '3.2.2', m: 2, t: 'Explain the implication of the statement, \'There will be no word\', in the context of Major Cloud\'s attitude towards the activists.', lv: 2, ll: 'Interpretation', opts: ['Cloud refused to listen to or negotiate with the protestors and was determined to block and disperse the march.', 'Cloud was inviting the protestors to sit down and discuss their demands with him calmly.', 'Cloud was promising the marchers that they would be allowed to continue on to Montgomery.', 'Cloud was politely asking the marchers to share their concerns and grievances with him.'], c: 0, fb: '\'There will be no word\' shows Cloud refused all discussion and meant to disperse the march. The other options wrongly make him willing to talk.'},
  {id: 'q8', src: '3B', num: '3.2.3', m: 4, t: 'Comment on why you think the State Troopers used derogatory words when they addressed the demonstrators during the first march.', lv: 2, ll: 'Interpretation', opts: ['They used insults to intimidate the marchers and to provoke a reaction that would excuse further violence.', 'They were encouraging the marchers to keep going peacefully all the way to Montgomery.', 'They were showing their genuine respect and admiration for the non-violent protestors.', 'They were simply repeating a friendly greeting commonly used across the American South.'], c: 0, fb: 'The insults were meant to intimidate the marchers and provoke a reaction to justify violence, reflecting the troopers\' racism. The other options misread their hostility.'},
  {id: 'q9', src: '3B', num: '3.2.4', m: 3, t: 'State THREE effects in the source that the tear gas, thrown by the State Troopers, had on the marchers. Choose THREE responses.', lv: 1, ll: 'Extraction', multi: true, mx: 3, opts: ['People became sick', 'People started vomiting', 'People were forced off the highway into the woods', 'People were arrested and taken away to jail', 'People were given medical care straight away', 'People turned back and boarded buses home'], c: [0, 1, 2], fb: 'The source says people \'became sick\', \'started vomiting\' and were \'forced off the highway and behind some buildings in the woods\'. The other options are not stated.'},
  {id: 'q10', src: 'compare', num: '3.3', m: 4, t: 'Consult Sources 3A and 3B. Explain how the evidence in Source 3A supports the information in Source 3B regarding how the State Troopers dealt with the demonstrators on 7 March 1965.', lv: 3, ll: 'Comparison', opts: ['Both show the troopers violently dispersing the peaceful marchers with clubs, tear gas and mounted police as they were knocked down.', 'They contradict each other, as 3A says the marchers were protected while 3B says that they were attacked.', 'Both show that the State Troopers helped the peaceful marchers reach Montgomery quite safely and calmly.', '3A supports 3B by proving that no tear gas or real violence was ever used against the marchers.'], c: 0, fb: 'Both sources agree the troopers ordered the marchers to disperse and then attacked them with force and gas. They do not contradict each other or show kindness.'},
  {id: 'q11', src: '3C', num: '3.4.1', m: 2, t: 'Why, according to the source, did the Alabama papers criticise the State Troopers?', lv: 1, ll: 'Extraction', opts: ['Over \'their terrible acts two weeks earlier\' against the non-violent demonstrators.', 'Because the State Troopers had refused to turn up for their duty at all.', 'Because the State Troopers had let the march reach Montgomery unopposed.', 'Because the State Troopers had joined the demonstrators in their protest.'], c: 0, fb: 'The source says the papers criticised the troopers \'over their terrible acts two weeks earlier\'. The other options are not in the source.'},
  {id: 'q12', src: '3C', num: '3.4.2', m: 2, t: 'Explain the concept civil rights in the context of the Selma to Montgomery March in 1965.', lv: 2, ll: 'Concept', opts: ['The rights owed to all citizens, such as the voting rights African Americans were demanding on the march.', 'The right of a government to use its police force freely against unarmed protestors.', 'The right of a state to make and enforce its own separate racial segregation laws.', 'The rights that were held only by the white residents of the state of Alabama.'], c: 0, fb: 'Civil rights are the rights owed to all citizens, like the vote the marchers demanded. The other options describe state power or segregation, not civil rights.'},
  {id: 'q13', src: '3C', num: '3.4.3', m: 4, t: 'Comment on the usefulness of this source for a historian researching the preparations for the second Selma to Montgomery March on 9 March 1965.', lv: 3, ll: 'Reliability', opts: ['Useful, because it is first-hand writing by Martin Luther King Jr, the movement\'s leader, on planning the second march.', 'Not useful, because it was written by someone with no connection at all to the Selma marches.', 'Not useful, because it says nothing whatsoever about the planning of the second Selma march.', 'Not useful, because it was written many years before the Selma marches had taken place.'], c: 0, fb: 'As first-hand writing by King himself about planning the second march, the source is very useful. The other options describe features that would weaken usefulness.'},
  {id: 'q14', src: '3D', num: '3.5.1', m: 4, t: 'Explain the messages conveyed by this photograph.', lv: 2, ll: 'Interpretation', opts: ['It shows the march finally succeeded, with some 25 000 committed marchers reaching the Alabama State Capitol in Montgomery.', 'It shows a small handful of marchers being turned back before they could reach Montgomery.', 'It shows the State Troopers blocking the marchers at the Edmund Pettus Bridge in Selma.', 'It shows an empty street after the marchers had abandoned their whole campaign.'], c: 0, fb: 'The huge crowd at the Capitol shows the march succeeded, with some 25 000 marchers reaching Montgomery. The other options contradict the photograph.'},
  {id: 'q15', src: '3D', num: '3.5.2', m: 4, t: 'Why would you regard this photograph as iconic (symbolic) regarding the civil rights protests?', lv: 2, ll: 'Interpretation', opts: ['It captured a victory for non-violent protest, as 25 000 marchers reached Montgomery after two earlier attempts had failed.', 'It captured an ordinary, uneventful day on which nothing of any real importance took place at all.', 'It captured the moment the marchers first set out from the town of Selma on foot in early March.', 'It captured the State Troopers celebrating together at the end of the whole protest campaign in Alabama.'], c: 0, fb: 'The photograph is iconic because it shows non-violent protest triumphing after two failed attempts, helping bring the Voting Rights Act. The other options miss its significance.'},
  {id: 'q16', src: 'para', num: '3.6a', m: 2, t: 'Choose the best topic sentence for a paragraph explaining the challenges encountered by the civil rights protestors on the Selma to Montgomery marches.', lv: 3, ll: 'Synthesis', opts: ['Civil rights protestors on the Selma marches faced brutal challenges, from police violence to court bans and official hostility.', 'The Selma to Montgomery marches took place in the American state of Alabama during the year 1965.', 'John Lewis was the elected chairperson of the Student Non-Violent Coordinating Committee, known as the SNCC.', 'There were three separate attempts to march the road from Selma to Montgomery in early 1965.'], c: 0, fb: 'A topic sentence must answer the question and set up an argument. Only the first names the challenges the marchers faced. The others are facts or background.'},
  {id: 'q17', src: 'para', num: '3.6b', m: 2, t: 'Which piece of source evidence best supports the topic sentence about the challenges the marchers faced?', lv: 3, ll: 'Synthesis', opts: ['Source 3B shows the marchers were knocked down, insulted and gassed until they became sick and were forced off the highway.', 'Source 3A was taken from an article published on the Politico website in the year 2018.', 'Source 3C was written by Martin Luther King Jr in the book A Testament of Hope.', 'Source 3D was an aerial photograph taken in Montgomery on the day of 25 March 1965.'], c: 0, fb: 'Good evidence connects to the claim. Source 3B shows the violence the marchers faced. The others are publication or biographical details.'},
  {id: 'q18', src: 'para', num: '3.6c', m: 2, t: 'Which piece of your own knowledge best strengthens the argument about the challenges faced by the marchers?', lv: 3, ll: 'Synthesis', opts: ['Despite the beatings of \'Bloody Sunday\' and the court bans, the marchers persisted and helped bring the Voting Rights Act.', 'The Berlin Wall was built in 1961 to stop East Germans from fleeing westward to the West.', 'Angola gained its independence from Portuguese colonial rule in southern Africa in the year 1975.', 'The United Nations was founded back in 1945 to help maintain peace between the world\'s nations.'], c: 0, fb: 'Own knowledge must fit the topic. The beatings, bans and the eventual Voting Rights Act show the challenges and their result. The others belong to different topics.'},
  {id: 'q19', src: 'para', num: '3.6d', m: 2, t: 'Choose the best concluding sentence that synthesises the paragraph\'s argument.', lv: 3, ll: 'Synthesis', opts: ['In this way, the protestors overcame violence and official hostility to expose injustice and win real change.', 'Therefore, the protestors faced no real difficulties at all on their way to Montgomery.', 'As a result, the protestors gave up and abandoned their campaign for voting rights.', 'This shows that the Selma marches were mainly a peaceful and uneventful outing.'], c: 0, fb: 'A conclusion should draw the argument together. The first ties the challenges to the marchers\' courage and impact. The others contradict the evidence.'},
];

const MTA_ANSWERS = [
  {label: 'Answer A', text: 'The civil rights protestors faced many challenges on the Selma to Montgomery marches. They were stopped by the State Troopers who did not want them to march. Source 3B says that they were pushed and that gas was used on them. They were also insulted during the march. Because of these challenges, the protestors had a very hard and dangerous time.', expLv: 0, expM: '?-5', crit: [{q: 'Does it have a clear topic sentence addressing the question?', cor: 'partial', exp: 'It says there were \'many challenges\' but does not clearly name them, so the topic is loosely framed.'}, {q: 'Does it use specific evidence from the sources?', cor: 'partial', exp: 'It refers to Source 3B but only generally, without the specific detail of Major Cloud or the marchers being sickened by the gas.'}, {q: 'Does it include own knowledge beyond the sources?', cor: 'no', exp: 'It stays inside the sources. There is no outside fact such as the passing of the Voting Rights Act of 1965.'}, {q: 'Does it explain WHY (analysis), not just WHAT (description)?', cor: 'no', exp: 'It lists the challenges rather than analysing how they threatened the marchers and their campaign.'}, {q: 'Does it have a concluding sentence that synthesises?', cor: 'partial', exp: 'The last sentence restates that it was difficult but does not pull the argument together.'}, {q: 'Is it a coherent paragraph, not a list of disconnected sentences?', cor: 'yes', exp: 'The sentences follow on from one another and read as a connected paragraph.'}]},
  {label: 'Answer B', text: 'The civil rights protestors on the Selma to Montgomery marches faced brutal and dangerous challenges as they demanded the right to vote. As Source 3B describes, Major Cloud refused even to speak with them, then ordered the State Troopers to advance, knocking the marchers down and gassing them until they became sick and were driven off the highway. Source 3A adds that mounted police chased and beat the retreating crowd on \'Bloody Sunday\'. Beyond the sources, the courts issued orders banning the second march, leaving the leaders angry and frustrated. Despite the violence, insults and court bans, the protestors pressed on, and their courage helped force the passing of the Voting Rights Act of 1965.', expLv: 0, expM: '?-8', crit: [{q: 'Does it have a clear topic sentence addressing the question?', cor: 'yes', exp: 'The first sentence states directly that the marchers faced brutal, dangerous challenges as they demanded the vote.'}, {q: 'Does it use specific evidence from the sources?', cor: 'yes', exp: 'It uses Source 3B (Cloud and the gassing) and Source 3A (mounted police on \'Bloody Sunday\') with real detail.'}, {q: 'Does it include own knowledge beyond the sources?', cor: 'yes', exp: 'It adds the court ban on the second march and the eventual Voting Rights Act of 1965.'}, {q: 'Does it explain WHY (analysis), not just WHAT (description)?', cor: 'yes', exp: 'It explains how official hostility exposed the marchers to violence yet failed to stop them, beyond mere description.'}, {q: 'Does it have a concluding sentence that synthesises?', cor: 'yes', exp: 'The closing sentence ties the challenges to the marchers\' persistence and their impact.'}, {q: 'Is it a coherent paragraph, not a list of disconnected sentences?', cor: 'yes', exp: 'It flows logically from claim to evidence to own knowledge to conclusion.'}]},
];

/* ═══ KULA LEARN BRIDGE ═══
   Reports results to a parent Kula Learn page via postMessage.
   See project doc: Kula_Revise_results_payload_spec.md (spec v1).
   KR_META is injected by build.py from paper.json meta. The bridge is
   inert unless (a) identity fields are present, (b) the page is inside
   an iframe, and (c) the host origin was passed as ?host=<origin>.   */
const KR_META = {interactiveId: 'history-p1-2022-nov-q3', paper: 'P1', section: 'A', questionNumber: 3, paperRef: 'DBE November 2022'};
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
