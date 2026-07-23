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
    type: 'Biography Extract',
    html: `<div class="sp-body">&hellip; The National Party supported the idea of a Truth and Reconciliation Commission (TRC) in order to avoid responsibility. Their approach was built around the concept of amnesty. In their view, a disclosure of past misdeeds should be rewarded with exemption (exclusion) from prosecution. It wasn't that simple; black South Africans were entirely justified in their demand for explanations. Furthermore, the vehicle of their liberation, the African National Congress (ANC), was now in power. The scope and nature of the commission would be determined by Mandela and his government.<br><br>The Truth and Reconciliation Commission (TRC) followed the passing of the Promotion of National Unity and Reconciliation Act in 1995. Three committees were set up to carry the commission's mandate, described by the Minister of Justice, Dullah Omar, as 'a necessary exercise to enable South Africans to come to terms with their past on a morally accepted basis and to advance the cause of reconciliation'.<br><br>FW de Klerk maintains that he was of the opinion that a process was required in order to enable South Africans to come to terms with the conflict of the past in a spirit of reconciliation and to get on with the future without recriminations (accusations). He is known to have favoured a general amnesty for perpetrators of politically inspired violence. A general amnesty went very much against ANC thinking. It is now common knowledge that appalling (terrible) atrocities (crimes) were committed in the name of state security, particularly in the closing years of PW Botha's presidency. But how could FW de Klerk, a senior member of cabinet, not have been aware of the atrocities that were being committed; there was surely a collective complicity (involvement) at cabinet level.</div>`,
    attr: 'From <em>A Question of Balance: A Biography of FW de Klerk</em> by J Cameron-Dow'
  },
  '2B': {
    label: 'Source 2B',
    type: 'Historical Account',
    html: `<div class="sp-body">Having laid down its criteria on accountability, the TRC delivered its verdict on the principal protagonists (characters). It was Botha's government in the late 1970s, the Truth and Reconciliation Commission (TRC) declared, that had entered the 'realm of criminal misconduct'. Previous governments had ruled by repression but Botha's government had adopted a policy of killing its opponents. It was also responsible for the widespread use of torture, abduction, arson and sabotage. At meetings of the State Security Council, leading members, including Botha, Malan, Vlok and the heads of the security forces, had used terminology like 'eliminate, take out and wipe out', knowing full well this would result in the killing of political opponents.<br><br>The 'realm (scope) of criminal misconduct' extended into FW de Klerk's period in office. The TRC was highly critical of FW de Klerk's failure to tackle the problem of the 'third force' &ndash; a network of security force members and right-wing groups seeking to wreck (ruin) any transition that would lead to an African National Congress (ANC) government. Though it acknowledged that FW de Klerk had taken steps to dismantle the national security management system he had inherited from Botha, the TRC said he had made 'little obvious attempts to curb (control) third force activities', and had ignored pleas from senior officers like General Steyn, the Defence Force Chief of Staff, to institute a thorough investigation. He had failed to take action, concluded the TRC 'either deliberately or by omission'.<br><br>The TRC cited (mentioned) testimony it had heard that FW de Klerk was aware that his commissioner of police, Van der Merwe, had been involved in illegal activity regarding the bombing of Khotso House and yet continued to retain his position as the most senior policeman in the country.</div>`,
    attr: 'From <em>Coming to Terms - South Africa\'s Search for Truth</em> by M Meredith'
  },
  '2C': {
    label: 'Source 2C',
    type: 'Political Cartoon',
    html: `<img class="sp-img" src="2C.png" alt="A black-and-white cartoon. On a pier, a crane labelled 'AMNESTY PROCESS' hoists a fish up towards a cart labelled 'TRC' that is already filled with small fish. A small figure operating the crane says 'FINALLY, A BIG ONE!' Beside him a bearded figure holding a fishing rod says 'YOU SHOULD HAVE SEEN THE ONES THAT GOT AWAY ...'. In the water below swim five large fish with human faces; label boxes connect them to the names FW de Klerk, Adriaan Vlok, PW Botha, Pik Botha and Magnus Malan. Signed Zapiro, 2-8-98.">`,
    attr: 'Cartoon by Zapiro, first published in the <em>Sunday Times</em>, 2 August 1998. From <em>Truth and Reconciliation in South Africa: 10 Years on</em> by C Villa-Vicencio and F du Toit'
  },
  '2D': {
    label: 'Source 2D',
    type: 'Confession / Memoir',
    html: `<div class="sp-body">The leader of the Democratic Party, Tony Leon, summed it up when he said that it seemed as though the National Party was turning its back on the foot soldiers who, encouraged by their political leaders, had committed acts of terror against the South African people.<br><br>Johan van der Merwe later turned on his former masters and admitted that FW de Klerk had, indeed, been briefed on all secret projects during the last four years of his government. Van der Merwe had, however, set himself up against former members of the South African Police (SAP) too, by putting his name on the indemnity (protection) list of 3 500 police officers whom FW de Klerk had approved just before being replaced by Mandela in the April 1994 election. As an expression of solidarity (unity) with the SAP of his era, FW de Klerk had placed his own name on that list too.<br><br>When it was reported that FW de Klerk, some ex-ministers and generals involved with the State Security Council had already met on three occasions and were planning the fourth meeting to prepare themselves for what must have felt like the coming onslaught of the Truth and Reconciliation Commission (TRC), I felt that old fury (anger) burning bright as ever inside me. Surely the concept of a truth commission was that each individual goes before the commission and tells their story alone, because that is what they chose to do &ndash; for whatever reason.<br><br>We, the foot soldiers, were embattled (affected), not so much by our consciences, but by the fact that we had been disregarded and discarded (rejected), thrown away by those who represented a government that had employed us to kill, maim (cut into pieces) and torture. This is the truth. We simply could not get over it.</div>`,
    attr: 'From <em>Confessions of a Stratcom Hitman</em> by P Erasmus'
  },
  'compare': {
    label: 'Sources 2C + 2D',
    type: 'Comparison',
    html: `<img class="sp-img" src="2C.png" alt="The Zapiro cartoon from Source 2C: a crane labelled 'AMNESTY PROCESS' lifts one fish into a cart labelled 'TRC', a figure says 'FINALLY, A BIG ONE!' and another says 'YOU SHOULD HAVE SEEN THE ONES THAT GOT AWAY ...', while five large fish with the faces of FW de Klerk, Adriaan Vlok, PW Botha, Pik Botha and Magnus Malan swim in the water below."><div class="sp-body" style="margin-top:14px;"><strong>Source 2D (extract):</strong> &hellip; When it was reported that FW de Klerk, some ex-ministers and generals involved with the State Security Council had already met on three occasions and were planning the fourth meeting to prepare themselves for &hellip; the coming onslaught of the &hellip; (TRC), I felt that old fury &hellip; Surely the concept of a truth commission was that each individual goes before the commission and tells their story alone &hellip; We, the foot soldiers &hellip; had been disregarded and discarded (rejected), thrown away by those who represented a government that had employed us to kill, maim and torture.</div>`,
    attr: 'Re-read both sources, then explain how they connect.'
  },
  'para': {
    label: 'Paragraph Task',
    type: 'Q2.6, 8 marks',
    html: `<div class="sp-body">Q2.6 (8 marks). Using the information in the relevant sources and your own knowledge, write a paragraph of about EIGHT lines (about 80 words) explaining how the Truth and Reconciliation Commission (TRC) exposed leaders of the apartheid government for gross violations of human rights committed between 1960 and 1994. Build your paragraph in four steps: a topic sentence, source evidence, own knowledge, and a conclusion.</div>`,
    attr: 'Synthesis: build the paragraph one step at a time.'
  },
  'mta': {
    label: 'Mark This Answer',
    type: 'Evaluative Task',
    html: `<div class="sp-body">Below are two learner paragraphs answering Q2.6: how did the TRC expose leaders of the apartheid government for gross violations of human rights committed between 1960 and 1994? Read each one and judge it against the six marking criteria a real examiner would use.</div>`,
    attr: 'Score each paragraph against the six criteria.'
  },
};

const QS = [
  {id: 'q1', src: '2A', num: '2.1.1', m: 2, t: 'According to the source, why did the National Party support the idea of the Truth and Reconciliation Commission (TRC)?', lv: 1, ll: 'Extraction', opts: ['It supported the TRC in order to avoid responsibility for its past misdeeds', 'It wanted Mandela and his government to determine the commission\'s scope and nature', 'It hoped to come to terms with the past and advance the cause of reconciliation', 'It believed that a general amnesty went very much against the thinking of the ANC'], c: 0, fb: 'Source 2A states plainly that the National Party backed the TRC \'in order to avoid responsibility\', hoping disclosure would earn amnesty. The other statements come from the source but describe the ANC\'s role, Dullah Omar\'s reconciliation aim, or ANC thinking - not the NP\'s motive.'},
  {id: 'q2', src: '2A', num: '2.1.2', m: 2, t: 'Define the term amnesty in your own words.', lv: 1, ll: 'Concept', opts: ['An official pardon that frees a perpetrator from prosecution for a politically motivated crime in return for full disclosure', 'A process of bringing victims and perpetrators together so that a divided society can heal and be reconciled', 'A financial payment made by the state to compensate the victims of past gross human rights violations', 'A formal criminal trial in which perpetrators of politically motivated violence are convicted and then sentenced'], c: 0, fb: 'Amnesty is a pardon exempting a perpetrator from prosecution in return for disclosing a politically motivated crime. Do not confuse it with reconciliation (healing a divided society), reparations (compensating victims), or prosecution (trial and sentence) - amnesty is the opposite of the last.'},
  {id: 'q3', src: '2A', num: '2.1.3', m: 2, t: 'Why do you think black South Africans demanded explanations from perpetrators, and not only disclosure by the National Party?', lv: 2, ll: 'Interpretation', opts: ['They wanted the truth directly from those who committed the crimes so that victims and families could find real closure', 'They wanted Mandela and his government to determine the scope and nature of the commission investigating the past', 'They believed that only a general amnesty for all perpetrators could bring genuine reconciliation to the country', 'They demanded financial compensation from the National Party rather than any personal testimony from individual perpetrators'], c: 0, fb: 'Victims and families needed the specific truth from the individuals responsible to gain closure - a party-level disclosure would not name who did what. They were not asking Mandela to set the commission\'s scope, backing a general amnesty (which the ANC opposed), or demanding money instead of testimony.'},
  {id: 'q4', src: '2A', num: '2.1.4', m: 4, t: 'Explain the implication of the statement of the Minister of Justice, Dullah Omar, about the TRC: \'... to enable South Africans to come to terms with their past ... to advance the cause of reconciliation\'.', lv: 2, ll: 'Interpretation', opts: ['It implies that South Africans had to confront the truth about past atrocities openly, through a shared platform, so victims and perpetrators could reach healing and reconciliation', 'It implies that the Promotion of National Unity and Reconciliation Act was passed in 1995 and that three committees were set up to carry the TRC\'s mandate', 'It implies that South Africans should forget the past entirely and simply move on to the future without ever examining what had really happened', 'It implies that only the perpetrators, and not the victims, needed to appear before the commission in order to tell their stories'], c: 0, fb: '\'Coming to terms with the past to advance reconciliation\' means confronting the truth of atrocities so the nation can heal - not forgetting the past, and not hearing only perpetrators. The Act\'s date and committees are facts from the source, not the meaning of Omar\'s words.'},
  {id: 'q5', src: '2A', num: '2.1.5a', m: 1, t: 'What, according to the source, was De Klerk\'s opinion regarding the granting of general amnesty by the TRC?', lv: 1, ll: 'Extraction', opts: ['He favoured a general amnesty for perpetrators of politically inspired violence', 'He was strongly opposed to any form of amnesty for the apartheid security forces', 'He believed the ANC alone should determine the scope of the amnesty process', 'He demanded that all perpetrators face criminal prosecution without any exception'], c: 0, fb: 'Source 2A states De Klerk \'favoured a general amnesty for perpetrators of politically inspired violence\'. He did not oppose amnesty or demand prosecutions, and setting the commission\'s scope was a matter for Mandela\'s government, not his amnesty opinion.'},
  {id: 'q6', src: '2A', num: '2.1.5b', m: 1, t: 'What, according to the source, was the ANC\'s opinion regarding the granting of general amnesty by the TRC?', lv: 1, ll: 'Extraction', opts: ['A general amnesty went very much against ANC thinking', 'The ANC strongly supported a general amnesty for all perpetrators', 'The ANC wanted De Klerk himself to be granted a special amnesty', 'The ANC insisted that amnesty should be decided by the National Party'], c: 0, fb: 'The source is explicit: \'A general amnesty went very much against ANC thinking.\' The ANC, now in power, opposed blanket amnesty - it did not support it, seek to shield De Klerk, or leave the decision to the National Party.'},
  {id: 'q7', src: '2B', num: '2.2.1', m: 3, t: 'Quote THREE pieces of evidence from the source suggesting that Botha\'s government entered the \'realm of criminal misconduct\' in the late 1970s.', lv: 1, ll: 'Extraction', multi: true, mx: 3, opts: ['Botha\'s government \'had adopted a policy of killing its opponents\'', 'It was \'responsible for the widespread use of torture, abduction, arson and sabotage\'', 'Its leaders used terminology like \'eliminate, take out and wipe out\'', 'It \'had taken steps to dismantle the national security management system\'', 'It made \'little obvious attempts to curb third force activities\''], c: [0, 1, 2], fb: 'The misconduct evidence is Botha\'s \'policy of killing its opponents\', the \'torture, abduction, arson and sabotage\', and the \'eliminate, take out and wipe out\' terminology. Dismantling the security system and the \'little attempts to curb the third force\' describe FW de Klerk\'s later period, not Botha\'s.'},
  {id: 'q8', src: '2B', num: '2.2.2', m: 2, t: 'Explain the term third force in the context of the apartheid government\'s way of dealing with the ANC.', lv: 2, ll: 'Concept', opts: ['A covert network of security-force members and right-wing groups that used violence to wreck any transition to an ANC government', 'The official South African Defence Force deployed openly to defend the country\'s borders against attack from outside', 'A peacekeeping unit created by the TRC to investigate the human rights violations committed during the apartheid era', 'A coalition of ANC and National Party negotiators formed to oversee the peaceful transition to democracy'], c: 0, fb: 'The third force was a hidden network of security operatives and right-wing groups using violence to derail the move to ANC rule. It was not the regular Defence Force, a TRC investigative unit, or a negotiating coalition - it worked covertly to sabotage the transition.'},
  {id: 'q9', src: '2B', num: '2.2.3', m: 4, t: 'Comment on why you think De Klerk did not act on the allegations, made by General Steyn, of third force activities.', lv: 2, ll: 'Interpretation', opts: ['Because the third force was weakening the ANC and backed the National Party, so investigating it would have exposed the NP\'s complicity and split his own party', 'Because the Promotion of National Unity and Reconciliation Act had not yet been passed, so there was no legal body available to investigate the claims', 'Because De Klerk had already fully dismantled the national security management system and believed that the third force no longer existed at all', 'Because General Steyn was himself a member of the ANC whose allegations De Klerk dismissed as politically motivated propaganda against the party'], c: 0, fb: 'Acting on Steyn\'s warnings would have exposed how the NP\'s own security network fuelled violence against the ANC and could have fractured De Klerk\'s party - so he ignored them \'deliberately or by omission\'. Steyn was his Defence Force chief, not ANC, and the third force had not been dismantled.'},
  {id: 'q10', src: '2B', num: '2.2.4', m: 1, t: 'Who, according to the source, was involved in the bombing of Khotso House?', lv: 1, ll: 'Extraction', opts: ['The commissioner of police, Van der Merwe', 'General Steyn, the Defence Force Chief of Staff', 'PW Botha, the former State President', 'Adriaan Vlok, the Minister of Law and Order'], c: 0, fb: 'Source 2B names De Klerk\'s \'commissioner of police, Van der Merwe\' as involved in the Khotso House bombing. Steyn actually urged an investigation, while Botha and Vlok, though implicated in wider misconduct, are not named for this bombing in the source.'},
  {id: 'q11', src: '2C', num: '2.3.1', m: 2, t: 'Explain the significance of the phrase, \'FINALLY, A BIG ONE!\', in the context of the amnesty process.', lv: 2, ll: 'Interpretation', opts: ['It suggests that, at last, one senior apartheid figure - a \'big fish\' - had actually been caught by the amnesty process, unlike the many who escaped it', 'It suggests that the TRC had already caught a very large number of apartheid perpetrators and that its work was now nearly complete', 'It suggests that the amnesty process was managing to catch only the most junior foot soldiers of the apartheid state', 'It suggests that the biggest apartheid leaders of all were eagerly queuing up in person to confess before the TRC\'s amnesty committee'], c: 0, fb: 'The \'big one\' is a senior apartheid leader finally hauled in by the amnesty process, in contrast to the small fish already caught and the big fish shown escaping. It does not mean the leaders were confessing willingly or that the TRC had already netted most perpetrators.'},
  {id: 'q12', src: '2C', num: '2.3.2', m: 4, t: 'What is the implication of Tutu\'s words, \'YOU SHOULD HAVE SEEN THE ONES THAT GOT AWAY ...\', regarding the TRC process?', lv: 2, ll: 'Interpretation', opts: ['It implies that many guilty apartheid leaders evaded the TRC entirely, refusing to cooperate, and that Tutu had no power to compel them to account for their crimes', 'It implies that Adriaan Vlok was the only apartheid minister who ever appeared before the Amnesty Committee of the TRC', 'It implies that the apartheid leaders who escaped had genuinely done nothing wrong and so had no real reason to appear', 'It implies that Tutu had successfully prosecuted and imprisoned the most senior apartheid leaders for the crimes they had committed'], c: 0, fb: 'The \'ones that got away\' are the many guilty leaders who dodged the TRC, whom Tutu could not force to appear. It is not about Vlok being the only one caught, nor that the escapees were innocent, and the TRC did not prosecute or jail anyone - it was not a court.'},
  {id: 'q13', src: '2D', num: '2.4.1', m: 2, t: 'What, according to the source, was T Leon\'s view of how the National Party treated their foot soldiers?', lv: 1, ll: 'Extraction', opts: ['That the National Party was turning its back on the foot soldiers', 'That the National Party was generously rewarding the foot soldiers for their loyal service', 'That the foot soldiers had acted entirely on their own without any orders from above', 'That the National Party leaders were appearing before the TRC alongside the foot soldiers'], c: 0, fb: 'Tony Leon said the NP \'was turning its back on the foot soldiers\' who had acted on their leaders\' encouragement. It was not rewarding them, and the source\'s whole point is that the leaders distanced themselves rather than standing with them before the TRC.'},
  {id: 'q14', src: '2D', num: '2.4.2', m: 2, t: 'Why, according to the source, did P Erasmus mention, \'... I felt that old fury (anger) burning bright as ever inside me\', regarding the meetings between ex-ministers, generals and the State Security Council on how to deal with the TRC?', lv: 1, ll: 'Extraction', opts: ['Because the ex-ministers and generals had met three times and were planning a fourth to prepare together for the TRC, instead of each appearing alone', 'Because the apartheid foot soldiers themselves had all flatly refused to appear before the Truth and Reconciliation Commission at all', 'Because FW de Klerk had quietly removed his own name from the indemnity list of three thousand five hundred police officers', 'Because Van der Merwe had publicly denied that FW de Klerk had ever been briefed on any of the government\'s secret projects'], c: 0, fb: 'Erasmus\'s fury came from the leaders meeting collectively to coordinate their response to the TRC, when the commission was meant for each individual to tell their own story alone. The foot soldiers did appear, and De Klerk added rather than removed his name from the indemnity list.'},
  {id: 'q15', src: '2D', num: '2.4.3', m: 2, t: 'Comment on why the foot soldiers felt thrown away by the leadership of the government that employed them.', lv: 2, ll: 'Interpretation', opts: ['Because the leaders who had ordered their crimes distanced themselves and left the foot soldiers to face the TRC alone, unprotected and betrayed', 'Because Van der Merwe admitted that FW de Klerk had been briefed on all secret projects during his last four years in office', 'Because the foot soldiers were denied amnesty while every single one of their political leaders was quietly granted a full pardon', 'Because the foot soldiers had never actually received any orders and had in fact acted entirely on their own initiative'], c: 0, fb: 'The foot soldiers felt discarded because the leaders who had encouraged their crimes turned their backs and left them to answer to the TRC alone. It was not about De Klerk\'s briefings, a blanket pardon of all leaders, or the false idea that they had acted without orders.'},
  {id: 'q16', src: '2D', num: '2.4.4', m: 4, t: 'Why would a historian regard this source as reliable when researching the accountability of the National Party leadership to the TRC processes?', lv: 3, ll: 'Reliability', opts: ['It is reliable because Erasmus was a Security Branch insider giving first-hand testimony corroborated by Sources 2B and 2C, though as a confession by an implicated participant it also carries personal bias', 'It is reliable because it was written by a neutral foreign journalist with no involvement in apartheid, though it is limited by being published many years after the events took place', 'It is reliable because it is an official TRC report presenting the commission\'s own verdict, though it is limited to reflecting the perspective of the victims only', 'It is reliable because it records the sworn testimony of FW de Klerk himself before the amnesty committee, though it is limited by his obvious wish to protect his reputation'], c: 0, fb: 'The genuine strength is that Erasmus was an inside participant giving first-hand evidence that 2B and 2C corroborate; the honest limitation is his own bias as an implicated confessor. He was not a neutral journalist, the source is not a TRC report, and it is not De Klerk\'s testimony.'},
  {id: 'q17', src: 'compare', num: '2.5', m: 4, t: 'Refer to Sources 2C and 2D. Explain how the information in Source 2C supports the evidence in Source 2D regarding how the leadership of the apartheid government avoided accountability during the TRC hearings.', lv: 3, ll: 'Comparison', opts: ['Both show the leaders dodging accountability: Source 2C\'s cartoon has the \'big fish\' leaders escaping the amnesty net while only small fry are caught, and Source 2D describes those same leaders meeting secretly to coordinate their response to the TRC rather than testifying alone', 'The sources contradict each other: Source 2C shows the apartheid leaders being caught and held fully accountable, while Source 2D shows those very same leaders willingly testifying as individuals before the commission and accepting responsibility', 'Both sources focus only on the passing of the Promotion of National Unity and Reconciliation Act in 1995 and on the setting up of the TRC\'s three separate committees to carry out its mandate', 'Source 2C proves the foot soldiers escaped punishment, and Source 2D proves the senior leaders were all convicted and imprisoned, so together the two sources show that full justice was eventually done'], c: 0, fb: 'Both sources point to leaders evading accountability: 2C\'s cartoon shows the big fish escaping while small fry are netted, and 2D shows the leaders meeting to coordinate against the TRC rather than appearing individually. They reinforce each other; they do not contradict, are not about the 1995 Act, and neither shows the leaders being convicted.'},
  {id: 'q18', src: 'para', num: '2.6a', m: 2, t: 'Step 1 - Topic sentence. Which sentence best states an argument that directly answers the question: how did the TRC expose leaders of the apartheid government for gross human rights violations committed between 1960 and 1994?', lv: 3, ll: 'Synthesis', opts: ['Through its hearings and findings the TRC publicly exposed the apartheid government\'s leaders as directly responsible for gross human rights violations committed between 1960 and 1994', 'The Truth and Reconciliation Commission was set up in 1995 under the Promotion of National Unity and Reconciliation Act to investigate the apartheid past', 'The National Party supported the idea of a Truth and Reconciliation Commission because it hoped that disclosure of the past would be rewarded with amnesty', 'The TRC found that the apartheid leaders were entirely innocent and that only a few junior policemen had actually broken the law during apartheid'], c: 0, fb: 'A topic sentence must state an argument that answers \'how\'. The strong option names the TRC exposing leaders as responsible for violations. The others give background about the TRC\'s origins or the NP\'s motive, or make a claim the sources flatly contradict.'},
  {id: 'q19', src: 'para', num: '2.6b', m: 2, t: 'Step 2 - Source evidence. Which option best uses specific evidence from the sources to support that argument?', lv: 3, ll: 'Synthesis', opts: ['Source 2B records the TRC declaring Botha\'s government guilty of \'killing its opponents\', torture and sabotage, while Sources 2C and 2D show leaders like Vlok caught as others evaded the amnesty process', 'The Freedom Charter of 1955 declared that all national groups would have equal rights in a democratic and non-racial South Africa of the future', 'The sources generally show that some bad and unpleasant things happened across South Africa during the long years of apartheid rule before 1994 arrived', 'Source 2A proves that the ANC leadership fully and openly supported the granting of a general amnesty for all of the apartheid government\'s own perpetrators'], c: 0, fb: 'Good evidence quotes the actual sources: 2B\'s TRC verdict on Botha\'s government, and 2C/2D on leaders caught or evading amnesty. The Freedom Charter, a vague statement, or a misread of 2A (the ANC opposed general amnesty) do not support the argument with source-specific proof.'},
  {id: 'q20', src: 'para', num: '2.6c', m: 2, t: 'Step 3 - Own knowledge. Which fact from your own knowledge best strengthens the paragraph beyond what the sources say?', lv: 3, ll: 'Synthesis', opts: ['Beyond the sources, the TRC\'s public amnesty hearings were broadcast nationally, and figures such as Eugene de Kock gave testimony that implicated senior political and security leaders', 'The Soviet leader Mikhail Gorbachev introduced the reforms of perestroika and glasnost in the Soviet Union during the mid-1980s', 'The Natives Land Act of 1913 restricted African land ownership to a small fraction of South Africa\'s total territory', 'The TRC put all of the apartheid cabinet ministers on trial and then sentenced every one of them to long prison terms'], c: 0, fb: 'Relevant own knowledge extends the sources on the same topic - here the televised hearings and testimony like De Kock\'s that named senior leaders. Gorbachev and the Land Act belong to different topics, and the TRC was not a court that tried and jailed ministers.'},
  {id: 'q21', src: 'para', num: '2.6d', m: 2, t: 'Step 4 - Conclusion. Which sentence best concludes the paragraph by tying the evidence back to the question?', lv: 3, ll: 'Synthesis', opts: ['In short, by compelling disclosure and publishing its findings, the TRC stripped away deniability and exposed the apartheid leadership\'s responsibility for decades of gross human rights violations', 'In conclusion, the TRC was established in 1995 and was chaired by Archbishop Desmond Tutu after the end of apartheid rule', 'In conclusion, the TRC showed that the apartheid leaders bore no responsibility at all for the gross violations of the past', 'In conclusion, the TRC single-handedly ended apartheid altogether and brought about South Africa\'s very first fully democratic national elections in the year 1994'], c: 0, fb: 'A conclusion should synthesise the argument and return to the question. The strong option restates how the TRC exposed the leadership\'s responsibility. The others merely repeat facts, contradict the evidence, or overclaim that the TRC alone ended apartheid.'},
];

const MTA_ANSWERS = [
  {label: 'Answer A', text: 'The Truth and Reconciliation Commission was set up to look at what happened during apartheid. Source 2B says that the TRC found Botha\'s government had a policy of killing its opponents and used torture and sabotage. Source 2C is a cartoon that shows apartheid leaders as fish, and some of them got away from the amnesty process. This shows that the TRC tried to expose the leaders. Many of them did not want to take responsibility for what they had done.', expLv: 0, expM: '?-5', crit: [{q: 'Does it have a clear topic sentence addressing the question?', cor: 'partial', exp: 'It opens by describing what the TRC was set up to do rather than clearly stating HOW it exposed the leaders; the argument only appears near the end.'}, {q: 'Does it use specific evidence from the sources?', cor: 'yes', exp: 'It cites Source 2B\'s finding on Botha\'s government and Source 2C\'s cartoon of leaders escaping amnesty, so it uses specific source evidence.'}, {q: 'Does it include own knowledge beyond the sources?', cor: 'no', exp: 'It stays inside the sources and adds no outside knowledge, such as the nationally televised hearings or named testimony.'}, {q: 'Does it explain WHY (analysis), not just WHAT (description)?', cor: 'no', exp: 'It describes what the TRC found but does not explain WHY this exposed the leaders or how they avoided accountability.'}, {q: 'Does it have a concluding sentence that synthesises?', cor: 'partial', exp: 'The final sentences restate that leaders avoided responsibility but add little real synthesis beyond the description.'}, {q: 'Is it a coherent paragraph, not a list of disconnected sentences?', cor: 'yes', exp: 'The sentences follow a logical order and read as a connected paragraph, even though the writing is simple.'}]},
  {label: 'Answer B', text: 'The TRC exposed the apartheid government\'s leaders as responsible for gross human rights violations by forcing their crimes into the open. It declared that Botha\'s government had entered the \'realm of criminal misconduct\', adopting a \'policy of killing its opponents\' and using torture, abduction and sabotage (Source 2B), and it held De Klerk accountable for ignoring the third force. Zapiro\'s cartoon shows senior leaders as \'big fish\' escaping the amnesty net while only small fry were caught (Source 2C), and Erasmus reveals that ex-ministers met secretly to coordinate their story rather than testify alone (Source 2D). Beyond the sources, the nationally televised hearings made this evidence public, so the commission stripped the leadership of deniability and named their responsibility for decades of abuses.', expLv: 0, expM: '?-8', crit: [{q: 'Does it have a clear topic sentence addressing the question?', cor: 'yes', exp: 'The opening sentence directly states the argument: the TRC exposed the leaders by forcing their crimes into the open.'}, {q: 'Does it use specific evidence from the sources?', cor: 'yes', exp: 'It draws specific evidence from Sources 2B, 2C and 2D, including the \'realm of criminal misconduct\' verdict and the amnesty cartoon.'}, {q: 'Does it include own knowledge beyond the sources?', cor: 'yes', exp: 'It adds outside knowledge - the nationally televised hearings - beyond what the sources themselves provide.'}, {q: 'Does it explain WHY (analysis), not just WHAT (description)?', cor: 'yes', exp: 'It explains why the evidence exposed the leaders, linking the findings and the secret meetings to their avoidance of accountability.'}, {q: 'Does it have a concluding sentence that synthesises?', cor: 'yes', exp: 'The closing sentence synthesises the evidence, showing how the TRC stripped the leadership of deniability.'}, {q: 'Is it a coherent paragraph, not a list of disconnected sentences?', cor: 'yes', exp: 'The paragraph is well structured and flows as a single, coherent argument from claim to conclusion.'}]},
];

/* ═══ KULA LEARN BRIDGE ═══
   Reports results to a parent Kula Learn page via postMessage.
   See project doc: Kula_Revise_results_payload_spec.md (spec v1).
   KR_META is injected by build.py from paper.json meta. The bridge is
   inert unless (a) identity fields are present, (b) the page is inside
   an iframe, and (c) the host origin was passed as ?host=<origin>.   */
const KR_META = {interactiveId: 'history-p2-2023-nov-q2', paper: 'P2', section: 'A', questionNumber: 2, paperRef: 'DBE November 2023'};
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
