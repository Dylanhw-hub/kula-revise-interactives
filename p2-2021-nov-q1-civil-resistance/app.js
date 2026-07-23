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
    type: 'Historical Account',
    html: `<div class="sp-body">&hellip; in early 1983, Botha attempted to ease the mounting pressures on the country by introducing some piecemeal reforms to the apartheid policy without relinquishing (giving up) white minority control. He scrapped what he called 'outdated' and 'unnecessary' apartheid statutes (laws), such as the outlawing of mixed marriages and sex across colour line, to present a new image of reformism (change) to the world.<br><br>It almost succeeded. The Western powers, ever eager to read the South African situation optimistically (positively), were deceived for a time into believing that Botha was really dismantling apartheid. But, on a closer examination, when Botha unveiled constitutional changes he intended making, it became clear what he had in mind was not reform but rather a reformulation (restructuring) of apartheid. He set out his plan to establish a tricameral parliament in which the mixed-race 'Coloured' and Indian minorities would have separate chambers to legislate their 'own affairs', while the existing much larger, whites-only House of Assembly would deal with both 'whites issues' and the nation's 'general affairs'.<br><br>The huge black majority, meanwhile, would get nothing beyond the right to vote in their remote tribal Bantustans, and the municipal councils would run their separate black townships in so-called 'white' South Africa. But even these urban councils were not autonomous (free). The legislation enabled the white minister to remove members, appoint others, or dismiss the whole council and appoint a new one. It meant that the black councils had to implement government policy rather than be responsive to their electorates.</div>`,
    attr: 'From <em>Tutu &ndash; The Authorised Portrait</em> by A Sparks and MA Tutu (Macmillan, Johannesburg, 2011)'
  },
  '1B': {
    label: 'Source 1B',
    type: 'Speech Extract',
    html: `<div class="sp-body">We have arrived at a historic moment. We have brought together, under the aegis (protection) of the United Democratic Front (UDF), the broadest and most significant coalition of groups and organisations struggling against apartheid, racism and injustice since the early nineteen fifties.<br><br>We have been able to create a unity amongst freedom-loving people this country has not seen for many a year. I am particularly happy to note that this meeting is not merely a gathering of loose individuals. No, we represent organisations deeply rooted in the struggle for justice, deeply in the heart of our people.<br><br>We are here to say that the government's constitutional proposals are inadequate, and that they do not express the will of the vast majority of South Africa's people.<br><br>&hellip; The most important reason for us coming together here today is the continuation of the government's apartheid policies as seen in the constitutional proposals. &hellip; All the basic laws, which are the very pillars of apartheid, indeed, those laws without which the system cannot survive &ndash; group areas, racial classification, separate and unequal education, to name but a few &ndash; remain untouched and unchanged. The homelands policy forms the basis of the wilful exclusion of 80% of our nation from the new political deal. Clearly the oppression will continue, the apartheid line is not all abolished.</div>`,
    attr: 'Rev. Dr Allan Boesak, speech at the launch of the UDF, Rocklands Civic Centre, Mitchells Plain, 20 August 1983. From <em>Running with Horses</em> by A Boesak'
  },
  '1C': {
    label: 'Source 1C',
    type: 'Political Poster',
    html: `<img class="sp-img" src="1C.png" alt="A black-and-white protest poster showing a crowd of people, one holding a large banner reading DON'T VOTE IN APARTHEID ELECTIONS with a UDF logo, and a placard below reading FORWARD TO FREEDOM.">`,
    attr: 'UDF poster, 1983. From https://www.saha.org.za/udf/ (South African History Archive). Accessed 25 February 2021'
  },
  '1D': {
    label: 'Source 1D',
    type: 'Newspaper Article',
    html: `<div class="sp-body">About 20 per cent of the registered voters in South Africa's Indian community appeared to have voted today in elections for a new parliament that were marked by sporadic violence between boycotters and police in several cities.<br><br>The results available tonight indicated that members of the 870 000-strong Indian community stayed away from the polls in even larger numbers than the mixed-race Coloured electorate did in last week's voting for representatives in the racially compartmentalised (classified) tricameral parliament.<br><br>There was a 30 per cent turnout at the elections for the larger Coloured community. The government declared that figure adequate for pressing ahead with plans to implement its new constitution, but other observers labelled it a rebuff (refusal).<br><br>Since many people who were eligible to vote did not register, particularly among the Coloureds, leaders of the boycott movement were claiming tonight that the effective vote in the two elections was about 18 per cent out of a joint population of 3,5 million. The movement said this represented a 'massive rejection' of the white minority government's new constitution, which offers the Coloured and Indian minority groups a form of parliamentary representation for the first time, but continues to exclude the black African majority.<br><br>White voters endorsed the constitution by a two-thirds majority at a referendum last November, and the United States State Department joined in praising the government of President PW Botha for taking 'a step in the right direction.'</div>`,
    attr: 'Allister Sparks, \'Indian Turnout about 20% in South African Elections\', <em>Washington Post</em>, 29 August 1984'
  },
  'compare': {
    label: 'Sources 1B + 1C',
    type: 'Comparison',
    html: `<div class="sp-body"><strong>Source 1B (extract)</strong><br><br>&hellip; we represent organisations deeply rooted in the struggle for justice, deeply in the heart of our people. &hellip; We have been able to create a unity amongst freedom-loving people this country has not seen for many a year. &hellip; the broadest and most significant coalition of groups and organisations struggling against apartheid, racism and injustice.</div><img class="sp-img" src="1C.png" alt="Protest poster showing a crowd behind a banner reading DON'T VOTE IN APARTHEID ELECTIONS with a UDF logo, and a placard reading FORWARD TO FREEDOM." style="margin-top:12px;">`,
    attr: 'Re-read both sources, then explain how the evidence in Source 1C supports the information in Source 1B.'
  },
  'para': {
    label: 'Paragraph Task',
    type: 'Q1.6, 8 marks',
    html: `<div class="sp-body">Your task: write a paragraph of about EIGHT lines (about 80 words) explaining how the United Democratic Front (UDF) responded to the apartheid reforms introduced by PW Botha in 1983.<br><br>Build it in four steps &ndash; a topic sentence, evidence from the sources, your own knowledge, and a conclusion. For each step below, choose the option that does the job best.</div>`,
    attr: 'Synthesise the sources and your own knowledge into one coherent paragraph.'
  },
  'mta': {
    label: 'Mark This Answer',
    type: 'Evaluative Task',
    html: `<div class="sp-body">Below are two learner paragraphs answering Question 1.6: <em>how the UDF responded to the apartheid reforms introduced by PW Botha in 1983</em>.<br><br>Read each one, then judge it against the six marking criteria. Decide for yourself how many marks out of 8 each deserves before you reveal the guide's view.</div>`,
    attr: 'Bonus round: mark two sample paragraphs against the criteria.'
  },
};

const QS = [
  {id: 'q1', src: '1A', num: '1.1.1', m: 2, t: 'Name TWO apartheid statutes in the source that PW Botha scrapped while introducing reforms to the apartheid policy. (2 x 1)', lv: 1, ll: 'Extraction', multi: true, mx: 2, opts: ['The outlawing of mixed marriages between different race groups', 'The law banning sex across the colour line between races', 'The Group Areas Act that fixed where each race could live', 'The system of racial classification that registered every citizen', 'The pass laws that controlled black movement into the cities'], c: [0, 1], fb: 'Source 1A says Botha scrapped \'the outlawing of mixed marriages and sex across colour line\'. The Group Areas Act, racial classification and pass laws were real apartheid laws, but the source does not list them as scrapped &ndash; Source 1B in fact calls those \'pillars\' that remained untouched.'},
  {id: 'q2', src: '1A', num: '1.1.2', m: 2, t: 'Explain what is implied by the statement, \'&hellip; what he (PW Botha) had in mind was not reform but rather a reformulation (restructuring) of apartheid.\' (1 x 2)', lv: 2, ll: 'Interpretation', opts: ['Botha meant to restructure and preserve apartheid behind a new appearance, not to dismantle white minority control', 'Botha meant to scrap the outdated apartheid statutes so as to modernise South African society for the world', 'Botha planned to phase out apartheid gradually, starting with rights for Coloureds and Indians before including the black majority', 'Botha was genuinely reforming apartheid but moved too cautiously to convince the UDF of his real sincerity'], c: 0, fb: '\'Reformulation\' means re-packaging, not removing. The correct reading is that Botha kept white control while changing apartheid\'s look. Scrapping statutes was true but only the surface; a \'gradual phase-out\' or \'genuine reform\' misreads a restructuring as a dismantling.'},
  {id: 'q3', src: '1A', num: '1.1.3', m: 2, t: 'Define the term tricameral parliament in your own words. (1 x 2)', lv: 1, ll: 'Concept', opts: ['A three-chamber parliament giving whites, Coloureds and Indians separate houses, while the black majority was excluded', 'A power-sharing parliament in which whites, Coloureds, Indians and black Africans each elected their own chamber', 'A single national assembly where representatives of all race groups debated and voted on general affairs together', 'A two-house parliament where a white upper chamber could veto the laws passed by a Coloured and Indian lower house'], c: 0, fb: '\'Tri\' means three: separate white, Coloured and Indian chambers, with black South Africans shut out. Options that add a black chamber, merge everyone into one house, or describe only two houses all miss the three-chamber, race-divided design.'},
  {id: 'q4', src: '1A', num: '1.1.4', m: 4, t: 'Using the information in the source and your own knowledge, explain why you think the black majority was excluded from the new legislation. (2 x 2)', lv: 2, ll: 'Analysis', opts: ['Including the black majority would have let them outvote the white minority and dismantle apartheid, so exclusion protected white political control', 'The source notes that black South Africans could still elect their own municipal councils inside their urban townships', 'The black majority was excluded because they had already been granted full political rights inside the independent Bantustan homelands', 'The tricameral system excluded the black majority only briefly, adding a fourth chamber once the homelands were fully developed'], c: 0, fb: 'As the majority, black South Africans would have outvoted whites and ended apartheid, so they were kept out to protect white power. The township-councils point is true but does not answer \'why excluded\'; the \'full rights in the homelands\' and \'fourth chamber\' options are misconceptions the source does not support.'},
  {id: 'q5', src: '1A', num: '1.1.5', m: 4, t: 'Identify FOUR legislative powers in the source that the white minister had over black urban councils. (4 x 1)', lv: 1, ll: 'Extraction', multi: true, mx: 4, opts: ['Remove members', 'Appoint others', 'Dismiss the whole council', 'Appoint a new council', 'Set the level of township rents', 'Approve the council\'s annual budget'], c: [0, 1, 2, 3], fb: 'The source states the legislation let the white minister \'remove members, appoint others, or dismiss the whole council and appoint a new one\'. Rents and budgets sound plausible for a council, but the source does not list them &ndash; extraction answers must be in the text.'},
  {id: 'q6', src: '1B', num: '1.2.1', m: 2, t: 'Why, according to the source, did Rev. Dr Allan Boesak refer to the launch of the UDF as a historic moment? Give ONE reason. (1 x 2)', lv: 1, ll: 'Extraction', opts: ['The UDF brought together the broadest and most significant coalition of anti-apartheid groups since the early 1950s', 'The launch was the first time white, Coloured and Indian voters agreed to boycott a national election together', 'The UDF became the first organisation openly to demand the immediate release of Nelson Mandela from prison', 'The meeting was held at the Rocklands Civic Centre in Mitchells Plain on the 20th of August 1983'], c: 0, fb: 'Boesak calls it historic because the UDF united \'the broadest and most significant coalition\' since the 1950s. The election-boycott and Mandela-release options are not his stated reason, and the venue and date, while true, are not why the moment was historic.'},
  {id: 'q7', src: '1B', num: '1.2.2', m: 2, t: 'Quote evidence from the source that shows that the meeting called by the UDF was not merely a gathering of loose individuals. (1 x 2)', lv: 1, ll: 'Extraction', opts: ['\'we represent organisations deeply rooted in the struggle for justice, deeply in the heart of our people\'', '\'the government\'s constitutional proposals are inadequate, and they do not express the will of the vast majority\'', '\'All the basic laws, which are the very pillars of apartheid &hellip; remain untouched and unchanged\'', '\'The homelands policy forms the basis of the wilful exclusion of 80% of our nation from the new political deal\''], c: 0, fb: 'Boesak proves it is organisations, not loose individuals, by saying they \'represent organisations deeply rooted in the struggle for justice\'. The other quotes are genuine parts of the speech, but they attack the constitution and apartheid laws rather than describe how the meeting was organised.'},
  {id: 'q8', src: '1B', num: '1.2.3', m: 4, t: 'Explain the meaning of Rev. Dr Allan Boesak\'s statement, \'The homelands policy forms the basis of the wilful exclusion of 80% of our nation from the new political deal.\' (2 x 2)', lv: 2, ll: 'Interpretation', opts: ['The black majority, about 80% of the population, was pushed into the homelands and deliberately shut out of the tricameral parliament', 'The homelands policy gave the black majority their own separate parliament, so they had no need to join the tricameral system', 'The Coloured and Indian minorities were each given their own separate chamber within the new tricameral parliament', 'Boesak means that 80% of South Africans rejected the constitution by deliberately refusing to register as voters'], c: 0, fb: 'The 80% is the black majority, whose homelands \'citizenship\' was used to justify excluding them from the tricameral deal. Treating the homelands as genuine self-rule, describing the minority chambers, or reading the 80% as a voter boycott all miss Boesak\'s point about deliberate exclusion.'},
  {id: 'q9', src: '1B', num: '1.2.4', m: 4, t: 'Why would a historian consider this source to be reliable regarding the launch of the UDF? (2 x 2)', lv: 3, ll: 'Reliability', opts: ['It is a first-hand account by Boesak, a UDF leader, delivered on 20 August 1983, the actual launch date, and can be corroborated by other sources', 'It is reliable because it was later published in a book, and printed sources are checked by editors, which guarantees the facts are accurate', 'It is reliable because Boesak, as a church minister, was a neutral observer with no political stake in whether the UDF succeeded', 'It is reliable because it accurately reports the low Coloured and Indian voter turnout in the tricameral elections of 1984'], c: 0, fb: 'Reliability rests on who produced it and when: an insider account given at the launch itself, corroborated elsewhere. \'It was published in a book\' does not guarantee accuracy, Boesak was a leader rather than neutral, and the speech predates the 1984 turnout so it cannot report it.'},
  {id: 'q10', src: '1C', num: '1.3.1', m: 2, t: 'Explain what is implied by the words in the poster, \'DON\'T VOTE IN APARTHEID ELECTIONS!\', in the context of the UDF\'s resistance to the introduction of the tricameral parliament in 1983. (1 x 2)', lv: 2, ll: 'Interpretation', opts: ['The UDF urged white, Coloured and Indian voters to boycott the tricameral elections because voting would legitimise apartheid', 'The poster told black African voters to stay away from the polls because they were barred from the tricameral parliament', 'The poster announced that the UDF would put up its own candidates to contest seats in the tricameral parliament', 'The poster warned voters that the apartheid government was planning to rig the tricameral election results'], c: 0, fb: 'A boycott call: taking part would give apartheid\'s \'reforms\' a stamp of legitimacy, so the UDF told those with a vote to refuse it. Black Africans could not vote in these elections anyway, the UDF boycotted rather than contested, and vote-rigging is not what the slogan implies.'},
  {id: 'q11', src: '1C', num: '1.3.2', m: 2, t: 'Comment on the slogan \'FORWARD TO FREEDOM!\' held by the UDF supporters, in the context of resistance to PW Botha\'s apartheid reforms. (1 x 2)', lv: 2, ll: 'Interpretation', opts: ['It implied that real freedom would come through united mass struggle against apartheid, not through Botha\'s tricameral reforms', 'It showed that the UDF backed the tricameral parliament as a genuine first step forward towards eventual freedom', 'It called on the Coloured and Indian communities to accept their new chambers and move forward within the system', 'It celebrated the freedom that the tricameral constitution had already granted to the minority communities'], c: 0, fb: '\'Forward to Freedom\' frames freedom as the goal of resistance, achieved by uniting against apartheid rather than through Botha\'s reforms. The three wrong options all treat the tricameral system as a step towards freedom, the opposite of what the UDF meant.'},
  {id: 'q12', src: 'compare', num: '1.4', m: 4, t: 'Refer to Sources 1B and 1C. Explain how the evidence in Source 1C supports the information in Source 1B regarding the UDF\'s internal resistance against apartheid reforms in 1983. (2 x 2)', lv: 3, ll: 'Comparison', opts: ['Source 1B describes the UDF uniting freedom-loving people against apartheid, and Source 1C shows that unity in action, calling on all communities not to vote', 'The sources contradict each other: 1B celebrates unity while 1C shows the UDF was divided over whether to boycott the elections', 'Source 1B lists the apartheid laws that stayed unchanged, while Source 1C simply depicts the low voter turnout that followed the boycott of the polls', 'Both of the sources focus mainly on the wider international community\'s growing condemnation of PW Botha\'s tricameral reforms during 1983'], c: 0, fb: 'They reinforce each other: 1B states the UDF united people against apartheid, and 1C\'s poster shows that united front telling every community to boycott. There is no contradiction, 1C is a poster (not turnout figures), and neither source is about international condemnation.'},
  {id: 'q13', src: '1D', num: '1.5.1(a)', m: 1, t: 'Identify the voter turnout for the elections of the tricameral parliament (in percentages) for the Indian community. (1 x 1)', lv: 1, ll: 'Extraction', opts: ['20 per cent', '30 per cent', '18 per cent', '66 per cent'], c: 0, fb: 'The source opens by stating about 20 per cent of registered Indian voters appeared to have voted. 30% was the Coloured turnout, 18% the \'effective\' combined vote, and two-thirds (about 66%) was the white referendum result.'},
  {id: 'q14', src: '1D', num: '1.5.1(b)', m: 1, t: 'Identify the voter turnout for the elections of the tricameral parliament (in percentages) for the Coloured community. (1 x 1)', lv: 1, ll: 'Extraction', opts: ['30 per cent', '20 per cent', '18 per cent', '80 per cent'], c: 0, fb: 'The source states there was a 30 per cent turnout for the larger Coloured community. 20% was the Indian turnout and 18% the effective combined vote; 80% does not appear in the source.'},
  {id: 'q15', src: '1D', num: '1.5.2', m: 2, t: 'Explain the term boycott in the context of the UDF\'s reaction during the elections for the tricameral parliament. (1 x 2)', lv: 2, ll: 'Interpretation', opts: ['A deliberate, organised refusal to take part &ndash; here the UDF\'s call for people to stay away from the tricameral elections in protest', 'A violent uprising in which angry protestors physically blocked all the other voters from reaching the polling stations', 'A public gathering held to celebrate the extension of the parliamentary vote to the Coloured and Indian communities', 'A formal legal challenge brought before the courts to have the tricameral election results declared invalid and void'], c: 0, fb: 'A boycott is an organised, deliberate staying-away in protest, which is exactly what the UDF urged. It is not the same as violence (the source mentions only sporadic clashes), a celebration, or a court case.'},
  {id: 'q16', src: '1D', num: '1.5.3', m: 2, t: 'Why do you think two-thirds of the white voters endorsed the constitution in a referendum held in November 1983? (1 x 2)', lv: 2, ll: 'Interpretation', opts: ['They believed the tricameral system would protect white privilege and dominance while giving apartheid a more acceptable image', 'They believed the new constitution was the first real step towards granting the black majority full voting rights', 'They wanted to reward Botha for scrapping the ban on mixed marriages and sex across the colour line', 'They feared that rejecting the new constitution would trigger immediate international sanctions against South Africa'], c: 0, fb: 'Whites backed a system that kept them in control while softening apartheid\'s image abroad. The \'step towards black voting rights\' option contradicts white self-interest, and rewarding scrapped statutes or fearing instant sanctions were not the main reasons.'},
  {id: 'q17', src: '1D', num: '1.5.4', m: 2, t: 'Comment on why the United States State Department believed that Botha\'s reforms were \'a step in the right direction\'. (1 x 2)', lv: 2, ll: 'Interpretation', opts: ['The US read the inclusion of Coloureds and Indians as movement towards reform and quietly backed Botha as a barrier against communism', 'The US believed Botha had granted full democratic rights to all South Africans and had thereby ended apartheid', 'The US State Department had itself secretly helped Botha to draft and design the new tricameral constitution of 1983', 'The US praised the reforms because it believed black townships were now being given fully autonomous elected local councils'], c: 0, fb: 'During the Cold War the US saw limited inclusion of minorities as progress and valued Botha as anti-communist. It did not believe apartheid had ended, did not draft the constitution, and the source itself says the black councils were NOT autonomous.'},
  {id: 'q18', src: 'para', num: '1.6a', m: 2, t: 'STEP 1 &ndash; Topic sentence. Which sentence best states an argument that directly answers \'how did the UDF respond to Botha\'s 1983 reforms\'?', lv: 3, ll: 'Synthesis', opts: ['The UDF responded to Botha\'s 1983 reforms by uniting anti-apartheid organisations and mobilising mass resistance to reject the tricameral parliament', 'PW Botha introduced a tricameral parliament in 1983 that excluded the black majority from any real political power', 'The 1980s were a very difficult decade for almost everyone who was living under apartheid in South Africa', 'The UDF responded to Botha\'s reforms by contesting the tricameral elections and winning several parliamentary seats'], c: 0, fb: 'A topic sentence must state the UDF\'s response as an argument. The correct option does exactly that. Describing Botha\'s reforms answers the wrong question, the \'1980s were difficult\' line is too vague, and \'contesting and winning seats\' is factually wrong &ndash; the UDF boycotted.'},
  {id: 'q19', src: 'para', num: '1.6b', m: 2, t: 'STEP 2 &ndash; Source evidence. Which option best uses specific evidence from the sources to support the topic sentence?', lv: 3, ll: 'Synthesis', opts: ['Source 1B shows Boesak launching the UDF as a broad coalition, and Source 1C shows its \'Don\'t Vote\' campaign urging a boycott of the elections', 'Source 1A explains that Botha scrapped the ban on mixed marriages so as to improve South Africa\'s image abroad', 'Source 1D reports that the white voters had endorsed the new constitution by a two-thirds majority in the November 1983 referendum', 'The sources all appear to agree that the tricameral parliament had successfully included the black majority in the new government'], c: 0, fb: 'Good evidence must back the argument about the UDF\'s response: 1B (coalition) and 1C (boycott) do that. The Botha-scrapping-laws and white-referendum facts are true but support other points, and the \'included the black majority\' claim is simply false.'},
  {id: 'q20', src: 'para', num: '1.6c', m: 2, t: 'STEP 3 &ndash; Own knowledge. Which fact from beyond the sources best strengthens the argument about the UDF\'s response?', lv: 3, ll: 'Synthesis', opts: ['The UDF launched a \'Million Signature Campaign\', a nationwide petition drive to build awareness and reject the tricameral system', 'The Soviet Union provided the ANC with military training and weapons during the years of the armed struggle', 'The National Party first came to power in South Africa in 1948 and then began to build the apartheid system', 'The UDF was banned by the apartheid government immediately at the moment of its launch in August 1983'], c: 0, fb: 'The Million Signature Campaign is real own knowledge that directly shows how the UDF mobilised against the reforms. The Soviet-ANC and 1948 facts are true but off-topic, and the \'banned immediately\' claim is false &ndash; the UDF operated for years before restrictions.'},
  {id: 'q21', src: 'para', num: '1.6d', m: 2, t: 'STEP 4 &ndash; Conclusion. Which sentence best concludes the paragraph by tying the evidence back to the question?', lv: 3, ll: 'Synthesis', opts: ['Through unity, boycotts and mass campaigns the UDF turned Botha\'s reforms into a rallying point that exposed them as a restructuring of apartheid', 'In conclusion, PW Botha\'s reforms of 1983 created a new tricameral parliament that was made up of three separate racial chambers', 'In conclusion, apartheid was a deeply unfair and unjust system that a great many ordinary South Africans of all backgrounds strongly disliked', 'In conclusion, the UDF\'s determined boycott of the polls persuaded the government to abandon the whole tricameral parliament during 1983'], c: 0, fb: 'A strong conclusion synthesises the argument and links back to the question, as the correct option does. Restating Botha\'s reforms adds no synthesis, the \'apartheid was unfair\' line is vague, and claiming the boycott ended the tricameral parliament is factually wrong.'},
];

const MTA_ANSWERS = [
  {label: 'Answer A', text: 'The United Democratic Front was formed in 1983 to oppose the changes that PW Botha made to apartheid. Botha introduced a tricameral parliament that gave Coloureds and Indians their own chambers but left out the black majority. The UDF did not like this. Rev Allan Boesak spoke at the launch and said the constitutional proposals were inadequate. The UDF also told people not to vote in the elections. Because of this many Coloured and Indian people stayed away from the polls. This showed that people were unhappy with Botha\'s reforms.', expLv: 0, expM: '?-5', crit: [{q: 'Does it have a clear topic sentence addressing the question?', cor: 'partial', exp: 'It opens by saying the UDF was formed to oppose Botha\'s reforms, which touches the topic, but it does not clearly state HOW the UDF responded as a single argument.'}, {q: 'Does it use specific evidence from the sources?', cor: 'partial', exp: 'It refers to Boesak\'s speech and the call not to vote, but the evidence is used loosely and is not clearly tied to the named sources.'}, {q: 'Does it include own knowledge beyond the sources?', cor: 'no', exp: 'It stays inside the sources and adds nothing extra, such as the Million Signature Campaign or the wider defiance campaigns of the 1980s.'}, {q: 'Does it explain WHY (analysis), not just WHAT (description)?', cor: 'no', exp: 'It describes what the UDF did but never explains WHY the boycott mattered or how it exposed the reforms as a restructuring of apartheid.'}, {q: 'Does it have a concluding sentence that synthesises?', cor: 'partial', exp: 'The final sentence rounds off by saying people were unhappy, but it restates the point rather than pulling the evidence into a judgement.'}, {q: 'Is it a coherent paragraph, not a list of disconnected sentences?', cor: 'yes', exp: 'The sentences follow a logical order and read as one connected paragraph rather than a disjointed list.'}]},
  {label: 'Answer B', text: 'The UDF responded to Botha\'s 1983 reforms by building a united front and mobilising mass resistance to reject them as a mere restructuring of apartheid. As Source 1B shows, Boesak launched the UDF as the broadest coalition of anti-apartheid organisations since the 1950s, arguing that the constitutional proposals excluded 80% of the nation. Source 1C reinforces this: the \'Don\'t Vote in Apartheid Elections\' poster urged all communities to boycott the tricameral polls. Beyond the sources, the UDF\'s Million Signature Campaign spread this message nationally. The low Coloured and Indian turnout in Source 1D proves the strategy worked, exposing the reforms as an attempt to preserve white control rather than to dismantle apartheid.', expLv: 0, expM: '?-8', crit: [{q: 'Does it have a clear topic sentence addressing the question?', cor: 'yes', exp: 'The first sentence states directly how the UDF responded &ndash; uniting and mobilising resistance to reject the reforms as a restructuring of apartheid.'}, {q: 'Does it use specific evidence from the sources?', cor: 'yes', exp: 'It cites specific, correctly attributed evidence from Sources 1B, 1C and 1D.'}, {q: 'Does it include own knowledge beyond the sources?', cor: 'yes', exp: 'It adds the Million Signature Campaign, knowledge that goes beyond the four sources.'}, {q: 'Does it explain WHY (analysis), not just WHAT (description)?', cor: 'yes', exp: 'It explains WHY the response mattered: the boycott exposed the reforms as a bid to preserve white control.'}, {q: 'Does it have a concluding sentence that synthesises?', cor: 'yes', exp: 'The final sentence ties the evidence back to the question and draws a synthesising judgement.'}, {q: 'Is it a coherent paragraph, not a list of disconnected sentences?', cor: 'yes', exp: 'It flows as a single, well-linked argument from claim to evidence to conclusion.'}]},
];

/* ═══ KULA LEARN BRIDGE ═══
   Reports results to a parent Kula Learn page via postMessage.
   See project doc: Kula_Revise_results_payload_spec.md (spec v1).
   KR_META is injected by build.py from paper.json meta. The bridge is
   inert unless (a) identity fields are present, (b) the page is inside
   an iframe, and (c) the host origin was passed as ?host=<origin>.   */
const KR_META = {interactiveId: 'history-p2-2021-nov-q1', paper: 'P2', section: 'A', questionNumber: 1, paperRef: 'DBE November 2021'};
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
