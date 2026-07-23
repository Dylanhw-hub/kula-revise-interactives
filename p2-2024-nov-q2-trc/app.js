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
    type: 'Official Report',
    html: `<div class="sp-body">Mr Gcinisizwe 'Sizwe' Kondile was a Port Elizabeth activist and a founder member of the Congress of South African Students (COSAS). In contact with the African National Congress (ANC) in Lesotho, Kondile and five others formed an underground ANC cell inside the country in about July 1980.<br><br>When two members of the cell – Mr Thembi Mbiyabo and Mr Nangamso Ndzube – were arrested, Kondile and the other cell members (Mr Vusumzi Pikoli, Mr Thozi Majola and Mr Phaki Ximiya) decided to leave the country in September 1980. They went to Maseru, Lesotho, where they met with former Port Elizabeth Black Civic Organisation (PEBCO) leader Mr Thozamile Botha and Mr Chris Hani. They were given basic training and told to build the underground movement in the Eastern Cape. This involved moving back and forth between Lesotho and South Africa.<br><br>Kondile went into South Africa on a brief mission in June 1981, and returned safely to Maseru, the capital city of Lesotho, in the same month. Later that month he disappeared from Maseru. The South African Police claimed that Kondile had been arrested in Port Elizabeth on 26 June 1981, but had been released in August 1981. Because he had borrowed Chris Hani's car on the day he disappeared, the ANC suspected him of being a traitor, and the family suffered political isolation and trauma (shock) as a result of this.</div>`,
    attr: 'Truth and Reconciliation Commission Report, Volume 3, 1998'
  },
  '2B': {
    label: 'Source 2B',
    type: 'Book Extract',
    html: `<div class="sp-body">Three senior officers – Van Rensburg, Du Plessis and their commanding officer, Colonel Gerrit Erasmus – eventually admitted to the murder, but denied that Kondile had been killed because he had suffered brain damage during interrogation. The reason for his death, they claimed, was that after agreeing to become a police informer, Kondile had given the name of a security police agent; the name, if it had fallen into the ANC's hands, would have caused severe damage. No longer trusting Kondile, they had decided to kill him. Erasmus admitted making the final decision.<br><br>At the end of his testimony, Dirk Coetzee turned towards Charity Kondile to ask for forgiveness, saying he hoped to meet her one day to 'look her in the eye'. Mrs Kondile's lawyer, Imram Moosa, gave a swift response, 'You have said you would like to meet Mrs Kondile and look her in the eye. It is an honour she feels you do not deserve. And if you were really remorseful (sorry), you wouldn't apply for amnesty, but, in fact, stand trial for what you did.'<br><br>A long, uncomfortable silence filled the hall. The amnesty panel, the legal representatives, the audience, all seemed distraught (upset). Coetzee turned away slowly, his hands clutched (held) together. In a newspaper interview afterwards, Mrs Kondile said, 'It is easy for Mandela and Tutu to forgive. … They led vindicated (transformed) lives. In my life nothing, not a single thing, has changed since my son was buried by barbarians (thugs) … nothing. Therefore, I cannot forgive.'</div>`,
    attr: 'M Meredith, <em>COMING TO TERMS – SOUTH AFRICA\'S SEARCH FOR TRUTH</em> (Perseus Books Group, New York, 1999)'
  },
  '2C': {
    label: 'Source 2C',
    type: 'Photograph',
    html: `<div class="sp-body">The photograph below was taken at Sizwe Kondile's spiritual repatriation (return). It was published in the Eastern Cape local newspaper, <em>Eyewitness News</em>, dated 1 July 2016. It depicts Sizwe Kondile's family members, namely, Bantu Kondile (Sizwe's son), Nompumelelo (Sizwe's sister), Khwezi (Sizwe's nephew) and Pat Kondile (Sizwe's cousin) together with Vusi Pikoli at the site in Komatipoort on 30 June 2016 where they performed his spiritual repatriation (return).</div><img class="sp-img" src="2C.png" alt="A night-time photograph of six people standing in a row among bare winter trees, most with their heads bowed, at an outdoor gathering. A printed caption box with an arrow points to the man standing on the far left and reads 'Vusi Pikoli – speaking on behalf of the Kondile family'.">`,
    attr: '<em>Eyewitness News</em>, 1 July 2016'
  },
  '2D': {
    label: 'Source 2D',
    type: 'Newspaper Article',
    html: `<div class="sp-body"><strong>CLOSURE AT LAST FOR MURDERED CADRES' FAMILIES</strong><br><br>Johannesburg – Poisoned, tortured, shot, burnt and bombed – this was how ..., Sizwe Kondile, … died at the hands of apartheid police.<br><br>The families of the three men achieved a measure of closure as they attended a 'spiritual repatriation' (return) and symbolic burial at Freedom Park in Pretoria on Friday. They were joined by the Minister of Justice and Correctional Services, Michael Masutha, the National Director of Public Prosecutions, Shaun Abrahams, and one of his predecessors, Vusi Pikoli, who had been Kondile's best friend.<br><br>On Thursday, the families attended a spiritual repatriation in Komatipoort, Mpumalanga.<br><br>The symbolic burial took place at Isivivane in Freedom Park, which can best be described as a spiritual resting place for those who played a part in the struggle. 'We are alive to the fact that there should have been real burials, but the ruthless and merciless apartheid regime had no respect for human life, especially our freedom fighters,' Masutha said. Referring to the ceremony, Masutha said, 'I think it's a moment of reflection for all of us across political persuasions, religious and cultural persuasions and racial divides in South Africa.'<br><br>'The Department of Justice hoped to approach Parliament with a concrete proposal to criminalise racism, with jail time as a penalty,' Masutha said.<br><br>The ceremony afforded families much-needed closure. Participating in the rituals gave families answers, closure and understanding of the whole situation.</div>`,
    attr: 'Independent Online (IOL), 2 July 2016'
  },
  'compare': {
    label: 'Sources 2B + 2D',
    type: 'Comparison',
    html: `<div class="sp-body"><strong>Source 2B</strong> — 'Dirk Coetzee turned towards Charity Kondile to ask for forgiveness &hellip; Mrs Kondile's lawyer &hellip; [said] if you were really remorseful, you wouldn't apply for amnesty, but, in fact, stand trial for what you did.' Mrs Kondile said: 'In my life nothing &hellip; has changed since my son was buried by barbarians &hellip; Therefore, I cannot forgive.'</div><div class="sp-body" style="margin-top:12px;"><strong>Source 2D</strong> — 'The families &hellip; achieved a measure of closure as they attended a spiritual repatriation and symbolic burial at Freedom Park &hellip; The ceremony afforded families much-needed closure. Participating in the rituals gave families answers, closure and understanding of the whole situation.'</div>`,
    attr: 'Re-read both sources, then explain how the information in Source 2D differs from the evidence in Source 2B.'
  },
  'para': {
    label: 'Paragraph Task',
    type: 'Q2.6 · 8 marks',
    html: `<div class="sp-body">Using the information in the relevant sources and your own knowledge, write a paragraph of about EIGHT lines (about 80 words) explaining <strong>whether the Truth and Reconciliation Commission (TRC) was able to bring closure to Sizwe Kondile's family for his murder as an anti-apartheid activist in 1981.</strong><br><br>Build your paragraph in four moves: take a stance in a topic sentence, support it with source evidence, add own knowledge, then conclude. The four questions that follow guide each move.</div>`,
    attr: 'Draws on Sources 2A, 2B, 2C and 2D.'
  },
  'mta': {
    label: 'Mark This Answer',
    type: 'Evaluative Task',
    html: `<div class="sp-body">Below are two learner paragraphs answering the 8-mark question: <em>Was the TRC able to bring closure to Sizwe Kondile's family for his murder as an anti-apartheid activist in 1981?</em><br><br>Read each one, then use the six marking criteria to judge how well it answers the question. Decide the mark each deserves out of 8 before you reveal the guidance.</div>`,
    attr: 'Apply the marking criteria as if you were the examiner.'
  },
};

const QS = [
  {id: 'q1', src: '2A', num: '2.1.1', m: 2, t: 'According to the source, when did Sizwe Kondile and five others form an underground ANC cell inside the country?', lv: 1, ll: 'Extraction', opts: ['In about July 1980', 'In September 1980', 'In June 1981', 'In August 1981'], c: 0, fb: 'Source 2A states that Kondile \'and five others formed an underground ANC cell inside the country in about July 1980\'. September 1980 is when the members decided to leave for Lesotho, June 1981 was his last mission, and August 1981 is when the police claimed he had been released — all real dates in the source, but not when the cell was formed.'},
  {id: 'q2', src: '2A', num: '2.1.2', m: 3, t: 'Name THREE of Sizwe Kondile\'s cell members in the source who decided to leave the country in September 1980.', lv: 1, ll: 'Extraction', multi: true, mx: 3, opts: ['Mr Vusumzi Pikoli', 'Mr Thozi Majola', 'Mr Phaki Ximiya', 'Mr Thembi Mbiyabo', 'Mr Nangamso Ndzube', 'Mr Chris Hani'], c: [0, 1, 2], fb: 'Source 2A says that when Mbiyabo and Ndzube were arrested, \'Kondile and the other cell members (Mr Vusumzi Pikoli, Mr Thozi Majola and Mr Phaki Ximiya) decided to leave the country in September 1980\'. Mbiyabo and Ndzube were the two who were arrested, and Chris Hani was already in Lesotho — none of them are the three who left.'},
  {id: 'q3', src: '2A', num: '2.1.3', m: 2, t: 'Using the information in the source and your own knowledge, explain why Kondile and his friend undertook a mission to move back and forth between Lesotho and South Africa.', lv: 2, ll: 'Interpretation', opts: ['To build the ANC\'s underground movement in the Eastern Cape and strengthen internal resistance to apartheid from their base of exile in Lesotho.', 'Kondile was a founder member of the Congress of South African Students and a Port Elizabeth activist who firmly opposed apartheid.', 'They moved back and forth in order to smuggle goods for trade and to earn money to support their own families back at home.', 'They were sent by the South African Police to spy on the ANC\'s activities inside Lesotho and to report everything back to Port Elizabeth.'], c: 0, fb: 'Source 2A says they were \'told to build the underground movement in the Eastern Cape\', which \'involved moving back and forth between Lesotho and South Africa\'. With own knowledge, exiles used neighbouring states as bases to strengthen internal resistance. His COSAS background is true but not the mission\'s purpose, and smuggling for profit or spying for the police both reverse his role.'},
  {id: 'q4', src: '2A', num: '2.1.4', m: 2, t: 'Define the term traitor in your own words.', lv: 1, ll: 'Concept', opts: ['Someone who betrays their own organisation or cause and goes over to help the enemy or the opposition.', 'Someone who is arrested by the police and is then released again without ever being formally charged with any crime.', 'Someone who leaves their home country in order to live in exile in a neighbouring state such as Lesotho.', 'A loyal member of an organisation who is willing to risk their own life for the cause that they believe in.'], c: 0, fb: 'A traitor betrays their own side and helps the enemy — which is why the ANC\'s suspicion that Kondile had turned informer was so damaging. Being released without charge, going into exile, or being a loyal risk-taker are not betrayal; the last is in fact the opposite of a traitor.'},
  {id: 'q5', src: '2B', num: '2.2.1', m: 3, t: 'Name THREE senior officers of the South African Police in the source who admitted to the murder of Sizwe Kondile.', lv: 1, ll: 'Extraction', multi: true, mx: 3, opts: ['Van Rensburg', 'Du Plessis', 'Colonel Gerrit Erasmus', 'Dirk Coetzee', 'Imram Moosa', 'Captain Le Roux'], c: [0, 1, 2], fb: 'Source 2B says \'Three senior officers – Van Rensburg, Du Plessis and their commanding officer, Colonel Gerrit Erasmus – eventually admitted to the murder\'. Dirk Coetzee appears in the same source asking for forgiveness but is not named among the three who admitted; Imram Moosa was Mrs Kondile\'s lawyer, and Captain Le Roux belongs to Source 1D.'},
  {id: 'q6', src: '2B', num: '2.2.2', m: 2, t: 'Explain the term testimony in the context of application for amnesty.', lv: 2, ll: 'Concept', opts: ['The spoken or written evidence given by perpetrators to the TRC when they applied for amnesty for their crimes.', 'The official pardon granted by the TRC that freed perpetrators from any further prosecution for the crimes they committed.', 'The written apology that a perpetrator would send privately to a victim\'s family some time after the hearing had ended.', 'The final judgement handed down by an ordinary court once a perpetrator had been found guilty of committing a crime.'], c: 0, fb: 'Testimony is the evidence — spoken or written — that a perpetrator gives before the TRC as part of applying for amnesty. It is not the amnesty (the pardon) itself, nor a private apology, nor a court\'s guilty verdict; the TRC amnesty process was distinct from an ordinary criminal trial.'},
  {id: 'q7', src: '2B', num: '2.2.3', m: 2, t: 'Comment on the meaning of the statement, \'… if you were really remorseful (sorry), you wouldn\'t apply for amnesty, but, in fact, stand trial for what you did\', regarding Coetzee\'s request for forgiveness.', lv: 2, ll: 'Interpretation', opts: ['It implies Coetzee wanted amnesty only to escape a jail sentence, and that true remorse would mean facing trial and accepting responsibility instead.', 'It shows that Coetzee had turned towards Charity Kondile and hoped that one day he might meet her and \'look her in the eye\'.', 'It means the lawyer believed Coetzee should be granted amnesty quickly so that the painful amnesty hearing could at last come to an end.', 'It suggests that applying for amnesty was itself the clearest proof of Coetzee\'s genuine remorse and his willingness to make amends.'], c: 0, fb: 'The lawyer\'s point is that genuine remorse would lead Coetzee to stand trial and take responsibility, not to seek amnesty to avoid punishment — so his request for forgiveness rings hollow. Describing his gesture towards Mrs Kondile, or reading the line as proof of remorse, misses this critical meaning.'},
  {id: 'q8', src: '2B', num: '2.2.4', m: 2, t: 'Using the information in the source and your own knowledge, state why you think Charity Kondile came to the conclusion that she could not forgive Dirk Coetzee for what he did to her son.', lv: 2, ll: 'Interpretation', opts: ['Her life had not changed since her son\'s brutal killing, she felt Coetzee was not truly remorseful, and she wanted justice rather than a hollow apology.', 'Coetzee had turned slowly away with his hands clutched together while a long and uncomfortable silence filled the amnesty hall.', 'She could not forgive him only because she had never actually met him in person and did not know what he looked like.', 'She forgave him in the end, choosing to follow the example that had been set by leaders like Nelson Mandela and Desmond Tutu.'], c: 0, fb: 'Mrs Kondile said \'nothing ... has changed since my son was buried by barbarians ... Therefore, I cannot forgive.\' Combined with own knowledge of victims who felt the TRC denied them justice, her refusal rests on unhealed loss and Coetzee\'s lack of real remorse. The silence in the hall is a true detail but not her reasoning, and she plainly did not forgive him.'},
  {id: 'q9', src: '2C', num: '2.3.1', m: 2, t: 'Explain why this photograph could be very important to the Kondile family.', lv: 2, ll: 'Interpretation', opts: ['It captures the moment the family finally held a symbolic memorial for Sizwe near where his remains were disposed of, helping them come to terms with his death.', 'It shows Vusi Pikoli, who was Kondile\'s best friend and who later became the National Director of Public Prosecutions in South Africa.', 'It is important because it proves the exact spot where Sizwe Kondile\'s body was buried so that it could later be exhumed for reburial.', 'It is important because it records the trial at which the police officers who killed Sizwe were at last sentenced to prison for the murder.'], c: 0, fb: 'The photograph records the spiritual repatriation — a symbolic memorial near where Sizwe\'s remains were disposed of — giving the family a moment of closure decades later. Naming Pikoli\'s career, imagining an exhumation (there were no remains), or picturing a sentencing all miss why the image matters to the family.'},
  {id: 'q10', src: '2C', num: '2.3.2', m: 4, t: 'Using the information in the source and your own knowledge, comment on why Vusi Pikoli had joined the Kondile family.', lv: 2, ll: 'Interpretation', opts: ['Pikoli was Sizwe\'s close friend and former cell member who had fled with him to Lesotho, so he joined the family to support them and speak on their behalf.', 'Pikoli was the National Director of Public Prosecutions and had personally prosecuted many high-profile political cases during his long career in the law.', 'Pikoli joined the family because he was a distant cousin of Sizwe Kondile and the closest surviving relative who was able to attend the ceremony.', 'Pikoli joined the family in order to apply for amnesty from the TRC for his own part in the murder of Sizwe Kondile in 1981.'], c: 0, fb: 'Sources 2C and 2D show Pikoli \'speaking on behalf of the Kondile family\', and he \'had been Kondile\'s best friend\' and a fellow cell member who fled with him to Lesotho. He joined out of friendship and solidarity. His NDPP career is real but not the reason, and he was neither a relative nor a perpetrator seeking amnesty.'},
  {id: 'q11', src: '2C', num: '2.3.3', m: 2, t: 'Comment on whether you think the spiritual repatriation of Sizwe Kondile could have brought closure to his family for the lack of his burial.', lv: 2, ll: 'Interpretation', opts: ['Yes — the ritual let the family lay Sizwe\'s spiritual remains to rest, helping them to heal and find some peace 31 years after his death.', 'The photograph was taken at Komatipoort on 30 June 2016 and was then published in Eyewitness News on 1 July 2016.', 'No — because the police officers responsible were never identified, so the family could never know who had actually killed Sizwe.', 'No — the family refused to take part in the spiritual repatriation because they still did not trust the TRC process at all.'], c: 0, fb: 'The spiritual repatriation created an opportunity for the family to come to terms with their loss and find peace decades later, so it could bring a measure of closure. (A reasoned \'no\' — that a symbolic ritual with no remains cannot fully heal — is also creditable.) But the distractors either add no judgement or make false claims: the killers were named in Source 2B, and the family did take part.'},
  {id: 'q12', src: '2D', num: '2.4.1', m: 4, t: 'Quote, from the source, any FOUR ways indicating how Sizwe Kondile died at the hands of the police.', lv: 1, ll: 'Extraction', multi: true, mx: 4, opts: ['Poisoned', 'Tortured', 'Shot', 'Burnt', 'Strangled', 'Drowned'], c: [0, 1, 2, 3], fb: 'Source 2D opens: \'Poisoned, tortured, shot, burnt and bombed – this was how ... Sizwe Kondile ... died at the hands of apartheid police.\' Strangled and drowned are not among the ways the source lists, so they are the two to avoid.'},
  {id: 'q13', src: '2D', num: '2.4.2', m: 2, t: 'Comment on why a spiritual repatriation was necessary for the Kondile family.', lv: 2, ll: 'Interpretation', opts: ['Because Sizwe\'s body had been destroyed and never returned, the ritual symbolically brought his remains home so the family could have closure and a dignified farewell.', 'Because Michael Masutha, the Minister of Justice, wanted to approach Parliament with a concrete proposal to criminalise racism with jail time.', 'Because the family first needed to identify Sizwe\'s body properly before it could be released to them for a normal burial.', 'Because the apartheid government had buried Sizwe in the wrong grave and the family simply wanted him to be reburied correctly.'], c: 0, fb: 'Sizwe\'s body was burnt and never returned, so there could be no ordinary burial; the spiritual repatriation symbolically brought his remains home to give the family closure. Masutha\'s plan to criminalise racism is a real detail but not the reason, and there was no body to identify or to rebury.'},
  {id: 'q14', src: '2D', num: '2.4.3', m: 2, t: 'Why did Masutha believe the ceremony in 2016 was \'a moment of reflection for all of us\'?', lv: 2, ll: 'Interpretation', opts: ['It was a chance for all South Africans to reflect on apartheid\'s brutal human rights abuses and to resolve that such atrocities should never be repeated.', 'Because the ceremony was attended by the National Director of Public Prosecutions and one of his predecessors, Vusi Pikoli.', 'Because it marked the moment the police officers who had killed Sizwe were finally arrested and taken away to serve time in prison.', 'Because it publicly celebrated the many successful economic reforms that the democratic government had managed to achieve for everyone since 1994.'], c: 0, fb: 'Masutha framed the ceremony as a moment for South Africans \'across political ... religious and cultural persuasions and racial divides\' to reflect on apartheid\'s atrocities and commit to never repeating them. The guests present, an imagined arrest, or economic reforms all miss this reflective, reconciliatory meaning.'},
  {id: 'q15', src: '2D', num: '2.4.4', m: 4, t: 'Explain why a historian might consider this a reliable source for researching the symbolic burial of Sizwe Kondile.', lv: 3, ll: 'Reliability', opts: ['It is from a reputable media platform (IOL) and reports first-hand from Masutha\'s speech delivered on the day of the burial, and it can be corroborated with Source 2B.', 'It is reliable because it was written many years after apartheid ended, so the journalist had plenty of time to remove all personal bias from the account.', 'It is reliable because it is an eyewitness account written by a member of the Kondile family who personally attended the ceremony that day.', 'It is reliable because it correctly gives the date of the ceremony as 1 July 2016 and it also names the Freedom Park venue.'], c: 0, fb: 'The source\'s reliability rests on being a reputable IOL report drawing first-hand on Masutha\'s speech on the burial day, corroborated by Source 2B on Kondile\'s death. \'Written later so unbiased\' is a misconception, it was not written by the family, and simply getting the date and venue right is a thin basis for judging reliability.'},
  {id: 'q16', src: 'compare', num: '2.5', m: 4, t: 'Refer to Sources 2B and 2D. Explain how the information in Source 2D differs from the evidence in Source 2B regarding bringing closure to the Kondile family.', lv: 3, ll: 'Comparison', opts: ['In Source 2B the family rejects Coetzee\'s request for forgiveness and finds no closure, while in Source 2D they attend the spiritual repatriation and symbolic burial hoping for healing and closure.', 'The two sources say the same thing: both show the Kondile family angrily refusing to take part in any TRC or memorial process at all.', 'Source 2B names the three officers who admitted the murder and explains why they decided to kill Kondile after he had become an informer.', 'In Source 2D the family forgives the police officers in person, while in Source 2B they hold a symbolic burial for Sizwe at Freedom Park.'], c: 0, fb: 'The sources differ on closure: 2B shows Mrs Kondile refusing Coetzee\'s plea and finding no peace, whereas 2D shows the family attending the spiritual repatriation and symbolic burial in hope of healing. Claiming they are the same, using only 2B, or swapping which source shows what all misread the contrast.'},
  {id: 'q17', src: 'para', num: '2.6a', m: 2, t: 'Topic sentence — Which sentence best states a clear stance answering: \'Was the TRC able to bring closure to Sizwe Kondile\'s family?\'', lv: 3, ll: 'Synthesis', opts: ['The TRC brought the Kondile family only partial closure: it revealed the truth and enabled a symbolic burial, yet no justice or real remains left lasting pain.', 'Sizwe Kondile was a Port Elizabeth activist and a founder member of the Congress of South African Students during the 1980s.', 'The Truth and Reconciliation Commission was set up in 1995 to investigate the human rights abuses committed on all sides during apartheid.', 'The Kondile family were completely satisfied with the TRC process and freely forgave everyone who had been involved in Sizwe\'s death.'], c: 0, fb: 'A strong topic sentence takes a clear, defensible stance answering the question. The correct option argues partial closure — truth and a symbolic burial but no justice. Background on Kondile, a general description of the TRC, or the false claim that the family forgave everyone do not argue a position on closure.'},
  {id: 'q18', src: 'para', num: '2.6b', m: 2, t: 'Source evidence — Which option best uses specific evidence from the sources to support the stance?', lv: 3, ll: 'Synthesis', opts: ['Source 2B shows three officers admitting the murder and Mrs Kondile refusing to forgive, while Sources 2C and 2D show the family holding a symbolic burial at Freedom Park.', 'Source 1D shows the police shooting dead thirteen unarmed rent protestors in Mamelodi in November 1985 during the township rent boycotts.', 'The sources generally show that a great many sad and painful things happened to many different families during the years of apartheid rule.', 'Source 2A proves that Sizwe Kondile was definitely a traitor who had betrayed the whole ANC to the apartheid security police in 1981.'], c: 0, fb: 'Specific evidence for this question comes from 2B (officers admitting the murder, Mrs Kondile refusing forgiveness) and 2C/2D (the symbolic burial). Source 1D belongs to the rent-boycott question, \'many sad things\' cites nothing specific, and the ANC only suspected Kondile of betrayal — 2A does not prove it.'},
  {id: 'q19', src: 'para', num: '2.6c', m: 2, t: 'Own knowledge — Which fact from your own knowledge best strengthens the argument beyond what the sources say?', lv: 3, ll: 'Synthesis', opts: ['From own knowledge, the TRC granted amnesty in exchange for full disclosure, which is how the truth about Kondile\'s murder emerged even though his family got no criminal justice.', 'From own knowledge, Walmart\'s 2011 merger with Massmart went ahead despite the strong opposition it faced from South African trade unions.', 'From own knowledge, the TRC had the power to send every single perpetrator who confessed straight to prison for the rest of their life.', 'From own knowledge, Nelson Mandela was released from prison in 1990 and then became the country\'s first president in 1994 after democratic elections.'], c: 0, fb: 'Relevant own knowledge extends the closure argument: the TRC traded amnesty for full disclosure, which surfaced the truth about Kondile\'s death but denied the family criminal justice. Walmart and Mandela\'s release are real but off-topic, and the TRC did not jail those who confessed — that is the whole tension around closure.'},
  {id: 'q20', src: 'para', num: '2.6d', m: 2, t: 'Conclusion — Which sentence best concludes the paragraph by tying the evidence back to the question?', lv: 3, ll: 'Synthesis', opts: ['In the end the TRC gave the Kondiles truth and a dignified symbolic farewell, but without remains or justice its closure remained incomplete.', 'In conclusion, many things happened to the Kondile family and the TRC held a great many hearings about the apartheid past.', 'In conclusion, apartheid officially ended in 1994 when South Africa held its first fully democratic general elections for everyone.', 'In conclusion, the TRC completely failed and did absolutely nothing at all to help the Kondile family in any way whatsoever.'], c: 0, fb: 'A synthesising conclusion weighs both sides: truth and a symbolic farewell, but no remains or justice, so closure was incomplete. Simply saying \'many things happened\' adds no synthesis, the 1994 elections are an unlinked point, and claiming the TRC did nothing contradicts the symbolic burial the sources describe.'},
];

const MTA_ANSWERS = [
  {label: 'Answer A', text: 'The TRC did help to bring some closure to the Kondile family. In Source 2B three police officers admitted that they murdered Sizwe Kondile. Sources 2C and 2D show that the family had a spiritual repatriation and a symbolic burial at Freedom Park, which gave them a chance to say goodbye. But Mrs Kondile said in Source 2B that she could not forgive Dirk Coetzee. So the TRC brought the family some closure but not everything.', expLv: 0, expM: '?-5', crit: [{q: 'Does it have a clear topic sentence addressing the question?', cor: 'partial', exp: 'It states that the TRC brought \'some closure\' but does not sharply argue a position on whether closure was really achieved, so the stance is only half-formed.'}, {q: 'Does it use specific evidence from the sources?', cor: 'yes', exp: 'It cites Source 2B (officers admitting the murder), and 2C and 2D (the symbolic burial), so it does draw on specific source evidence.'}, {q: 'Does it include own knowledge beyond the sources?', cor: 'no', exp: 'It stays entirely within the sources; there is no outside fact, such as how TRC amnesty worked, added to deepen the argument.'}, {q: 'Does it explain WHY (analysis), not just WHAT (description)?', cor: 'partial', exp: 'It describes what happened and notes Mrs Kondile could not forgive, but does not really explain why the closure was only partial.'}, {q: 'Does it have a concluding sentence that synthesises?', cor: 'partial', exp: 'The closing line says closure was \'not everything\', which gestures at a conclusion but does not fully synthesise the evidence into a judgement.'}, {q: 'Is it a coherent paragraph, not a list of disconnected sentences?', cor: 'yes', exp: 'The sentences connect logically and read as a single paragraph rather than a disconnected list of points.'}]},
  {label: 'Answer B', text: 'The TRC brought the Kondile family only partial closure, because it uncovered the truth and enabled a symbolic burial but could not deliver justice or return Sizwe\'s remains. Source 2B shows three officers admitting the murder, yet Mrs Kondile refused to forgive Coetzee because true remorse would mean standing trial, not seeking amnesty. Sources 2C and 2D show the family finding some peace through the spiritual repatriation and symbolic burial at Freedom Park. From my own knowledge, the TRC granted amnesty in return for full disclosure, which is how the truth emerged even though no one was punished. Closure was therefore real but incomplete.', expLv: 0, expM: '?-8', crit: [{q: 'Does it have a clear topic sentence addressing the question?', cor: 'yes', exp: 'The first sentence takes a clear, defensible stance — partial closure — that directly answers the question.'}, {q: 'Does it use specific evidence from the sources?', cor: 'yes', exp: 'It cites 2B on the admissions and the refusal to forgive, and 2C/2D on the symbolic burial, all specific and relevant.'}, {q: 'Does it include own knowledge beyond the sources?', cor: 'yes', exp: 'It adds how TRC amnesty worked — disclosure in exchange for amnesty — a fact beyond the sources that sharpens the argument.'}, {q: 'Does it explain WHY (analysis), not just WHAT (description)?', cor: 'yes', exp: 'It explains why closure was incomplete — truth without justice or remains — rather than only listing what happened.'}, {q: 'Does it have a concluding sentence that synthesises?', cor: 'yes', exp: 'The final sentence synthesises the evidence into the judgement that closure was \'real but incomplete\', tying back to the question.'}, {q: 'Is it a coherent paragraph, not a list of disconnected sentences?', cor: 'yes', exp: 'It is tightly structured, moving from stance to evidence to own knowledge to conclusion as one coherent paragraph.'}]},
];

/* ═══ KULA LEARN BRIDGE ═══
   Reports results to a parent Kula Learn page via postMessage.
   See project doc: Kula_Revise_results_payload_spec.md (spec v1).
   KR_META is injected by build.py from paper.json meta. The bridge is
   inert unless (a) identity fields are present, (b) the page is inside
   an iframe, and (c) the host origin was passed as ?host=<origin>.   */
const KR_META = {interactiveId: 'history-p2-2024-nov-q2', paper: 'P2', section: 'A', questionNumber: 2, paperRef: 'DBE November 2024'};
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
