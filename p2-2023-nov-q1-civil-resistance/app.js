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
    type: 'Newspaper Article',
    html: `<div class="sp-body">The Congress of South African Trade Unions (COSATU), launched at a rally attended by more than 10 000 workers in Durban last weekend, promises to present the toughest challenge to government and industry yet seen in the history of the South African labour movement. Leaders of the new super federation have already threatened to call a national strike if the government carries out its threat to repatriate (send back) migrant workers, and have pledged to organise workers in the homelands in defiance of any restrictions on unions in these regions. In policy guidelines adopted at the launching conference, the Congress also came out in support of disinvestment (withdrawal of investment), as well as the eventual nationalisation of South Africa's mines and other major industries.<br><br>Emphasising the political role the new federation intends to play, COSATU President Elijah Barayi said the Congress hoped to fill the vacuum (space) created by the banning of the African National Congress (ANC), and that it was committed to one-person one-vote in a unitary South Africa. The Congress also called for a national minimum wage, a 40-hour week at full pay, a ban on overtime and the establishment of a national unemployed workers' union as an affiliate of the federation. With a membership of half a million, including the 150 000-strong National Union of Mineworkers (NUM) and the 100 000-strong Federation of South African Trade Unions (FOSATU), the formation of COSATU has been described as a triumph (victory) for trade unionism.</div>`,
    attr: 'From <em>The Namibian</em>, 6 December 1985'
  },
  '1B': {
    label: 'Source 1B',
    type: 'Protest Poster',
    html: `<img class="sp-img" src="1B.png" alt="A hand-drawn protest poster. Speech bubbles at the top read 'NO! to the Labour Bill' and 'NO! to restrictions'. On the left are the words 'ORGANISE!' and 'RESIST!' beside a drawing of a factory and a crowd of people with raised fists. A band across the bottom reads 'FORWARD with COSATU - Special Congress Johannesburg May 14-15 1988', next to a circular union emblem of a figure holding a flag."><div class="sp-body" style="margin-top:12px;">Slogan on the poster: 'AN INJURY TO ONE IS AN INJURY TO ALL'</div>`,
    attr: 'Poster designed by COSATU media worker Patrick Cockayne. From <em>Red on Black: The Story of the South African Poster Movement</em> by J Seidman'
  },
  '1C': {
    label: 'Source 1C',
    type: 'Newspaper Article',
    html: `<div class="sp-body">The decree (law) announced by the Minister of Law and Order, Adriaan Vlok, says that the United Democratic Front (UDF) and other restricted anti-apartheid groups (including COSATU) may continue to exist and will not be prohibited from keeping financial records, performing administrative functions or complying with an obligation imposed by or under any law or court of law. But they will have to obtain the Law and Order Minister's permission to conduct any other activities. Vlok said that despite emergency regulations already in effect, some opposition groups had persisted in establishing, maintaining and promoting a revolutionary climate.<br><br>In November, Security Police Chief, Johan Van der Merwe, signalled the possibility of such a crackdown when he told reporters that legal radical organisations such as the UDF and COSATU are of more concern to the police than illegal groups such as the African National Congress (ANC).<br><br>COSATU, which had begun to fill the organisational vacuum (empty space) created by the detention of most of the UDF's national and regional leaders, is now prohibited (banned) from campaigning for the legalisation of outlawed organisations like the ANC, from urging for the release of detainees, from boycotts of local black elections and from calling for disinvestments or sanctions against South Africa (SA).</div>`,
    attr: 'From <em>The Washington Post</em>, 25 February 1988'
  },
  '1D': {
    label: 'Source 1D',
    type: 'Journal Article',
    html: `<div class="sp-body">The special congress was called in response to two specific challenges to COSATU:<br><br>The government's February 24 restrictions which legally limited COSATU to a narrow range of factory-floor trade unionism and effectively banned 17 other organisations, among them the United Democratic Front (UDF), a close and formal COSATU ally; and the Labour Relations Amendment Act, a bill intended, according to Manpower Minister, Pietie du Plessis, to 'restore the balance in industrial relations in favour of the employer'. Even after it had been slightly softened in the final draft presented to the Tricameral Parliament 24 hours after the special congress.<br><br>The bill will substantially (largely) limit workers' right to strike, open trade unions to civil action for losses incurred (experienced) by their members' actions and outlaw (ban) solidarity action in industrial disputes. Combined, the restrictions and the bill attempted to deny COSATU a right woven (merged) into the fabric of its existence: the right to operate on the national political terrain, both to achieve its members' factory-floor demands, and in their broader, political interests. 'Taken together, the entire bill and the restrictions effectively ban COSATU,' said General Secretary Jay Naidoo on 25 February.<br><br>The dual threat of the restrictions and the bill demanded several things of COSATU: An immediate and decisive response, both as a warning to employers and the government that COSATU would not knuckle under (give in) without a struggle, and to generate support for further resistance; on-going agitation and action to demonstrate to employers specifically that support of the bill might cost them more than it was worth.</div>`,
    attr: 'From <em>Work in Progress</em>, Issue No. 54, June-July 1988'
  },
  'compare': {
    label: 'Sources 1B + 1D',
    type: 'Comparison',
    html: `<img class="sp-img" src="1B.png" alt="The COSATU protest poster from Source 1B, with the slogans 'NO! to the Labour Bill', 'NO! to restrictions', 'ORGANISE!' and 'RESIST!', and the banner 'FORWARD with COSATU - Special Congress Johannesburg May 14-15 1988'."><div class="sp-body" style="margin-top:14px;"><strong>Source 1D (extract):</strong> The special congress was called in response to two specific challenges to COSATU: the government's February 24 restrictions &hellip; and the Labour Relations Amendment Act, a bill intended &hellip; to 'restore the balance in industrial relations in favour of the employer'. &hellip; 'Taken together, the entire bill and the restrictions effectively ban COSATU,' said General Secretary Jay Naidoo &hellip; [COSATU wanted to warn] the government that COSATU would not knuckle under (give in) without a struggle &hellip;</div>`,
    attr: 'Re-read both sources, then explain how they connect.'
  },
  'para': {
    label: 'Paragraph Task',
    type: 'Q1.6, 8 marks',
    html: `<div class="sp-body">Q1.6 (8 marks). Using the information in the relevant sources and your own knowledge, write a paragraph of about EIGHT lines (about 80 words) explaining how COSATU responded to the apartheid government's labour reforms in the 1980s. Build your paragraph in four steps: a topic sentence, source evidence, own knowledge, and a conclusion.</div>`,
    attr: 'Synthesis: build the paragraph one step at a time.'
  },
  'mta': {
    label: 'Mark This Answer',
    type: 'Evaluative Task',
    html: `<div class="sp-body">Below are two learner paragraphs answering Q1.6: how did COSATU respond to the apartheid government's labour reforms in the 1980s? Read each one and judge it against the six marking criteria a real examiner would use.</div>`,
    attr: 'Score each paragraph against the six criteria.'
  },
};

const QS = [
  {id: 'q1', src: '1A', num: '1.1.1', m: 1, t: 'Why, according to the source, did the newly launched COSATU threaten to call a national strike?', lv: 1, ll: 'Extraction', opts: ['Because the government was carrying out its threat to repatriate (send back) migrant workers', 'Because the government refused COSATU\'s call for a national minimum wage and a 40-hour week', 'Because COSATU had come out in support of disinvestment and the nationalisation of the mines', 'Because the banning of the ANC had left a political vacuum that COSATU wanted to fill'], c: 0, fb: 'Source 1A ties the strike threat directly to the government\'s plan to \'repatriate (send back) migrant workers\'. The wage demands, disinvestment and the political vacuum are all in the source, but none is given as the reason for the strike threat.'},
  {id: 'q2', src: '1A', num: '1.1.2', m: 2, t: 'Explain why you think COSATU supported the campaign for disinvestment against the apartheid government.', lv: 2, ll: 'Interpretation', opts: ['By choking off foreign investment, COSATU hoped to pressure the apartheid state economically until it was forced to abandon its policies', 'By nationalising the mines and major industries, COSATU wanted the state rather than private owners to control the means of production', 'By withdrawing foreign investment, COSATU expected to create thousands of new jobs immediately for its half-million members in the homelands', 'By supporting disinvestment, COSATU mainly wanted to protect migrant workers from repatriation and win a wage for the unemployed'], c: 0, fb: 'Disinvestment was an economic weapon: cutting off foreign capital was meant to squeeze the apartheid state until it had to change. Nationalisation was a separate demand, disinvestment threatened jobs rather than creating them, and protecting migrant workers was a different aim.'},
  {id: 'q3', src: '1A', num: '1.1.3', m: 2, t: 'Define the term nationalisation in your own words.', lv: 1, ll: 'Concept', opts: ['An economic policy in which the state takes ownership and control of major industries and resources away from private hands', 'An economic policy of transferring state-owned industries and public services into private ownership so that they run more profitably', 'An economic tactic of withdrawing foreign investment from a country in order to place economic pressure on its government', 'A process of organising workers across an entire country into a single trade union federation to bargain collectively'], c: 0, fb: 'Nationalisation means the state takes over ownership of major industries. Watch the traps: shifting industry to private hands is privatisation, withdrawing foreign capital is disinvestment, and uniting workers into one body is federation.'},
  {id: 'q4', src: '1A', num: '1.1.4', m: 4, t: 'What is implied by the statement, \'that it [COSATU] was committed to one-person one-vote in a unitary South Africa\', in the context of its role as a labour movement?', lv: 2, ll: 'Interpretation', opts: ['That COSATU was not only a labour movement but also a political force backing the demand for full voting rights in one undivided South Africa', 'That COSATU wanted a national minimum wage, a 40-hour week and a ban on overtime for every worker across the whole of South Africa', 'That COSATU intended to register as a political party and contest elections in place of the banned African National Congress and its leaders', 'That COSATU accepted the homelands system and simply wanted separate votes for the workers living within each self-governing region of the country'], c: 0, fb: '\'One-person one-vote in a unitary South Africa\' is a political demand for universal franchise in one undivided country, showing COSATU acting beyond factory-floor issues. It did not mean forming a party, accepting the homelands, or the separate economic demands listed elsewhere.'},
  {id: 'q5', src: '1B', num: '1.2.1', m: 4, t: 'Why do you think this poster was created?', lv: 2, ll: 'Interpretation', opts: ['To mobilise workers and rally solidarity against the Labour Relations Amendment Bill and restrictions, and to publicise COSATU\'s special congress on 14-15 May 1988', 'To announce that COSATU had launched at a rally of more than 10 000 workers in Durban and now had a membership of half a million', 'To celebrate the government\'s decision to soften the Labour Relations Amendment Act after COSATU\'s protests at the Tricameral Parliament', 'To recruit new migrant workers into the National Union of Mineworkers and to encourage them to defy union restrictions in the homelands'], c: 0, fb: 'The slogans \'NO! to the Labour Bill\', \'NO! to restrictions\' and \'ORGANISE! RESIST!\', with the congress banner, show the poster\'s purpose: to mobilise opposition to the LRA and advertise the May 1988 special congress. It opposes the Bill; it does not celebrate any softening of it.'},
  {id: 'q6', src: '1B', num: '1.2.2', m: 2, t: 'Identify evidence in the source that indicates that this was a COSATU poster.', lv: 1, ll: 'Extraction', opts: ['The COSATU logo and name appear on the poster, together with the banner \'FORWARD WITH COSATU\'', 'The poster is signed by COSATU President Elijah Barayi and dated 6 December 1985 in Durban', 'The poster reproduces the front page of The Namibian newspaper reporting on COSATU\'s launch', 'The poster carries the official stamps of the United Democratic Front and the National Union of Mineworkers'], c: 0, fb: 'The clearest evidence is the COSATU logo, name and the \'FORWARD WITH COSATU\' banner printed on the poster itself. Elijah Barayi, The Namibian and the UDF/NUM belong to other sources; none of their marks appear on this poster.'},
  {id: 'q7', src: '1B', num: '1.2.3', m: 4, t: 'Comment on the limitations of this source to a researcher studying COSATU\'s response to the Labour Relations Amendment Act.', lv: 3, ll: 'Reliability', opts: ['As COSATU propaganda made by its own media worker, it gives only COSATU\'s one-sided, emotive view, so it reveals COSATU\'s stance but not the government\'s case or the Act\'s content', 'It is useful for its imagery, but is limited because it was printed in a foreign newspaper and therefore cannot be trusted on internal South African affairs', 'It is vivid, but is limited because it is undated and never states where or when COSATU\'s planned special congress would actually be held', 'It is detailed, but is limited because, as an official government notice, it presents only the state\'s justification for the Labour Relations Amendment Act'], c: 0, fb: 'The real limitation is bias and purpose: this is COSATU\'s own protest poster - one-sided and emotive - so it shows COSATU\'s response but not the government\'s case. It was not a newspaper item or a government notice, and it does state the congress date and venue.'},
  {id: 'q8', src: '1C', num: '1.3.1', m: 2, t: 'Quote evidence from the source suggesting that anti-apartheid groups were negatively affected by the state of emergency.', lv: 1, ll: 'Extraction', opts: ['\'... they will have to obtain the Law and Order Minister\'s permission to conduct any other activities\'', '\'... may continue to exist and will not be prohibited from keeping financial records ...\'', '\'COSATU ... had begun to fill the organisational vacuum created by the detention of ... the UDF\'s leaders\'', '\'... legal radical organisations such as the UDF and COSATU are of more concern to the police ...\''], c: 0, fb: 'The restriction that negatively affected the groups is needing the Minister\'s permission for any other activity - an effective clamp on their work. The other quotes describe what the groups could still do, or make separate points about detentions and police concern.'},
  {id: 'q9', src: '1C', num: '1.3.2', m: 2, t: 'Name the TWO radical organisations that were of more concern to the police, according to Johan van der Merwe.', lv: 1, ll: 'Extraction', multi: true, mx: 2, opts: ['The United Democratic Front (UDF)', 'COSATU', 'The African National Congress (ANC)', 'The National Union of Mineworkers (NUM)', 'Federation of South African Trade Unions (FOSATU)'], c: [0, 1], fb: 'Van der Merwe said the legal radical organisations - the UDF and COSATU - worried the police more than illegal groups like the ANC. The ANC is the group he contrasted them with, while NUM and FOSATU are COSATU affiliates named in Source 1A, not by him here.'},
  {id: 'q10', src: '1C', num: '1.3.3', m: 2, t: 'Why do you think the government prohibited COSATU from campaigning for the unbanning of the ANC and the release of political prisoners?', lv: 2, ll: 'Interpretation', opts: ['It feared that letting COSATU campaign for the ANC and detainees would strengthen the liberation movement and build powerful, organised opposition', 'It wanted COSATU to focus only on factory-floor trade unionism and on improving wages and working conditions for its own members', 'It believed the ANC had already abandoned the armed struggle, so campaigning for its unbanning was no longer really necessary', 'It hoped that by silencing COSATU it could convince foreign investors that South Africa was now politically stable and safe'], c: 0, fb: 'Allowing COSATU to campaign for the ANC and prisoners would have amplified the liberation struggle and mass opposition - exactly what the state wanted to suppress. Confining COSATU to factory issues was a means to that end, not the underlying fear driving the ban.'},
  {id: 'q11', src: '1C', num: '1.3.4', m: 2, t: 'Explain the concept sanctions in the context of COSATU\'s position in resisting the apartheid government.', lv: 2, ll: 'Concept', opts: ['Punitive economic and trade measures - cutting off trade and relations with South Africa - used to isolate the apartheid state and force it to end apartheid', 'The withdrawal of existing foreign investments by companies that were already operating inside South Africa\'s mines and major industries', 'The mass withdrawal of labour by workers who refuse to work until their wage and workplace demands have been fully met', 'Government restrictions banning COSATU from campaigning for the release of detainees and for the unbanning of the African National Congress'], c: 0, fb: 'Sanctions are external economic and trade penalties imposed to isolate and pressure the apartheid regime. Do not confuse them with disinvestment (pulling out existing investment), a strike (withdrawing labour), or the government\'s own bans on COSATU.'},
  {id: 'q12', src: '1D', num: '1.4.1', m: 2, t: 'What, according to the source, were the TWO challenges that the COSATU special congress had to respond to on 14 May 1988?', lv: 1, ll: 'Extraction', multi: true, mx: 2, opts: ['The government\'s 24 February restrictions that limited COSATU to factory-floor unionism', 'The Labour Relations Amendment Act', 'The banning of the ANC and the detention of most of the UDF\'s national leaders', 'The government\'s standing threat to repatriate migrant workers back to the homelands', 'The withdrawal of foreign investment from South Africa through the disinvestment campaign'], c: [0, 1], fb: 'The congress was convened to answer two threats named in Source 1D: the government\'s 24 February restrictions and the Labour Relations Amendment Act. The ANC\'s banning, the repatriation threat and disinvestment appear in other sources but are not the two challenges this congress addressed.'},
  {id: 'q13', src: '1D', num: '1.4.2', m: 3, t: 'List THREE ways from the source which show how the Labour Relations Amendment Act would affect workers and their trade unions.', lv: 1, ll: 'Extraction', multi: true, mx: 3, opts: ['It would substantially limit workers\' right to strike', 'It would open trade unions to civil action for losses incurred by their members\' actions', 'It would outlaw solidarity action in industrial disputes', 'It would force employers to recognise every registered trade union', 'It would guarantee workers a national minimum wage and full pay'], c: [0, 1, 2], fb: 'Source 1D says the Bill would limit the right to strike, expose unions to civil claims for members\' actions, and outlaw solidarity action. Forcing employers to recognise unions is the opposite of the Act\'s pro-employer aim, and the national minimum wage is a COSATU demand from Source 1A.'},
  {id: 'q14', src: '1D', num: '1.4.3', m: 2, t: 'Explain the meaning of the statement, COSATU was denied the \'right to operate on the national political terrain\', in the context of restrictions imposed by the apartheid government.', lv: 2, ll: 'Interpretation', opts: ['It means COSATU was legally confined to narrow factory-floor issues and barred from mobilising workers politically or challenging the government nationally', 'It means COSATU could no longer keep financial records, hold meetings or carry out any of the administrative functions of a trade union', 'It means COSATU was banned outright and forced to dissolve, bringing its existence as a trade union federation to a complete end', 'It means COSATU was required to negotiate all of its wage disputes directly with the Tricameral Parliament rather than with employers'], c: 0, fb: 'Operating \'on the national political terrain\' meant acting politically at national level, not just over factory wages; denying it confined COSATU to shop-floor unionism. The restrictions still let it keep records, and the source describes confinement rather than formal dissolution.'},
  {id: 'q15', src: '1D', num: '1.4.4', m: 4, t: 'Comment on what is implied by the words, \'COSATU would not knuckle under (give in) without a struggle\', in the context of the threat posed by the apartheid government.', lv: 2, ll: 'Interpretation', opts: ['It implies COSATU was defiant: it refused to accept the restrictions and the Act quietly and was ready to mobilise mass resistance and fight for workers\' rights', 'It implies COSATU was willing to compromise with the government and would give in provided that a few of its own demands were met first', 'It implies COSATU had half a million members, including NUM and FOSATU, making it the single largest trade union federation in the country', 'It implies COSATU would appeal to the Tricameral Parliament to have the Labour Relations Amendment Act declared unlawful in a court of law'], c: 0, fb: '\'Would not knuckle under without a struggle\' signals open defiance and readiness for mass resistance - not compromise, and not a mere court appeal. The membership figures are true but describe COSATU\'s strength, not what this phrase implies about its stance.'},
  {id: 'q16', src: 'compare', num: '1.5', m: 4, t: 'Refer to Sources 1B and 1D. Explain how the information in Source 1B supports the evidence in Source 1D regarding COSATU\'s response to the Labour Relations Amendment Act.', lv: 3, ll: 'Comparison', opts: ['Source 1B is a poster calling workers to reject the Bill and restrictions and advertising the May 1988 special congress, while Source 1D reports the defiant resolutions COSATU actually adopted at that congress, so the poster\'s call to resist is confirmed by the congress\'s formal response', 'The two sources contradict each other: Source 1B urges workers to resist the Act, whereas Source 1D shows COSATU quietly accepting the softened Bill once it had passed through the Tricameral Parliament after the congress', 'Both sources focus only on COSATU\'s founding launch at a rally in Durban and on its half-million membership drawn from the National Union of Mineworkers and FOSATU, and they tell us nothing at all about the Act itself', 'Source 1B proves that the government itself created the poster to warn workers, and Source 1D shows the government enforcing the Act, so together both sources illustrate the apartheid state\'s own official viewpoint rather than COSATU\'s'], c: 0, fb: 'Both sources are COSATU\'s own response to the LRA: the poster (1B) calls workers to organise, resist and gather at the May 1988 congress, and 1D records the defiant resolutions taken there - they reinforce each other. They are not government sources, they do not contradict, and neither is about the Durban launch.'},
  {id: 'q17', src: 'para', num: '1.6a', m: 2, t: 'Step 1 - Topic sentence. Which sentence best states an argument that directly answers the question: how did COSATU respond to the apartheid government\'s labour reforms in the 1980s?', lv: 3, ll: 'Synthesis', opts: ['From its 1985 launch COSATU met the government\'s labour reforms with organised, defiant resistance, rejecting the Labour Relations Amendment Act and linking factory-floor demands to the wider political struggle', 'COSATU was a large trade union federation that was launched at a rally in Durban in 1985 and grew to a membership of about half a million workers', 'The apartheid government introduced the Labour Relations Amendment Act in 1987, a bill intended to restore the balance in industrial relations in favour of the employer', 'COSATU responded to the government\'s labour reforms by cooperating quietly with officials and by confining itself strictly to negotiating wages at factory-floor level'], c: 0, fb: 'A topic sentence must state an argument that answers \'how\'. The strong option names COSATU\'s organised, defiant, political resistance. The others give background about COSATU or the Act, or make a claim of cooperation that the sources contradict.'},
  {id: 'q18', src: 'para', num: '1.6b', m: 2, t: 'Step 2 - Source evidence. Which option best uses specific evidence from the sources to support that argument?', lv: 3, ll: 'Synthesis', opts: ['Source 1A shows COSATU threatening a national strike and backing disinvestment, while Sources 1B and 1D show it urging workers to \'ORGANISE! RESIST!\' and adopting defiant resolutions at its 1988 congress', 'The Freedom Charter of 1955 declared that the people shall govern and that the country\'s mineral wealth would be transferred to the ownership of the people as a whole', 'The sources generally suggest that many workers across South Africa were unhappy with their pay and working conditions during the course of the 1980s', 'Source 1C proves that COSATU welcomed the government\'s restrictions because it was still allowed to keep financial records and perform administrative functions'], c: 0, fb: 'Good evidence quotes the actual sources: 1A\'s strike and disinvestment stance, and the \'ORGANISE! RESIST!\' poster (1B) with the congress resolutions (1D). A vague statement, the Freedom Charter, or a misread of 1C do not support the argument with source-specific proof.'},
  {id: 'q19', src: 'para', num: '1.6c', m: 2, t: 'Step 3 - Own knowledge. Which fact from your own knowledge best strengthens the paragraph beyond what the sources say?', lv: 3, ll: 'Synthesis', opts: ['Beyond the sources, COSATU went on to organise mass stayaways and strikes and joined the UDF-led Mass Democratic Movement, intensifying pressure on the apartheid state', 'The Natives Land Act of 1913 restricted African land ownership to a small percentage of South Africa\'s total territory and forced many off their land', 'The Truth and Reconciliation Commission, chaired by Archbishop Desmond Tutu, held its first public hearings in 1996 after the end of apartheid rule', 'COSATU disbanded shortly after its 1988 special congress and its members joined the National Party to negotiate a lasting labour peace'], c: 0, fb: 'Relevant own knowledge extends the sources on the same topic - here COSATU\'s later stayaways, strikes and role in the Mass Democratic Movement. The Land Act and the TRC are true but belong to different topics, and COSATU did not disband in 1988.'},
  {id: 'q20', src: 'para', num: '1.6d', m: 2, t: 'Step 4 - Conclusion. Which sentence best concludes the paragraph by tying the evidence back to the question?', lv: 3, ll: 'Synthesis', opts: ['In short, COSATU met the government\'s labour reforms not with compliance but with organised mass resistance, turning workplace grievances into a powerful political challenge to apartheid', 'In conclusion, COSATU was launched in 1985 and the Labour Relations Amendment Act was introduced two years later in 1987 by the apartheid government', 'In conclusion, COSATU\'s response shows that trade unions in the 1980s avoided politics and focused only on improving the wages and factory conditions of workers', 'In conclusion, the disinvestment campaign single-handedly forced the apartheid government to release Nelson Mandela and to hold the first democratic elections'], c: 0, fb: 'A conclusion should synthesise the argument and return to the question. The strong option restates COSATU\'s organised political resistance. The others merely repeat dates, contradict the evidence, or overclaim a single cause for Mandela\'s release.'},
];

const MTA_ANSWERS = [
  {label: 'Answer A', text: 'COSATU was launched in 1985 in Durban as a big trade union federation. When the government brought in the Labour Relations Amendment Act, COSATU did not like it. Source 1B is a poster that says \'NO! to the Labour Bill\' and \'NO! to restrictions\', which shows that COSATU was against the reforms. Source 1D says COSATU held a special congress in May 1988 to respond to the restrictions and the Act. COSATU also threatened to strike. This shows that COSATU resisted the government\'s labour reforms.', expLv: 0, expM: '?-5', crit: [{q: 'Does it have a clear topic sentence addressing the question?', cor: 'partial', exp: 'It opens by describing COSATU\'s launch rather than clearly stating HOW it responded; the argument only appears in the final sentence.'}, {q: 'Does it use specific evidence from the sources?', cor: 'yes', exp: 'It quotes Source 1B\'s \'NO! to the Labour Bill\' and cites Source 1D\'s May 1988 special congress, so it does use specific evidence from the sources.'}, {q: 'Does it include own knowledge beyond the sources?', cor: 'no', exp: 'It stays almost entirely inside the sources and adds no outside knowledge, such as the later stayaways or the Mass Democratic Movement.'}, {q: 'Does it explain WHY (analysis), not just WHAT (description)?', cor: 'no', exp: 'It lists what COSATU did - a poster, a congress, a strike threat - but does not explain WHY it resisted or how these actions pressured the government.'}, {q: 'Does it have a concluding sentence that synthesises?', cor: 'partial', exp: 'The last sentence restates that COSATU resisted, but it adds little synthesis beyond repeating the description.'}, {q: 'Is it a coherent paragraph, not a list of disconnected sentences?', cor: 'yes', exp: 'The sentences follow a logical order and read as a connected paragraph, even though the writing is simple.'}]},
  {label: 'Answer B', text: 'COSATU responded to the apartheid government\'s labour reforms of the 1980s with organised and increasingly political resistance. From its 1985 launch it threatened a national strike and backed disinvestment and nationalisation to pressure the state economically (Source 1A). When the Labour Relations Amendment Act and the February 1988 restrictions tried to confine it to the factory floor, COSATU used posters urging workers to \'ORGANISE! RESIST!\' (Source 1B) and convened a special congress in May 1988 that resolved not to \'knuckle under\' (Source 1D). Beyond the sources, it drove mass stayaways and joined the Mass Democratic Movement. In this way COSATU turned workplace grievances into a direct political challenge to apartheid.', expLv: 0, expM: '?-8', crit: [{q: 'Does it have a clear topic sentence addressing the question?', cor: 'yes', exp: 'The opening sentence directly states the argument: COSATU responded with organised, increasingly political resistance.'}, {q: 'Does it use specific evidence from the sources?', cor: 'yes', exp: 'It draws specific evidence from Sources 1A, 1B and 1D, including the \'ORGANISE! RESIST!\' poster and the May 1988 congress.'}, {q: 'Does it include own knowledge beyond the sources?', cor: 'yes', exp: 'It adds outside knowledge - the mass stayaways and the Mass Democratic Movement - beyond what the sources provide.'}, {q: 'Does it explain WHY (analysis), not just WHAT (description)?', cor: 'yes', exp: 'It explains why COSATU acted, linking disinvestment and the congress to economic and political pressure on the apartheid state.'}, {q: 'Does it have a concluding sentence that synthesises?', cor: 'yes', exp: 'The closing sentence synthesises the evidence, showing how workplace grievances became a political challenge to apartheid.'}, {q: 'Is it a coherent paragraph, not a list of disconnected sentences?', cor: 'yes', exp: 'The paragraph is well structured and flows as a single, coherent argument from claim to conclusion.'}]},
];

/* ═══ KULA LEARN BRIDGE ═══
   Reports results to a parent Kula Learn page via postMessage.
   See project doc: Kula_Revise_results_payload_spec.md (spec v1).
   KR_META is injected by build.py from paper.json meta. The bridge is
   inert unless (a) identity fields are present, (b) the page is inside
   an iframe, and (c) the host origin was passed as ?host=<origin>.   */
const KR_META = {interactiveId: 'history-p2-2023-nov-q1', paper: 'P2', section: 'A', questionNumber: 1, paperRef: 'DBE November 2023'};
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
