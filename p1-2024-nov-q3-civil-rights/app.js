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
    type: 'Audio Transcript',
    html: `<div class="sp-body">The Washington March of 28 August is more than just a demonstration. It is a living petition in the flesh of the scores of thousands of citizens of both races who will be present from all parts of our country. It will be orderly, but not subservient (passive). It will be proud, but not arrogant. It will be non-violent, but not timid (frightened). It will be unified in purposes and behaviour, not splintered (broken) into groups and individual competitors. It will be outspoken, but not raucous (violent).<br><br>We, the undersigned, who see the Washington March as wrapping up the dreams, hopes, ambitions, tears and prayers of millions who have lived for this day, call upon the members, followers and well-wishers of our several organisations to make the March a disciplined and purposeful demonstration.<br><br>We call upon them all, black and white, to resist provocations (incitements) to disorder and to violence. We ask them to remember that evil persons are determined to smear this March and to discredit (doubt) the cause of equality by deliberate efforts to stir (cause) disorder. We call for self-discipline, so that no one in our own ranks, however enthusiastic, shall be the spark for disorder. We ask each and every one in attendance in Washington or in spiritual attendance back home to place the cause above all else.</div>`,
    attr: 'From Meetings: Tape 108/843, by the heads of the ten Civil Rights Movement organisations, 28 August 1963'
  },
  '3B': {
    label: 'Source 3B',
    type: 'Historical Account',
    html: `<div class="sp-body">On 28 August some 250 000 civil rights activists led by Martin Luther King Jr converged (came together) on the Lincoln Memorial to demand full civil rights for blacks. 'Jobs and freedom' was the cry of the marchers, including 50 000 whites. They were addressed by a phalanx (mass) of supporters including labour leader Walter Reuther, clergymen of many faiths, folk singer Joan Baez and gospel singer Mahalia Jackson.<br><br>The unforgettable closing address was delivered by Dr King, who would receive the Nobel Prize for Peace the following year. At the urging of Mahalia Jackson, who called out from the dais (stage) 'Tell them about your dream, Martin!', he put aside his prepared text and moved the immense crowd to tears with the words, 'I Have a Dream this nation will rise up and live out the true meaning of its creed: "We hold these truths to be self-evident &ndash; that all men are created equal." &hellip; I Have a Dream that my four little children will one day live in a nation where they will not be judged by the colour of their skin but by the content of their character.'<br><br>'When we let freedom ring &hellip; we will be able to speed up that day when all of God's children, black men and white men, Jews and Gentiles, Protestants and Catholics, will be able to join hands and sing &hellip; "Free at last! Free at last! Thank God almighty, we are free at last."'</div>`,
    attr: 'From The Civil Rights Movement - An Illustrated History by B Wilkinson'
  },
  '3C': {
    label: 'Source 3C',
    type: 'Photograph',
    html: `<img class="sp-img" src="3C.png" alt="A black-and-white photograph of a large crowd of black and white civil rights marchers filling a street during the March on Washington, 28 August 1963. Many carry placards, and a large United States flag is held up among them."><div class="sp-body" style="margin-top:12px;">Placards carried by the marchers read: 'No US dough to help Jim Crow grow', 'We demand voting rights now!', 'We demand an end to police brutality now!', 'We march for jobs for all now!', 'We march for higher minimum wages coverage for all workers now!', and 'We march for integrated schools now!'</div>`,
    attr: 'From The Day They Marched by DE Saunders. The March on Washington, 28 August 1963'
  },
  '3D': {
    label: 'Source 3D',
    type: 'Media Statement',
    html: `<div class="sp-body"><strong>Statement by the President</strong><br><br>We have witnessed today in Washington tens of thousands of Americans &hellip; both Negro and white &hellip; exercising their right to assemble peaceably and direct the widest possible attention to a great national issue. What is different today is the intensified and widespread public awareness of the need to move forward in achieving these objectives.<br><br>One cannot help but be impressed with the deep fervour (passion) and the quiet dignity that characterises the thousands who have gathered in the Nation's Capital to demonstrate their faith and confidence in our democratic form of government. The leaders of the organisation sponsoring the March and all who have participated in it deserve our appreciation for the detailed preparations that made it possible and for the orderly manner in which it has been conducted.<br><br>The Executive Branch of the Federal Government will continue its efforts to obtain increased employment and to eliminate discrimination in employment practices, two of the prime goals of the March. In addition, our efforts to secure the enactment of the legislative proposals made to the Congress will be maintained, including the Civil Rights Bill.</div>`,
    attr: 'Statement by President Kennedy, from The New York Times, 29 August 1963'
  },
  'compare': {
    label: 'Sources 3B + 3C',
    type: 'Comparison',
    html: `<div class="sp-body"><strong>Source 3B</strong><br><br>&hellip; some 250 000 civil rights activists led by Martin Luther King Jr converged on the Lincoln Memorial to demand full civil rights for blacks. 'Jobs and freedom' was the cry of the marchers, including 50 000 whites &hellip;</div><div class="sp-body" style="margin-top:12px;"><strong>Source 3C (the photograph)</strong> shows the marchers filling the street with placards demanding voting rights, an end to police brutality, jobs and integrated schools.</div><img class="sp-img" src="3C.png" alt="A large crowd of black and white marchers with placards and a US flag at the March on Washington, 1963.">`,
    attr: 'Re-read both sources, then explain how they connect.'
  },
  'para': {
    label: 'Paragraph Task',
    type: 'Q3.6, 8 marks',
    html: `<div class="sp-body">Now build an eight-mark paragraph answering the guiding question: <em>Why did civil rights marchers in the USA organise the March on Washington on 28 August 1963?</em><br><br>Work through it in four steps &ndash; a topic sentence, evidence from the sources, your own knowledge, and a synthesising conclusion. Choose the strongest option at each step.</div>`,
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
  {id: 'q1', src: '3A', num: '3.1.1', m: 1, t: 'Quote evidence from the source suggesting why organisers of the March on Washington regarded it as more than just a demonstration.', lv: 1, ll: 'Extraction', opts: ['\'It is a living petition in the flesh of the scores of thousands of citizens of both races.\'', '\'It will be orderly, but not subservient.\'', '\'We call for self-discipline ... to be the spark for disorder.\'', '\'Evil persons are determined to smear this March.\''], c: 0, fb: 'The March was \'more than just a demonstration\' because \'it is a living petition in the flesh of the scores of thousands of citizens of both races\'. The other quotes are about discipline or opponents.'},
  {id: 'q2', src: '3A', num: '3.1.2', m: 2, t: 'State any TWO ways in the source in which the organisers wanted the March to be a disciplined and purposeful demonstration. Choose TWO responses.', lv: 1, ll: 'Extraction', multi: true, mx: 2, opts: ['It will be orderly, but not subservient', 'It will be non-violent, but not timid', 'It will be armed, but not aggressive', 'It will be secret, but not hidden', 'It will be brief, but not rushed'], c: [0, 1], fb: 'The source says the March \'will be orderly, but not subservient\' and \'non-violent, but not timid\'. The other options are not in the source.'},
  {id: 'q3', src: '3A', num: '3.1.3', m: 2, t: 'Who do you think are referred to as \'evil persons are determined to smear this March and to discredit the cause of equality by deliberate efforts\', with regard to the preparations for the March on Washington in 1963?', lv: 2, ll: 'Interpretation', opts: ['Opponents of civil rights, such as racists and segregationists, who wanted to discredit the movement.', 'The organisers of the March who wanted it to be peaceful and orderly.', 'President Kennedy and the federal government of the United States.', 'The thousands of ordinary marchers who took part in the March.'], c: 0, fb: 'The \'evil persons\' are the movement\'s opponents, racists and segregationists, hoping to smear the March. The other options are supporters of the March.'},
  {id: 'q4', src: '3A', num: '3.1.4', m: 4, t: 'Comment on the implication of the statement, \'We ask each and every one in attendance … to place the cause (March on Washington) above all else.\'', lv: 2, ll: 'Interpretation', opts: ['It implies that marchers should put the civil rights cause before their own interests or egos, keeping unity and discipline.', 'It implies that marchers should put their own personal ambitions before the cause.', 'It implies that only the leaders of the March really mattered on the day.', 'It implies that the marchers should abandon the cause if it became difficult.'], c: 0, fb: 'Placing the cause \'above all else\' means putting civil rights before personal interests, to keep the March unified and disciplined. The other options reverse this.'},
  {id: 'q5', src: '3B', num: '3.2.1', m: 2, t: 'Define the term civil rights in your own words.', lv: 1, ll: 'Concept', opts: ['The rights of all citizens to freedom, equality and fair treatment regardless of their race.', 'The right of a government to rule over its people without holding any elections.', 'The special privileges that are given only to a country\'s wealthiest citizens.', 'The rules that keep people of different races strictly separated from one another.'], c: 0, fb: 'Civil rights are the rights of all citizens to freedom, equality and fair treatment regardless of race. The other options describe autocracy, privilege or segregation.'},
  {id: 'q6', src: '3B', num: '3.2.2', m: 2, t: 'What, according to the source, did the civil rights marchers demand when they converged on the Lincoln Memorial?', lv: 1, ll: 'Extraction', opts: ['Full civil rights for black Americans, summed up in the cry \'jobs and freedom\'.', 'The immediate removal of President Kennedy from his office.', 'Independence for the southern states of the United States.', 'An end to all immigration into the United States of America.'], c: 0, fb: 'The marchers converged \'to demand full civil rights for blacks\', with \'jobs and freedom\' as their cry. The other options are not in the source.'},
  {id: 'q7', src: '3B', num: '3.2.3', m: 4, t: 'Explain the significance of the presence of many leaders from various fields, who were given the opportunity to address the marchers.', lv: 2, ll: 'Interpretation', opts: ['It showed the movement had broad, cross-racial and cross-faith support, uniting many groups behind the cause of civil rights.', 'It showed that only religious leaders really cared about civil rights at all.', 'It showed that the marchers could not agree among themselves on what they wanted.', 'It showed that famous people had taken the movement over from ordinary people.'], c: 0, fb: 'Leaders from labour, religion and the arts showed the movement\'s wide, united support. The other options misread this unity.'},
  {id: 'q8', src: '3B', num: '3.2.4', m: 4, t: 'Comment on why the \'I Have a Dream\' speech may be regarded as historically significant.', lv: 2, ll: 'Interpretation', opts: ['It gave the movement an unforgettable vision of racial equality, moved millions, and became a defining moment of the civil rights struggle.', 'It was significant because it was the shortest speech ever given at any march.', 'It was significant because it called on black Americans to take up arms.', 'It was significant because it persuaded people to give up the fight for equality.'], c: 0, fb: 'The speech offered a powerful vision of equality that moved millions and became iconic. The other options misdescribe or reverse its message.'},
  {id: 'q9', src: '3C', num: '3.3.1', m: 2, t: 'State any TWO demands in the source that were made by the marchers who participated in the March on Washington on 28 August 1963. Choose TWO responses.', lv: 1, ll: 'Extraction', multi: true, mx: 2, opts: ['An end to police brutality', 'Voting rights now', 'The withdrawal of US troops from Vietnam', 'Free healthcare for all Americans', 'Lower taxes for business owners'], c: [0, 1], fb: 'The placards demand \'an end to police brutality now\' and \'voting rights now\', among others. The other options are not shown on the placards.'},
  {id: 'q10', src: '3C', num: '3.3.2', m: 4, t: 'Why do you think the photographer decided to take this photograph?', lv: 2, ll: 'Interpretation', opts: ['To record the huge, peaceful and diverse crowd and capture the marchers\' demands shown on their placards.', 'To show that only a small handful of people took part in the whole March.', 'To capture a violent clash between the marchers and the city police.', 'To advertise a music concert that was being held in the city of Washington.'], c: 0, fb: 'The photograph records the scale, diversity and demands of the peaceful march. The other options misdescribe the scene.'},
  {id: 'q11', src: 'compare', num: '3.4', m: 4, t: 'Refer to Sources 3B and 3C. Explain how the information in Source 3B supports the evidence in Source 3C regarding the activities on the day of the March on Washington on 28 August 1963.', lv: 3, ll: 'Comparison', opts: ['Both show a massive, peaceful, unified march for civil rights: 3B describes 250 000 activists demanding jobs and freedom, and 3C shows the crowd with placards making those demands.', 'They contradict each other: 3B says the March was tiny while 3C shows a huge crowd.', 'Both show that the March on Washington turned into a violent riot on the day.', '3B supports 3C by proving that no white people took part in the March at all.'], c: 0, fb: '3B\'s account of a huge crowd demanding jobs and freedom matches 3C\'s photograph of marchers with those very demands on placards. They agree; they do not contradict.'},
  {id: 'q12', src: '3D', num: '3.5.1', m: 2, t: 'Give TWO reasons in the source which suggest that President Kennedy supported the March on Washington. Choose TWO responses.', lv: 1, ll: 'Extraction', multi: true, mx: 2, opts: ['He was impressed by the deep fervour and quiet dignity of the marchers', 'He committed the government to continue its efforts on the March\'s goals', 'He personally led the March to the Lincoln Memorial', 'He gave the marchers money to help fund the protest', 'He ordered the police to arrest all of the marchers'], c: [0, 1], fb: 'Kennedy was \'impressed with the deep fervour and the quiet dignity\' and pledged that the government \'will continue its efforts\' on the March\'s goals. The other options are not in the source.'},
  {id: 'q13', src: '3D', num: '3.5.2', m: 2, t: 'According to the source, give TWO reasons why the President believed the organisers of the March deserved the appreciation from the USA\'s government. Choose TWO responses.', lv: 1, ll: 'Extraction', multi: true, mx: 2, opts: ['For the detailed preparations that made the March possible', 'For the orderly manner in which the March was conducted', 'For keeping the March completely secret from the public', 'For refusing to allow any white people to take part', 'For persuading Congress to disband immediately'], c: [0, 1], fb: 'Kennedy praised the organisers \'for the detailed preparations that made it possible and for the orderly manner in which it has been conducted\'. The other options are not in the source.'},
  {id: 'q14', src: '3D', num: '3.5.3', m: 2, t: 'Explain the term discrimination in the context of the Civil Rights Movement in the USA.', lv: 2, ll: 'Concept', opts: ['The unfair treatment of people, here African Americans, because of their race rather than their individual merit.', 'The equal and fair treatment of all people regardless of their race.', 'The right of every citizen to vote freely in national elections.', 'A government programme set up to create new jobs for the unemployed.'], c: 0, fb: 'Discrimination is unfair treatment based on race rather than merit, as African Americans suffered. The other options describe equality, voting or job schemes.'},
  {id: 'q15', src: '3D', num: '3.5.4', m: 1, t: 'Quote any law/programme from the source that had to be passed by Congress to eliminate discrimination in employment.', lv: 1, ll: 'Extraction', opts: ['The Civil Rights Bill.', 'The Marshall Plan.', 'The New Deal.', 'The Truman Doctrine.'], c: 0, fb: 'The source names \'the Civil Rights Bill\' among the legislative proposals to Congress. The other options are from different periods and are not in the source.'},
  {id: 'q16', src: '3D', num: '3.5.5', m: 4, t: 'Comment on why a historian would find this source useful when studying the reaction of the USA government to the March on Washington.', lv: 3, ll: 'Reliability', opts: ['Useful because it is President Kennedy\'s own official statement, giving direct first-hand evidence of the government\'s reaction to the March.', 'Not useful because it was written by an ordinary marcher with no authority.', 'Not useful because it was written many years after the March took place.', 'Useful only because it gives detailed statistics on the number of marchers.'], c: 0, fb: 'As Kennedy\'s own official statement, the source directly reveals the government\'s reaction, making it very useful. The other options misdescribe it.'},
  {id: 'q17', src: 'para', num: '3.6a', m: 2, t: 'Choose the best topic sentence for a paragraph explaining why civil rights marchers in the USA organised the March on Washington on 28 August 1963.', lv: 3, ll: 'Synthesis', opts: ['Civil rights marchers organised the March on Washington in 1963 to demand jobs, freedom and full civil rights for black Americans.', 'The March on Washington took place on the 28th of August in the year 1963.', 'Martin Luther King Jr delivered a famous speech at the Lincoln Memorial.', 'There were many different protests across the United States during the 1960s.'], c: 0, fb: 'A topic sentence must answer the question and set up an argument. Only the first states why the March was organised. The others are facts or background.'},
  {id: 'q18', src: 'para', num: '3.6b', m: 2, t: 'Which piece of source evidence best supports the topic sentence about why the March was organised?', lv: 3, ll: 'Synthesis', opts: ['Source 3C shows marchers carrying placards demanding voting rights, an end to police brutality, jobs and integrated schools.', 'Source 3A mentions that the extract came from an audio recording.', 'Source 3B notes that King received the Nobel Peace Prize the following year.', 'Source 3D was a statement that was published in The New York Times.'], c: 0, fb: 'Good evidence connects to the claim. Source 3C\'s placards show exactly what the marchers were demanding. The others are publication or biographical details.'},
  {id: 'q19', src: 'para', num: '3.6c', m: 2, t: 'Which piece of your own knowledge best strengthens the argument about why the March was organised?', lv: 3, ll: 'Synthesis', opts: ['The March helped pressure Congress into passing the Civil Rights Act of 1964, which outlawed segregation and discrimination.', 'The Berlin Wall was built in 1961 to stop East Germans from fleeing to the West.', 'The United Nations was founded in 1945 to help maintain international peace.', 'Angola gained its independence from Portugal in the year 1975.'], c: 0, fb: 'Own knowledge must fit the topic. The March\'s link to the Civil Rights Act of 1964 shows what it aimed to achieve. The others belong to different topics.'},
  {id: 'q20', src: 'para', num: '3.6d', m: 2, t: 'Choose the best concluding sentence that synthesises the paragraph\'s argument.', lv: 3, ll: 'Synthesis', opts: ['In this way, the March on Washington united hundreds of thousands to demand equality and push the country towards civil rights reform.', 'Therefore, the March on Washington achieved nothing and was soon completely forgotten.', 'As a result, the marchers gave up their whole campaign for civil rights.', 'This shows that the March was mainly about ending the war in Vietnam.'], c: 0, fb: 'A conclusion should draw the argument together. The first ties the March\'s scale and demands to civil rights reform. The others contradict the evidence.'},
];

const MTA_ANSWERS = [
  {label: 'Answer A', text: 'The marchers organised the March on Washington in 1963 for several reasons. They wanted civil rights and equality for black people in America. Source 3C shows marchers carrying placards with their demands on them. They also wanted jobs and freedom for everyone. Because of these reasons, thousands of people marched to Washington to show the government what they wanted.', expLv: 0, expM: '?-5', crit: [{q: 'Does it have a clear topic sentence addressing the question?', cor: 'partial', exp: 'It says there were \'several reasons\' but does not clearly name them, so the topic is loosely framed.'}, {q: 'Does it use specific evidence from the sources?', cor: 'partial', exp: 'It refers to Source 3C but only generally, without naming the specific demands on the placards.'}, {q: 'Does it include own knowledge beyond the sources?', cor: 'no', exp: 'It stays inside the sources. There is no outside fact such as the Civil Rights Act of 1964.'}, {q: 'Does it explain WHY (analysis), not just WHAT (description)?', cor: 'no', exp: 'It mostly lists what the marchers wanted rather than analysing why they chose to march.'}, {q: 'Does it have a concluding sentence that synthesises?', cor: 'partial', exp: 'The last sentence restates that people marched but does not pull the reasons together.'}, {q: 'Is it a coherent paragraph, not a list of disconnected sentences?', cor: 'yes', exp: 'The sentences follow on from one another and read as a connected paragraph.'}]},
  {label: 'Answer B', text: 'Civil rights marchers organised the March on Washington in 1963 to demand jobs, freedom and full civil rights for black Americans. As Source 3C shows, they carried placards calling for voting rights, an end to police brutality, integrated schools and jobs for all. Source 3B adds that some 250 000 people, black and white, converged on the Lincoln Memorial, where King\'s \'I Have a Dream\' speech gave the movement an unforgettable vision of equality. Beyond the sources, the March helped pressure Congress into passing the Civil Rights Act of 1964, which outlawed segregation. By marching peacefully in their hundreds of thousands, the protesters forced the nation to confront the injustice of discrimination.', expLv: 0, expM: '?-8', crit: [{q: 'Does it have a clear topic sentence addressing the question?', cor: 'yes', exp: 'The first sentence states directly why the March was organised, to demand jobs, freedom and civil rights.'}, {q: 'Does it use specific evidence from the sources?', cor: 'yes', exp: 'It uses Source 3C\'s placard demands and Source 3B\'s account of the crowd and King\'s speech with real detail.'}, {q: 'Does it include own knowledge beyond the sources?', cor: 'yes', exp: 'It adds the Civil Rights Act of 1964, an accurate fact from beyond the sources.'}, {q: 'Does it explain WHY (analysis), not just WHAT (description)?', cor: 'yes', exp: 'It explains how the peaceful mass march forced the nation to confront discrimination, beyond mere description.'}, {q: 'Does it have a concluding sentence that synthesises?', cor: 'yes', exp: 'The closing sentence ties the scale and demands of the March to its impact on the nation.'}, {q: 'Is it a coherent paragraph, not a list of disconnected sentences?', cor: 'yes', exp: 'It flows logically from claim to evidence to own knowledge to conclusion.'}]},
];

/* ═══ KULA LEARN BRIDGE ═══
   Reports results to a parent Kula Learn page via postMessage.
   See project doc: Kula_Revise_results_payload_spec.md (spec v1).
   KR_META is injected by build.py from paper.json meta. The bridge is
   inert unless (a) identity fields are present, (b) the page is inside
   an iframe, and (c) the host origin was passed as ?host=<origin>.   */
const KR_META = {interactiveId: 'history-p1-2024-nov-q3', paper: 'P1', section: 'A', questionNumber: 3, paperRef: 'DBE November 2024'};
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
