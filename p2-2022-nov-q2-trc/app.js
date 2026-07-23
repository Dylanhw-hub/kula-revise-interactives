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
    type: 'Speech Extract',
    html: `<div class="sp-body">The extract below has been taken from Archbishop Desmond Tutu's acceptance speech at the first public gathering of the Truth and Reconciliation Commission (TRC) at the City Hall in East London in the Eastern Cape, on 16 December 1995.<br><br>Everyone is aware that we have been assigned a delicate (tricky) task whose execution, successful or otherwise, will have critical and far-reaching consequences for our land and nation. It is an awesome (tremendous) responsibility. It is important to bear constantly in mind the title of the Act that has brought us into being &ndash; the Promotion of National Unity and Reconciliation.<br><br>Absolutely central to our concern in the work of our Commission is helping our land and people to achieve genuine, real and not cheap and spurious (false) reconciliation. Some view the Commission with considerable misgiving and indeed suspicion and even hostility because they have convinced themselves that the Commission is going to degenerate (decline) into an inquisition (investigation), a witch-hunt hell-bent on bringing miscreants (offenders) to book.<br><br>We must scotch (stop) that rumour or suspicion from the outset. We are meant to be a part of the process of the healing of our nation, of our people, all of us, since every South African has to some extent or other been traumatised (upset). We are a wounded people because of the conflict of the past, no matter on which side we stood. We all stand in need of healing.<br><br>We are privileged to be on this Commission to assist our land, our people to come to terms with our dark past once and for all. They say that those who suffer from amnesia (forgetfulness), those who forget the past, are doomed to repeat it.<br><br>That is why the truth is so central to this whole exercise. But we will be engaging in something that is ultimately deeply spiritual, deeply personal. That is why I have been appealing to all our people &ndash; this is not something just for the Commission alone. We are in it, all of us together, black and white, coloured and Indian.</div>`,
    attr: 'From The South African Institute of Race Relations &ndash; Race Relations Survey, 1990'
  },
  '2B': {
    label: 'Source 2B',
    type: 'Political Cartoon',
    html: `<div class="sp-body">The cartoon below was drawn by J Shapiro, 'Zapiro', for the Sowetan newspaper. It depicts Archbishop Desmond Tutu delivering the Truth and Reconciliation Commission's report to President Nelson Mandela on 29 October 1998.</div><img class="sp-img" src="2B.png" alt="Black-and-white political cartoon of a cowboy-style figure carrying a large parcel labelled 'TRUTH' and 'SPECIAL DELIVERY' through an open doorway marked 'SHERIFF MANDELA'. Several arrows and small flags bearing political-party initials strike the figure from all sides, and a speech bubble issues from the doorway.">`,
    attr: 'From Truth Drawn in Jest, Commentary on the Truth and Reconciliation Commission Through Cartoons by W Verwoerd and M Mabizela'
  },
  '2C': {
    label: 'Source 2C',
    type: 'Historical Article',
    html: `<div class="sp-body">This source by A Yates is taken from a special report titled 'Justice Delayed: The TRC Recommendations 20 Years Later'. It focuses on Advocate Ntsebeza's (one of the TRC commissioners) evaluation of the work of the TRC led by Archbishop Desmond Tutu, the chairperson of the TRC.<br><br>The TRC submitted around 300 perpetrators of human rights violations to prosecute. Until the recent National Prosecuting Authority (NPA) announcement to prosecute 15 cases from this list, there had been only one person found guilty of apartheid-era crimes, Eugene de Kock. The recent resurgence (revival) in TRC-related prosecutions is a welcome sign that this recommendation may be realised, albeit (although) slowly &hellip; The cases of Ahmed Timol, the Cradock Four, and others are currently being litigated (charged). Many hope that the 15 new cases taken on by the NPA will be the start to a long process of prosecuting the full list from the TRC report.<br><br>The TRC was successful in some of its aims. As Ntsebeza Dumisa (TRC commissioner) recalls with vivid (clear) detail, the simple act of having one's story publicly validated (confirmed), was a significant and meaningful step for all who were involved. Apartheid was an era in which proliferating (increasing) misinformation created a fabricated (false) narrative (story) both nationally and globally about the reality of what was happening in South Africa. It is reasonable to dream that in the wake of the absence of truth, public declarations of fact would not just be a restoration of personal dignity but would also be the first step towards national unity.<br><br>Ntsebeza Dumisa agrees that the international narrative that the TRC liberated South Africans of their past and resulted in a fairy-tale ending for a massive human rights struggle is false. The notion that, with Desmond Tutu at the helm (in control), Christian values prevailed, and forgiveness erased (removed) the trauma of 50 plus years of oppression, is also short-sighted.</div>`,
    attr: 'From Daily Maverick, 5 September 2018'
  },
  '2D': {
    label: 'Source 2D',
    type: 'Newspaper Editorial',
    html: `<div class="sp-body">The source below by the South African writer and political commentator, Sisonke Msimang, was published on 27 December 2021 in the Al Jazeera editorial. It was a tribute to Archbishop Tutu who passed away on 26 December 2021.<br><br>Tutu was neither made nor broken by the difficult exchanges that took place in the context of the Truth and Reconciliation Commission (TRC). He was a man with nothing to prove and he ran the commission with a deep sense of love and a commitment to truth-telling and forgiveness. This instinct (feeling) sometimes overshadowed (exceeded) his country's need for tangible (real) justice, for perpetrators to serve time behind bars and for victims to be provided the details of where their loved ones had been killed.<br><br>By focusing on the stories of the most obviously wounded &ndash; the relatives of the tortured and murdered &ndash; the commission missed an important opportunity to address the structural and systemic (whole) impact of apartheid. In other words, in spite of its harrowing (disturbing) stories and its scenes of spectacular grief, the TRC was never given a full mandate to address the group effects of apartheid &ndash; the loss of opportunity wrought (created) on generations of black people by naked racism.<br><br>The TRC handed a list of apartheid operatives (secret agents) who were thought to have been involved in killing anti-apartheid activists to the National Prosecuting Authority (NPA). In the two decades since then, the South African government has done nothing to bring those people to justice, nor has it ever agreed to address the question of redress (restore) and compensation for all the victims of apartheid. The fault for this does not lie with Desmond Tutu. To the contrary, his death reminds us of the unfinished business of the transition from apartheid to democracy. This was not his business &ndash; it is ours. The jaded (tired) among us would do well to heed (take note) the great man's words. With his trademark bluntness, Tutu said, 'If you want peace, you don't talk to your friends. You talk to your enemies.' This insistence on reaching out and across all sorts of divides was the key to his effectiveness.</div>`,
    attr: 'From Al Jazeera, 27 December 2021'
  },
  'compare': {
    label: 'Sources 2C + 2D',
    type: 'Comparison',
    html: `<div class="sp-body"><strong>Source 2C (extract):</strong> 'The TRC was successful in some of its aims &hellip; public declarations of fact would not just be a restoration of personal dignity but would also be the first step towards national unity.' The TRC submitted around 300 perpetrators to the NPA, of whom the NPA recently agreed to prosecute 15 cases.</div><div class="sp-body" style="margin-top:12px;"><strong>Source 2D (extract):</strong> 'The TRC handed a list of apartheid operatives &hellip; to the National Prosecuting Authority (NPA). In the two decades since then, the South African government has done nothing to bring those people to justice &hellip; The fault for this does not lie with Desmond Tutu.'</div>`,
    attr: 'Re-read both sources, then explain how the information in Source 2C supports the evidence in Source 2D.'
  },
  'para': {
    label: 'Paragraph Task',
    type: 'Q2.6 &middot; 8 marks',
    html: `<div class="sp-body">Using the information in the relevant sources and your own knowledge, write a paragraph of about EIGHT lines (about 80 words) explaining what South Africans can learn from the role played by Archbishop Desmond Tutu, chairperson of the Truth and Reconciliation Commission (TRC) from 1995 to 1998.<br><br>Build the paragraph in four steps: (a) a topic sentence, (b) evidence from the sources, (c) your own knowledge, and (d) a conclusion.</div>`,
    attr: 'Plan the 8-mark paragraph one step at a time.'
  },
  'mta': {
    label: 'Mark This Answer',
    type: 'Evaluative Task',
    html: `<div class="sp-body">Below are two sample answers to the 8-mark paragraph question on what South Africans can learn from Archbishop Tutu's role in the TRC. Read each one and judge it against the six marking criteria, then compare your verdict with the examiner's.</div>`,
    attr: 'Bonus round &middot; evaluate each answer against the rubric.'
  },
};

const QS = [
  {id: 'q1', src: '2A', num: '2.1.1', m: 1, t: 'Which Act, according to the source, brought the Truth and Reconciliation Commission into being?', lv: 1, ll: 'Extraction', opts: ['The Promotion of National Unity and Reconciliation Act', 'The Restitution of Land Rights Act', 'The Promotion of Access to Information Act', 'The Prevention of Public Violence and Intimidation Act'], c: 0, fb: 'Tutu names \'the title of the Act that has brought us into being – the Promotion of National Unity and Reconciliation\'. The other three are genuine South African Acts, but none of them established the TRC.'},
  {id: 'q2', src: '2A', num: '2.1.2', m: 2, t: 'What, according to Tutu, should remain absolutely central to the concerns of South Africans in \'the work of our Commission\' (TRC)?', lv: 1, ll: 'Extraction', opts: ['Helping the land and its people to achieve genuine, real reconciliation rather than a cheap and false one.', 'Bringing every apartheid-era offender before a court to be punished for the crimes that they committed.', 'Providing financial compensation and reparations to every single victim of apartheid without any delay.', 'Recording an accurate historical archive of apartheid\'s laws for future generations of scholars to study.'], c: 0, fb: 'The source says what is \'absolutely central\' is \'helping our land and people to achieve genuine, real and not cheap and spurious reconciliation\'. Tutu actually wanted to \'scotch\' the idea of the TRC as a punishing witch-hunt; compensation and archiving are not the central concern he names.'},
  {id: 'q3', src: '2A', num: '2.1.3', m: 4, t: 'Explain what Tutu meant by the statement, \'... no matter on which side we stood. We all stand in need of healing\', in the context of reconciliation and national unity.', lv: 2, ll: 'Interpretation', opts: ['Everyone in South Africa, whichever side of the conflict they were on, had been wounded by the past and needed healing for the nation to reconcile and unite.', 'Only the victims of apartheid, and not those who enforced it, were entitled to the healing and support that the new Commission would offer them.', 'Reconciliation could only ever happen once every single perpetrator had confessed in public and been formally forgiven, one by one, by their victims.', 'The wounds of apartheid were mainly economic, so healing really meant restoring all the wealth and land that had been taken from black South Africans.'], c: 0, fb: 'Tutu\'s point is inclusive: everyone, perpetrator and victim alike, was traumatised and needs healing. He is not restricting healing to victims, not making it conditional on mass confessions, and not reducing it to an economic question — he speaks of spiritual and emotional healing for all.'},
  {id: 'q4', src: '2B', num: '2.2.1', m: 4, t: 'Identify any FOUR political parties in the cartoon that attacked Tutu when he delivered the Truth and Reconciliation Commission\'s report to President Nelson Mandela on 29 October 1998.', lv: 1, ll: 'Extraction', multi: true, mx: 4, opts: ['National Party (NP)', 'Inkatha Freedom Party (IFP)', 'Pan Africanist Congress (PAC)', 'Freedom Front (FF)', 'Democratic Party (DP)', 'United Democratic Movement (UDM)'], c: [0, 1, 2, 3], fb: 'The arrows and flags \'attacking\' Tutu in the cartoon are labelled with party initials including NP, IFP, PAC and FF (and the ANC). The Democratic Party and the United Democratic Movement do not appear in the cartoon.'},
  {id: 'q5', src: '2B', num: '2.2.2', m: 4, t: 'Explain the messages conveyed in this cartoon regarding the final TRC report submitted to President Nelson Mandela on 29 October 1998.', lv: 2, ll: 'Interpretation', opts: ['Despite being attacked from all sides by political parties who felt implicated, Tutu still managed to deliver the completed TRC report to Mandela — a hard-won \'special delivery\'.', 'The cartoon suggests the TRC report was a complete failure that President Mandela ended up refusing to accept from Tutu at the door.', 'The cartoon shows that all of the political parties warmly welcomed and celebrated the TRC report at the moment it was finally handed over.', 'The cartoon depicts Tutu resigning as chairperson because the political parties had made his position on the Commission impossible to continue.'], c: 0, fb: 'The cartoon shows Tutu battered by arrows from many parties yet still delivering \'TRUTH\' as a \'special delivery\' — he was \'attacked from left, right and centre... but we made it\'. The report was completed, not refused or celebrated, and Tutu is delivering it, not resigning.'},
  {id: 'q6', src: '2B', num: '2.2.3', m: 4, t: 'Comment on the limitations of this source for a historian researching the submission of the final report of the Truth and Reconciliation Commission.', lv: 3, ll: 'Reliability', opts: ['Strength: it vividly captures how contested the report was; limitation: it is a cartoonist\'s (Zapiro\'s) subjective and exaggerated opinion, not a factual record of the submission.', 'Strength: as a published cartoon it must be factually accurate; limitation: it shows only Tutu\'s side of the event and leaves President Mandela out of the picture entirely.', 'Strength: it was drawn on the exact day of the submission; limitation: a cartoon can never contain any real historical information that a historian could use.', 'Strength: it names the attacking parties very precisely; limitation: because it criticises those parties it must therefore be biased in favour of the apartheid government.'], c: 0, fb: 'As a cartoon, its limitation is that it is Zapiro\'s exaggerated personal comment rather than a factual account — though it usefully captures how contested the report was. The distractors rest on false claims: \'published = accurate\', Mandela IS in the cartoon, cartoons can carry evidence, and criticising parties does not make it pro-apartheid.'},
  {id: 'q7', src: '2C', num: '2.3.1', m: 2, t: 'Define the concept perpetrator in your own words.', lv: 1, ll: 'Concept', opts: ['A person responsible for committing gross human rights violations, harming or dehumanising other people, often for political reasons.', 'A person who witnesses a crime being committed and then reports it to the authorities so that justice can be done.', 'A person who suffers harm, loss or injury as a direct result of another person\'s deliberate wrongful actions.', 'A person appointed to investigate human rights abuses and to recommend which cases should be taken to prosecution.'], c: 0, fb: 'A perpetrator is the one who commits the abuse — here, gross human rights violations. The other options describe a witness, a victim (the opposite of a perpetrator), and an investigator or commissioner respectively.'},
  {id: 'q8', src: '2C', num: '2.3.2', m: 2, t: 'Quote TWO pieces of evidence from the source to indicate that the NPA acted on the recommendations of the final TRC report.', lv: 1, ll: 'Extraction', multi: true, mx: 2, opts: ['\'The recent National Prosecuting Authority (NPA) announcement to prosecute 15 cases from this list\'', '\'The cases of Ahmed Timol, the Cradock Four, and others are currently being litigated\'', '\'The NPA paid full financial reparations to every family that was named in the TRC report\'', '\'The NPA granted a general amnesty to all the perpetrators who confessed to their crimes\''], c: [0, 1], fb: 'The source shows the NPA acting on the report through its \'announcement to prosecute 15 cases from this list\' and the fact that \'the cases of Ahmed Timol, the Cradock Four, and others are currently being litigated\'. It never mentions the NPA paying reparations or granting a general amnesty.'},
  {id: 'q9', src: '2C', num: '2.3.3', m: 2, t: 'Explain what Commissioner Ntsebeza meant by \'public declarations of fact would … be the first step towards national unity\', regarding the TRC hearings.', lv: 2, ll: 'Interpretation', opts: ['Publicly establishing the truth about apartheid crimes would restore victims\' dignity and correct the era\'s misinformation, laying the foundation for reconciliation and unity.', 'Making the hearings public would attract very large television audiences and so raise international awareness of the TRC\'s important work abroad.', 'National unity could only ever be achieved once every single fact had been proven in a court of law beyond reasonable doubt.', 'Publishing the facts would allow the new government to identify and then punish everyone who had ever opposed the apartheid state.'], c: 0, fb: 'Ntsebeza means that openly telling the truth would restore dignity and undo apartheid\'s \'fabricated narrative\', which is the starting point for unity. It is not about TV ratings, not about courtroom proof, and certainly not about hunting down opponents of apartheid.'},
  {id: 'q10', src: '2D', num: '2.4.1', m: 3, t: 'Quote any THREE statements made by Sisonke Msimang which paid tribute to Archbishop Tutu after he passed away on 26 December 2021.', lv: 1, ll: 'Extraction', multi: true, mx: 3, opts: ['\'He was a man with nothing to prove\'', '\'He ran the commission with a deep sense of love and a commitment to truth-telling and forgiveness\'', '\'This insistence on reaching out and across all sorts of divides was the key to his effectiveness\'', '\'He personally prosecuted the apartheid leaders behind the worst crimes\'', '\'He refused to forgive those who committed human rights violations\''], c: [0, 1, 2], fb: 'Msimang\'s tributes include that Tutu \'was a man with nothing to prove\', \'ran the commission with a deep sense of love and a commitment to truth-telling and forgiveness\', and that \'reaching out... across all sorts of divides was the key to his effectiveness\'. The other two options contradict the source — Tutu did not prosecute anyone, and he championed forgiveness.'},
  {id: 'q11', src: '2D', num: '2.4.2', m: 4, t: 'Using the information in the source and your own knowledge, comment on the statement, \'the TRC was never given a full mandate to address the group effects of apartheid\'.', lv: 2, ll: 'Interpretation', opts: ['The TRC investigated individual gross human rights violations but was not empowered to tackle apartheid\'s wider structural damage — the loss of land, education and opportunity across generations.', 'The TRC held public hearings right across the whole country and gave a great many victims the chance to come forward and tell their stories.', 'The statement means that the TRC ultimately failed because it granted amnesty to far too many of the perpetrators of serious political crimes.', 'The TRC was never given any legal powers at all and could therefore only make polite requests to the people who chose to testify.'], c: 0, fb: 'The TRC dealt with individual cases of violence, not the collective, structural harm apartheid did to black communities over generations — that is the \'group effects\' it could not address. It did hold nationwide hearings (option 2, true but off-point), but the statement is not about amnesty numbers, and the TRC did have real legal powers.'},
  {id: 'q12', src: '2D', num: '2.4.3', m: 2, t: 'Explain the term redress in the context of what the government wanted to achieve through the TRC.', lv: 2, ll: 'Concept', opts: ['Putting right past wrongs — restoring the dignity of those oppressed by apartheid through reparations, compensation and rehabilitation for their loss and trauma.', 'Dressing up the events of the apartheid past in a more positive light so that the whole nation could feel proud of itself again.', 'Punishing every perpetrator of apartheid-era crimes with a long prison sentence in order to deter any future abuses of power.', 'Returning the country to the exact same political and economic system that had existed in South Africa before apartheid ever began.'], c: 0, fb: 'Redress means setting right the injustices of the past — reparations, compensation and rehabilitation to restore victims\' dignity. It is not spin (\'dressing up\' the past), not pure punishment (that is retribution), and not turning the clock back to a pre-apartheid order.'},
  {id: 'q13', src: '2D', num: '2.4.4', m: 4, t: 'What did Msimang imply by \'his (Tutu\'s) death reminds us of the unfinished business of the transition from apartheid to democracy\'?', lv: 2, ll: 'Interpretation', opts: ['Tutu did his part, but the transition remains incomplete: the government has still not fully implemented the TRC\'s recommendations, prosecuted perpetrators or paid reparations.', 'Tutu\'s death was a great national loss, and the country should now hold a full state funeral in order to properly honour his memory.', 'The transition to democracy had actually failed altogether, so South Africa should scrap its constitution and restart the whole TRC process again.', 'Tutu had come to regret his work on the TRC and privately felt that reconciliation had been the wrong approach for the country.'], c: 0, fb: 'Msimang means the job Tutu began is not finished — the state still has not delivered justice, prosecutions or redress, and that responsibility now falls to the nation. The other options misread her: it is not a call for a funeral, not a claim the transition failed entirely, and not a suggestion Tutu regretted his work.'},
  {id: 'q14', src: 'compare', num: '2.5', m: 4, t: 'Refer to Sources 2C and 2D. Explain how the information in Source 2C supports the evidence in Source 2D regarding the work of the TRC.', lv: 3, ll: 'Comparison', opts: ['Both sources agree the TRC handed the NPA a list of perpetrators, and that the slow, incomplete prosecutions since then cannot be blamed on Tutu\'s leadership.', 'The two sources contradict each other: Source 2C calls the TRC a complete success while Source 2D calls it a total and unredeemed failure.', 'Both sources are mainly concerned with the cartoon that shows the political parties attacking the TRC report as it was delivered.', 'Source 2C describes Tutu\'s 1995 acceptance speech in detail while Source 2D lists the Act of Parliament that created the Commission.'], c: 0, fb: 'Both sources note the TRC handed a list of perpetrators to the NPA and that the slow follow-through is not Tutu\'s fault, so 2C reinforces 2D. They do not flatly contradict each other, neither is about the cartoon (that is 2B), and neither is Tutu\'s speech or the founding Act (that is 2A).'},
  {id: 'q15', src: 'para', num: '2.6a', m: 2, t: 'Step 1 — Topic sentence. Which sentence works best as a topic sentence that directly answers the question about what South Africans can learn from Tutu?', lv: 3, ll: 'Synthesis', opts: ['South Africans can learn from Archbishop Tutu that honest truth-telling, humility and reaching across divides are essential to healing a deeply divided nation.', 'The Truth and Reconciliation Commission was created by the Promotion of National Unity and Reconciliation Act in the middle of the 1990s.', 'Eugene de Kock was for many years the only person ever found guilty of committing apartheid-era crimes after 1994.', 'Desmond Tutu was a very famous and much-loved South African archbishop who was awarded the Nobel Peace Prize back in 1984.'], c: 0, fb: 'A topic sentence must state the lesson and answer the question — here, that Tutu models truth-telling, humility and reaching across divides. The others give background about the Act, a single fact about De Kock, or a biographical note, none of which states what South Africans can learn.'},
  {id: 'q16', src: 'para', num: '2.6b', m: 2, t: 'Step 2 — Source evidence. Which option best uses specific evidence from the sources to support the topic sentence?', lv: 3, ll: 'Synthesis', opts: ['Tutu committed the TRC to \'genuine, real\' reconciliation (Source 2A) and ran it \'with a deep sense of love and a commitment to truth-telling\' (Source 2D).', 'South Africa held its first fully democratic election in 1994, which Nelson Mandela\'s African National Congress went on to win convincingly.', 'The sources make it very clear overall that Tutu was a genuinely good man who did a great deal of good work.', 'Source 2B shows several political parties attacking the TRC report as Tutu delivered it to President Mandela at the door.'], c: 0, fb: 'Strong evidence quotes the sources on Tutu\'s approach: his commitment to \'genuine, real\' reconciliation (2A) and running the TRC with \'love and a commitment to truth-telling\' (2D). The 1994 election is outside these sources, the third option is vague, and the cartoon of parties attacking the report is not about the lesson of his role.'},
  {id: 'q17', src: 'para', num: '2.6c', m: 2, t: 'Step 3 — Own knowledge. Which piece of own knowledge (beyond the sources) best strengthens the paragraph?', lv: 3, ll: 'Synthesis', opts: ['Beyond the sources, Tutu promoted the spirit of ubuntu and chose restorative justice and forgiveness over vengeance, setting a moral example for the new nation.', 'Beyond the sources, F.W. de Klerk and Nelson Mandela jointly received the Nobel Peace Prize in 1993 for their role in ending apartheid.', 'Beyond the sources, the Mass Democratic Movement organised \'Open Hospital\' protests against health segregation in Durban during 1989.', 'Beyond the sources, Msimang wrote that Tutu\'s death reminds us of the unfinished business of the transition to democracy.'], c: 0, fb: 'Good own knowledge adds relevant context the sources omit — Tutu\'s promotion of ubuntu and restorative justice over revenge. The De Klerk/Mandela Nobel Prize and the 1989 MDM protests are off-topic, and the Msimang quote is taken straight from Source 2D, so it is not own knowledge.'},
  {id: 'q18', src: 'para', num: '2.6d', m: 2, t: 'Step 4 — Conclusion. Which sentence best concludes the paragraph by tying the evidence back to the question?', lv: 3, ll: 'Synthesis', opts: ['Tutu\'s example teaches South Africans that lasting unity depends on facing the truth with compassion — even though the work of justice and redress remains unfinished.', 'In conclusion, Archbishop Desmond Tutu was a truly remarkable leader whom the whole world will surely always remember very fondly.', 'Finally, Tutu retired from most public life in 2010 and spent his later years campaigning on a wide range of other issues.', 'Overall, Tutu\'s leadership of the TRC achieved nothing that lasted, and South Africans really have very little to learn from it today.'], c: 0, fb: 'A strong conclusion synthesises the argument and returns to the question — Tutu teaches that unity rests on truth and compassion, while acknowledging the unfinished work. The others are vague, drift into new biographical detail, or flatly contradict the evidence used.'},
];

const MTA_ANSWERS = [
  {label: 'Answer A', text: 'South Africans can learn a lot from Archbishop Desmond Tutu. As chairperson of the TRC, Tutu wanted the country to achieve real reconciliation and not a cheap one (Source 2A). He ran the commission with love and a commitment to truth-telling and forgiveness (Source 2D). Even when many political parties attacked the report, Tutu still delivered it to President Mandela. Tutu showed that South Africans should forgive one another and work together for national unity in the future.', expLv: 0, expM: '?-5', crit: [{q: 'Does it have a clear topic sentence addressing the question?', cor: 'partial', exp: 'The opening says learners \'can learn a lot\' from Tutu but does not state WHAT the lesson is, so the argument is not clearly signposted.'}, {q: 'Does it use specific evidence from the sources?', cor: 'yes', exp: 'It cites Tutu\'s commitment to real reconciliation (2A), his running of the commission with love (2D) and the delivery of the report, so real source evidence is present.'}, {q: 'Does it include own knowledge beyond the sources?', cor: 'no', exp: 'Every point is drawn from the sources. There is no added context such as ubuntu or restorative justice.'}, {q: 'Does it explain WHY (analysis), not just WHAT (description)?', cor: 'partial', exp: 'It mostly narrates what Tutu did. The final sentence gestures at a lesson but does not analyse why his approach mattered for the nation.'}, {q: 'Does it have a concluding sentence that synthesises?', cor: 'partial', exp: 'The last line offers a general moral rather than pulling the evidence together into a sharp answer to the question.'}, {q: 'Is it a coherent paragraph, not a list of disconnected sentences?', cor: 'yes', exp: 'The sentences follow a logical order and read as a connected paragraph, even though the analysis stays shallow.'}]},
  {label: 'Answer B', text: 'Archbishop Tutu\'s leadership of the TRC teaches South Africans that healing a divided nation depends on honest truth-telling, humility and reaching across divides. He committed the commission to \'genuine, real\' reconciliation (Source 2A) and ran it \'with a deep sense of love and a commitment to truth-telling and forgiveness\' (Source 2D). Choosing the spirit of ubuntu and restorative justice over vengeance, he set a moral example — even though, as Msimang notes, the unfinished work of justice and redress now falls to the nation itself.', expLv: 0, expM: '?-8', crit: [{q: 'Does it have a clear topic sentence addressing the question?', cor: 'yes', exp: 'The first sentence states the lesson directly: Tutu teaches that healing depends on truth-telling, humility and reaching across divides.'}, {q: 'Does it use specific evidence from the sources?', cor: 'yes', exp: 'It quotes Source 2A on \'genuine, real\' reconciliation and Source 2D on running the commission with love and truth-telling.'}, {q: 'Does it include own knowledge beyond the sources?', cor: 'yes', exp: 'It adds context the sources omit — Tutu\'s promotion of ubuntu and restorative justice over vengeance — which deepens the argument.'}, {q: 'Does it explain WHY (analysis), not just WHAT (description)?', cor: 'yes', exp: 'It explains why his approach mattered: choosing forgiveness over revenge set a moral example for the new nation.'}, {q: 'Does it have a concluding sentence that synthesises?', cor: 'yes', exp: 'The final sentence ties the lesson together while acknowledging the unfinished work of justice and redress now facing the nation.'}, {q: 'Is it a coherent paragraph, not a list of disconnected sentences?', cor: 'yes', exp: 'The paragraph flows from claim to evidence to own knowledge to conclusion, reading as one sustained argument.'}]},
];

/* ═══ KULA LEARN BRIDGE ═══
   Reports results to a parent Kula Learn page via postMessage.
   See project doc: Kula_Revise_results_payload_spec.md (spec v1).
   KR_META is injected by build.py from paper.json meta. The bridge is
   inert unless (a) identity fields are present, (b) the page is inside
   an iframe, and (c) the host origin was passed as ?host=<origin>.   */
const KR_META = {interactiveId: 'history-p2-2022-nov-q2', paper: 'P2', section: 'A', questionNumber: 2, paperRef: 'DBE November 2022'};
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
