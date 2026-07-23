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
    html: `<div class="sp-body">It was college students who had relit (revived) the torch, with a seemingly new form of non-violent confrontation (challenge) &ndash; the sit-in. &hellip; On 1 February 1960, four male students (Ezell Blair Jr, Franklin McCain, Joseph McNeil and David Richmond) from the North Carolina Agricultural and Technical College (A&amp;T) walked into the downtown Woolworths in Greensboro and sat down on stools at the store's lunch counter. When the waitresses wouldn't serve them, the students refused to move. Two of them were members of the Greensboro National Association for the Advancement of Colored People (NAACP) youth group, which, impatient with the glacial (slow) pace of school desegregation &hellip; had been agitating (pushing) to get things moving again.<br><br>After being refused service at Woolworths, the four returned the next day, and this time they brought with them more than twenty fellow students. The day after that, sixty-six students from A&amp;T and other colleges showed up. By the end of the week, more than a thousand young people were involved in the sit-in, shocking not only the residents of Greensboro but the rest of the South and the nation.<br><br>Soon, students in nearby Winston-Salem and Durham launched their own demonstrations. Hundreds of students staged sit-ins in downtown Nashville. Protest erupted in South Carolina, Florida and Virginia, igniting each other like a string of firecrackers. By April, more than fifty thousand people throughout the South had taken part in sit-ins in seventy-eight cities and towns, and more than two thousand demonstrators were arrested.</div>`,
    attr: 'From Freedom\'s Daughters by L Olson'
  },
  '3B': {
    label: 'Source 3B',
    type: 'Interview Extract',
    html: `<div class="sp-body">Joseph Jackson Jr, their leader, approached the circulation desk. With heart thumping, he stammered a message he had memorised: 'Ma'am, I want to know if you have this philosophy book. I need it for a research project.'<br><br>'You know you don't belong here!' the library assistant yelled, proceeding to call the library director.<br><br>'May I help you?' the latter (library director) asked, coming out of her office. 'We're doing research,' the students responded.<br><br>'There's a Coloured library on Mill Street,' she said. 'You are welcome there.'<br><br>Almost immediately, Jackson later reported, police entered the building and told the students to get out of the library. No one moved. The chief of police then told them that they were under arrest &hellip; they were booked into the local jail.<br><br>Several days later, the students were taken to the courthouse to be tried. Several blocks away, hundreds of whites were marching through city streets under a huge Confederate flag. At the courthouse, however, some 100 black supporters had gathered to cheer what were now referred to as the 'Tougaloo Nine'.</div>`,
    attr: 'From an interview with Joseph Jackson Jr (leader of the Tougaloo Nine), The Orange County Weekly by GS Román, 2015'
  },
  '3C': {
    label: 'Source 3C',
    type: 'Photograph',
    html: `<img class="sp-img" src="3C.png" alt="A black-and-white photograph of a public swimming pool. Young African Americans swim together in the water in the foreground. In the background, one small group of African Americans sits apart on the left while a larger group of young whites stands together on the right side of the pool."><div class="sp-body" style="margin-top:12px;">Young African Americans and whites in a 'swim-in' (protesting segregation in swimming pools) at Pullen Park's pool in Raleigh, North Carolina, on 7 August 1962. In the background are two groups, African Americans sitting and whites standing separately.</div>`,
    attr: 'From davidcecelski.com (\'The color of war, part 9: wade-ins and swim-ins\'), accessed 4 August 2021'
  },
  '3D': {
    label: 'Source 3D',
    type: 'Historical Account',
    html: `<div class="sp-body">Six months after the sit-ins began, Harris, the manager of the Greensboro Woolworth's, finally relented (gave in): the sit-ins had already cost him $150 000 in lost business. On 25 July 1960, the lunch counter served its first black customers &ndash; four Woolworths' employees who worked in the store's kitchen. In some cities, police used tear gas or fire hoses on demonstrators. In Jacksonville, Florida, whites beat sit-in participants with axe handles and baseball bats. But, by the end of the year, integration of lunch counters had occurred in many cities across the South. &hellip;<br><br>On 11 June 1963, President John F Kennedy, in a live television address from the Oval Office, called for legislation that would give 'all Americans the right to be served in facilities which are open to the public &ndash; hotels, restaurants, theatres, retail stores and similar establishments'. Sit-ins and marches, along with Kennedy's assassination in 1963, helped galvanise (start) support for the Civil Rights Act of 1964, which outlawed racial segregation in public facilities and employment. It was signed into law by Kennedy's successor, President Lyndon B Johnson, in July 1964.<br><br>&hellip; McCain (one of the four male students), who plans to attend the opening of the International Civil Rights Center &amp; Museum, says he'll never forget how he felt on 1 February 1960, at age 17. 'I've never had a feeling like that in my life, just sitting on a stool,' he says. 'It was the most relieving and the most cleansing feeling that I ever felt.'</div>`,
    attr: 'From The Greensboro Sit-Ins by S Bilyeu'
  },
  'compare': {
    label: 'Sources 3A + 3D',
    type: 'Comparison',
    html: `<div class="sp-body"><strong>Source 3A (the sit-ins begin)</strong><br><br>On 1 February 1960, four male students &hellip; sat down on stools at the store's lunch counter &hellip; By the end of the week, more than a thousand young people were involved in the sit-in &hellip; By April, more than fifty thousand people throughout the South had taken part in sit-ins &hellip; and more than two thousand demonstrators were arrested.</div><div class="sp-body" style="margin-top:12px;"><strong>Source 3D (the sit-ins' results)</strong><br><br>Six months after the sit-ins began, Harris &hellip; finally relented &hellip; the lunch counter served its first black customers &hellip; integration of lunch counters had occurred in many cities &hellip; Sit-ins and marches &hellip; helped galvanise support for the Civil Rights Act of 1964.</div>`,
    attr: 'Re-read both sources, then explain how 3A SUPPORTS 3D.'
  },
  'para': {
    label: 'Paragraph Task',
    type: 'Q3.6, 8 marks',
    html: `<div class="sp-body">Now build an eight-mark paragraph answering the guiding question: <em>How did different forms of sit-ins contribute to the desegregation of public facilities in the USA during the 1960s?</em><br><br>Work through it in four steps &ndash; a topic sentence, evidence from the sources, your own knowledge, and a synthesising conclusion. Choose the strongest option at each step.</div>`,
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
  {id: 'q1', src: '3A', num: '3.1.1', m: 1, t: 'Quote the non-violent protest action from the source that the four college students from North Carolina were involved in.', lv: 1, ll: 'Extraction', opts: ['The \'sit-in\'', 'A street march', 'An armed uprising', 'A bus boycott'], c: 0, fb: 'The source names the students\' protest as the \'sit-in\'. The other options are different forms of protest not described here.'},
  {id: 'q2', src: '3A', num: '3.1.2', m: 2, t: 'Define the term boycott in your own words.', lv: 1, ll: 'Concept', opts: ['Refusing to use or buy from something as a protest against unfair policies or treatment.', 'Attacking a business with force in order to shut it down completely.', 'Paying extra to support a company that treats its customers fairly.', 'Voting in an election to remove an unpopular local government.'], c: 0, fb: 'A boycott is withdrawing support, refusing to use or buy, as a protest. The other options describe violence, spending, or voting.'},
  {id: 'q3', src: '3A', num: '3.1.3', m: 4, t: 'Explain what is implied by the statement, \'By the end of the week, more than a thousand young people were involved in the sit-in\', in the context of ending segregation.', lv: 2, ll: 'Interpretation', opts: ['The sit-in spread rapidly and inspired huge numbers to join, showing growing momentum against segregation.', 'The sit-in quickly lost support and was abandoned by the students after a week.', 'Only a small handful of people ever cared about ending segregation.', 'The authorities had already ended segregation before the week was out.'], c: 0, fb: 'The rapid growth to over a thousand shows the movement\'s swelling momentum against segregation. The other options deny that growth.'},
  {id: 'q4', src: '3B', num: '3.2.1', m: 1, t: 'Who, according to the source, was the leader of the Tougaloo Nine?', lv: 1, ll: 'Extraction', opts: ['Joseph Jackson Jr', 'Franklin McCain', 'Ezell Blair Jr', 'Gabriel San Román'], c: 0, fb: 'The source names Joseph Jackson Jr as the leader of the Tougaloo Nine. McCain and Blair were Greensboro students; San Román was the interviewer.'},
  {id: 'q5', src: '3B', num: '3.2.2', m: 4, t: 'In the context of segregation in the USA, comment on what is conveyed by the words, \'There\'s a Coloured library on Mill Street\'.', lv: 2, ll: 'Interpretation', opts: ['That African Americans were expected to use separate \'coloured\' facilities under the segregation the students were challenging.', 'That the library staff were eager to welcome the students into the whites-only library.', 'That the Mill Street library was the best-equipped library in the whole city.', 'That segregation had already been abolished in all of Mississippi\'s libraries.'], c: 0, fb: 'The words enforce segregation by sending the students to a separate \'coloured\' library. The other options misread the librarian\'s intent.'},
  {id: 'q6', src: '3B', num: '3.2.3a', m: 1, t: 'How, according to the source, did WHITES react to the trial of the Tougaloo Nine at the courthouse?', lv: 1, ll: 'Extraction', opts: ['Hundreds marched through the streets under a huge Confederate flag.', 'They gathered to cheer the students as heroes.', 'They joined the students inside the courthouse in support.', 'They stayed at home and ignored the trial entirely.'], c: 0, fb: 'The source says hundreds of whites marched under a Confederate flag. The cheering was done by black supporters, not whites.'},
  {id: 'q7', src: '3B', num: '3.2.3b', m: 1, t: 'How, according to the source, did BLACKS react to the trial of the Tougaloo Nine at the courthouse?', lv: 1, ll: 'Extraction', opts: ['About 100 gathered to cheer the \'Tougaloo Nine\'.', 'They marched under a huge Confederate flag.', 'They demanded that the students be punished.', 'They refused to come near the courthouse at all.'], c: 0, fb: 'The source says about 100 black supporters gathered to cheer the Tougaloo Nine. The other options describe the whites or the opposite reaction.'},
  {id: 'q8', src: '3B', num: '3.2.4', m: 4, t: 'Explain why this source is reliable for a historian researching non-violent action by African Americans to integrate facilities in the 1960s.', lv: 3, ll: 'Reliability', opts: ['It is a first-hand interview with Joseph Jackson Jr, the leader who actually took part in the 1961 library sit-in.', 'It was written by a government official who opposed the civil rights protests.', 'It is a fictional story invented long after the events it describes.', 'It gives detailed statistics on every library sit-in across the whole South.'], c: 0, fb: 'As a first-hand interview with the protest\'s own leader, the source is reliable eyewitness evidence. The other options describe features that would weaken reliability.'},
  {id: 'q9', src: '3C', num: '3.3.1', m: 4, t: 'Explain the messages that are conveyed in the photograph regarding the \'swim-in\' at Raleigh, North Carolina on 7 August 1962.', lv: 2, ll: 'Interpretation', opts: ['It shows African Americans and whites protesting segregation by swimming together, an attempt to integrate a public pool.', 'It shows a pool reserved strictly for white swimmers with no protest taking place.', 'It shows African Americans being violently thrown out of the swimming pool.', 'It shows an empty pool that both groups had refused to enter at all.'], c: 0, fb: 'The swim-in shows both groups sharing the pool to protest segregation, an attempt at integration. The other options contradict the photograph.'},
  {id: 'q10', src: '3C', num: '3.3.2', m: 2, t: 'What conclusion can be drawn from the photograph regarding the two separate groups outside the swimming pool, in the context of integration?', lv: 2, ll: 'Interpretation', opts: ['Integration was still new and uneasy, as the two groups remained apart and uncomfortable with mixing.', 'The two groups had fully accepted integration and mixed freely everywhere.', 'The two groups were about to start fighting one another by the pool.', 'The two groups were members of the same swimming team.'], c: 0, fb: 'The groups staying apart shows integration was new and uneasy. The other options overstate acceptance or misread the scene.'},
  {id: 'q11', src: '3D', num: '3.4.1', m: 3, t: 'Quote THREE pieces of evidence from the source suggesting the sit-in strategy was a success. Choose THREE responses.', lv: 1, ll: 'Extraction', multi: true, mx: 3, opts: ['The Greensboro manager finally relented after $150 000 in lost business', 'The lunch counter served its first black customers on 25 July 1960', 'Integration of lunch counters occurred in many cities across the South', 'In Jacksonville, whites beat participants with axe handles and bats', 'Police used tear gas and fire hoses on the demonstrators'], c: [0, 1, 2], fb: 'Success is shown by the manager relenting, the first black customers served, and integration spreading. The other two describe violence against the protestors.'},
  {id: 'q12', src: '3D', num: '3.4.2', m: 2, t: 'Explain the term integration in the context of the Civil Rights Movement.', lv: 2, ll: 'Concept', opts: ['Bringing people of all races together so they can share public facilities equally, regardless of skin colour.', 'Keeping the races strictly apart in separate facilities and neighbourhoods.', 'Removing one racial group entirely from a town or city.', 'Giving only white citizens the right to use public facilities.'], c: 0, fb: 'Integration means bringing the races together to share facilities equally. The other options describe segregation or exclusion.'},
  {id: 'q13', src: '3D', num: '3.4.3', m: 4, t: 'List FOUR facilities in the source that President Kennedy requested should be open to all Americans. Choose FOUR responses.', lv: 1, ll: 'Extraction', multi: true, mx: 4, opts: ['Hotels', 'Restaurants', 'Theatres', 'Retail stores', 'Public libraries', 'Swimming pools'], c: [0, 1, 2, 3], fb: 'Kennedy names \'hotels, restaurants, theatres, retail stores and similar establishments\'. Libraries and pools, though segregated too, are not in his list here.'},
  {id: 'q14', src: '3D', num: '3.4.4', m: 1, t: 'Name the legislation in the source that outlawed racial segregation in public facilities and employment in 1964.', lv: 1, ll: 'Extraction', opts: ['The Civil Rights Act of 1964', 'The Voting Rights Act of 1965', 'The Alvor Accord of 1975', 'The Marshall Plan of 1947'], c: 0, fb: 'The source names the Civil Rights Act of 1964. The other options are unrelated pieces of legislation or agreements.'},
  {id: 'q15', src: '3D', num: '3.4.5a', m: 2, t: 'Using the source and your own knowledge, explain why McCain felt that sitting on the stool on 1 February 1960 was \'most relieving\'.', lv: 2, ll: 'Interpretation', opts: ['He felt relief at finally standing up against segregation by sitting where he had been forbidden to sit.', 'He felt relief because the waitress had happily served him at the counter.', 'He felt relief that the protest had been officially cancelled.', 'He felt relief because sitting down let him rest his tired legs.'], c: 0, fb: 'The relief came from breaking the chains of segregation by sitting where he was banned. The other options trivialise or reverse the moment.'},
  {id: 'q16', src: '3D', num: '3.4.5b', m: 2, t: 'Using the source and your own knowledge, explain why McCain felt it was the \'most cleansing feeling that I ever felt\'.', lv: 2, ll: 'Interpretation', opts: ['He felt his dignity restored, cleansed of the stigma of being treated as inferior and unclean.', 'He felt clean because the lunch counter had just been washed down.', 'He felt cleansed because he had finally given up on the protest.', 'He felt clean because he had had a wash before entering the store.'], c: 0, fb: 'The \'cleansing\' feeling was his dignity restored after the stigma of being treated as inferior. The other options take the word literally.'},
  {id: 'q17', src: 'compare', num: '3.5', m: 4, t: 'Compare Sources 3A and 3D. Explain how the information in Source 3A SUPPORTS the evidence in Source 3D regarding the non-violent protest to desegregate facilities.', lv: 3, ll: 'Comparison', opts: ['3A shows the sit-ins spreading rapidly and 3D shows their result, as lunch counters were integrated and the Civil Rights Act followed.', 'They contradict each other: 3A says the sit-ins failed while 3D says they never happened.', 'Both show that the sit-ins made no difference to segregation at all.', '3A supports 3D by proving that the sit-ins were violent, armed protests.'], c: 0, fb: '3A shows the sit-ins growing and 3D shows their success in integrating facilities, so 3A supports 3D. The other options contradict or misread the sources.'},
  {id: 'q18', src: 'para', num: '3.6a', m: 2, t: 'Choose the best topic sentence for a paragraph explaining how different forms of sit-ins contributed to desegregating public facilities in the USA.', lv: 3, ll: 'Synthesis', opts: ['The sit-ins and their many offshoots pressured businesses and government to desegregate public facilities across the USA.', 'The first sit-in took place at a Woolworths lunch counter in Greensboro in 1960.', 'Joseph Jackson Jr was the leader of a group known as the Tougaloo Nine.', 'A swim-in took place at Pullen Park\'s swimming pool in Raleigh in 1962.'], c: 0, fb: 'A topic sentence must answer the question and set up an argument. Only the first links the sit-ins to desegregation. The others are facts or examples.'},
  {id: 'q19', src: 'para', num: '3.6b', m: 2, t: 'Which piece of source evidence best supports the topic sentence about the sit-ins forcing desegregation?', lv: 3, ll: 'Synthesis', opts: ['Source 3D shows the Greensboro counter integrating after lost business and lunch counters desegregating across the South.', 'Source 3A notes that the book Freedom\'s Daughters was written by L Olson.', 'Source 3B was an interview published in the Orange County Weekly in 2015.', 'Source 3C was accessed from the davidcecelski website in August 2021.'], c: 0, fb: 'Good evidence connects to the claim. Source 3D shows the sit-ins forcing desegregation. The others are publication details.'},
  {id: 'q20', src: 'para', num: '3.6c', m: 2, t: 'Which piece of your own knowledge best strengthens the argument about the sit-ins?', lv: 3, ll: 'Synthesis', opts: ['The sit-ins inspired read-ins, wade-ins and swim-ins and helped bring about the Civil Rights Act of 1964.', 'The Berlin Wall was built in 1961 to stop East Germans from fleeing westward.', 'Angola gained its independence from Portuguese colonial rule in the year 1975.', 'The United Nations was founded in 1945 to help maintain international peace.'], c: 0, fb: 'Own knowledge must fit the topic. The spread to other \'ins\' and the Civil Rights Act show the sit-ins\' impact. The others belong to different topics.'},
  {id: 'q21', src: 'para', num: '3.6d', m: 2, t: 'Choose the best concluding sentence that synthesises the paragraph\'s argument.', lv: 3, ll: 'Synthesis', opts: ['In this way, non-violent sit-ins broke down segregation and helped win legal equality in public facilities.', 'Therefore, the sit-ins had no effect on segregation in the United States.', 'As a result, segregation of public facilities became even stricter than before.', 'This shows that the sit-ins were mainly a violent and destructive campaign.'], c: 0, fb: 'A conclusion should draw the argument together. The first ties the sit-ins to breaking segregation and winning legal equality. The others contradict the evidence.'},
];

const MTA_ANSWERS = [
  {label: 'Answer A', text: 'The sit-ins helped to end segregation of public facilities in the USA. In 1960 four students sat at a lunch counter in Greensboro and would not move. Soon many more students joined in. Source 3D says the manager gave in and served black customers. There were also other protests like swim-ins. Because of the sit-ins, some places were desegregated.', expLv: 0, expM: '?-5', crit: [{q: 'Does it have a clear topic sentence addressing the question?', cor: 'partial', exp: 'It says the sit-ins \'helped to end segregation\' but does not clearly frame how the different forms achieved this.'}, {q: 'Does it use specific evidence from the sources?', cor: 'partial', exp: 'It mentions the Greensboro manager from 3D but only loosely, without the lost-business or Civil Rights Act detail.'}, {q: 'Does it include own knowledge beyond the sources?', cor: 'no', exp: 'It stays close to the sources; the swim-in mention comes from 3C rather than outside knowledge like the Civil Rights Act.'}, {q: 'Does it explain WHY (analysis), not just WHAT (description)?', cor: 'no', exp: 'It describes events rather than analysing how the pressure forced desegregation.'}, {q: 'Does it have a concluding sentence that synthesises?', cor: 'partial', exp: 'The last line says some places were desegregated but does not pull the argument together.'}, {q: 'Is it a coherent paragraph, not a list of disconnected sentences?', cor: 'yes', exp: 'The sentences follow on from one another and read as a connected paragraph.'}]},
  {label: 'Answer B', text: 'Different forms of sit-ins steadily forced the desegregation of public facilities in the USA during the 1960s. As Source 3A shows, the Greensboro sit-in of February 1960 spread within weeks to more than a thousand and then fifty thousand protestors across the South. Source 3D shows the result: the Woolworths manager, having lost $150 000 in business, finally served black customers, and lunch counters were integrated in many cities. The tactic branched into read-ins, like the Tougaloo Nine\'s library protest in Source 3B, and swim-ins, like the one in Source 3C. Beyond the sources, this sustained non-violent pressure helped galvanise the Civil Rights Act of 1964, which outlawed segregation in public facilities. In this way, non-violent sit-ins broke down segregation and helped win legal equality.', expLv: 0, expM: '?-8', crit: [{q: 'Does it have a clear topic sentence addressing the question?', cor: 'yes', exp: 'The first sentence states directly that the sit-ins forced desegregation of public facilities.'}, {q: 'Does it use specific evidence from the sources?', cor: 'yes', exp: 'It uses Source 3A (the spread), 3D (the manager and integration), 3B and 3C (read-ins and swim-ins) with real detail.'}, {q: 'Does it include own knowledge beyond the sources?', cor: 'yes', exp: 'It adds the Civil Rights Act of 1964 as the wider legislative outcome.'}, {q: 'Does it explain WHY (analysis), not just WHAT (description)?', cor: 'yes', exp: 'It explains how sustained non-violent pressure forced businesses and government to act.'}, {q: 'Does it have a concluding sentence that synthesises?', cor: 'yes', exp: 'The closing sentence ties the sit-ins to breaking segregation and winning legal equality.'}, {q: 'Is it a coherent paragraph, not a list of disconnected sentences?', cor: 'yes', exp: 'It flows logically from claim to evidence to own knowledge to conclusion.'}]},
];

/* ═══ KULA LEARN BRIDGE ═══
   Reports results to a parent Kula Learn page via postMessage.
   See project doc: Kula_Revise_results_payload_spec.md (spec v1).
   KR_META is injected by build.py from paper.json meta. The bridge is
   inert unless (a) identity fields are present, (b) the page is inside
   an iframe, and (c) the host origin was passed as ?host=<origin>.   */
const KR_META = {interactiveId: 'history-p1-2021-nov-q3', paper: 'P1', section: 'A', questionNumber: 3, paperRef: 'DBE November 2021'};
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
