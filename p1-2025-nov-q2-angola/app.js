/* ═══════════════════════════════════════════════════════════════
   DATA BLOCK — replaced by build.py from a content JSON file.
   The build script reads a content payload (see references/content-schema.md)
   and substitutes this entire comment block with:
     const SRC = { ... };
     const QS = [ ... ];
     const MTA_ANSWERS = [ ... ];
   ═══════════════════════════════════════════════════════════════ */
const SRC = {
  '2A': {
    label: 'Source 2A',
    type: 'Historical Article',
    html: `<div class="sp-body">The United States of America (USA) did not want the Popular Movement for the Liberation of Angola (MPLA) to gain control of Angola, and under the direction of the Secretary of State, Henry Kissinger, Central Intelligence Agency (CIA) operations in Angola gained serious ground in 1975. Provisions for United States involvement in Africa were intentionally vague and stated that CIA involvement in Africa was to be a provision of material, support and advice to create a stable climate in newly independent African countries, leaving out the mention of Angola specifically. With this flexibility, the CIA provided over 22 million dollars in covert support to the National Liberation Front of Angola (FNLA) and the National Union for the Total Liberation of Angola (UNITA) by the fall of 1975.<br><br>Beyond monetary aid for the FNLA and UNITA, Kissinger's plans for Angola culminated (ended) into the covert CIA Operation known as IAFEATURE. IAFEATURE was in place to secretly launch a paramilitary programme against the MPLA under the CIA, and was kept top secret so that it did not have to be explained to the public in the aftermath of the recent failure in Vietnam. On the flipside of the defeat in Vietnam, Kissinger wanted to redeem American foreign policy from this failure and saw Angola as the place to do it; he wanted to prove that the United States was still the global world power.</div>`,
    attr: 'From Kissinger in Angola: The Influence of Personality on Foreign Policy (Working Paper) by M Guta'
  },
  '2B': {
    label: 'Source 2B',
    type: 'Historical Account',
    html: `<div class="sp-body">The US had poured uncounted millions of dollars into the bottomless pit of Mobutu's corrupt military dictatorship over the previous ten years. It was a case of buying popularity to ward off the possibility of Soviet influence making inroads into Zaire. Gratitude by Mobutu was never a factor in their diplomatic relations and when world copper prices plunged (fell) in early 1975 &hellip; Mobutu turned on his benefactors. In June 1975 he accused the US of backing a coup to topple him. He expelled the US ambassador &hellip; The US State Department, headed by the Secretary of State, Henry Kissinger, anxious to get back in Mobutu's favour, decided to enhance its support of his Angolan policy by lending weight to the FNLA's cause.<br><br>CIA Director, William Colby, told the National Security Council he needed $100 million to ensure that Holden Roberto (FNLA leader) won, but this was too large a sum to keep secret, so only $41,7 million was authorised. The CIA's task seemingly was not to win but to prevent an easy victory for the Soviet-backed forces. The result, it was hoped, would be that both the FNLA and UNITA would gain a major say in any future Angolan government &hellip; The operation was to provide material, support and advice to moderate nationalist movements to enable them to create a stable climate to allow genuine self-determination in newly emerging African states. It did not mention Angola, supposedly because this was only to be mentioned by the Director of the CIA in his verbal briefings.</div>`,
    attr: 'From The Silent War: South African Recce Operations 1969&ndash;1994 by P Stiff'
  },
  '2C': {
    label: 'Source 2C',
    type: 'Interview Extract',
    html: `<div class="sp-body"><strong>PIERO GLEIJESES:</strong> What was your opinion about the CIA covert action programme code, named IAFEATURE?<br><br><strong>ROBERT W HULTSLANDER:</strong> Simply put, I was opposed to the covert action programme in Angola because I was convinced it would not succeed, and would badly damage our ability to work in the future with moderate elements throughout Africa. We were not prepared to spend the necessary resources to assure victory. Or more fairly put, we should have realised that our adversaries (enemies) &ndash; Moscow and Havana &ndash; were more determined and much better positioned than we. And, they did not have a hostile Congress controlling the purse strings. Kissinger was determined to challenge the Soviet Union, although no vital US interests were at stake.<br><br>Instead of working with the moderate elements in Angola, which I believe we could have found within the MPLA, we supported the radical, tribal, 'anti-Soviet right'. You write that, 'Kissinger feared that an MPLA victory would have destabilising (disrupting) effects throughout southern Africa.' Of course, the opposite proved true; it was our policies which caused the 'destabilisation'. […]<br><br>I did my best to argue the US policy position and defend the covert action programme during my all-night session with [Senator] Clark at Killoran's Luanda residence. My heart was not in it, however, and I finally admitted that I personally thought our support of Roberto and Savimbi would prove disastrous. This position, as you can imagine, caused me problems with my own superiors, and infuriated (angered) Kissinger.</div>`,
    attr: 'From Conflicting Missions: Washington, Havana, Africa 1959&ndash;1976 by P Gleijeses (2002). Interview with R W Hultslander, last CIA Station Chief in Luanda.'
  },
  '2D': {
    label: 'Source 2D',
    type: 'Political Cartoon',
    html: `<img class="sp-img" src="2D.png" alt="A cartoon of three figures. In the centre a tall man in glasses wears a suit covered in stars (labelled Kissinger). He stands between two smaller figures with raised fists, one on the left (labelled MPLA) and one on the right (labelled UNITA). Behind his back the central figure reaches towards an open crate filled with weapons, including bombs, grenades and a knife."><div class="sp-body" style="margin-top:12px;">Kissinger's speech bubble: '&hellip; and my country as a party involved in the mediation of the conflict, promises to do everything to bring it to a definitive end.'</div>`,
    attr: 'From Angola & Cartoons Towards the Year 2000 by L Silva, 1993. Cartoon depicting Henry Kissinger.'
  },
  'compare': {
    label: 'Sources 2A + 2D',
    type: 'Comparison',
    html: `<div class="sp-body"><strong>Source 2A</strong> describes how the USA, under Kissinger, secretly funnelled over 22 million dollars and ran the covert IAFEATURE operation to back the FNLA and UNITA against the MPLA.<br><br><strong>Source 2D</strong> pictures Kissinger claiming to 'mediate' between the MPLA and UNITA while secretly reaching for a crate of weapons, suggesting the USA was fuelling the conflict rather than ending it.</div>`,
    attr: 'Compare the described covert backing in 2A with the visual message in 2D.'
  },
  'para': {
    label: 'Paragraph Task',
    type: 'Q2.6, 8 marks',
    html: `<div class="sp-body">Now build an eight-mark paragraph answering the guiding question: <em>Why did the United States of America (USA) become involved in the Angolan Civil War from 1975?</em><br><br>Work through it in four steps &ndash; a topic sentence, evidence from the sources, your own knowledge, and a synthesising conclusion. Choose the strongest option at each step.</div>`,
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
  {id: 'q1', src: '2A', num: '2.1.1', m: 1, t: 'Which country, according to the source, did not want the MPLA to gain control of Angola?', lv: 1, ll: 'Extraction', opts: ['The United States of America (USA)', 'The Soviet Union (USSR)', 'Cuba', 'Portugal'], c: 0, fb: 'The source opens by stating the USA \'did not want the Popular Movement for the Liberation of Angola (MPLA) to gain control of Angola\'. The USSR and Cuba in fact backed the MPLA, and Portugal was the departing colonial power.'},
  {id: 'q2', src: '2A', num: '2.1.2', m: 3, t: 'Name THREE provisions in the source for the Central Intelligence Agency\'s (CIA) involvement in Africa. Choose THREE responses.', lv: 1, ll: 'Extraction', multi: true, mx: 3, opts: ['Material', 'Support', 'Advice', 'Combat troops', 'Nuclear technology', 'Naval blockades'], c: [0, 1, 2], fb: 'The source states CIA involvement in Africa \'was to be a provision of material, support and advice to create a stable climate in newly independent African countries\'. Those are the three provisions; troops, nuclear technology and blockades are not mentioned.'},
  {id: 'q3', src: '2A', num: '2.1.3', m: 4, t: 'Using the information in the source and your own knowledge, explain why you think it was necessary for the CIA to covertly support FNLA and UNITA in 1975.', lv: 2, ll: 'Interpretation', opts: ['Open support would have been politically impossible so soon after the Vietnam defeat, so secrecy let the USA oppose the Soviet-backed MPLA without public accountability.', 'The American public and Congress strongly wanted another large overseas war and were demanding open US involvement in the Angolan conflict.', 'The FNLA and UNITA were the largest and most popular movements and were certain to win the war without any outside help at all.', 'The United Nations had formally ordered the USA to intervene openly in Angola on behalf of the Soviet-backed MPLA forces.'], c: 0, fb: 'Coming straight after Vietnam, open intervention was politically toxic, so covert backing let the USA counter the Soviet-backed MPLA while avoiding public explanation, as the source notes about IAFEATURE being kept secret. The other options reverse the public mood or invent a UN order.'},
  {id: 'q4', src: '2A', num: '2.1.4', m: 4, t: 'Explain the limitations of this source to a researcher studying the role of the MPLA in Angola.', lv: 3, ll: 'Reliability', opts: ['It focuses on US and CIA actions and Kissinger\'s motives, so it tells us little directly about the MPLA\'s own aims, leadership or base of support.', 'It is limited because it was written in Portuguese and then translated, so the meaning of the MPLA\'s stated policies may have been lost.', 'It is limited because it gives detailed MPLA membership statistics that cannot be checked or verified against any other source.', 'It is limited because it was written before 1975 and therefore could not describe the MPLA\'s actual role in the civil war.'], c: 0, fb: 'The genuine limitation for studying the MPLA is that the source is about American motives and CIA operations, viewing the MPLA only as a target, so it reveals little about the MPLA itself. The other options invent a translation problem, statistics or an impossible date.'},
  {id: 'q5', src: '2B', num: '2.2.1', m: 1, t: 'Quote evidence from the source that suggests Mobutu was supported with millions of dollars.', lv: 1, ll: 'Extraction', opts: ['\'The US had poured uncounted millions of dollars into the bottomless pit of Mobutu\'s ... dictatorship\'.', '\'Mobutu turned on his benefactors\' when world copper prices plunged in early 1975.', '\'In June 1975 he accused the US of backing a coup to topple him\'.', '\'He expelled the US ambassador\' from Zaire during the year 1975.'], c: 0, fb: 'The evidence of dollar support is \'The US had poured uncounted millions of dollars into the bottomless pit of Mobutu\'s ... dictatorship\'. The other quotes describe Mobutu turning against the USA, not being funded by it.'},
  {id: 'q6', src: '2B', num: '2.2.2', m: 2, t: 'What, according to the source, did Mobutu do when world copper prices plunged in early 1975? Choose TWO responses.', lv: 1, ll: 'Extraction', multi: true, mx: 2, opts: ['He accused the US of backing a coup to topple him', 'He expelled the US ambassador', 'He returned all the American aid money he had received', 'He publicly declared his support for the Soviet Union', 'He sent his own troops to fight alongside the MPLA'], c: [0, 1], fb: 'The source says Mobutu \'turned on his benefactors\', accusing the US of backing a coup and expelling the US ambassador. The other options are not stated in the source.'},
  {id: 'q7', src: '2B', num: '2.2.3', m: 1, t: 'Why, according to the source, was only $41,7 million and not $100 million authorised by the National Security Council to ensure that Holden Roberto won the Angolan Civil War?', lv: 1, ll: 'Extraction', opts: ['Because $100 million was too large a sum to keep secret.', 'Because the CIA had already spent the rest of the money in Vietnam.', 'Because Holden Roberto refused to accept the full amount offered.', 'Because Congress had banned all funding to the FNLA movement.'], c: 0, fb: 'The source states the $100 million \'was too large a sum to keep secret, so only $41,7 million was authorised\'. The other options are not given as the reason.'},
  {id: 'q8', src: '2B', num: '2.2.4', m: 2, t: 'Comment on what is implied by the statement, \'The CIA\'s task seemingly was not to win but to prevent an easy victory for the Soviet-backed forces.\'', lv: 2, ll: 'Interpretation', opts: ['It implies the USA\'s real aim was not outright victory but to block a quick MPLA win, keeping the Soviet-backed side from dominating Angola.', 'It implies the CIA was fully confident the FNLA and UNITA would easily win the war without needing much American help.', 'It implies the USA actually wanted the Soviet-backed MPLA to win in order to avoid a long and very costly war.', 'It implies the CIA had already given up entirely and withdrawn all of its support from the Angolan conflict.'], c: 0, fb: 'The aim was to deny the MPLA a quick win rather than to secure outright victory, keeping the Soviet-backed side in check. The other options reverse the meaning or claim the CIA had withdrawn.'},
  {id: 'q9', src: '2B', num: '2.2.5', m: 2, t: 'Define the term self-determination in your own words.', lv: 1, ll: 'Concept', opts: ['The right of a people or nation to decide its own government and future without outside interference.', 'The policy of one superpower controlling the economy and government of a smaller allied state.', 'A military strategy of using covert operations to influence the outcome of a foreign war.', 'The process by which a colonial power gradually hands its weapons to a liberation movement.'], c: 0, fb: 'Self-determination is a people\'s right to choose their own government and future free of outside control. The other options describe domination, covert strategy or disarmament, not self-determination.'},
  {id: 'q10', src: '2C', num: '2.3.1', m: 2, t: 'Quote any TWO pieces of evidence from the source that explain why Hultslander was opposed to covert operation programmes in Angola. Choose TWO responses.', lv: 1, ll: 'Extraction', multi: true, mx: 2, opts: ['He was convinced it would not succeed', 'It would badly damage the ability to work with moderate elements in Africa', 'It would improve US relations with the Soviet Union', 'It would cost the CIA its Congress funding', 'It would expose American secret agents to the Angolan public'], c: [0, 1], fb: 'Hultslander says he was opposed \'because I was convinced it would not succeed, and would badly damage our ability to work in the future with moderate elements throughout Africa\'. The other options are not his stated reasons.'},
  {id: 'q11', src: '2C', num: '2.3.2', m: 2, t: 'Explain the term covert action in the context of the CIA programme in Angola.', lv: 2, ll: 'Concept', opts: ['Secret operations, like funding and arming the FNLA and UNITA, kept hidden so the US role could be officially denied.', 'Open military action in which United States troops publicly fought alongside the MPLA in the Angolan Civil War.', 'A public diplomatic mission by Kissinger to openly negotiate a lasting peace between the rival Angolan movements.', 'An economic aid programme announced openly to help rebuild Angola after it gained its independence.'], c: 0, fb: 'Covert action means secret operations, here funding and arming the FNLA and UNITA, designed so the US role stays hidden and deniable. The other options describe open military, diplomatic or aid actions, which are the opposite of covert.'},
  {id: 'q12', src: '2C', num: '2.3.3', m: 4, t: 'Comment on what was implied by the statement, \'Kissinger feared that an MPLA victory would have destabilising (disrupting) effects throughout southern Africa\', in the context of US involvement in Angola.', lv: 2, ll: 'Interpretation', opts: ['It implies the USA justified its involvement by claiming an MPLA win would spread instability and Soviet influence across the region, giving a reason to intervene.', 'It implies Kissinger actually welcomed an MPLA victory because it would bring lasting peace and stability to the whole of southern Africa.', 'It implies the USA had no real interest in southern Africa and firmly planned to stay out of the Angolan conflict altogether.', 'It implies the southern African states had asked the Soviet Union, and not the USA, to intervene directly in Angola.'], c: 0, fb: 'Kissinger\'s fear framed an MPLA win as a regional threat that would spread Soviet influence, which was used to justify American intervention. The other options reverse his position or deny US interest.'},
  {id: 'q13', src: '2C', num: '2.3.4', m: 2, t: 'What, according to the source, did Hultslander do during his all-night session with [Senator] Clark at Killoran\'s Luanda residence? Choose TWO responses.', lv: 1, ll: 'Extraction', multi: true, mx: 2, opts: ['He argued the US policy position and defended the covert action programme', 'He finally admitted he thought the support of Roberto and Savimbi would prove disastrous', 'He resigned from his post as CIA Station Chief in protest', 'He handed Senator Clark a full list of all CIA agents in Angola', 'He persuaded Kissinger to bring the covert programme to an end'], c: [0, 1], fb: 'Hultslander says he \'did my best to argue the US policy position and defend the covert action programme\' but \'finally admitted that I personally thought our support of Roberto and Savimbi would prove disastrous\'. The other options are not stated.'},
  {id: 'q14', src: '2D', num: '2.4.1', m: 4, t: 'Comment on why you would NOT agree with Kissinger\'s statement, \'… and my country as a party involved in the mediation of the conflict, promises to do everything to bring it to a definitive end.\'', lv: 2, ll: 'Interpretation', opts: ['The cartoon shows Kissinger reaching for weapons behind his back while claiming to mediate, so the USA was arming a side, not ending it.', 'Because Kissinger genuinely brought the MPLA and UNITA together and successfully ended the Angolan Civil War during 1975.', 'Because the cartoon shows Kissinger refusing to take any side at all and staying completely neutral throughout the conflict.', 'Because the USA openly announced all of its weapons shipments and so was being fully honest about its mediation role.'], c: 0, fb: 'The cartoon undercuts the \'mediation\' claim: Kissinger reaches for weapons behind his back, so the USA is secretly arming a side and fuelling the war rather than ending it. The other options take the claim at face value or misread the cartoon as neutral or honest.'},
  {id: 'q15', src: '2D', num: '2.4.2(a)', m: 2, t: 'What conclusion can be drawn from the cartoonist\'s portrayal of the MPLA regarding its relations with the USA?', lv: 2, ll: 'Interpretation', opts: ['That the MPLA was an opponent the USA secretly worked against, rather than a genuine partner in mediation.', 'That the MPLA was a close and trusted ally of the USA throughout the Angolan conflict.', 'That the MPLA and the USA had no contact or relationship of any kind during the war.', 'That the USA openly and honestly gave its full support to the MPLA against UNITA.'], c: 0, fb: 'The cartoon presents the MPLA as the side the USA works against while only posing as a mediator, so their relationship is hostile. The other options wrongly cast the MPLA as an ally or claim no relationship.'},
  {id: 'q16', src: '2D', num: '2.4.2(b)', m: 2, t: 'What conclusion can be drawn from the cartoonist\'s portrayal of UNITA regarding its relations with the USA?', lv: 2, ll: 'Interpretation', opts: ['That UNITA was secretly favoured and armed by the USA, which supplied weapons while posing as a neutral mediator.', 'That UNITA was an enemy of the USA that the Americans were secretly trying to defeat in the war.', 'That UNITA refused all American help and fought the Angolan war entirely on its own.', 'That the USA treated UNITA and the MPLA in exactly the same even-handed and neutral way.'], c: 0, fb: 'The cartoon shows Kissinger secretly reaching for weapons on UNITA\'s side, implying the USA covertly armed and favoured it. The other options reverse this or claim even-handed treatment.'},
  {id: 'q17', src: 'compare', num: '2.5', m: 4, t: 'Refer to Sources 2A and 2D. Comment on how the information in Source 2A supports the evidence in Source 2D regarding the involvement of the USA in the Angolan Civil War.', lv: 3, ll: 'Comparison', opts: ['Both show the USA secretly backing one side: 2A describes the CIA\'s covert millions to the FNLA and UNITA, while 2D shows Kissinger arming a side while posing as mediator.', 'They contradict each other: 2A says the USA stayed completely out of Angola, while 2D shows the USA deeply involved in directing the fighting there.', 'Both show the USA acting openly and honestly as a genuine, neutral peacemaker between the MPLA and UNITA forces in the conflict.', '2A supports 2D by showing that the USA secretly gave all of its covert funding directly to the Soviet-backed MPLA movement.'], c: 0, fb: 'Both sources show the USA covertly backing a side while claiming otherwise: 2A gives the CIA\'s secret millions to the FNLA and UNITA, and 2D shows Kissinger arming a side behind a mediator\'s mask. They reinforce each other; they do not contradict, show neutrality, or point to US funding of the MPLA.'},
  {id: 'q18', src: 'para', num: '2.6a', m: 2, t: 'Choose the best topic sentence for a paragraph explaining why the USA became involved in the Angolan Civil War from 1975.', lv: 3, ll: 'Synthesis', opts: ['The USA became involved in Angola from 1975 mainly to contain Soviet influence by backing the FNLA and UNITA.', 'Angola is a large country that lies on the south-western coast of the continent of Africa.', 'Henry Kissinger served as the Secretary of State of the United States during the 1970s.', 'There were several different liberation movements fighting one another in Angola during the 1970s.'], c: 0, fb: 'A topic sentence must answer the question and set up an argument. Only the first names the reason for US involvement. The others are true or vague background statements that do not explain why the USA got involved.'},
  {id: 'q19', src: 'para', num: '2.6b', m: 2, t: 'Which piece of source evidence best supports the topic sentence about US involvement in Angola?', lv: 3, ll: 'Synthesis', opts: ['Source 2A states the CIA gave over 22 million dollars in covert support to the FNLA and UNITA.', 'Source 2C mentions that the interview with Hultslander was published in a book in the year 2002.', 'Source 2B notes that Mobutu expelled the United States ambassador from Zaire in June 1975.', 'Source 2D was drawn by a Portuguese cartoonist named L Silva in the year 1993.'], c: 0, fb: 'Good evidence connects directly to the claim. Source 2A ties US involvement to covert funding of the FNLA and UNITA against the MPLA. The other options are true but are publication details or off-point facts.'},
  {id: 'q20', src: 'para', num: '2.6c', m: 2, t: 'Which piece of your own knowledge best strengthens the argument about why the USA got involved in Angola?', lv: 3, ll: 'Synthesis', opts: ['After its 1975 defeat in Vietnam, the USA wanted to prove it could still contain communism in Angola.', 'The Berlin Wall was built in 1961 to stop people from crossing between East and West Germany.', 'Nelson Mandela was released from prison in South Africa in the year 1990.', 'The United Nations was established in 1945 to help maintain international peace and security.'], c: 0, fb: 'Own knowledge must fit the year and the argument. The post-Vietnam drive to contain communism explains why the USA entered Angola. The other facts are true but belong to different times or topics.'},
  {id: 'q21', src: 'para', num: '2.6d', m: 2, t: 'Choose the best concluding sentence that synthesises the paragraph\'s argument.', lv: 3, ll: 'Synthesis', opts: ['Cold War rivalry and the wish to check Soviet and Cuban influence drew the USA into Angola from 1975.', 'Therefore, the USA had no real reason to become involved in the Angolan Civil War at all.', 'As a result, the MPLA and the USA became firm and lasting allies in the years after 1975.', 'This shows that the Angolan Civil War was only about local disputes with no outside involvement.'], c: 0, fb: 'A conclusion should draw the argument together. The first ties Cold War rivalry, containment and post-Vietnam pride into one explanation. The others contradict the evidence or deny outside involvement.'},
];

const MTA_ANSWERS = [
  {label: 'Answer A', text: 'The USA became involved in the Angolan Civil War because of the Cold War. America did not want the MPLA to win because it was supported by the Soviet Union. Source 2A says that the CIA gave money to the FNLA and UNITA. The USA was also worried about communism spreading in Africa. So it decided to get involved and to support the movements that were against the MPLA in the war.', expLv: 0, expM: '?-5', crit: [{q: 'Does it have a clear topic sentence addressing the question?', cor: 'partial', exp: 'It names the Cold War as the reason but does not clearly explain why that led the USA to become involved, so the topic is set up only loosely.'}, {q: 'Does it use specific evidence from the sources?', cor: 'partial', exp: 'It refers to Source 2A but only in general terms and does not develop the detail, such as the 22 million dollars or the covert IAFEATURE operation.'}, {q: 'Does it include own knowledge beyond the sources?', cor: 'no', exp: 'It stays inside the sources. There is no outside fact such as the Cuban troops, the Vietnam defeat or Kissinger\'s aim of proving US power.'}, {q: 'Does it explain WHY (analysis), not just WHAT (description)?', cor: 'no', exp: 'It mostly describes what the USA did and ends with \'so it decided to get involved\', without explaining why containment made involvement necessary.'}, {q: 'Does it have a concluding sentence that synthesises?', cor: 'partial', exp: 'The final sentence restates that the USA got involved but does not pull the reasons together into a clear synthesis.'}, {q: 'Is it a coherent paragraph, not a list of disconnected sentences?', cor: 'yes', exp: 'The sentences follow on from one another and read as a single connected paragraph rather than a disjointed list.'}]},
  {label: 'Answer B', text: 'The USA became involved in the Angolan Civil War from 1975 chiefly to contain Soviet and Cuban influence during the Cold War. Source 2A shows the CIA secretly provided over 22 million dollars to the FNLA and UNITA and ran the covert IAFEATURE operation to stop the Soviet-backed MPLA taking power. This mattered because, coming straight after the humiliating defeat in Vietnam, Kissinger wanted to prove the USA was still the leading global power, as the source explains. Beyond the sources, Cuba\'s decision to send thousands of troops to support the MPLA turned Angola into a direct Cold War contest. In response, the USA backed the rival movements to prevent an easy communist victory. American involvement was therefore driven by Cold War rivalry and wounded superpower pride rather than by Angola\'s own needs.', expLv: 0, expM: '?-8', crit: [{q: 'Does it have a clear topic sentence addressing the question?', cor: 'yes', exp: 'The first sentence states directly that the USA got involved chiefly to contain Soviet and Cuban influence, answering the question and setting up the argument.'}, {q: 'Does it use specific evidence from the sources?', cor: 'yes', exp: 'It draws specifically on Source 2A, the 22 million dollars and the covert IAFEATURE operation aimed at the Soviet-backed MPLA.'}, {q: 'Does it include own knowledge beyond the sources?', cor: 'yes', exp: 'It brings in Cuba sending thousands of troops to back the MPLA, an accurate fact from beyond the sources that fits the argument.'}, {q: 'Does it explain WHY (analysis), not just WHAT (description)?', cor: 'yes', exp: 'It explains why involvement followed, the post-Vietnam wish to prove US power and the need to deny the MPLA an easy win, moving beyond description.'}, {q: 'Does it have a concluding sentence that synthesises?', cor: 'yes', exp: 'The closing sentence ties Cold War rivalry and wounded superpower pride together to explain the involvement.'}, {q: 'Is it a coherent paragraph, not a list of disconnected sentences?', cor: 'yes', exp: 'The paragraph flows logically from claim to evidence to own knowledge to conclusion, reading as a sustained argument.'}]},
];

/* ═══ KULA LEARN BRIDGE ═══
   Reports results to a parent Kula Learn page via postMessage.
   See project doc: Kula_Revise_results_payload_spec.md (spec v1).
   KR_META is injected by build.py from paper.json meta. The bridge is
   inert unless (a) identity fields are present, (b) the page is inside
   an iframe, and (c) the host origin was passed as ?host=<origin>.   */
const KR_META = {interactiveId: 'history-p1-2025-nov-q2', paper: 'P1', section: 'A', questionNumber: 2, paperRef: 'DBE November 2025'};
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
    ${p >= 70 ? `<div style="margin-top:1.5rem;padding:1.2rem;background:linear-gradient(135deg,#1B4F72,#2E86C1);border-radius:6px;text-align:center"><div style="font-size:.7rem;text-transform:uppercase;letter-spacing:.25em;color:#D4A745;font-weight:700;margin-bottom:.4rem">★ Bonus Section Unlocked</div><div style="color:#fff;font-size:.95rem;margin-bottom:.8rem">You scored ${p}%. Well done! You've unlocked the <strong>Mark This Answer</strong> bonus section. Evaluate two paragraph answers to earn up to 12 bonus marks.</div><button class="bs" style="background:#D4A745;color:#1C2733" onclick="goMTA()">Start Bonus Section →</button></div>` : `<div style="margin-top:1rem;padding:1rem;background:var(--frost);border:1px solid var(--bdr);border-radius:4px"><div style="font-size:.82rem;color:var(--txt2)"><strong>Bonus section locked.</strong> Score 70% or higher to unlock the Mark This Answer bonus section, where you can earn up to 12 extra marks by evaluating sample paragraph answers.</div></div>`}
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
    const bd2 = overlay.querySelector('.sm-bd');
    if (bd2) {
        const hint = document.createElement('div');
        hint.className = 'kbd-hint';
        hint.innerHTML = 'Tip: use <kbd>1</kbd>–<kbd>9</kbd> to choose options, <kbd>Enter</kbd> to submit/next, <kbd>←</kbd>/<kbd>→</kbd> to navigate.';
        bd2.appendChild(hint);
    }
}
)();

render();
