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
    html: `<div class="sp-body">The source below is an extract that outlines the formation of the Mass Democratic Movement (MDM) in South Africa in 1989 and how it challenged the apartheid government's racial legislation.<br><br>The Mass Democratic Movement (MDM) was the name of an informal coalition (alliance) of anti-apartheid groups during the 1970s and early 1980s. As a formal organisation, the MDM was established as an anti-apartheid successor to the United Democratic Front (UDF) after the 1988 emergency restrictions effectively banned the UDF and several other opposition groups. The UDF introduced the term 'Mass Democratic Movement (MDM)', and it said that the MDM should strengthen grassroots structures and bring in all those organisations on the periphery (sidelines), thus involving them in the struggle. Many previously excluded groups, including white groups and homeland groups, were invited to an Anti-Apartheid Conference organised by COSATU in September 1988. The government did not approve, and banned the conference.<br><br>Even after 1988, the MDM was a temporary loose coalition of anti-apartheid activists with no permanent constitution, no official membership rolls, no national or regional governing body, and no officeholders. Like the UDF, the MDM drew much of its support from the black community; a condition for affiliation with the MDM was adherence to the provisions of the ANC's Freedom Charter.<br><br>The MDM gained prominence (importance) in 1989, when it organised a campaign of civil disobedience in anticipation (hope) of national elections scheduled to take place in September of that year. Defying the state-of-emergency regulations in effect at the time, several hundred black protesters entered 'whites-only' hospitals and beaches. During that month, people of all races marched peacefully in several cities to protest against police brutality and repressive (brutal) legislation.</div>`,
    attr: 'From https://photius.com/countries/south_africa/... Accessed on 30 April 2022.'
  },
  '1B': {
    label: 'Source 1B',
    type: 'Photograph',
    html: `<div class="sp-body">The photograph (photographer unknown) below was taken at the 'whites-only' Addington Hospital in Durban on 2 August 1989. It highlights a protest against segregation as part of the Mass Democratic Movement's (MDM) 'Open Hospital' campaign.</div><img class="sp-img" src="1B.png" alt="Black-and-white photograph of a group of people at a street protest outside a hospital, holding several printed placards. Placard captions reproduced beside the image read 'DESEGREGATE HOSPITALS' and 'NUSAS SUPPORTS OPEN HOSPITALS'.">`,
    attr: 'From http://146.141.12.32/protest-about-segregation-in-hospitals-at-addington-hospital-in-durban. Accessed on 31 March 2022.'
  },
  '1C': {
    label: 'Source 1C',
    type: 'Historical Article',
    html: `<div class="sp-body">The source below is an extract from a book written by a historian, A Jeffery. It explains the events that took place during the peace march to the Cape Town City Hall that was organised by the Mass Democratic Movement (MDM) against police brutality on 13 September 1989.<br><br>In the aftermath (outcome) of the election, the MDM pledged (promised) to intensify the defiance campaign. Tutu and Boesak said they would lead a march on parliament when it reconvened (restarted) on 13 September 1989 to express outrage (anger) against police killings on election day. The day before the protest Tutu announced that the march would go to Cape Town's City Hall, rather than to parliament. He added that the march would be peaceful and disciplined, but stressed that there could be no question of the protest being abandoned (stopped). 'They have killed our people,' he said. It did not matter whether the death toll was 23, as he had first stated, or 15 as the police said. 'Fifteen is a massacre &hellip; Even if we deal only with their figures, it is a scandal (shame).'<br><br>Encouraged by assurances from the Rev. Johan Heyns, moderator (negotiator) of the Dutch Reformed Church, that the march would be non-violent, De Klerk allowed it to proceed, saying: 'We cannot have a democracy without protest marches.' De Klerk added that there was no reason for people to give vent (outlet) to their political aspirations (ambitions) through disorderly protest or rioting. 'The door to a new South Africa is open. It is not necessary to batter (hit) it down,' he said.<br><br>The march passed peacefully and signalled the de facto (actual) unbanning of the ANC. ANC flags and banners were prominently flown.<br><br>Placards with ANC slogans were openly displayed, ANC freedom songs were sung, and ANC leaders were praised. Tutu and Boesak addressed the crowd from the balcony of the City Hall, which was adorned (decorated) with the flags of the ANC and the UDF. 'Walk Cape Town Open' the posters declared. The police kept a low profile and no action was taken to enforce the ban on the ANC or the restrictions on the UDF.</div>`,
    attr: 'From PEOPLE\'S WAR &ndash; NEW LIGHT ON THE STRUGGLE FOR SOUTH AFRICA by A Jeffery'
  },
  '1D': {
    label: 'Source 1D',
    type: 'Historical Article',
    html: `<div class="sp-body">The source below is an extract from a book written by a historian, A Jeffery. It explains the reaction of the apartheid government towards the defiance campaigns organised by the Mass Democratic Movement (MDM) in 1989.<br><br>The police clamped (blocked) down, arresting or detaining some 30 MDM leaders as well as scores of people who had contravened (disobeyed) their restriction orders. Vlok (Minister of Police) said he was well aware that the aim of the defiance campaign was to compel the police to enforce laws providing for racial segregation and then draw negative publicity from this. However, the police were not acting to enforce apartheid laws. Rather, they were not prepared to tolerate civil disobedience activities which led to polarisation (division), confrontation, and violence. Tutu's wife was twice arrested during illegal protests, while both Boesak and Tutu were all taken into custody.<br><br>The clampdown drew sharp disapproval, the US (United States) administration registering deep concern over the arrest of Tutu and his spouse and urging the government to permit the peaceful expression of political dissent (opposition). In the UK (United Kingdom), television footage and newspaper coverage concentrated on the instances in which the police resorted to teargas, water cannons, sjamboks and mass arrests to break up demonstrations.<br><br>In the run-up to the poll, there were also a number of occasions when abuse by the police of their powers was abundantly clear. This was the case in Mitchell's Plain on 2 September, when police laid into protest marchers with batons and quirts (sjamboks), prompting one of their members, Lieutenant Gregory Rockman, to comment that his colleagues had acted like 'wild dogs with a killer instinct'. Said Tutu in response: 'Many people claim we are melodramatic (overemotional) and exaggerate when we say that &hellip; it is almost always the police with their presence or their action who provoke (cause) violence. But now a police lieutenant has charged the police with brutality and has said what we have been saying all along.'</div>`,
    attr: 'From PEOPLE\'S WAR &ndash; NEW LIGHT ON THE STRUGGLE FOR SOUTH AFRICA by A Jeffery'
  },
  'compare': {
    label: 'Sources 1A + 1B',
    type: 'Comparison',
    html: `<div class="sp-body"><strong>Source 1A (extract):</strong> &hellip; 'Defying the state-of-emergency regulations in effect at the time, several hundred black protesters entered whites-only hospitals and beaches. During that month, people of all races marched peacefully in several cities to protest against police brutality and repressive legislation.'</div><div class="sp-body" style="margin-top:12px;"><strong>Source 1B</strong> &ndash; photograph of the MDM 'Open Hospital' protest at the 'whites-only' Addington Hospital, Durban, 2 August 1989:</div><img class="sp-img" src="1B.png" alt="Black-and-white photograph of a street protest outside a hospital with people holding printed placards; captions beside the image read 'DESEGREGATE HOSPITALS' and 'NUSAS SUPPORTS OPEN HOSPITALS'.">`,
    attr: 'Re-read both sources, then explain how the information in Source 1A supports the evidence in Source 1B.'
  },
  'para': {
    label: 'Paragraph Task',
    type: 'Q1.6 &middot; 8 marks',
    html: `<div class="sp-body">Using the information in the relevant sources and your own knowledge, write a paragraph of about EIGHT lines (about 80 words) explaining how the MDM challenged the segregatory laws of South Africa's apartheid government in the 1980s.<br><br>Build the paragraph in four steps: (a) a topic sentence, (b) evidence from the sources, (c) your own knowledge, and (d) a conclusion.</div>`,
    attr: 'Plan the 8-mark paragraph one step at a time.'
  },
  'mta': {
    label: 'Mark This Answer',
    type: 'Evaluative Task',
    html: `<div class="sp-body">Below are two sample answers to the 8-mark paragraph question on how the MDM challenged apartheid's segregatory laws. Read each one and judge it against the six marking criteria, then compare your verdict with the examiner's.</div>`,
    attr: 'Bonus round &middot; evaluate each answer against the rubric.'
  },
};

const QS = [
  {id: 'q1', src: '1A', num: '1.1.1', m: 1, t: 'Which organisation, according to the source, was established as an anti-apartheid successor to the United Democratic Front (UDF) in 1988?', lv: 1, ll: 'Extraction', opts: ['The Mass Democratic Movement (MDM)', 'The Congress of SA Trade Unions (COSATU)', 'The United Democratic Front (UDF)', 'The African National Congress (ANC)'], c: 0, fb: 'The source states the MDM \'was established as an anti-apartheid successor to the United Democratic Front (UDF)\' after the 1988 restrictions. COSATU organised the banned 1988 conference but was not the successor body; the UDF was the banned predecessor; the ANC was still banned at the time.'},
  {id: 'q2', src: '1A', num: '1.1.2', m: 2, t: 'What, according to the UDF, was the Mass Democratic Movement (MDM) expected to achieve in the struggle against apartheid? Give TWO responses.', lv: 1, ll: 'Extraction', multi: true, mx: 2, opts: ['To strengthen grassroots community structures on the ground', 'To bring in all organisations on the periphery and involve them in the struggle', 'To draw up a permanent constitution and elect national officeholders', 'To replace COSATU as the leading trade union federation', 'To negotiate directly with the apartheid government for reform'], c: [0, 1], fb: 'The source says the UDF wanted the MDM to \'strengthen grassroots structures and bring in all those organisations on the periphery ... thus involving them in the struggle\'. The MDM deliberately had NO permanent constitution or officeholders, did not replace COSATU, and used defiance rather than negotiation.'},
  {id: 'q3', src: '1A', num: '1.1.3', m: 4, t: 'Comment on the implication of the statement, \'a condition for affiliation with the MDM was adherence to the provisions of the ANC\'s Freedom Charter\', in the context of the struggle against apartheid.', lv: 2, ll: 'Interpretation', opts: ['Any organisation that wanted to affiliate to the MDM had to embrace the principles of the ANC\'s Freedom Charter, aligning the movement with the broader liberation struggle for a non-racial democracy.', 'The MDM was a loose coalition with no constitution or membership rolls, so affiliation was completely informal and open to almost any anti-apartheid group without conditions.', 'It meant that the MDM operated entirely under the ANC\'s command structure and took its direct daily instructions from the exiled ANC leadership abroad.', 'It meant that only card-carrying members of the ANC itself were permitted to join the MDM, which excluded trade unions and community organisations.'], c: 0, fb: 'Requiring adherence to the Freedom Charter tied affiliates to the ANC\'s vision of a non-racial democracy, uniting them under a shared programme. It did not make the MDM a formless open club, nor did it place it under ANC command, nor did it limit membership to ANC card-holders.'},
  {id: 'q4', src: '1A', num: '1.1.4', m: 2, t: 'Explain the term civil disobedience in the context of activities organised by the MDM in September 1989.', lv: 2, ll: 'Concept', opts: ['The deliberate, non-violent defiance of unjust apartheid laws, such as entering \'whites-only\' hospitals and beaches and marching peacefully against segregation.', 'The armed resistance and sabotage carried out by trained guerrillas of the MDM against government installations and the security forces.', 'The holding of secret negotiations between MDM leaders and government officials aimed at ending the state of emergency quietly.', 'The refusal of black workers to report for their jobs in white-owned businesses as part of a general labour strike.'], c: 0, fb: 'Civil disobedience is the intentional, peaceful breaking of unjust laws to expose and challenge them — exactly what the MDM did by defying the state of emergency at \'whites-only\' hospitals and beaches. It is not armed struggle, not quiet negotiation, and not simply a labour stay-away.'},
  {id: 'q5', src: '1B', num: '1.2.1', m: 4, t: 'Explain the messages conveyed in the photograph regarding the MDM\'s \'Open Hospital\' defiance campaign against segregation.', lv: 2, ll: 'Interpretation', opts: ['Protesters are demanding that racially segregated hospitals be opened to everyone, with placards condemning apartheid health policy and NUSAS publicly backing the campaign.', 'A crowd has gathered peacefully outside a Durban hospital, which shows that open political protest was fully permitted under the state of emergency in 1989.', 'The photograph shows medical staff refusing to treat black patients, illustrating how apartheid segregation was enforced inside the hospital wards themselves.', 'The banners reveal that the campaign was organised mainly by hospital trade unions demanding better wages and improved working conditions for nurses.'], c: 0, fb: 'The placards (\'Desegregate hospitals\', \'Apartheid health kills\', \'NUSAS supports open hospitals\') carry one clear message: reject racial segregation in health care and open hospitals to all. It is not simply a permitted gathering, not staff turning patients away, and not a wage dispute.'},
  {id: 'q6', src: '1B', num: '1.2.2', m: 2, t: 'Comment on the racial composition of protestors that took part in this campaign.', lv: 2, ll: 'Interpretation', opts: ['The crowd is clearly multiracial, with both black and white protesters together, and the NUSAS placard signalling white student support for the campaign.', 'The protesters appear to be exclusively white university students, which suggests the campaign drew its support only from liberal English-speaking institutions.', 'The marchers are drawn almost entirely from the black township community, with few if any other racial groups visibly taking part in the protest.', 'The photograph shows uniformed hospital workers of every race, indicating that staff rather than the wider public were leading the protest that day.'], c: 0, fb: 'The photograph shows black and white protesters together, and the involvement of NUSAS (a mainly white student organisation) confirms the campaign was multiracial. It was neither all-white, nor exclusively black, nor a protest led by hospital staff.'},
  {id: 'q7', src: 'compare', num: '1.3', m: 4, t: 'Refer to Sources 1A and 1B. Explain how the information in Source 1A supports the evidence in Source 1B regarding the defiance campaigns organised by the MDM against segregatory laws in 1989.', lv: 3, ll: 'Comparison', opts: ['Source 1A describes protesters entering \'whites-only\' hospitals in a civil disobedience campaign, and Source 1B shows exactly that — a multiracial \'Open Hospital\' protest against segregation at Addington Hospital.', 'The two sources contradict each other: Source 1A says the MDM avoided all confrontation, while Source 1B shows an aggressive protest that deliberately provoked the police.', 'Both sources focus on the peace march to the Cape Town City Hall led by Tutu and Boesak against police killings on the day of the election.', 'Source 1A explains the banning of the UDF in 1988, while Source 1B shows the funeral of an activist who was killed during the state of emergency.'], c: 0, fb: 'Source 1A tells us the MDM sent protesters into \'whites-only\' hospitals; Source 1B is a photograph of precisely that campaign, so the written and visual evidence reinforce each other. The sources agree rather than contradict, and 1B is a hospital protest, not the City Hall march or a funeral.'},
  {id: 'q8', src: '1C', num: '1.4.1', m: 1, t: 'Why, according to the source, did Tutu and Boesak lead a peace march to Parliament on 13 September 1989?', lv: 1, ll: 'Extraction', opts: ['To express outrage against police killings on election day', 'To demand the immediate release of Nelson Mandela from prison', 'To celebrate the unbanning of the ANC by the government', 'To protest against the banning of the UDF back in 1988'], c: 0, fb: 'The source states they would march \'to express outrage (anger) against police killings on election day\'. The march was not about Mandela\'s release, was not a celebration of an unbanning (that had not yet happened), and was not about the 1988 UDF ban.'},
  {id: 'q9', src: '1C', num: '1.4.2', m: 4, t: 'Explain what Tutu meant with his expression, \'Fifteen is a massacre ... Even if we deal only with their figures, it is a scandal\' in the context of police reaction against protestors.', lv: 2, ll: 'Interpretation', opts: ['Even accepting the police\'s own lower death toll, the killing of peaceful protesters was an atrocity; reducing the dead to disputed figures did not lessen the outrage.', 'Tutu was mainly disputing the accuracy of the police statistics and demanding an official inquiry to establish exactly how many protesters had actually died.', 'Tutu meant that fifteen deaths was an acceptable figure compared with the twenty-three he first feared, showing that the police had in fact shown restraint.', 'Tutu was warning that unless the marches were stopped, the police would go on to kill far more than fifteen people at future demonstrations.'], c: 0, fb: 'Tutu\'s point is moral, not statistical: even on the police\'s own count the killings were a massacre and a scandal. He was not merely quibbling over numbers, not conceding restraint, and not predicting future deaths.'},
  {id: 'q10', src: '1C', num: '1.4.3', m: 3, t: 'Quote THREE reasons from the source why De Klerk allowed the peace march to proceed.', lv: 1, ll: 'Extraction', multi: true, mx: 3, opts: ['\'Encouraged by assurances from the Rev. Johan Heyns ... that the march would be non-violent\'', '\'We cannot have a democracy without protest marches\'', '\'The door to a new South Africa is open. It is not necessary to batter it down\'', '\'Parliament had already given its formal approval for the march to proceed\'', '\'The organisers had agreed to call off all future defiance campaigns\''], c: [0, 1, 2], fb: 'The source gives De Klerk\'s own reasons: the Rev. Heyns assured him the march would be non-violent, \'we cannot have a democracy without protest marches\', and \'the door to a new South Africa is open\'. Parliament did not approve the march, and the organisers never agreed to end defiance — Tutu stressed the protest would not be abandoned.'},
  {id: 'q11', src: '1C', num: '1.4.4', m: 2, t: 'Why do you think the police kept a low profile during the peace march to the Cape Town City Hall on 13 September 1989?', lv: 2, ll: 'Interpretation', opts: ['The new National Party leadership under De Klerk wanted to avoid another scandal and show restraint, signalling a reformist course after the election-day killings.', 'The police were so heavily outnumbered by the marchers that they simply lacked the manpower to break up such a large crowd safely.', 'The march had been declared legal by the courts, so the police had no legal power at all to intervene against the protesters.', 'The police secretly supported the ANC and deliberately allowed its flags and freedom songs to be displayed at the City Hall.'], c: 0, fb: 'The restraint was a deliberate political choice by De Klerk\'s new leadership to avoid more bad publicity and signal reform. It was not about being outnumbered, not a court ruling (De Klerk personally allowed it), and certainly not secret police sympathy for the ANC.'},
  {id: 'q12', src: '1C', num: '1.4.5', m: 4, t: 'Comment on the usefulness of this source to a researcher studying the events that took place during the peace march to the Cape Town City Hall on 13 September 1989.', lv: 3, ll: 'Reliability', opts: ['Useful: written by academic historian Anthea Jeffery, it gives a detailed account with direct quotes from both Tutu and De Klerk; limited: as one historian\'s account it reflects her own selection and interpretation of the events.', 'Useful: it was printed in a published book, which automatically gives it academic credibility; limited: it quotes only Tutu and completely ignores the government\'s point of view on the march.', 'Useful: it records the actual date and detail of the march; limited: because it was written on election day itself the author had no time at all to check any of her facts.', 'Useful: it captures the emotional atmosphere of the crowd well; limited: because it openly praises the ANC it cannot be trusted as evidence about the march in any way at all.'], c: 0, fb: 'The source is useful because a respected historian records the events in detail and quotes leaders on both sides (Tutu and De Klerk); its limitation is that it remains one author\'s selection and reading. The other options rest on false claims — being in a book does not guarantee credibility, it was not written on election day, and quoting the ANC does not make it worthless.'},
  {id: 'q13', src: '1D', num: '1.5.1', m: 3, t: 'According to the source, state THREE ways in which the police dealt with the MDM leaders and protestors who contravened their restriction orders.', lv: 1, ll: 'Extraction', multi: true, mx: 3, opts: ['Arrested or detained around 30 MDM leaders and scores of protesters', 'Used teargas, water cannons and sjamboks to break up demonstrations', 'Took both Boesak and Tutu into custody', 'Banned all newspapers from reporting on the protests taking place', 'Deported foreign MDM supporters and activists from South Africa'], c: [0, 1, 2], fb: 'The source records that the police detained some 30 MDM leaders, used teargas, water cannons and sjamboks, and took Boesak and Tutu into custody. It never mentions a press ban (in fact UK and US media covered the events) or the deportation of foreign supporters.'},
  {id: 'q14', src: '1D', num: '1.5.2', m: 2, t: 'Define the term defiance campaign in your own words.', lv: 1, ll: 'Concept', opts: ['An organised campaign of peaceful, non-violent protest aimed at deliberately disobeying and undermining unjust apartheid laws.', 'A co-ordinated military campaign in which armed units attack government targets to overthrow an unjust regime by force.', 'A legal challenge brought before the courts to have discriminatory apartheid laws declared unconstitutional and struck down.', 'A government programme of tightened security regulations designed to defy international sanctions against apartheid South Africa.'], c: 0, fb: 'A defiance campaign is deliberate, peaceful law-breaking to challenge unjust legislation, as the MDM did in 1989. It is not armed insurrection, not a court case, and not a government policy — the actors are protesters, and the method is non-violent disobedience.'},
  {id: 'q15', src: '1D', num: '1.5.3', m: 2, t: 'Quote evidence from the source which suggests that the US administration was against the clampdown on Tutu and his spouse by the apartheid government.', lv: 1, ll: 'Extraction', multi: true, mx: 2, opts: ['\'The US administration registering deep concern over the arrest of Tutu and his spouse\'', '\'Urging the government to permit the peaceful expression of political dissent\'', '\'The United States imposed sweeping new economic sanctions on South Africa in response\'', '\'The US ambassador resigned from his post in protest at the two arrests\''], c: [0, 1], fb: 'The source states the US administration was \'registering deep concern over the arrest of Tutu and his spouse\' and \'urging the government to permit the peaceful expression of political dissent\'. It never mentions new US sanctions or the resignation of an ambassador — those are not in the text.'},
  {id: 'q16', src: '1D', num: '1.5.4', m: 2, t: 'Why do you think Lieutenant Gregory Rockman commented that his colleagues had acted like \'wild dogs with a killer instinct\'?', lv: 2, ll: 'Interpretation', opts: ['As a policeman himself he was condemning the brutal, unrestrained violence his colleagues used against peaceful marchers, breaking ranks to expose police brutality.', 'He was praising his colleagues\' courage and aggression in confronting the dangerous rioters who were threatening public order at Mitchell\'s Plain.', 'He was complaining that the police had been given inadequate training and the wrong equipment to control large crowds safely.', 'He was pointing out that the marchers had provoked the police first, forcing the officers to defend themselves against a violent mob.'], c: 0, fb: 'Rockman used the phrase to condemn his own colleagues\' savagery against peaceful marchers — a rare public admission of police brutality from inside the force. He was not praising them, not blaming poor training, and not shifting blame onto the protesters.'},
  {id: 'q17', src: 'para', num: '1.6a', m: 2, t: 'Step 1 — Topic sentence. Which sentence works best as a topic sentence that directly answers the question about how the MDM challenged segregatory laws?', lv: 3, ll: 'Synthesis', opts: ['In the late 1980s the Mass Democratic Movement challenged apartheid\'s segregatory laws through mass civil disobedience, defiance campaigns and peaceful protest that made the country increasingly ungovernable.', 'The Mass Democratic Movement was formed in 1989 as a successor to the United Democratic Front after that organisation was effectively banned in 1988.', 'Archbishop Desmond Tutu and Allan Boesak were two of the most important religious leaders in South Africa during the course of the 1980s.', 'Apartheid was a cruel and deeply unjust system that most South Africans strongly opposed by the end of the 1980s decade.'], c: 0, fb: 'A topic sentence must state your argument and answer the question directly — here, that the MDM used civil disobedience and defiance to challenge segregatory laws. The other options give background, name individuals, or offer a vague opinion without stating how the MDM acted.'},
  {id: 'q18', src: 'para', num: '1.6b', m: 2, t: 'Step 2 — Source evidence. Which option best uses specific evidence from the sources to support the topic sentence?', lv: 3, ll: 'Synthesis', opts: ['The MDM ran \'Open Hospital\' protests at \'whites-only\' hospitals (Source 1B) and led a peace march to Cape Town City Hall against police killings (Source 1C).', 'Nelson Mandela was released from prison in February 1990 and the ANC was unbanned by President F.W. de Klerk shortly afterwards.', 'The sources show that a great many people were very unhappy with the government and wanted apartheid to end as quickly as possible.', 'Source 1A explains that the MDM had no permanent constitution, no official membership rolls and no national officeholders of its own.'], c: 0, fb: 'Strong evidence points to specific campaigns in the sources: the \'Open Hospital\' protests (1B) and the City Hall peace march (1C). Mandela\'s release is outside these sources, the second option is vague, and the MDM\'s lack of a constitution does not show how it challenged the laws.'},
  {id: 'q19', src: 'para', num: '1.6c', m: 2, t: 'Step 3 — Own knowledge. Which piece of own knowledge (beyond the sources) best strengthens the paragraph?', lv: 3, ll: 'Synthesis', opts: ['Beyond the sources, the MDM\'s 1989 defiance built on years of UDF-led boycotts, stayaways and state-of-emergency resistance that had made the townships ungovernable.', 'Cuban and Angolan forces helped to defeat the South African army at the Battle of Cuito Cuanavale in southern Angola in 1988.', 'The Truth and Reconciliation Commission was established in 1995 to investigate human rights abuses committed during the apartheid era.', 'Lieutenant Gregory Rockman said that the police had behaved like \'wild dogs with a killer instinct\' at Mitchell\'s Plain.'], c: 0, fb: 'Good own knowledge adds relevant context the sources omit — here, the UDF\'s earlier boycotts and stayaways that the MDM built on. Cuito Cuanavale and the TRC are off-topic, and the Rockman quote comes straight from Source 1D, so it is not own knowledge.'},
  {id: 'q20', src: 'para', num: '1.6d', m: 2, t: 'Step 4 — Conclusion. Which sentence best concludes the paragraph by tying the evidence back to the question?', lv: 3, ll: 'Synthesis', opts: ['Through defiance campaigns, multiracial protest and the exposure of police brutality, the MDM directly undermined segregatory laws and pushed the apartheid state towards reform.', 'In conclusion, the MDM did a great many important things during the 1980s that are still very well worth remembering today.', 'Finally, the ANC went on to win South Africa\'s first fully democratic election in 1994 under the leadership of Nelson Mandela.', 'Overall, the MDM\'s campaigns had very little real effect and apartheid\'s segregatory laws remained firmly in place throughout the 1980s.'], c: 0, fb: 'A strong conclusion synthesises the evidence and returns to the question — the MDM\'s campaigns undermined segregatory laws and forced the state towards reform. The others are vague, drift into new post-1990 information, or contradict the evidence you have used.'},
];

const MTA_ANSWERS = [
  {label: 'Answer A', text: 'The Mass Democratic Movement challenged apartheid in the late 1980s. It organised \'Open Hospital\' protests where people entered whites-only hospitals in Durban. Tutu and Boesak also led a peace march to the Cape Town City Hall against police killings. Many people of different races took part in these marches. The police arrested MDM leaders like Tutu and Boesak during the protests. This showed that people were against apartheid and wanted the segregatory laws to be changed by the government.', expLv: 0, expM: '?-5', crit: [{q: 'Does it have a clear topic sentence addressing the question?', cor: 'partial', exp: 'The opening names the MDM and the period but does not clearly state HOW it challenged the segregatory laws, so the argument is not signposted.'}, {q: 'Does it use specific evidence from the sources?', cor: 'yes', exp: 'It draws on the \'Open Hospital\' protest (1B), the City Hall peace march (1C) and the arrests of leaders (1D), so real source evidence is present.'}, {q: 'Does it include own knowledge beyond the sources?', cor: 'no', exp: 'Every point can be traced back to the sources. There is no added context such as the UDF\'s earlier campaigns or the state of emergency.'}, {q: 'Does it explain WHY (analysis), not just WHAT (description)?', cor: 'partial', exp: 'It mostly narrates events. The closing line gestures at significance (\'people were against apartheid\') but does not analyse how the campaigns pressured the state.'}, {q: 'Does it have a concluding sentence that synthesises?', cor: 'partial', exp: 'The last sentence offers a general comment rather than pulling the evidence together into a clear answer to the question.'}, {q: 'Is it a coherent paragraph, not a list of disconnected sentences?', cor: 'yes', exp: 'The sentences follow a logical order and read as a connected paragraph, even if the analysis stays shallow.'}]},
  {label: 'Answer B', text: 'The Mass Democratic Movement challenged apartheid\'s segregatory laws through organised civil disobedience that helped make the country ungovernable. Defying the state of emergency, protesters entered \'whites-only\' hospitals and beaches (Source 1A), while the multiracial \'Open Hospital\' campaign publicly rejected health segregation (Source 1B). The peace march to Cape Town\'s City Hall exposed police brutality and forced De Klerk to permit protest (Source 1C). Building on years of earlier UDF resistance, these campaigns steadily pressured the apartheid state into reform and hastened its eventual collapse.', expLv: 0, expM: '?-8', crit: [{q: 'Does it have a clear topic sentence addressing the question?', cor: 'yes', exp: 'The first sentence states the argument directly: the MDM used organised civil disobedience to challenge segregatory laws and make the country ungovernable.'}, {q: 'Does it use specific evidence from the sources?', cor: 'yes', exp: 'It cites Sources 1A, 1B and 1C with specific detail — the hospital and beach defiance, the \'Open Hospital\' campaign and the City Hall march.'}, {q: 'Does it include own knowledge beyond the sources?', cor: 'yes', exp: 'It adds context not in the extracts — the earlier UDF resistance the MDM built on — which strengthens the argument.'}, {q: 'Does it explain WHY (analysis), not just WHAT (description)?', cor: 'yes', exp: 'It links the campaigns to their effect: exposing brutality, forcing De Klerk to permit protest and pressuring the state towards reform.'}, {q: 'Does it have a concluding sentence that synthesises?', cor: 'yes', exp: 'The final sentence ties the evidence together, arguing the campaigns pushed the state into reform and hastened apartheid\'s collapse.'}, {q: 'Is it a coherent paragraph, not a list of disconnected sentences?', cor: 'yes', exp: 'The paragraph flows from claim to evidence to analysis to conclusion, reading as a single sustained argument.'}]},
];

/* ═══ KULA LEARN BRIDGE ═══
   Reports results to a parent Kula Learn page via postMessage.
   See project doc: Kula_Revise_results_payload_spec.md (spec v1).
   KR_META is injected by build.py from paper.json meta. The bridge is
   inert unless (a) identity fields are present, (b) the page is inside
   an iframe, and (c) the host origin was passed as ?host=<origin>.   */
const KR_META = {interactiveId: 'history-p2-2022-nov-q1', paper: 'P2', section: 'A', questionNumber: 1, paperRef: 'DBE November 2022'};
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
