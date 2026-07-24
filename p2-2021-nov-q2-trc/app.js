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
    type: 'Historical Account',
    html: `<div class="sp-body">The Truth and Reconciliation Commission (TRC) was a court-like body assembled in South Africa after the end of apartheid. Anybody who felt they had been a victim of violence could come forward and be heard at the TRC. Perpetrators of violence could also give testimony and request amnesty from prosecution. The hearings made international news and many sessions were broadcast on national television. The TRC was a crucial component of the transition to full and free democracy in South Africa and, despite some flaws, is generally regarded as very successful.<br><br>The mandate of the commission was to bear witness to, record and, in some cases, grant amnesty to the perpetrators of crimes relating to human rights violations, reparation and rehabilitation.<br><br>The work of the TRC was accomplished through three committees: the Human Rights Violations (HRV) Committee investigated human rights abuses that took place between 1960 and 1994, the Reparation and Rehabilitation (R&amp;R) Committee was charged with restoring victims' dignity and formulating proposals to assist with rehabilitation and the Amnesty Committee (AC) considered applications for amnesty that were requested in accordance with the provisions of the Act. In theory the commission was empowered to grant amnesty to those charged with atrocities during apartheid as long as two conditions were met: the crimes were politically motivated and the whole truth was told by the person seeking amnesty. No one was exempt from being charged.</div>`,
    attr: 'From Du Toit, F, et al. 2006. <em>Truth and Reconciliation in South Africa: 10 Years On</em> (David Philip)'
  },
  '2B': {
    label: 'Source 2B',
    type: 'Political Poster',
    html: `<img class="sp-img" src="2B.png" alt="A stark black-and-white TRC poster in bold capital letters reading IF YOUR MOTHER WAS TORTURED FATHER MURDERED AND CHILDREN ABDUCTED WOULD YOU BE SILENT, with side text inviting people to speak out and tell their stories, and the strapline TRUTH. THE ROAD TO RECONCILIATION.">`,
    attr: 'TRC poster. From http://www.saha.org.za/news/2014/September/ (South African History Archive). Accessed 30 May 2021'
  },
  '2C': {
    label: 'Source 2C',
    type: 'Testimony Transcript',
    html: `<div class="sp-body"><strong>MR JANSEN:</strong> Did you give the members of the team any instructions as far as the way in which the murder had to be committed?<br><br><strong>MR DIRK COETZEE:</strong> Yes, I did, Mr. Chairman. I said they should specifically not use guns, and must make it look like a robbery, and it was decided on knives, that Mr Mxenge will be killed with knives.<br><br><strong>MR JANSEN:</strong> Did you give them any further instructions as to how they should go about achieving that goal?<br><br><strong>MR DIRK COETZEE:</strong> They took his car away, they parked it in the parking lot between CR Swart Square and the magistrate's court &hellip; and I left. I then went to Warrant Officer Paul van Dyk and Constable Braam du Preez, whom I gave instructions to take Mr Mxenge's car and leave for Golela border post &hellip; I then went to &hellip; Brigadier Van der Hoven &hellip; and reported to him &hellip; that Mr Mxenge was killed. I said the only people that were reported to me that did the stabbing of Mr Mxenge were Joe Mamasela, Almond Nofomela and David Tshikalanga.<br><br><strong>MR JANSEN:</strong> And on the probabilities, who would those orders have come from headquarters?<br><br><strong>MR DIRK COETZEE:</strong> He told me it was orders from Brigadier Skoon &hellip;<br><br><strong>MR JANSEN:</strong> And what was the purpose of burning the car near the Swaziland border?<br><br><strong>MR DIRK COETZEE:</strong> To give the impression that the murder was committed by ANC cadres as a result of a quarrel &hellip; and then they fled back to Swaziland and burnt the car before crossing the border.</div>`,
    attr: 'Testimony of Dirk Coetzee, TRC public hearing into the murder of Griffiths Mxenge, Durban, 5 November 1996. From www.justice.gov.za/trc/report/'
  },
  '2D': {
    label: 'Source 2D',
    type: 'Newspaper Article',
    html: `<div class="sp-body"><strong>COETZEE GETS AMNESTY FOR MXENGE MURDER</strong><br>4 Aug. 1997 &ndash; MONDAY<br><br>The Truth and Reconciliation Commission on Monday granted amnesty to former Vlakplaas police hit squad commander Dirk Coetzee and two accomplices for the November 1981 murder of Durban human rights lawyer Griffiths Mxenge. Coetzee and two former Vlakplaas operatives, David Tshikilanga and Almond Nofomela, were convicted of Mxenge's murder in the Durban High Court on May 15. They were due to have been sentenced on Friday.<br><br>Giving details of its ruling, the TRC's amnesty committee said there was no doubt Coetzee had acted on the 'advice, command or order of one or more senior members of the security branch of the former SA Police'.<br><br>'On the evidence before us we are satisfied that none of the applicants knew the deceased, Mxenge, or had any reason to wish to bring about his death before they were ordered to do so,' the committee said. 'We are satisfied that they did what they did because they regarded it as their duty as policemen who were engaged in the struggle against the ANC and other liberation movements.'<br><br>Mxenge's family, meanwhile on Monday said they will ask the High Court to overturn the amnesty. Dr Fumbatha Mxenge, a Port Elizabeth dentist and brother of Griffiths, said the family was disappointed by the TRC's decision, but not surprised. 'We will challenge this decision. We are going to take it on review. You have not heard the last of this,' Mxenge said.</div>`,
    attr: '\'Coetzee Gets Amnesty for Mxenge Murder\', <em>Mail &amp; Guardian</em>, 4 August 1997'
  },
  'compare': {
    label: 'Sources 2B + 2C',
    type: 'Comparison',
    html: `<img class="sp-img" src="2B.png" alt="TRC poster in bold capitals reading IF YOUR MOTHER WAS TORTURED FATHER MURDERED AND CHILDREN ABDUCTED WOULD YOU BE SILENT, with the strapline TRUTH. THE ROAD TO RECONCILIATION."><div class="sp-body" style="margin-top:12px;"><strong>Source 2C (extract)</strong><br><br><strong>MR DIRK COETZEE:</strong> &hellip; I said the only people that were reported to me that did the stabbing of Mr Mxenge were Joe Mamasela, Almond Nofomela and David Tshikalanga. &hellip; <strong>MR JANSEN:</strong> And what was the purpose of burning the car near the Swaziland border? <strong>MR DIRK COETZEE:</strong> To give the impression that the murder was committed by ANC cadres &hellip;</div>`,
    attr: 'Re-read both sources, then explain how the evidence in Source 2C supports the information in Source 2B.'
  },
  'para': {
    label: 'Paragraph Task',
    type: 'Q2.6, 8 marks',
    html: `<div class="sp-body">Your task: write a paragraph of about EIGHT lines (about 80 words) explaining how the Truth and Reconciliation Commission (TRC) dealt with the murder of political activist Griffiths Mxenge.<br><br>Build it in four steps &ndash; a topic sentence, evidence from the sources, your own knowledge, and a conclusion. For each step below, choose the option that does the job best.</div>`,
    attr: 'Synthesise the sources and your own knowledge into one coherent paragraph.'
  },
  'mta': {
    label: 'Mark This Answer',
    type: 'Evaluative Task',
    html: `<div class="sp-body">Below are two learner paragraphs answering Question 2.6: <em>how the TRC dealt with the murder of political activist Griffiths Mxenge</em>.<br><br>Read each one, then judge it against the six marking criteria. Decide for yourself how many marks out of 8 each deserves before you reveal the guide's view.</div>`,
    attr: 'Bonus round: mark two sample paragraphs against the criteria.'
  },
};

const QS = [
  {id: 'q1', src: '2A', num: '2.1.1', m: 1, t: 'Who, according to the source, could come forward and be heard at the TRC? (1 x 1)', lv: 1, ll: 'Extraction', opts: ['Anybody who felt they had been a victim of violence', 'Only senior members of the former apartheid security forces', 'Only members of the banned liberation movements such as the ANC', 'Only judges and lawyers appointed to the three TRC committees'], c: 0, fb: 'Source 2A states plainly that \'anybody who felt they had been a victim of violence could come forward and be heard\'. The hearings were open to all victims, not restricted to the security forces, the liberation movements, or legal officials only.'},
  {id: 'q2', src: '2A', num: '2.1.2', m: 2, t: 'Define the concept amnesty in your own words. (1 x 2)', lv: 1, ll: 'Concept', opts: ['An official pardon that freed perpetrators from prosecution in exchange for the full truth about politically motivated crimes', 'A financial payment made by the government to victims to compensate them for the harm and suffering they endured', 'A criminal conviction handed down by a court that sentenced apartheid perpetrators to prison for their crimes', 'A public apology issued by perpetrators to victims without any legal consequences attaching to their confession'], c: 0, fb: 'Amnesty is a pardon from prosecution, granted only when the crime was political and the whole truth was disclosed. It is not a payment to victims (that is reparation), not a conviction (its opposite), and more than a mere apology.'},
  {id: 'q3', src: '2A', num: '2.1.3', m: 2, t: 'Why do you think the hearings at the TRC made international news? (1 x 2)', lv: 2, ll: 'Interpretation', opts: ['The world was watching to see whether a country could confront its violent past through restorative rather than retributive justice', 'The hearings were the very first time that television cameras had ever been allowed inside any South African courtroom', 'The United Nations had ordered all its member states to broadcast the TRC hearings live to their citizens', 'International audiences were mainly interested in the financial reparations that wealthy foreign donors had promised the victims'], c: 0, fb: 'The TRC drew world attention because its restorative-justice model, truth in exchange for amnesty, was a bold experiment other divided nations watched closely. The \'first cameras in a courtroom\', \'UN order\' and \'foreign donor money\' options are inventions the source does not support.'},
  {id: 'q4', src: '2A', num: '2.1.4', m: 3, t: 'List any THREE mandates of the TRC, as stated in the source. (3 x 1)', lv: 1, ll: 'Extraction', multi: true, mx: 3, opts: ['To bear witness to human rights violations', 'To record human rights violations', 'To grant amnesty to perpetrators of crimes relating to human rights violations', 'To prosecute and imprison all apartheid-era offenders', 'To rewrite South Africa\'s school history curriculum'], c: [0, 1, 2], fb: 'The source lists the mandate as \'to bear witness to, record and, in some cases, grant amnesty\' for human rights violations. Prosecuting and imprisoning all offenders is the opposite of the TRC\'s amnesty approach, and rewriting the curriculum was never part of its mandate.'},
  {id: 'q5', src: '2A', num: '2.1.5', m: 2, t: 'Using the information in the source and your own knowledge, explain why you think the Human Rights Violations Committee investigated human rights abuses that took place between 1960 and 1994. (1 x 2)', lv: 2, ll: 'Analysis', opts: ['1960 marked the Sharpeville massacre and start of harsh repression, while 1994 marked the end of apartheid, so this span covered the worst abuses', 'The committee chose those years at random because it simply did not have enough time to investigate the whole of the apartheid era', 'Human rights abuses in South Africa only began in 1960 and stopped completely the moment democracy arrived in 1994', 'The dates were set by the United Nations, which refused to fund any investigation into events before the year 1960'], c: 0, fb: 'The period runs from Sharpeville (1960), which triggered banning and underground struggle, to the 1994 democratic transition, capturing the era of gravest political violence. Calling the dates \'random\', claiming abuses only existed within that window, or crediting a UN order all misread the choice.'},
  {id: 'q6', src: '2A', num: '2.1.6', m: 2, t: 'State TWO conditions, according to the source, that perpetrators of human rights abuses had to meet before they could be granted amnesty. (2 x 1)', lv: 1, ll: 'Extraction', multi: true, mx: 2, opts: ['The crimes were politically motivated', 'The whole truth was told by the person seeking amnesty', 'Paid full compensation to the victim\'s family', 'Resigned publicly from the security police forces'], c: [0, 1], fb: 'The source names exactly two conditions: \'the crimes were politically motivated and the whole truth was told by the person seeking amnesty\'. Paying compensation or resigning from the forces were not requirements for amnesty.'},
  {id: 'q7', src: '2B', num: '2.2.1', m: 2, t: 'Why did the TRC decide to produce this poster? (1 x 2)', lv: 2, ll: 'Interpretation', opts: ['To encourage victims and perpetrators to break their silence and come forward to tell their stories of human rights abuses', 'To warn former security policemen that they would be arrested if they failed to attend the hearings', 'To announce the exact dates and the venues of every single public TRC hearing scheduled around the whole country', 'To advertise the generous financial reparations that all victims would supposedly receive automatically once they had registered'], c: 0, fb: 'The poster\'s purpose is to invite both victims and perpetrators to speak out rather than stay silent, opening the road to reconciliation. It is not an arrest threat, a schedule of venues, or an advert for guaranteed payouts.'},
  {id: 'q8', src: '2B', num: '2.2.2', m: 4, t: 'Comment on why you think the TRC used the words, \'IF YOUR MOTHER WAS TORTURED, FATHER MURDERED &hellip; WOULD YOU BE SILENT\', on the poster in the context of the TRC hearings. (2 x 2)', lv: 2, ll: 'Interpretation', opts: ['The emotive words confront viewers with real abuses so that victims feel moved to break their silence and testify at the hearings', 'The words were chosen mainly to shock foreign tourists into donating money towards the running costs of the commission', 'The words were a legal warning that anyone who stayed silent about a crime would themselves be prosecuted', 'The words listed the specific charges that Dirk Coetzee would face at his own amnesty hearing in Durban'], c: 0, fb: 'By naming torture, murder and abduction directly, the poster stirs empathy and urges silent victims to come forward and testify. It was not a fundraising appeal, not a threat to prosecute the silent, and not a list of charges against one individual.'},
  {id: 'q9', src: '2B', num: '2.2.3', m: 2, t: 'Explain the term reconciliation in the context of the TRC. (1 x 2)', lv: 2, ll: 'Interpretation', opts: ['The rebuilding of broken relationships so that victims and perpetrators could live together in peace after the truth was told', 'The punishment of perpetrators through long prison sentences so that justice could finally be seen to be done', 'The complete removal of all former apartheid officials from public life across the new democratic South Africa', 'The payment of large sums of money to victims in exchange for their agreement never to speak of the past'], c: 0, fb: 'Reconciliation is the restoration of broken relationships and peaceful coexistence built on truth-telling and forgiveness. It is not the same as punishment, a purge of officials, or buying victims\' silence.'},
  {id: 'q10', src: '2C', num: '2.3.1', m: 2, t: 'Name any TWO killers in the source that were implicated (accused) in the murder of Griffiths Mxenge. (2 x 1)', lv: 1, ll: 'Extraction', multi: true, mx: 2, opts: ['Joe Mamasela', 'Almond Nofomela', 'Paul van Dyk', 'Brigadier Skoon'], c: [0, 1], fb: 'Coetzee testifies that \'the only people &hellip; that did the stabbing of Mr Mxenge were Joe Mamasela, Almond Nofomela and David Tshikalanga\'. Name Joe Mamasela and Almond Nofomela. Paul van Dyk moved the car and Brigadier Skoon allegedly gave orders, but neither is named as doing the stabbing.'},
  {id: 'q11', src: '2C', num: '2.3.2', m: 4, t: 'Why do you think Dirk Coetzee implicated (accused) ANC cadres in the murder of Griffiths Mxenge? (2 x 2)', lv: 2, ll: 'Interpretation', opts: ['To shift the blame onto the ANC and mislead the public and investigators into thinking the killing was internal ANC infighting', 'Because he genuinely believed that ANC members and not his own hit squad had actually carried out the murder', 'Because the ANC had publicly confessed to killing Mxenge during one of its own political conferences', 'To persuade the TRC that Mxenge had never really been murdered at all but had simply fled the country'], c: 0, fb: 'Burning the car near the border was meant to make the murder look like an ANC quarrel, deflecting suspicion from the state\'s own death squad. Coetzee knew his own men did it, the ANC never confessed, and the murder plainly did occur.'},
  {id: 'q12', src: '2C', num: '2.3.3', m: 4, t: 'Explain the usefulness of this source for a historian researching the murder of anti-apartheid activist, Griffiths Mxenge. (2 x 2)', lv: 3, ll: 'Reliability', opts: ['It is very useful: a first-hand transcript in which the commander who ordered the killing names the killers, the method and the cover-up', 'It is of little use because it is only a newspaper report written many years after the murder had taken place', 'It is useful only for the exact number of stab wounds that were inflicted on Griffiths Mxenge during the attack', 'It is useful mainly because it records the amount of amnesty money that was later paid out to Dirk Coetzee'], c: 0, fb: 'A first-hand hearing transcript from the man who gave the orders is highly useful: it supplies the killers\' names, the method (knives, staged robbery) and the cover-up. It is not a late newspaper report, does not focus on wound counts, and no amnesty money was paid.'},
  {id: 'q13', src: 'compare', num: '2.4', m: 4, t: 'Refer to Sources 2B and 2C. Explain how the evidence in Source 2C supports the information in Source 2B regarding the call by the TRC for victims and perpetrators to appear before public hearings. (2 x 2)', lv: 3, ll: 'Comparison', opts: ['Source 2B urges people not to stay silent about abuses, and Source 2C shows a perpetrator, Coetzee, doing exactly that by disclosing the murder at a hearing', 'The sources contradict each other: 2B asks victims to speak while 2C shows that perpetrators refused to appear before the TRC', 'Source 2B simply lists the two amnesty conditions, while Source 2C shows the reparations money that was later paid out to the Mxenge family', 'Both of the sources are mainly concerned with how the international media reported on the day-to-day work of the TRC'], c: 0, fb: 'They reinforce each other: 2B calls on people to break their silence, and 2C is that call answered, a perpetrator testifying in public about the killing. There is no contradiction, 2C is not about reparations, and neither source is about media coverage.'},
  {id: 'q14', src: '2D', num: '2.5.1', m: 2, t: 'Identify any TWO perpetrators in the source who were granted amnesty by the TRC for the murder of Griffiths Mxenge. (2 x 1)', lv: 1, ll: 'Extraction', multi: true, mx: 2, opts: ['Dirk Coetzee', 'David Tshikilanga', 'Fumbatha Mxenge', 'Brigadier Skoon'], c: [0, 1], fb: 'Source 2D reports amnesty for \'Dirk Coetzee and two accomplices &hellip; David Tshikilanga and Almond Nofomela\'. Identify Dirk Coetzee and David Tshikilanga. Fumbatha Mxenge is Griffiths\'s brother, and Brigadier Skoon is not named among those granted amnesty.'},
  {id: 'q15', src: '2D', num: '2.5.2', m: 2, t: 'Quote TWO reasons from the source why the TRC granted amnesty to the murderers of Griffiths Mxenge. (2 x 1)', lv: 1, ll: 'Extraction', multi: true, mx: 2, opts: ['Coetzee had acted on the \'advice, command or order of one or more senior members of the security branch\'', '\'they regarded it as their duty as policemen who were engaged in the struggle against the ANC\'', 'They claimed they had acted only under threat to their own lives and had no political motive.', 'The Mxenge family agreed to forgive the killers and asked the TRC to release them'], c: [0, 1], fb: 'The committee\'s stated reasons include that Coetzee acted on the orders of senior police, and that the men saw it as their duty in the struggle against the ANC. The \'threat to their own lives\' option is invented &ndash; amnesty in fact required a political motive &ndash; and the family forgiveness option is false, since the family fought the amnesty.'},
  {id: 'q16', src: '2D', num: '2.5.3', m: 4, t: 'Using the information in the source and your own knowledge, explain why the Mxenge family was disappointed by the TRC\'s decision to grant amnesty for the murder of Griffiths Mxenge. (2 x 2)', lv: 2, ll: 'Analysis', opts: ['They wanted retributive justice &ndash; the killers punished in court &ndash; and felt that reconciliation without punishment let confessed murderers walk free', 'They were disappointed that the amnesty money paid to the family was far smaller than they had been promised', 'They were angry that the TRC had refused to allow Dirk Coetzee to testify about the murder at all', 'They believed that Griffiths Mxenge had not really been murdered and wanted the case reopened as a disappearance'], c: 0, fb: 'The family sought retributive justice and saw amnesty as reconciliation without accountability, so they vowed to challenge it in court. No amnesty money was involved, Coetzee did testify, and the murder was never in doubt.'},
  {id: 'q17', src: 'para', num: '2.6a', m: 2, t: 'STEP 1 &ndash; Topic sentence. Which sentence best states an argument that directly answers \'how did the TRC deal with the murder of Griffiths Mxenge\'?', lv: 3, ll: 'Synthesis', opts: ['The TRC dealt with the Mxenge murder by hearing the killers\' testimony and granting them amnesty in exchange for the full truth', 'Griffiths Mxenge was a Durban human rights lawyer who was stabbed to death by a police hit squad in 1981', 'The Truth and Reconciliation Commission held many public hearings in different cities across South Africa during the 1990s', 'The TRC dealt with the Mxenge murder by sentencing Dirk Coetzee and his accomplices to long terms in prison'], c: 0, fb: 'A topic sentence must state how the TRC handled the case as an argument. The correct option does that. Describing who Mxenge was answers a different question, the \'many hearings\' line is too general, and \'sentencing to prison\' is factually wrong &ndash; the TRC granted amnesty.'},
  {id: 'q18', src: 'para', num: '2.6b', m: 2, t: 'STEP 2 &ndash; Source evidence. Which option best uses specific evidence from the sources to support the topic sentence?', lv: 3, ll: 'Synthesis', opts: ['In Source 2C Coetzee confesses to ordering the killing, and Source 2D reports that the TRC then granted him and two accomplices amnesty', 'Source 2A explains that anybody who felt they were a victim of violence could come forward to be heard by the TRC', 'Source 2B is a poster that uses bold capital letters and a black-and-white design to grab the reader\'s attention', 'The sources all agree that Dirk Coetzee was convicted and sent to prison for the murder of Griffiths Mxenge'], c: 0, fb: 'Good evidence must back the argument about how the case was handled: 2C (confession) and 2D (amnesty granted) do exactly that. The general 2A point, a comment on the poster\'s design, and the false \'sent to prison\' claim do not support it.'},
  {id: 'q19', src: 'para', num: '2.6c', m: 2, t: 'STEP 3 &ndash; Own knowledge. Which fact from beyond the sources best strengthens the argument about how the TRC dealt with the case?', lv: 3, ll: 'Synthesis', opts: ['The TRC acted under the Promotion of National Unity and Reconciliation Act of 1995, which empowered it to grant conditional amnesty', 'Nelson Mandela was finally released from prison in February 1990 after spending twenty-seven long years behind bars', 'The very first fully democratic elections in South Africa were held peacefully over three days in April 1994', 'The Mxenge family were reportedly so satisfied with the TRC\'s amnesty decision that they thanked the commission publicly'], c: 0, fb: 'The 1995 Act is real own knowledge that explains the legal basis for the conditional amnesty at the heart of the case. Mandela\'s release and the 1994 election are true but off-topic here, and the \'family were satisfied\' claim is false &ndash; they challenged the amnesty.'},
  {id: 'q20', src: 'para', num: '2.6d', m: 2, t: 'STEP 4 &ndash; Conclusion. Which sentence best concludes the paragraph by tying the evidence back to the question?', lv: 3, ll: 'Synthesis', opts: ['In dealing with the Mxenge murder the TRC chose truth and amnesty over punishment, a trade-off that reconciled the nation but left his family aggrieved', 'In conclusion, Griffiths Mxenge was just one of the many brave activists who tragically lost their lives during the long apartheid years', 'In conclusion, the Truth and Reconciliation Commission was a special court-like body that was set up in the years after apartheid ended', 'In conclusion, the TRC dealt with the Mxenge murder by refusing amnesty and handing the killers to the courts'], c: 0, fb: 'A strong conclusion synthesises the argument and links back to the question, weighing reconciliation against the family\'s grievance. Restating who Mxenge was or what the TRC was adds no synthesis, and \'refusing amnesty\' is factually wrong.'},
];

const MTA_ANSWERS = [
  {label: 'Answer A', text: 'The Truth and Reconciliation Commission dealt with the murder of Griffiths Mxenge by holding a hearing about it. Griffiths Mxenge was a lawyer who was killed in 1981. Dirk Coetzee was the commander of a police hit squad and he came to the TRC and told them what happened. He said his men used knives and made it look like a robbery. Later the TRC gave Coetzee and two other men amnesty. The family of Mxenge were not happy about this decision. So the TRC dealt with the murder through its hearings.', expLv: 0, expM: '?-5', crit: [{q: 'Does it have a clear topic sentence addressing the question?', cor: 'partial', exp: 'It opens by saying the TRC held a hearing about the murder, which is on topic, but it does not clearly state HOW the TRC dealt with it as an argument.'}, {q: 'Does it use specific evidence from the sources?', cor: 'partial', exp: 'It uses Coetzee\'s confession and the amnesty outcome, but the evidence is stated loosely and is not tied to the named sources.'}, {q: 'Does it include own knowledge beyond the sources?', cor: 'no', exp: 'Everything in the paragraph comes from the sources; nothing extra, such as the 1995 Reconciliation Act, is added.'}, {q: 'Does it explain WHY (analysis), not just WHAT (description)?', cor: 'no', exp: 'It narrates the events but never explains WHY the TRC chose amnesty or why the family objected.'}, {q: 'Does it have a concluding sentence that synthesises?', cor: 'partial', exp: 'The last line rounds off by repeating that the TRC used hearings, but it restates rather than synthesises the argument.'}, {q: 'Is it a coherent paragraph, not a list of disconnected sentences?', cor: 'yes', exp: 'The sentences run in a clear order and read as one connected paragraph rather than a disjointed list.'}]},
  {label: 'Answer B', text: 'The TRC dealt with the Mxenge murder by extracting the full truth from the killers and then granting them conditional amnesty rather than punishing them. In Source 2C the Vlakplaas commander Dirk Coetzee confessed that he ordered his men to stab Mxenge and to stage a robbery to disguise it. Source 2D reports that the TRC accepted this disclosure and granted Coetzee and two accomplices amnesty because the killing was politically motivated. Under the 1995 Reconciliation Act, this truth-for-amnesty trade was legal. Yet, as Source 2D shows, the Mxenge family rejected it and vowed to fight in court, revealing the deep tension between reconciliation and justice.', expLv: 0, expM: '?-8', crit: [{q: 'Does it have a clear topic sentence addressing the question?', cor: 'yes', exp: 'The first sentence states directly how the TRC dealt with the case &ndash; truth from the killers in exchange for conditional amnesty.'}, {q: 'Does it use specific evidence from the sources?', cor: 'yes', exp: 'It cites specific, correctly attributed evidence from Sources 2C and 2D.'}, {q: 'Does it include own knowledge beyond the sources?', cor: 'yes', exp: 'It adds the 1995 Promotion of National Unity and Reconciliation Act, knowledge beyond the sources.'}, {q: 'Does it explain WHY (analysis), not just WHAT (description)?', cor: 'yes', exp: 'It explains WHY amnesty was granted (political motive, full disclosure) and WHY the family objected.'}, {q: 'Does it have a concluding sentence that synthesises?', cor: 'yes', exp: 'The final sentence draws the tension between reconciliation and justice into a synthesising judgement.'}, {q: 'Is it a coherent paragraph, not a list of disconnected sentences?', cor: 'yes', exp: 'It flows as one linked argument from claim through evidence to conclusion.'}]},
];

/* ═══ KULA LEARN BRIDGE ═══
   Reports results to a parent Kula Learn page via postMessage.
   See project doc: Kula_Revise_results_payload_spec.md (spec v1).
   KR_META is injected by build.py from paper.json meta. The bridge is
   inert unless (a) identity fields are present, (b) the page is inside
   an iframe, and (c) the host origin was passed as ?host=<origin>.   */
const KR_META = {interactiveId: 'history-p2-2021-nov-q2', paper: 'P2', section: 'A', questionNumber: 2, paperRef: 'DBE November 2021'};
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
