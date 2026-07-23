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
    html: `<div class="sp-body">The government introduced the Black Local Government Bill in 1980. After much discussion and revision, the bill was finally passed into law in 1982 as the Black Local Authorities Act. It provided for the establishment of a series of local government structures similar to those operating in the white areas and for the first time [it] gave African residents of urban locations something like autonomy (self-government). 'If they could not have access to Parliament, at least they now had local power, elected by local residents.' Councillors were responsible for township administration on budgets raised by local rents and levies (taxes).<br><br>As a reaction to the Black Local Authorities Act, civic organisations mushroomed (grew). The civics were, in short, residents' associations that dealt with the concerns of the people. These local committees that emerged in the late 1970s and proliferated (multiplied) in the 1980s, centred on ordinary township residents, often without political experiences or organising and facilitating skills. Civics interacted in different ways with more localised forms of self-organisation, like block, yard and street committees. These were formed to tackle specific problems such as high rentals, poor electrification, bad housing, the bucket-toilet system and crime.<br><br>'The conditions that caused the formation of these organisations were bread-and-butter issues, but addressing these (bread-and-butter) issues automatically drove them (civic organisations) to political issues.' 'Through popular questions, like "Why are the streets dirty?", "Why are we renting houses?" people got politicised and conscientised,' said Moses Mayekiso, a leader of the Alexander Action Committee.</div>`,
    attr: 'D Zelenova, <em>Anarcho-Syndicalist Review</em>, an independent labour magazine, 2 October 2017'
  },
  '1B': {
    label: 'Source 1B',
    type: 'Protest Poster',
    html: `<div class="sp-body">The poster below, produced by the Krugersdorp Residents' Organisation, appeared on <em>South African History Archive</em>. It called for the residents' meeting to be held at the Roman Catholic Church in Kagiso on 27 January 1985.</div><img class="sp-img" src="1B.png" alt="Hand-drawn 1985 protest poster headed 'Krugersdorp Residents' Organisation – Residents Meeting'. It lists speaker Dr Motlana on 'The Role of Civic Associations' and Isaac Genu on 'Problems in Kagiso &amp; Munsieville', with the details 27/1/85, 12 noon, Roman Catholic Church, Kagiso. Below the text is a line drawing of a crowd of people walking along a road past township houses, one figure with a raised clenched fist.">`,
    attr: '\'Images of Defiance\', South African resistance posters of the 1980s, produced by Krugersdorp Residents\' Organisation; South African History Archive (SAHA)'
  },
  '1C': {
    label: 'Source 1C',
    type: 'Memoir Extract',
    html: `<div class="sp-body">In the 1980s, the Azanian People's Organisation (AZAPO) pitched up to lead action supporting the rent and services complaints of the Thembisa residents, and a boycott was agreed on. The residents marched out of the meeting and onto the streets to mobilise other community members.<br><br>In the early hours of the following day, I, (Jaki Seroke) was picked up at home by my old adversary (enemy), South African Police officer, Van Niekerk, and detained (jailed) under the General Law Amendment Act. This allowed for fourteen days' detention while the police worked out a charge. The detainee could be held in solitary confinement (isolation) and was not allowed access to lawyers or a doctor during that time. The fourteen days could be extended indefinitely (without end), until the person was charged, or police decided to release them. This law was a modified (altered) version of the Sobukwe Clause, under which Robert Sobukwe, founder of the PAC, was kept in isolation on Robben Island for a year, and in his case, this repeated for nine years.<br><br>I had read up the detention laws and educated myself about a few rights I had. I also knew that I had a right to ask for the written regulations. I was taken to Kempton Park Police Station for detention. The officers put us two to a cell, I had David Makgapa, who briefed me about the developments that led to the call for rent boycott. Those opposing the boycott were people wanting to serve as councillors and puppets of the township superintendent (administrator).</div>`,
    attr: 'J Seroke, <em>Zwelethu Our Land – A Memoir</em> (Tafelberg Publishers, Cape Town, 2021)'
  },
  '1D': {
    label: 'Source 1D',
    type: 'Official Report',
    html: `<div class="sp-body">Rent boycotts were launched in townships across the Vaal following the announcement of rent increase by black local authorities, now under some pressure to meet their budget deficits (shortfalls) and become self-financing. Township residents could not afford to pay the rapidly escalating (rising) rents they were expected to pay. The 56 per cent rent increase announced by the Lekoa Town Council affected at least 300 000 people in the Vaal who were already paying some of the highest rents in the country, half of which were in arrears.<br><br>Opposition organised through civic and student organisations proliferated (multiplied). Attacks on councillors trying to implement the rent increase by black local authorities, intensified (grew), leading to the resignation of many in 1984. Between January 1985 and July 1986, rent boycotts were launched in Ratanda, Katlehong, Mamelodi, Alexandra, Tembisa, Soweto, Vosloorus and Krugersdorp. By August 1987, it was estimated that rent boycotts in the PWV (Pretoria, Witwatersrand and Vereeniging) had cost more than R188 million.<br><br>Violent government reaction to rent protests culminated (ended) in police shooting on marchers on 21 November 1985 in Mamelodi where thirteen people died. Most victims were shot in the back. Captain Le Roux of the South African Police (SAP), who participated in the shooting, told the 1989 inquest hearing that the police had adopted a shoot-to-kill approach. The Mamelodi massacre radicalised (revolutionised) the township community. In the Vaal, the violent response of the police to the rent escalated (heightened) the protest and opposition rather than curbing (reducing) it.</div>`,
    attr: 'Truth and Reconciliation Commission Final Report, Volume 3, Chapter 6, Subsection 42, 29 October 1998'
  },
  'compare': {
    label: 'Sources 1B + 1D',
    type: 'Comparison',
    html: `<div class="sp-body"><strong>Source 1B</strong> — protest poster of the Krugersdorp Residents' Organisation calling a residents' meeting on 'The Role of Civic Associations' and 'Problems in Kagiso &amp; Munsieville'.</div><img class="sp-img" src="1B.png" alt="Hand-drawn 1985 protest poster of the Krugersdorp Residents' Organisation calling a residents' meeting, showing a crowd of people marching, one with a raised fist."><div class="sp-body" style="margin-top:12px;"><strong>Source 1D</strong> — 'Opposition organised through civic and student organisations proliferated. Attacks on councillors trying to implement the rent increase by black local authorities, intensified, leading to the resignation of many in 1984 &hellip; Violent government reaction to rent protests culminated in police shooting on marchers on 21 November 1985 in Mamelodi where thirteen people died. Most victims were shot in the back &hellip;'</div>`,
    attr: 'Re-read both sources, then explain how the information in Source 1B supports the evidence in Source 1D.'
  },
  'para': {
    label: 'Paragraph Task',
    type: 'Q1.6 · 8 marks',
    html: `<div class="sp-body">Using the information in the relevant sources and your own knowledge, write a paragraph of about EIGHT lines (about 80 words) explaining <strong>how civic organisations mobilised local communities to resist the apartheid government's structures in South Africa in the 1980s.</strong><br><br>Build your paragraph in four moves: a topic sentence, source evidence, own knowledge, and a synthesising conclusion. The four questions that follow walk you through each move.</div>`,
    attr: 'Draws on Sources 1A, 1B, 1C and 1D.'
  },
  'mta': {
    label: 'Mark This Answer',
    type: 'Evaluative Task',
    html: `<div class="sp-body">Below are two learner paragraphs answering the 8-mark question: <em>How did civic organisations mobilise local communities to resist the apartheid government's structures in South Africa in the 1980s?</em><br><br>Read each one, then use the six marking criteria to judge how well it answers the question. Decide for yourself what mark each deserves out of 8 before you reveal the guidance.</div>`,
    attr: 'Apply the marking criteria as if you were the examiner.'
  },
};

const QS = [
  {id: 'q1', src: '1A', num: '1.1.1', m: 1, t: 'Name the Bill, in the source, that was introduced by the apartheid government in 1980 to create local government structures.', lv: 1, ll: 'Extraction', opts: ['The Black Local Government Bill', 'The Black Local Authorities Act of 1982', 'The Bantu Authorities Act of 1951', 'The Native Urban Areas Consolidation Act'], c: 0, fb: 'Source 1A says the government \'introduced the Black Local Government Bill in 1980\'. The Black Local Authorities Act was what that Bill became when it was passed in 1982, so it names the later law, not the 1980 Bill. The Bantu Authorities Act and the Native Urban Areas Act are real earlier segregation laws, but the source does not mention them here.'},
  {id: 'q2', src: '1A', num: '1.1.2', m: 2, t: 'Quote, from the source, TWO provisions of the Black Local Authorities Act for black residents in townships.', lv: 1, ll: 'Extraction', opts: ['It set up local government structures like those in white areas, and gave African residents of urban locations something like autonomy (self-government).', 'It gave township residents seats in the national Parliament and the right to vote directly for the State President.', 'It abolished the pass laws and allowed black residents to move freely between the townships and the white cities.', 'It paid for township services directly from the national budget and removed the need to collect any local rents.'], c: 0, fb: 'Source 1A states the Act \'provided for the establishment of a series of local government structures similar to those operating in the white areas\' and \'gave African residents of urban locations something like autonomy\'. The source explicitly says residents could NOT access Parliament, so options granting national voting rights, abolishing pass laws, or removing rents all contradict the text.'},
  {id: 'q3', src: '1A', num: '1.1.3', m: 3, t: 'Select any THREE problems, according to the source, that newly formed civic organisations were meant to tackle in their local communities.', lv: 1, ll: 'Extraction', multi: true, mx: 3, opts: ['High rentals charged to township residents', 'Poor electrification in the townships', 'Bad housing conditions for residents', 'Detention of activists without any trial', 'Forced removals to the rural homelands', 'The banning of political organisations'], c: [0, 1, 2], fb: 'Source 1A lists the specific problems as \'high rentals, poor electrification, bad housing, the bucket-toilet system and crime\'. Detentions, forced removals and bannings were real apartheid grievances, but the source frames those as broader political issues, not the local \'bread-and-butter\' problems that the block, yard and street committees were formed to tackle.'},
  {id: 'q4', src: '1A', num: '1.1.4', m: 2, t: 'Comment on what is implied by the statement, \'… addressing these (bread-and-butter) issues automatically drove them (civic organisations) to political issues\', in their townships.', lv: 2, ll: 'Interpretation', opts: ['Solving everyday problems such as rent and housing forced civics to confront the apartheid system that caused them, turning local grievances into political struggle.', 'Civic organisations were residents\' associations that emerged in the late 1970s and multiplied during the 1980s to deal with community concerns.', 'Civic organisations deliberately avoided all politics and dealt only with practical services so that the apartheid government would not ban them.', 'Outside political leaders took control of the civics and redirected them away from rent issues towards demanding seats in Parliament.'], c: 0, fb: 'The statement implies cause and effect: because the apartheid system itself created the bread-and-butter problems, trying to fix them inevitably meant challenging that system. As Mayekiso put it, questions like \'Why are we renting houses?\' \'politicised and conscientised\' residents. Describing what civics were, or claiming they avoided politics, misses this implied progression.'},
  {id: 'q5', src: '1B', num: '1.2.1', m: 2, t: 'Why do you think this poster was created?', lv: 2, ll: 'Interpretation', opts: ['To mobilise and inform residents of Kagiso and Munsieville about a meeting where civic leaders would address local problems and organise resistance.', 'To advertise a Sunday church service to be held at the Roman Catholic Church in Kagiso on 27 January 1985.', 'To announce the results of a local election in which residents had chosen new black township councillors for Kagiso.', 'To warn residents to stay indoors and off the streets because of heavy police activity in Kagiso and Munsieville.'], c: 0, fb: 'The poster names speakers (Dr Motlana, Isaac Genu), topics (\'The Role of Civic Associations\', \'Problems in Kagiso & Munsieville\'), a date, time and venue — its purpose is to mobilise residents to a meeting that builds civic resistance. Options that treat it as a church notice, an election result, or a curfew warning borrow real details but misread the poster\'s mobilising function.'},
  {id: 'q6', src: '1B', num: '1.2.2', m: 4, t: 'Explain why it was important for Dr Motlana to speak about \'The Role of Civic Associations\' during the residents\' meeting.', lv: 2, ll: 'Interpretation', opts: ['Civics were new organisations formed from the late 1970s, so a respected leader like Dr Motlana explaining their role built awareness and mobilised residents to support them.', 'Dr Motlana was a medical doctor who had treated many patients in Soweto and was well known to township residents across the Rand.', 'Civic associations were long-established bodies that residents already trusted, so Dr Motlana merely reminded them of rules they already knew well.', 'Dr Motlana wanted to persuade residents to stand as township councillors so that the Black Local Authorities could function far more smoothly.'], c: 0, fb: 'Because civics had only emerged from the 1970s and were still \'multiplying in the 1980s\', many residents did not yet understand what they were for. A respected community leader like Dr Motlana explaining their role created awareness and rallied support behind them. Options treating civics as old and familiar, or as pro-council, misread both their newness and their oppositional purpose.'},
  {id: 'q7', src: '1C', num: '1.3.1', m: 1, t: 'Identify the organisation in the source that supported the rent and service complaints of the Thembisa residents in the 1980s.', lv: 1, ll: 'Extraction', opts: ['The Azanian People\'s Organisation (AZAPO)', 'The Pan Africanist Congress (PAC)', 'The African National Congress (ANC)', 'The United Democratic Front (UDF)'], c: 0, fb: 'Source 1C states that \'the Azanian People\'s Organisation (AZAPO) pitched up to lead action supporting the rent and services complaints of the Thembisa residents\'. Jaki Seroke was a PAC cadre, and the ANC and UDF were central to 1980s resistance, but only AZAPO is named here as backing the Thembisa action.'},
  {id: 'q8', src: '1C', num: '1.3.2', m: 2, t: 'Why do you think Jaki Seroke was detained by the South African Police officer (Van Niekerk) a day after Thembisa residents marched against rent and services?', lv: 2, ll: 'Interpretation', opts: ['The police saw him as a struggle leader behind the march and detained him to suppress further protest and intimidate other community activists.', 'He was a Pan Africanist and a cadre of the PAC who later published a memoir describing his own political life.', 'He had personally organised the rent increase for the township and the police arrested him for financial mismanagement of funds.', 'He was detained for an ordinary criminal offence unrelated to the protest, and the timing the day after was purely coincidental.'], c: 0, fb: 'The march happened, and the very next morning a known activist was picked up under a security law — the timing points to political suppression, not coincidence or crime. The police aimed to remove a perceived leader and frighten others. His PAC background is true but does not by itself explain the purpose of the detention.'},
  {id: 'q9', src: '1C', num: '1.3.3', m: 3, t: 'According to the source, select any THREE stipulations of the General Law Amendment Act regarding the treatment of the detainees.', lv: 1, ll: 'Extraction', multi: true, mx: 3, opts: ['It allowed fourteen days\' detention while police worked out a charge', 'The detainee could be held in solitary confinement in isolation', 'The detainee was not allowed access to lawyers or a doctor', 'The detainee had to be brought before a magistrate within 48 hours', 'The detainee was entitled to a phone call to family each day', 'The detainee could be released on bail after paying a small fine'], c: [0, 1, 2], fb: 'Source 1C describes the General Law Amendment Act as allowing \'fourteen days\' detention\', holding a detainee in \'solitary confinement\', and denying \'access to lawyers or a doctor\'. The distractors describe ordinary legal protections — a magistrate within 48 hours, phone calls, bail — which are exactly the rights this security law stripped away.'},
  {id: 'q10', src: '1C', num: '1.3.4', m: 2, t: 'Define the term rent boycott in your own words.', lv: 1, ll: 'Concept', opts: ['A collective refusal by township residents to pay their rents as a form of organised protest against the local authorities.', 'A government decision to raise rents in the townships in order to meet the budget deficits of the black local authorities.', 'A campaign in which residents chose to pay their rents early in order to win better services from the township council.', 'A refusal by the councillors to collect any rents from residents until the apartheid government improved township housing.'], c: 0, fb: 'A rent boycott is residents deliberately withholding rent payments as a collective protest. The distractors invert the concept — raising rents, paying early, or councillors refusing to collect — and so miss the key point that a boycott is a bottom-up refusal to pay, used here to pressure the black local authorities.'},
  {id: 'q11', src: '1C', num: '1.3.5', m: 4, t: 'Explain why those opposed to the rent boycott were regarded as puppets of the township superintendent.', lv: 2, ll: 'Interpretation', opts: ['They wanted to serve as councillors and sided with the apartheid local structures, accepting the unaffordable rents rather than defending residents\' interests.', 'They were residents of Kempton Park who had been detained under the General Law Amendment Act alongside Jaki Seroke and David Makgapa.', 'They secretly funded the rent boycott while pretending to oppose it, which is why other residents distrusted them as hidden double agents.', 'They were poor tenants who genuinely could not afford to join the boycott and were afraid that they would soon lose their homes.'], c: 0, fb: 'The source says those opposing the boycott were \'people wanting to serve as councillors and puppets of the township superintendent\' — that is, they upheld the apartheid structures and the unaffordable rents. Being called puppets marks them as controlled collaborators, not detained activists, secret funders, or sympathetic poor tenants.'},
  {id: 'q12', src: '1D', num: '1.4.1', m: 2, t: 'Quote TWO reasons from the source why township residents in the Vaal could not afford to pay rent.', lv: 1, ll: 'Extraction', multi: true, mx: 2, opts: ['A 56 per cent rent increase was announced by the Lekoa Town Council', 'They were already paying some of the highest rents in the country', 'Their wages had been frozen by the Vaal factory owners for five years', 'The government had stopped all pension payments to township residents'], c: [0, 1], fb: 'Source 1D gives the reasons as \'the 56 per cent rent increase announced by the Lekoa Town Council\' and residents \'already paying some of the highest rents in the country, half of which were in arrears\'. Frozen wages and stopped pensions are plausible hardships but are not stated anywhere in this source.'},
  {id: 'q13', src: '1D', num: '1.4.2', m: 4, t: 'Using the information in the source and your own knowledge, comment on why there were many township councillors who resigned in 1984.', lv: 2, ll: 'Interpretation', opts: ['Councillors faced intensifying attacks for enforcing the rent increases and were seen as agents of apartheid, so they resigned to escape the hostility.', 'By August 1987 the rent boycotts in the PWV area had cost more than R188 million in unpaid rents and lost township revenue.', 'They resigned because the apartheid government had promised them senior posts in the national civil service as a personal reward.', 'They resigned in protest against the apartheid government because they had secretly supported the residents\' rent boycott all along.'], c: 0, fb: 'Source 1D says \'attacks on councillors ... intensified, leading to the resignation of many in 1984\'. Combined with own knowledge, councillors were unpopular collaborators enforcing rents with little state protection, so they quit under pressure. The R188 million figure is real but relates to 1987, and framing councillors as secret boycott supporters reverses their actual role.'},
  {id: 'q14', src: '1D', num: '1.4.3', m: 2, t: 'Explain the concept massacre in the context of the government\'s reaction to rent protestors in Mamelodi.', lv: 2, ll: 'Concept', opts: ['The ruthless mass killing of thirteen mostly unarmed people by police who opened fire on marchers in Mamelodi on 21 November 1985.', 'A large but entirely peaceful protest march by thousands of Mamelodi residents that ended without any injuries or deaths at all.', 'A court ruling that punished the police officers who were responsible for shooting the rent protestors in the Mamelodi township.', 'A rent boycott organised across Mamelodi and other Vaal townships between January 1985 and July 1986 by civic organisations.'], c: 0, fb: 'A massacre is the brutal killing of many people; here it was the police shooting dead thirteen mostly unarmed marchers in Mamelodi on 21 November 1985. A peaceful march, a court ruling, or a rent boycott are not massacres — the concept requires the violent mass killing itself.'},
  {id: 'q15', src: '1D', num: '1.4.4', m: 4, t: 'Why would a historian regard this source as useful when researching the apartheid government\'s reaction to rent boycotts in townships?', lv: 3, ll: 'Reliability', opts: ['It is an extract from the official 1998 TRC Report giving dated, detailed evidence of violent state reactions to rent boycotts, and it corroborates Source 1C.', 'It is useful because it was written by a township councillor who ordered the rent increases himself and can explain the government\'s private thinking.', 'It is useful because, as a newspaper article published during the protests, it captures immediate public opinion in the Vaal townships at the time.', 'It is useful because it defines the concept of a rent boycott and simply lists the townships of the PWV region by their names.'], c: 0, fb: 'The source\'s usefulness rests on what it actually is: an official, dated TRC Report documenting government violence against rent protests that can be cross-checked against Source 1C. Claiming it was written by a councillor, or published as a contemporary newspaper, misstates its origin, and merely defining a rent boycott understates why it helps answer the research question.'},
  {id: 'q16', src: 'compare', num: '1.5', m: 4, t: 'Refer to Sources 1B and 1D. Explain how the information in Source 1B supports the evidence in Source 1D regarding the protests against black local authorities in the 1980s.', lv: 3, ll: 'Comparison', opts: ['Source 1B shows residents mobilising through a civic meeting to resist local structures, and Source 1D shows those same civic and student organisations driving rent boycotts against the black local authorities.', 'The two sources contradict each other: Source 1B shows peaceful cooperation with the councillors while Source 1D shows the violent rejection of them.', 'Source 1D lists the townships where the boycotts spread and the millions of rands they cost, which fully explains Source 1B on its own.', 'Source 1B proves the boycotts succeeded because the meeting was held in a church, and Source 1D proves that the police approved of the protests.'], c: 0, fb: 'Both sources show civic organisations mobilising residents against the black local authorities: 1B is a poster calling a residents\' meeting on \'The Role of Civic Associations\', and 1D describes civic and student organisations leading rent boycotts. They complement each other (mobilisation then action), so framing them as contradictory, using only one, or inventing police approval all misread the connection.'},
  {id: 'q17', src: 'para', num: '1.6a', m: 2, t: 'Topic sentence — Which sentence best states an argument that directly answers: \'How did civic organisations mobilise local communities to resist the apartheid government\'s structures in the 1980s?\'', lv: 3, ll: 'Synthesis', opts: ['Civic organisations mobilised communities by turning everyday grievances like rent and housing into organised, politicised resistance against apartheid\'s local government structures.', 'Civic organisations were residents\' associations that first emerged in the late 1970s and then multiplied across the townships during the 1980s.', 'The apartheid government introduced the Black Local Authorities Act in 1982 to give African townships a limited form of local self-government.', 'Dr Motlana and other professionals gave speeches at church meetings to entertain the township residents during the middle of the 1980s.'], c: 0, fb: 'A topic sentence must state an argument that answers the question. The correct option names the mechanism — converting bread-and-butter issues into organised political resistance. The others give background on what civics were, describe the government\'s Act, or trivialise the meetings, none of which argue how civics mobilised resistance.'},
  {id: 'q18', src: 'para', num: '1.6b', m: 2, t: 'Source evidence — Which option best uses specific evidence from the sources to support the topic sentence?', lv: 3, ll: 'Synthesis', opts: ['Source 1A shows civics tackling high rents and bad housing, while Source 1C shows AZAPO backing the Thembisa rent boycott as residents marched to mobilise others.', 'Source 2B shows the security police admitting to the murder of the activist Sizwe Kondile before the TRC amnesty committee in the 1990s.', 'The sources generally show that people living in the townships were unhappy about many different things during the long apartheid years.', 'Source 1D proves that the councillors organised the rent boycotts themselves and personally led the marches against the apartheid government.'], c: 0, fb: 'Good synthesis cites specific source evidence: 1A on rents and housing, 1C on AZAPO and the Thembisa boycott. Pulling in Source 2B belongs to a different question, the vague \'unhappy about many things\' cites nothing specific, and claiming councillors led the boycotts contradicts Source 1D.'},
  {id: 'q19', src: 'para', num: '1.6c', m: 2, t: 'Own knowledge — Which fact from your own knowledge best strengthens the argument beyond what the sources say?', lv: 3, ll: 'Synthesis', opts: ['By 1983 many civics united under the United Democratic Front, and in 1992 they came together nationally as the South African National Civic Organisation (SANCO).', 'The Truth and Reconciliation Commission was established in 1995 to investigate the human rights abuses that were committed under apartheid.', 'Civic organisations were created and funded by the apartheid government itself in order to run the townships on its behalf.', 'Walmart\'s attempt to expand into South Africa in 2011 was strongly resisted by local trade unions who feared major job losses.'], c: 0, fb: 'Own knowledge should extend the sources on the same topic: the UDF (1983) and SANCO (1992) show how local civics scaled into a national movement. The TRC\'s founding and Walmart\'s expansion are real but belong to other topics, and calling civics government-funded reverses their oppositional role.'},
  {id: 'q20', src: 'para', num: '1.6d', m: 2, t: 'Conclusion — Which sentence best concludes the paragraph by tying the evidence back to the question?', lv: 3, ll: 'Synthesis', opts: ['By organising residents around daily grievances and linking them to national campaigns, civic organisations turned local anger into a powerful, unified challenge to apartheid\'s structures.', 'In conclusion, there were many civic organisations in the townships during the 1980s and they held a range of meetings about various problems.', 'In conclusion, the apartheid government finally reformed the pass laws and released Nelson Mandela from prison in February of 1990.', 'In conclusion, the civic organisations failed to mobilise residents and had almost no lasting effect on the apartheid government\'s structures.'], c: 0, fb: 'A strong conclusion synthesises: it links daily grievances to national campaigns and states the overall effect on apartheid\'s structures. Simply noting that many civics existed adds no synthesis, ending on Mandela\'s release introduces an unlinked point, and saying civics \'failed\' contradicts the evidence in the sources.'},
];

const MTA_ANSWERS = [
  {label: 'Answer A', text: 'Civic organisations helped people in the townships in the 1980s. Source 1A says the civics dealt with problems like high rents, bad housing and the bucket-toilet system. Source 1C says AZAPO supported the Thembisa residents and there was a rent boycott, and the people marched in the streets to tell others. The apartheid government did not like this and the police detained leaders like Jaki Seroke. So the civics made people stand together against the government.', expLv: 0, expM: '?-5', crit: [{q: 'Does it have a clear topic sentence addressing the question?', cor: 'partial', exp: 'The opening says civics \'helped people\' but does not clearly argue HOW they mobilised communities to resist the government\'s structures, so it only partly sets up the answer.'}, {q: 'Does it use specific evidence from the sources?', cor: 'yes', exp: 'It cites Source 1A on rents and housing and Source 1C on AZAPO and the Thembisa boycott, so it genuinely draws on specific source evidence.'}, {q: 'Does it include own knowledge beyond the sources?', cor: 'no', exp: 'Everything in the paragraph comes straight from the sources; there is no outside fact, such as the UDF or SANCO, added to extend the argument.'}, {q: 'Does it explain WHY (analysis), not just WHAT (description)?', cor: 'partial', exp: 'It describes what happened and hints that people \'stood together\', but it does not really explain why solving daily problems pushed residents into political resistance.'}, {q: 'Does it have a concluding sentence that synthesises?', cor: 'partial', exp: 'The last line draws a small conclusion that civics united people, but it does not tie the evidence back to the question in a developed way.'}, {q: 'Is it a coherent paragraph, not a list of disconnected sentences?', cor: 'yes', exp: 'The sentences follow a clear sequence and read as a connected paragraph rather than a disjointed list of points.'}]},
  {label: 'Answer B', text: 'Civic organisations mobilised communities by turning everyday bread-and-butter grievances into organised political resistance against apartheid\'s local structures. As Source 1A explains, civics and street committees tackled high rents, poor electrification and bad housing, and addressing these issues \'automatically drove them to political issues\'. Source 1C shows AZAPO leading the Thembisa rent boycott while residents marched to conscientise others, and Source 1B shows leaders like Dr Motlana mobilising support through public meetings. From my own knowledge, these local civics united under the UDF in 1983 and formed SANCO in 1992. In this way, local anger was transformed into a unified national challenge to apartheid.', expLv: 0, expM: '?-8', crit: [{q: 'Does it have a clear topic sentence addressing the question?', cor: 'yes', exp: 'The first sentence states a clear argument — that civics turned bread-and-butter grievances into organised political resistance — which directly answers the question.'}, {q: 'Does it use specific evidence from the sources?', cor: 'yes', exp: 'It quotes Source 1A and cites Sources 1C and 1B with specific detail, naming AZAPO, the Thembisa boycott and Dr Motlana\'s meeting.'}, {q: 'Does it include own knowledge beyond the sources?', cor: 'yes', exp: 'It adds the UDF (1983) and SANCO (1992), facts that lie beyond the sources and extend the argument to a national scale.'}, {q: 'Does it explain WHY (analysis), not just WHAT (description)?', cor: 'yes', exp: 'It explains the mechanism — that fixing local problems forced residents to confront the apartheid system — rather than only listing what happened.'}, {q: 'Does it have a concluding sentence that synthesises?', cor: 'yes', exp: 'The final sentence synthesises by showing how local anger became a unified national challenge, tying the evidence back to the question.'}, {q: 'Is it a coherent paragraph, not a list of disconnected sentences?', cor: 'yes', exp: 'It is well structured, moving from argument to source evidence to own knowledge to conclusion as a single, coherent paragraph.'}]},
];

/* ═══ KULA LEARN BRIDGE ═══
   Reports results to a parent Kula Learn page via postMessage.
   See project doc: Kula_Revise_results_payload_spec.md (spec v1).
   KR_META is injected by build.py from paper.json meta. The bridge is
   inert unless (a) identity fields are present, (b) the page is inside
   an iframe, and (c) the host origin was passed as ?host=<origin>.   */
const KR_META = {interactiveId: 'history-p2-2024-nov-q1', paper: 'P2', section: 'A', questionNumber: 1, paperRef: 'DBE November 2024'};
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
