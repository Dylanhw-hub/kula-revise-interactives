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
    html: `<div class="sp-body"><em>The extract below was taken from an article titled, 'The Struggle: Power and Politics in South Africa's Black Trade Unions', written by A Cowell, a journalist, and appeared in The New York Times magazine on 15 June 1986. It sheds light on the formation of COSATU in 1985.</em><br><br>In November 1985, more than 33 unions joined together to form the Congress of South African Trade Unions (COSATU), the largest federation (grouping) of black workers in South African history, with a total membership of some 500 000 workers.<br><br>Far from being tamed (obedient), COSATU and other black labour groups have sought (wanted) the political high ground in what unionists' call 'the struggle' against white rule, desperately seeking to catch up with the protests of the youthful and violent black radicals of the townships. COSATU has forged (established) important links with the United Democratic Front, the largest non-parliamentary opposition group in the country, and has allied itself to the aims, if not formally to the structures, of the banned and exiled African National Congress, which is dedicated to overthrowing the white government by force.<br><br>In a country that is Africa's most industrialised nation, the challenge now posed by the black unions is profound (overpowering); holding out the possibility of a large-scale withdrawal of labour from a modern economy that is increasingly dependent on black skills. Farm and domestic workers are not protected under South Africa's new labour laws. In other areas, from the country's textile mills to its steelworks, the unions are strong and growing. And, in the critical mining industries, labour leaders claim the support of almost half the 600 000-man black work force.</div>`,
    attr: 'A Cowell, \'The Struggle: Power and Politics in South Africa\'s Black Trade Unions\', The New York Times magazine, 15 June 1986'
  },
  '1B': {
    label: 'Source 1B',
    type: 'Photograph',
    html: `<div class="sp-body"><em>The photograph below was taken during a rally organised by the Congress of South African Trade Unions (COSATU) in the Western Cape on 1 May 1986. It shows workers participating in a protest under the banner of the Commercial, Catering and Allied Workers Union of South Africa (CCAWUSA), which was an affiliate of COSATU.</em></div><img class="sp-img" src="1B.png" alt="Black-and-white photograph of a large, dense crowd of workers at an indoor rally. Many people in the front raise clenched fists. Behind them is a placard reading CCAWUSA showing a row of figures, and a large banner reading FORWARD WITH THE WORKERS' STRUGGLE. Overlaid label boxes point to the clenched fists, the banner and the CCAWUSA placard.">`,
    attr: 'From History of Trade Unionism in South Africa by L Gentle, et al., 2018'
  },
  '1C': {
    label: 'Source 1C',
    type: 'Memoir Extract',
    html: `<div class="sp-body"><em>The extract below was taken from a memoir, War in Peace: The Truth about the South African Police's East Rand Riot Unit 1986-1994, written by N Howarth, a former East Rand Riot Squad member. It explains how the crowd control riot unit clashed with COSATU members who were conducting a living wage campaign at the Germiston railway station in March 1987.</em><br><br>COSATU members had been out on strike for several weeks in March 1987 over grievances that none of us either understood or cared about. It turned out they were conducting a 'living wage' campaign heavily backed by the African National Congress (ANC). There was a security clampdown on all such activities but this didn't bother COSATU, which was busy organising and mobilising union members to take part in the campaign. This added to the number of strikes and stoppages around the country that were already crippling (weakening) the South African economy. A large percentage of the strikers, some 18 000, belonged to South African Transport (SAT).<br><br>I was part of a group of 14 young recruits, none older than myself, who had formed a line at the top of the stairs that led up to the station platform from an underground tunnel. The thunder of political jingles (struggle songs) being sung in the deep angry voices of 300 strikers resonated (echoed) down the tunnel and up the stairway towards us. At first, we could not see them, but the sound almost scared the life out of me. Then they appeared at the bottom of the stairs and swung in our directions. It was a terrifying sight. They were armed with knobkerries, whips, knives and a whole variety of vicious (dangerous) weapons.<br><br>We clashed with the mob in hand-to-hand fighting. I was stabbed in the arm without even knowing it and there was blood all over me. Nevertheless, the physical damage was minor. I punched, kicked and fought with everything I had. Fortunately, the crowd began to disperse (go away) as we got the better of them. The next day COSATU held a meeting at the World Centre in Germiston, which was about 500 metres down the road from the railway station.</div>`,
    attr: 'From War in Peace: The Truth about the South African Police\'s East Rand Riot Unit 1986-1994 by N Howarth, 2012'
  },
  '1D': {
    label: 'Source 1D',
    type: 'Book Extract',
    html: `<div class="sp-body"><em>The source below was extracted from a book titled Confessions of a STRATCOM Hitman, by P Erasmus, former Security Branch policeman. It explains how the Security Branch officers raided and destroyed COSATU House in 1987.</em><br><br>On 23 April 1987, after a shooting incident involving members of the Riot Unit, COSATU HOUSE was raided by a throng (crowd) of policemen who, having secured the building, handed it over to the Security Branch. What followed was the demolition (destruction) job, the likes of which were unprecedented (extraordinary) and unparalleled (unmatched). It was as if the accumulated (increased) rage (anger) and frustration of the police, caught as usual in the middle of the ongoing political conflict, were vented (expressed) on the building and its contents.<br><br>Doors were promptly closed, and then filing cabinets filled with documents and records rained (fell) down like confetti (scatterings of pieces of paper) from balconies of the ten-storey building, office equipment was smashed, personal computers were tossed (thrown) out of the windows and over the balconies into the courtyard, video monitors and an expensive security system were destroyed, and what wasn't smashed or broken was stolen. ... I found COSATU's printing machine in the basement and I smashed the plates and control panel.<br><br>Some hours later I returned to the basement to find that the printing machine had been completely destroyed, and cars in the basement had likewise been seriously damaged. Security Branch members started a fire on the eighth floor and, when the Johannesburg Fire Department arrived, fire-fighters ended up running from floor to floor, they were told [by Security Branch members] that the blaze was upstairs, then downstairs, then out and so on.</div>`,
    attr: 'From Confessions of a STRATCOM Hitman by P Erasmus, Jacana Media, 2021'
  },
  'compare': {
    label: 'Sources 1A + 1B',
    type: 'Comparison',
    html: `<div class="sp-body"><strong>Source 1A</strong><br><br>In November 1985, more than 33 unions joined together to form the Congress of South African Trade Unions (COSATU), the largest federation (grouping) of black workers in South African history, with a total membership of some 500 000 workers. &hellip; In a country that is Africa's most industrialised nation, the challenge now posed by the black unions is profound &hellip; holding out the possibility of a large-scale withdrawal of labour from a modern economy that is increasingly dependent on black skills.</div><div class="sp-body" style="margin-top:12px;"><strong>Source 1B</strong> &mdash; photograph of the COSATU/CCAWUSA rally, Western Cape, 1 May 1986:</div><img class="sp-img" src="1B.png" alt="Black-and-white photograph of a large crowd of workers at a rally, many raising clenched fists, beneath a CCAWUSA placard and a banner reading FORWARD WITH THE WORKERS' STRUGGLE.">`,
    attr: 'Re-read both sources, then explain how the information in Source 1A supports the visual evidence in Source 1B.'
  },
  'para': {
    label: 'Paragraph Task',
    type: 'Q1.6, 8 marks',
    html: `<div class="sp-body">Now build the 8-mark paragraph. Using the relevant sources and your own knowledge, explain what the different responses were to the attempts of the Congress of South African Trade Unions (COSATU) to mobilise South African workers in the 1980s.<br><br>Work through it in four steps: a clear topic sentence, specific evidence from the sources, one piece of your own knowledge, and a conclusion that answers the question.</div>`,
    attr: 'Q1.6 &mdash; write about EIGHT lines (about 80 words).'
  },
  'mta': {
    label: 'Mark This Answer',
    type: 'Evaluative Task',
    html: `<div class="sp-body">Two learners wrote a paragraph answering Q1.6. Read each answer and mark it against the six criteria of a strong history paragraph. For each criterion, decide whether the answer does it fully, partially, or not at all.</div>`,
    attr: 'Bonus round &mdash; unlocked at 70%.'
  },
};

const QS = [
  {id: 'q1', src: '1A', num: '1.1.1', m: 2, t: 'Quote evidence from the source which suggests that COSATU was the largest federation of black worker unions in South Africa in November 1985.', lv: 1, ll: 'Extraction', opts: ['\'... more than 33 unions joined together to form ... COSATU, the largest federation ... with a total membership of some 500 000 workers.\'', '\'COSATU has forged important links with the United Democratic Front, the largest non-parliamentary opposition group in the country.\'', '\'In the critical mining industries, labour leaders claim the support of almost half the 600 000-man black work force.\'', '\'From the country\'s textile mills to its steelworks, the unions are strong and growing across the whole economy.\''], c: 0, fb: 'The source states 33 unions joined to form COSATU with 500 000 members - direct evidence of the largest federation. Option 2 calls the UDF (not COSATU) the largest; options 3 and 4 describe mining support and growth, not federation size.'},
  {id: 'q2', src: '1A', num: '1.1.2', m: 2, t: 'Define the term non-parliamentary opposition group in your own words.', lv: 1, ll: 'Concept', opts: ['A political organisation that opposed the apartheid government from outside Parliament, because it had no seats or representation in the whites-only legislature.', 'A banned political party whose leaders had all gone into exile abroad and could only operate secretly from neighbouring African states.', 'A group of elected members of parliament who crossed the floor to vote against the ruling National Party\'s apartheid laws.', 'An armed military wing that carried out sabotage against government buildings rather than taking part in any peaceful political debate.'], c: 0, fb: 'Non-parliamentary opposition simply means opposition operating outside Parliament, which excluded black South Africans. Option 3 places it inside Parliament (the opposite); options 2 and 4 confuse it with exile or the armed struggle, which are separate ideas.'},
  {id: 'q3', src: '1A', num: '1.1.3', m: 2, t: 'Explain what can be inferred (implied) by the statement, \'COSATU ... has allied itself to the aims, if not formally to the structures, of the banned and exiled African National Congress ...\'', lv: 2, ll: 'Interpretation', opts: ['COSATU shared the ANC\'s political goal of ending apartheid and widened its focus beyond wages to the liberation struggle, without officially becoming part of the ANC.', 'COSATU had formally merged with the ANC and took its instructions directly from the exiled leadership, making it an official branch of the banned movement.', 'COSATU rejected the ANC\'s political methods and wanted to keep all union activity strictly separate from party politics and the armed struggle.', 'COSATU adopted the ANC\'s aims only to attract overseas funding, but had no real interest in political change beyond raising its members\' wages.'], c: 0, fb: 'The phrase \'if not formally to the structures\' means COSATU shared the ANC\'s aims without officially joining it. Option 2 ignores that qualifier; option 3 reverses it; option 4 wrongly reduces a clearly political alliance to money.'},
  {id: 'q4', src: '1A', num: '1.1.4', m: 4, t: 'Using the information in the source and your own knowledge, state why you think industrial trade unions grew stronger in the 1980s.', lv: 2, ll: 'Interpretation', opts: ['Trade unions had been legalised and could organise openly, so in a decade of heightened political activism they recruited the many workers in South Africa\'s large industries.', 'The apartheid government had extended full labour protection to farm and domestic workers, which brought millions of new members flooding into the industrial unions.', 'Most white-owned industries had shut down by the early 1980s, forcing the remaining employers to negotiate directly with whichever black unions still existed.', 'The unions grew because they avoided politics completely and focused only on quiet wage bargaining, which made them fully acceptable to the government.'], c: 0, fb: 'Legal recognition, a militant political climate and a large industrial workforce all strengthened the unions. Option 2 contradicts the source (farm and domestic workers were NOT protected); option 3 is invented; option 4 contradicts the unions\' clear political militancy.'},
  {id: 'q5', src: '1B', num: '1.2.1', m: 2, t: 'Comment on the significance of holding this COSATU rally on 1 May 1986.', lv: 2, ll: 'Interpretation', opts: ['1 May is International Workers\' Day, so the rally linked South African workers\' struggle to a worldwide labour movement and asserted their right to organise.', '1 May 1986 marked exactly one year since COSATU had been founded, so the rally was held mainly to celebrate the young federation\'s first birthday.', 'The date was chosen because it was a public holiday granted by the apartheid government to reward unions for behaving peacefully during strikes.', '1 May was the anniversary of the banning of the ANC, so the rally was held to mourn the loss of the main liberation movement.'], c: 0, fb: '1 May is International Workers\' Day, tying the local struggle to workers worldwide. COSATU was actually formed in November 1985 (not May), May Day was not an official apartheid holiday, and the ANC was banned in April 1960 - so options 2, 3 and 4 all rest on wrong dates.'},
  {id: 'q6', src: '1B', num: '1.2.2', m: 2, t: 'What is inferred (implied) by the words, \'FORWARD WITH THE WORKERS\' STRUGGLE\', in the context of mass action against the apartheid government in the 1980s?', lv: 2, ll: 'Interpretation', opts: ['It was a rallying call urging workers to press on with organised resistance against the apartheid government and its repressive labour laws.', 'It was an appeal for workers to abandon strike action and return peacefully to their jobs while their leaders negotiated quietly with employers.', 'It was a demand that the government move forward with reform by paying black workers exactly the same wages as white workers immediately.', 'It was a slogan encouraging workers to emigrate and look for jobs in other countries where trade unions had not been banned.'], c: 0, fb: '\'Forward with the workers\' struggle\' is a call to continue the fight against apartheid, not to stop it. Option 2 is the opposite; option 3 narrows a political slogan to a single wage demand; option 4 is invented.'},
  {id: 'q7', src: '1B', num: '1.2.3', m: 2, t: 'Explain the symbolism of the \'clenched fists\' in the banner and some of the workers in the photograph.', lv: 2, ll: 'Interpretation', opts: ['The clenched fist was a symbol of resistance, unity and defiance, showing the workers\' collective strength and determination in the struggle against apartheid.', 'The raised fist was simply a traditional greeting between union officials that signalled to the crowd that the rally had formally begun.', 'The fists showed only that the workers were angry about low pay and wanted higher wages from their own individual employers.', 'The clenched fists were a warning to rival unions that CCAWUSA would use force to defend its members against other federations.'], c: 0, fb: 'The clenched fist symbolised unity, power and defiance in the liberation struggle. Option 2 reduces it to ceremony, option 3 to a private wage dispute, and option 4 invents a threat against other unions - none capture the political solidarity it stood for.'},
  {id: 'q8', src: 'compare', num: '1.3', m: 4, t: 'Refer to Sources 1A and 1B. Explain how the information in Source 1A supports the visual evidence in Source 1B regarding COSATU\'s mass mobilisation against the apartheid government in the 1980s.', lv: 3, ll: 'Comparison', opts: ['Source 1A describes COSATU as a federation of over 33 unions with 500 000 members, and Source 1B visually confirms this scale, showing a huge crowd rallying under an affiliated union\'s banner.', 'The sources contradict each other: Source 1A says COSATU was strong and growing, while Source 1B shows only a small, poorly attended gathering of a single union.', 'Source 1A focuses on the mining industry while Source 1B shows textile workers, so the two sources describe completely separate and unrelated union campaigns.', 'Both sources agree that COSATU avoided public protest and worked quietly through legal channels, as shown by the orderly and silent crowd in the photograph.'], c: 0, fb: '1A gives the scale in words (33 unions, 500 000 members) and 1B shows that scale in a mass rally - the two reinforce each other. Option 2 misreads the large crowd as small; option 3 invents a mismatch; option 4 denies the visible mass protest.'},
  {id: 'q9', src: '1C', num: '1.4.1', m: 1, t: 'Identify a campaign in the source that COSATU members conducted through a strike that took several weeks in March 1987.', lv: 1, ll: 'Extraction', opts: ['The \'living wage\' campaign', 'The bus boycott campaign', 'The stay-away protest campaign', 'The rent boycott campaign'], c: 0, fb: 'The source states the strikers were \'conducting a living wage campaign heavily backed by the ANC\'. Bus boycotts, stay-aways and rent boycotts were real 1980s tactics but are not the campaign named in this source.'},
  {id: 'q10', src: '1C', num: '1.4.2', m: 2, t: 'Explain the term grievances in the context of COSATU\'s activities against the apartheid government.', lv: 2, ll: 'Concept', opts: ['Grievances were the workers\' complaints and demands against unjust apartheid labour laws and low wages that drove COSATU to take strike action.', 'Grievances were the official written permits that workers had to obtain from their employers before they were allowed to join a registered union.', 'Grievances were the criminal charges that the police laid against strikers who took part in illegal gatherings during the 1980s.', 'Grievances were the concessions that the government offered to the unions in return for calling off their strikes and stoppages peacefully.'], c: 0, fb: 'Grievances are the complaints and demands workers held against apartheid labour laws and poor wages. Option 2 invents a permit system, option 3 confuses grievances with police charges, and option 4 makes them government concessions - the opposite of a complaint.'},
  {id: 'q11', src: '1C', num: '1.4.3', m: 3, t: 'Quote THREE pieces of evidence from the source which suggest that the \'young recruits\' were terrified. (Select THREE.)', lv: 1, ll: 'Extraction', multi: true, mx: 3, opts: ['\'... the sound almost scared the life out of me.\'', '\'It was a terrifying sight.\'', '\'They were armed with knobkerries, whips, knives and a whole variety of vicious weapons.\'', '\'Nevertheless, the physical damage was minor and I fought with everything I had.\'', '\'The next day COSATU held a meeting at the World Centre in Germiston.\''], c: [0, 1, 2], fb: '\'Scared the life out of me\', \'a terrifying sight\' and the list of weapons all convey fear. The fourth quote shows the recruit fighting back (bravado, not terror), and the fifth is about an unrelated meeting the next day.'},
  {id: 'q12', src: '1C', num: '1.4.4', m: 4, t: 'Comment on the limitations of this source to a historian researching the clash between COSATU and the East Rand Riot Squad in March 1987.', lv: 3, ll: 'Reliability', opts: ['It is one-sided, giving only a Riot Squad member\'s view; as a memoir written years later by a young recruit, its dramatic language may exaggerate or distort what happened.', 'It is limited only because it is very short, but as an official police report it can otherwise be treated as a completely objective and neutral record of events.', 'It is unreliable because the author was never actually present at the clash and simply repeated rumours that he heard from COSATU organisers afterwards.', 'It is limited because it deals only with the mining industry and says nothing at all about the railway workers who were involved in the Germiston clash.'], c: 0, fb: 'As a one-sided memoir by a young policeman, the source is biased and its vivid language may exaggerate. Option 2 wrongly calls a personal memoir an objective report; option 3 is false (he was present and stabbed); option 4 is false (it is about railway/SAT workers).'},
  {id: 'q13', src: '1D', num: '1.5.1', m: 2, t: 'According to the source, why was COSATU House raided by policemen on 23 April 1987?', lv: 1, ll: 'Extraction', opts: ['Because of a shooting incident involving members of the Riot Unit.', 'Because COSATU had failed to register the building with the apartheid municipal authorities.', 'Because a COSATU strike had shut down the Germiston railway station that morning.', 'Because the Security Branch had discovered banned ANC weapons hidden in the basement.'], c: 0, fb: 'The source opens by stating the raid happened \'after a shooting incident involving members of the Riot Unit\'. The other options give plausible-sounding but invented reasons that appear nowhere in the source.'},
  {id: 'q14', src: '1D', num: '1.5.2', m: 4, t: 'Using the information in the source and your own knowledge, explain why the demolition of COSATU House by the Security Branch was described as \'unprecedented and unparalleled\'.', lv: 2, ll: 'Interpretation', opts: ['Such total, deliberate destruction of a union\'s headquarters by state forces had never been seen before, and was aimed at crippling COSATU by wrecking everything inside the building.', 'It was unprecedented because COSATU House was the tallest union building in Africa, and no ten-storey block had ever been pulled down in the country before.', 'It was unparalleled because the police carefully removed and safely stored the union\'s records before the building was legally demolished by the city council.', 'It was unprecedented because it was the first time that a court of law had ever ordered the closure of a trade union federation in South Africa.'], c: 0, fb: 'The phrase captures the shocking scale of destruction meant to destroy COSATU. Option 2 misreads \'demolition\' as the building\'s height; option 3 contradicts the source (records were destroyed, not stored); option 4 invents a court order - it was a police raid.'},
  {id: 'q15', src: '1D', num: '1.5.3', m: 4, t: 'List FOUR ways in the source in which the police demolished the building and its contents during the COSATU House raid. (Select FOUR.)', lv: 1, ll: 'Extraction', multi: true, mx: 4, opts: ['Filing cabinets full of documents and records were thrown down from the balconies.', 'Office equipment was smashed and personal computers were tossed out of the windows.', 'The printing machine\'s plates and control panel were smashed and it was destroyed.', 'Security Branch members started a fire on the eighth floor of the building.', 'Police arrested and criminally charged all of COSATU\'s senior office staff.', 'The building was sealed off and guarded by soldiers for several weeks afterwards.'], c: [0, 1, 2, 3], fb: 'The source describes cabinets thrown from balconies, equipment smashed and computers thrown out, the printing machine destroyed, and a fire started. Arresting staff and posting guards for weeks are not mentioned in this source.'},
  {id: 'q16', src: '1D', num: '1.5.4', m: 2, t: 'Why do you think that the Security Branch members misled the fire fighters where the fire actually started?', lv: 2, ll: 'Interpretation', opts: ['To delay the firefighters so the blaze could spread and destroy everything, while hiding the fact that the police had started the fire themselves.', 'Because the thick smoke made it genuinely impossible for anyone in the building to tell which floor the fire had first begun on.', 'Because they wanted the firefighters to save the ground-floor offices while allowing only the upper floors of the building to burn down.', 'Because the fire fighters were not permitted by law to enter any building that was under the control of the Security Branch.'], c: 0, fb: 'Misleading the firefighters was a deliberate tactic to let the fire finish destroying COSATU House and to cover the police\'s tracks. Option 2 makes it accidental, option 3 invents a selective motive, and option 4 invents a law - the source shows intent.'},
  {id: 'q17', src: 'para', num: '1.6a', m: 2, t: 'STEP 1 - Topic sentence. Which sentence best opens a paragraph answering: what were the different responses to COSATU\'s attempts to mobilise workers in the 1980s?', lv: 3, ll: 'Synthesis', opts: ['COSATU\'s drive to mobilise workers drew very different responses: mass worker support and political alliances on one side, and violent state repression and rival unions on the other.', 'COSATU was formed in November 1985 when more than 33 unions joined together to create the largest federation in South African history.', 'The apartheid government welcomed COSATU warmly and worked closely with it to improve wages for black workers throughout the whole of the 1980s.', 'The Truth and Reconciliation Commission later investigated many of the human rights abuses that had been committed during the apartheid era.'], c: 0, fb: 'A topic sentence must state the argument - here, that responses ranged from support to repression. Option 2 is just a fact with no argument; option 3 contradicts the sources; option 4 belongs to a different topic entirely (the TRC).'},
  {id: 'q18', src: 'para', num: '1.6b', m: 2, t: 'STEP 2 - Source evidence. Which option best uses specific evidence from the sources to support that topic sentence?', lv: 3, ll: 'Synthesis', opts: ['Source 1A shows workers backing COSATU (500 000 members), while Sources 1C and 1D show the state\'s violent response: a Riot Squad clash and the demolition of COSATU House.', 'Source 3C shows that BRICS\' share of global GDP rose to 32,1% by 2023, overtaking several of the G7 economies over the same twenty-year period.', 'Source 1A explains that South Africa was Africa\'s most industrialised nation, with a very large and increasingly skilled workforce in its mining industry.', 'All four of the sources agree that the workers\' campaigns were completely peaceful and were always met with a peaceful government response.'], c: 0, fb: 'Strong evidence contrasts the worker response (1A) with the state response (1C, 1D). Option 2 is from a different question altogether; option 3 is a true fact but shows no range of responses; option 4 contradicts the violent sources.'},
  {id: 'q19', src: 'para', num: '1.6c', m: 2, t: 'STEP 3 - Own knowledge. Which fact from your own knowledge best strengthens the paragraph beyond what the sources state?', lv: 3, ll: 'Synthesis', opts: ['The IFP set up a rival, government-friendly union federation, UWUSA, in 1986 to counter COSATU and split black worker support.', 'Nelson Mandela was released from prison on 11 February 1990 after having served twenty-seven years behind bars.', 'COSATU was launched in Durban in 1985, a fact that several of the sources in this question already state clearly.', 'The apartheid government legalised the ANC and lifted the state of emergency directly in response to the COSATU rallies.'], c: 0, fb: 'UWUSA is real own knowledge that adds a further \'response\' the sources omit. Option 2 is true but off-period and off-topic; option 3 repeats the sources rather than adding to them; option 4 is historically false.'},
  {id: 'q20', src: 'para', num: '1.6d', m: 2, t: 'STEP 4 - Conclusion. Which sentence best concludes the paragraph by tying the evidence back to the question?', lv: 3, ll: 'Synthesis', opts: ['The responses ranged from mass worker mobilisation and political alliance to brutal state repression and rival unions, showing how deeply COSATU\'s rise divided 1980s South Africa.', 'In conclusion, COSATU had built up a total membership of some 500 000 workers by the time it was founded in November 1985.', 'Overall, the sources prove that the trade unions had almost no real impact on South African politics during the 1980s.', 'To conclude, the apartheid government\'s peaceful negotiations with COSATU brought an early and happy end to the workers\' struggle.'], c: 0, fb: 'A conclusion should draw the threads together and answer the question, as option 1 does. Option 2 is a single fact; option 3 contradicts the evidence of major impact; option 4 is simply false.'},
];

const MTA_ANSWERS = [
  {label: 'Answer A', text: 'COSATU was a big trade union federation in the 1980s and it tried to get workers to join the struggle. Many workers responded by joining COSATU and going to rallies like the one on 1 May 1986. The government did not like this. The police raided COSATU House and broke things and started a fire. There was also a fight at the railway station between the strikers and the riot police. So there were different responses to COSATU from the workers and from the government.', expLv: 0, expM: '?-5', crit: [{q: 'Does it have a clear topic sentence addressing the question?', cor: 'partial', exp: 'The opening mentions COSATU mobilising workers but does not clearly frame the answer around the different responses, so it only partly sets up the argument.'}, {q: 'Does it use specific evidence from the sources?', cor: 'yes', exp: 'It refers to the 1 May 1986 rally, the raid and fire at COSATU House, and the railway-station clash - all drawn from the sources.'}, {q: 'Does it include own knowledge beyond the sources?', cor: 'no', exp: 'Every point comes straight from the sources. There is no added fact such as the rival UWUSA federation or wider state repression.'}, {q: 'Does it explain WHY (analysis), not just WHAT (description)?', cor: 'partial', exp: 'It lists what happened and notes \'the government did not like this\', but does not really explain why the responses differed or why the state reacted so violently.'}, {q: 'Does it have a concluding sentence that synthesises?', cor: 'partial', exp: 'The final sentence restates that there were different responses but does not pull the evidence together into a sharp judgement.'}, {q: 'Is it a coherent paragraph, not a list of disconnected sentences?', cor: 'yes', exp: 'The sentences follow on from one another and read as a connected paragraph rather than a disconnected list.'}]},
  {label: 'Answer B', text: 'COSATU\'s drive to mobilise workers in the 1980s produced sharply different responses. Workers themselves responded with mass support: Source 1A records more than 33 unions and some 500 000 members joining the federation, and Source 1B shows a huge CCAWUSA crowd rallying on 1 May 1986. The apartheid state responded with violence, as the East Rand Riot Squad clashed with strikers at Germiston (Source 1C) and the Security Branch demolished and burned COSATU House (Source 1D) to cripple the federation. Beyond the sources, the IFP formed the rival UWUSA in 1986 to split worker support. These responses ranged from solidarity to brutal repression because COSATU threatened both employers and the apartheid government.', expLv: 0, expM: '?-8', crit: [{q: 'Does it have a clear topic sentence addressing the question?', cor: 'yes', exp: 'The first sentence directly states the argument - that mobilisation produced sharply different responses - which is exactly what the question asks.'}, {q: 'Does it use specific evidence from the sources?', cor: 'yes', exp: 'It cites Source 1A (33 unions, 500 000 members), 1B (the 1 May rally), 1C (the Germiston clash) and 1D (the demolition), all precisely referenced.'}, {q: 'Does it include own knowledge beyond the sources?', cor: 'yes', exp: 'It adds the formation of the rival UWUSA federation in 1986, a relevant fact that none of the sources supply.'}, {q: 'Does it explain WHY (analysis), not just WHAT (description)?', cor: 'yes', exp: 'It explains that the responses ranged from solidarity to repression because COSATU threatened both employers and the government - reasoning, not just narration.'}, {q: 'Does it have a concluding sentence that synthesises?', cor: 'yes', exp: 'The closing sentence draws the two sides together and gives the underlying reason, synthesising the evidence into a clear answer.'}, {q: 'Is it a coherent paragraph, not a list of disconnected sentences?', cor: 'yes', exp: 'It is tightly structured, moving from worker support to state repression to own knowledge and a conclusion, as one flowing argument.'}]},
];

/* ═══ KULA LEARN BRIDGE ═══
   Reports results to a parent Kula Learn page via postMessage.
   See project doc: Kula_Revise_results_payload_spec.md (spec v1).
   KR_META is injected by build.py from paper.json meta. The bridge is
   inert unless (a) identity fields are present, (b) the page is inside
   an iframe, and (c) the host origin was passed as ?host=<origin>.   */
const KR_META = {interactiveId: 'history-p2-2025-nov-q1', paper: 'P2', section: 'A', questionNumber: 1, paperRef: 'DBE November 2025'};
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
