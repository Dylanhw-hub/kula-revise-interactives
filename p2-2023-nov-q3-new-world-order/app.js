/* ═══════════════════════════════════════════════════════════════
   DATA BLOCK — replaced by build.py from a content JSON file.
   The build script reads a content payload (see references/content-schema.md)
   and substitutes this entire comment block with:
     const SRC = { ... };
     const QS = [ ... ];
     const MTA_ANSWERS = [ ... ];
   ═══════════════════════════════════════════════════════════════ */
const SRC = {
  '3A': {
    label: 'Source 3A',
    type: 'Academic Book Extract',
    html: `<div class="sp-body">Globalisation presents Africa and black people as marginal (unimportant): globalising economies seek resources from every corner of the world, and globalised economies reap considerable benefits from their economics and political dominance. The Wealth of Nations, to borrow from Adam Smith's famous book, is used not only to develop the resources within the boundaries of nation-states, but also to tap into the resources of other countries. Africa has given to the outside world more than it received in return, creating the basis to talk about the poverty of nations, the ultimate peak of human progress. Globalisation's critics point to the devastation of the environment, climate change, depletion (reduction) of natural and mineral resources, labour exploitation &hellip;<br><br>Africa is the case study of both positions, providing examples of the benefits and problems of globalisation. Africa experiences globalisation 'from above', that is, a situation where powerful nations and companies with more resources are able to control the major actions and policies that determine the characteristics of global encounters. If Africa is part of the equation of globalisation 'from below', any discussion of its place in the global system will draw us into issues of nationalism and resistance &ndash; how Africans can mobilise themselves to win power and privileges, and how international institutions must be reformed. The actors who control globalisation from above call on African countries to practise democracy, but the same democratic principles do not apply to the United Nations Security Council, where a handful of countries have veto (to reject) power.</div>`,
    attr: 'From <em>Globalisation and Sustainable Development in Africa</em> by T Falola and B House-Soremekun'
  },
  '3B': {
    label: 'Source 3B',
    type: 'Academic Book Extract',
    html: `<div class="sp-body">The conditions with which African governments have had to respond to the global crisis of the early 1980s have had the effect of locking them into new forms of dependent relationships with Western governments and international financial organisations. In particular, the acute (severe) balance of payments crises suffered by most African states in recent years, and the accompanying disruption of local production, have undermined the continent's ability to service foreign debt incurred in better times. Indeed, many countries have been forced to go into debt in an effort to stave (repair) off economic collapse and/or in an attempt to stimulate economic recovery. In particular, they have turned to the International Monetary Fund (IMF) and the World Bank for balance of payments loans.<br><br>Usually they have done so reluctantly (unwillingly), and because they have exhausted other possibilities of obtaining finance. Sometimes banks' bilateral donors and other sources of funding insist that African governments borrow from international institutions as a condition for maintaining their own contribution to balance of payment assistance.<br><br>Never before have the international financial institutions wielded (used) such pervasive (extensive) influence on policy formulation in Africa; not since the days of colonialism have external forces been so powerfully focused to shape Africa's economic structure and the nature of its participation in the world system.<br><br>Structural adjustments, as advocated by the international institutions, seek to restore growth and stability by recasting (changing) relative prices, domestic expenditures and the type and degree of state intervention in the economy.</div>`,
    attr: 'From <em>Structural Adjustment in Africa</em> by BK Campbell and J Loxley'
  },
  '3C': {
    label: 'Source 3C',
    type: 'Political Cartoon',
    html: `<img class="sp-img" src="3C.png" alt="A cartoon set against a grey background. On the left, a thin, emaciated child holding a bowl and a spoon lifts a spoonful of food towards a very large, obese seated man on the right. A small placard beside the child reads 'POOR NATIONS' and the man's shirt is labelled 'RICH NATIONS'. Label boxes below the drawing repeat the words 'POOR NATIONS' on the left and 'RICH NATIONS' on the right.">`,
    attr: 'Cartoon titled \'Dependence Theory\'. From <em>The Development of Underdevelopment</em> by AG Frank'
  },
  '3D': {
    label: 'Source 3D',
    type: 'Memoir Extract',
    html: `<div class="sp-body">In 1993 I left Academia (university) to serve on the Council of Economic Advisers under President Bill Clinton. After years of research and teaching, this was my first major foray (attempt) into policy making, and more to the point, politics. From there I moved to the World Bank in 1997, where I served as chief economist and senior vice-president for almost three years, leaving in January 2000. I couldn't have chosen a more fascinating time to go into policy making. I was in the White House as Russia began its transition from communism and I worked at the World Bank during the financial crisis that began in East Asia in 1997 and eventually enveloped the world.<br><br>I had always been interested in economic development and what I saw radically changed my views of both globalisation and development. Foreign aid, another aspect of the globalised world, for all its faults still has brought benefits to millions, often in ways that have almost gone unnoticed: guerrillas in the Philippines were provided jobs by a World Bank-financed project as they laid down all their arms, irrigation projects have more than doubled the incomes of farmers lucky enough to get water, education projects have brought literacy to the rural areas, in a few countries Aids projects have helped contain the spread of this deadly disease.<br><br>Those who vilify (criticise) globalisation too often overlook the benefits. But the proponents (supporters) of globalisation have been, if anything, even more unbalanced. To them, globalisation (which typically is associated with accepting triumphant capitalism, American style) is progress; developing countries must accept it, if they are to grow and to fight poverty effectively. But to many in the developing world, globalisation has not brought the promised economic benefits.</div>`,
    attr: 'From <em>Globalisation and Its Discontents</em> by J Stiglitz'
  },
  'compare': {
    label: 'Sources 3C + 3D',
    type: 'Comparison',
    html: `<img class="sp-img" src="3C.png" alt="The 'Dependence Theory' cartoon from Source 3C: a thin, emaciated child labelled 'POOR NATIONS' spoon-feeds a very large, obese seated man labelled 'RICH NATIONS'."><div class="sp-body" style="margin-top:14px;"><strong>Source 3D (extract):</strong> &hellip; Foreign aid &hellip; for all its faults still has brought benefits to millions &hellip; guerrillas in the Philippines were provided jobs by a World Bank-financed project &hellip; irrigation projects have more than doubled the incomes of farmers &hellip; education projects have brought literacy to the rural areas, in a few countries Aids projects have helped contain the spread of this deadly disease. &hellip; But to many in the developing world, globalisation has not brought the promised economic benefits.</div>`,
    attr: 'Re-read both sources, then explain how they differ.'
  },
  'para': {
    label: 'Paragraph Task',
    type: 'Q3.6, 8 marks',
    html: `<div class="sp-body">Q3.6 (8 marks). Using the information in the relevant sources and your own knowledge, write a paragraph of about EIGHT lines (about 80 words) explaining how powerful international financial institutions, namely the International Monetary Fund and the World Bank, shaped the globalised economies since the 1980s. Build your paragraph in four steps: a topic sentence, source evidence, own knowledge, and a conclusion.</div>`,
    attr: 'Synthesis: build the paragraph one step at a time.'
  },
  'mta': {
    label: 'Mark This Answer',
    type: 'Evaluative Task',
    html: `<div class="sp-body">Below are two learner paragraphs answering Q3.6: how did the IMF and the World Bank shape the globalised economies since the 1980s? Read each one and judge it against the six marking criteria a real examiner would use.</div>`,
    attr: 'Score each paragraph against the six criteria.'
  },
};

const QS = [
  {id: 'q1', src: '3A', num: '3.1.1', m: 2, t: 'Define the term globalised economies in your own words.', lv: 1, ll: 'Concept', opts: ['National economies linked across borders, able to draw on resources, trade and investment from all over the world', 'Economies that rely entirely on their own domestic resources and deliberately avoid all trade with other countries', 'Economies in which the state owns and controls all production and sets every single price centrally', 'Economies that print their own currency and refuse loans from any international financial institution whatsoever'], c: 0, fb: 'Globalised economies are interconnected across borders, tapping resources, trade and investment worldwide. They are the opposite of self-sufficient economies, and they are not command economies (state-controlled) or economies that shun all international loans.'},
  {id: 'q2', src: '3A', num: '3.1.2', m: 4, t: 'Give FOUR points of criticism of globalisation as stated in the source.', lv: 1, ll: 'Extraction', multi: true, mx: 4, opts: ['The devastation of the environment', 'Climate change', 'The depletion of natural and mineral resources', 'Labour exploitation', 'Greater literacy across the rural areas', 'A fairer spread of veto power at the UN'], c: [2, 0, 1, 3], fb: 'The source\'s criticisms of globalisation are the devastation of the environment, climate change, the depletion of natural and mineral resources, and labour exploitation. Rural literacy is a benefit named in Source 3D, and the source says UN veto power rests with only a handful of countries, not that it is fairly shared.'},
  {id: 'q3', src: '3A', num: '3.1.3', m: 2, t: 'Using the information in the source and your own knowledge, comment on how powerful nations and financial institutions benefitted from the implementation of globalisation \'from above\'.', lv: 2, ll: 'Interpretation', opts: ['By controlling global policies and lending, they kept poorer nations dependent, extracted cheap resources and labour, and made large profits as the rich-poor gap widened', 'They practised democracy at home and called on African countries to adopt the same democratic principles in their own national governments', 'They benefitted by giving generous, interest-free grants to African states that steadily closed the gap between rich and poor nations', 'They benefitted mainly by reforming the United Nations Security Council so that the African countries at last gained veto power'], c: 0, fb: 'Powerful nations and institutions gained by writing the rules and lending on their own terms, keeping poor nations dependent while extracting cheap resources and profit - so the rich-poor gap widened. They did not give interest-free grants, close the gap, or hand Africa veto power.'},
  {id: 'q4', src: '3A', num: '3.1.4', m: 2, t: 'Using the information in the source and your own knowledge, explain how experiencing globalisation \'from below\' would be of advantage to Africa.', lv: 2, ll: 'Interpretation', opts: ['Africa could use the world\'s demand for its resources to resist exploitation, reform international institutions and attract investment that creates jobs and reduces poverty', 'It would allow powerful nations and companies to keep on controlling the major policies that determine the character of global economic encounters', 'It would let Africa withdraw completely from the global economy and rely only on its own internal resources and trade', 'It would guarantee the African countries a permanent veto on the United Nations Security Council over all future global trade rules'], c: 0, fb: 'Globalisation \'from below\' means Africans mobilising - leveraging demand for their resources to resist exploitation, reform institutions and draw job-creating investment. It is not the top-down control of \'from above\', not withdrawal from the world economy, and not a guaranteed UN veto.'},
  {id: 'q5', src: '3B', num: '3.2.1', m: 4, t: 'Quote FOUR pieces of evidence from the source to indicate that Africa\'s experience of the global crisis in the 1980s led to a dependency relationship with the West.', lv: 1, ll: 'Extraction', multi: true, mx: 4, opts: ['\'... the accompanying disruption of local production ...\' undermined the continent\'s ability to service foreign debt', '\'... acute balance of payments crises suffered by most African states ...\'', '\'... many countries have been forced to go into debt ...\'', 'They \'turned to the International Monetary Fund (IMF) and the World Bank for ... loans\'', '\'Structural adjustments, as advocated by the international institutions, seek to restore growth\'', 'Throughout the 1980s crisis, African states enjoyed healthy trade surpluses and needed no loans'], c: [0, 1, 2, 3], fb: 'Dependency is shown by the \'acute balance of payments crises\', the \'disruption of local production\' undermining debt service, countries \'forced to go into debt\', and turning \'to the IMF and the World Bank for loans\'. Structural adjustment describes the policy remedy, and African states did not enjoy surpluses during the crisis.'},
  {id: 'q6', src: '3B', num: '3.2.2', m: 2, t: 'Using the information in the source and your own knowledge, explain why assistance from the International Monetary Fund (IMF) and the World Bank was reluctantly accepted by some African countries.', lv: 2, ll: 'Interpretation', opts: ['Because the loans came with strict policy conditions that stripped African governments of control over their economies and tied them to lasting dependence on the West', 'Because the IMF and World Bank demanded that African countries immediately abandon all of their existing trade with the Western governments', 'Because the loans were offered as generous interest-free gifts that proud African leaders felt reluctant to accept in public', 'Because accepting the loans required African countries to give up their permanent seats at the United Nations General Assembly'], c: 0, fb: 'Reluctance came from the conditions attached: structural-adjustment policies took economic control out of African hands and locked them into dependence (neo-colonialism). The loans were not gifts, did not require abandoning trade or UN seats - the price was lost sovereignty over their own economies.'},
  {id: 'q7', src: '3B', num: '3.2.3', m: 2, t: 'What do you think is implied by the statement, \'... not since the days of colonialism have external forces been so powerfully focused to shape Africa\'s economic structure\', regarding the influence of the IMF and the World Bank?', lv: 2, ll: 'Interpretation', opts: ['That the IMF and World Bank now dominate and reshape African economies so completely that their power resembles the control once exercised by colonial rulers', 'That African countries turned to the IMF and the World Bank only after they had first exhausted all other possible sources of finance', 'That the IMF and World Bank had finally ended all outside interference and had restored Africa\'s full economic independence', 'That the old colonial powers were in fact still directly governing African territories through the IMF and the World Bank'], c: 0, fb: 'The line compares the institutions\' grip on African economies to old colonial control - powerful outside forces reshaping Africa from outside. It is a comparison, not literal colonial rule; it does not mean Africa regained independence, and it is about power, not merely being a last-resort lender.'},
  {id: 'q8', src: '3B', num: '3.2.4', m: 2, t: 'Explain the term structural adjustments in the context of the policies of international financial institutions regarding African countries.', lv: 2, ll: 'Concept', opts: ['Conditions attached to IMF and World Bank loans that forced African states to cut spending, free prices and open their economies to the market', 'Programmes in which African governments took over the ownership of all major private industries and set every price centrally', 'Simply the balance-of-payments loans that the IMF and the World Bank granted to the African countries during their economic crisis', 'Generous debt-forgiveness deals that fully cancelled the entire foreign debts owed by the very poorest of the African countries'], c: 0, fb: 'Structural adjustments were the strings on IMF and World Bank loans - cutting state spending, freeing prices and opening markets. They reduced the government\'s role rather than nationalising industry, and they were the policy conditions on the loans, not the loans themselves or any debt forgiveness.'},
  {id: 'q9', src: '3C', num: '3.3.1', m: 4, t: 'Explain whether you consider the caption \'Dependence Theory\' as appropriate for this cartoon.', lv: 2, ll: 'Interpretation', opts: ['Yes, it is appropriate: a starving \'poor nations\' child feeds a bloated \'rich nations\' figure, capturing how wealthy nations actually depend on and drain the resources of the poor', 'No, it is inappropriate, because the cartoon clearly shows the rich man generously feeding the starving child, which proves that the rich nations support the poor ones', 'Yes, it is appropriate, because it shows that poor nations are naturally lazy and simply sit waiting for hand-outs from the wealthy nations of the world', 'No, it is inappropriate, because dependency theory is really only about balance-of-payments loans from the IMF, and not about the relationship between nations'], c: 0, fb: 'The caption fits: the emaciated \'poor nations\' child spoon-feeds the bloated \'rich nations\' figure, showing the rich depending on and draining the poor - the core of dependency theory. The rich man is being fed, not feeding; the image does not blame the poor; and dependency theory is about relationships between nations, not just IMF loans.'},
  {id: 'q10', src: '3C', num: '3.3.2', m: 2, t: 'Why do you think the cartoonist portrays \'rich nations\' as oversized?', lv: 2, ll: 'Interpretation', opts: ['To show that rich nations are greedy, monopolising and consuming the resources of poor countries to fatten themselves at the expense of the poor', 'To show that rich nations have far larger populations than poor nations and therefore genuinely need much more food and resources', 'To show that rich nations are strong and healthy simply because they work far harder than the poor nations do', 'To show that rich nations are slow and weak and so can easily be overtaken by the faster-growing poor nations'], c: 0, fb: 'The exaggerated size symbolises greed - rich nations gorging on the resources of the poor. It is not a comment on population size, a reward for hard work, or a sign of weakness; the bloated figure represents over-consumption at the expense of the starving child.'},
  {id: 'q11', src: '3D', num: '3.4.1', m: 2, t: 'Identify TWO positions in the source that J Stiglitz held before he entered the world of policy making.', lv: 1, ll: 'Extraction', multi: true, mx: 2, opts: ['Research', 'Teaching', 'Chief economist at the World Bank', 'Senior vice-president of the World Bank', 'Member of the Council of Economic Advisers'], c: [0, 1], fb: 'Before policy making, Stiglitz spent \'years of research and teaching\' in Academia. The Council of Economic Advisers role and his World Bank posts (chief economist and senior vice-president) all came after he entered policy making, so they are not \'before\' positions.'},
  {id: 'q12', src: '3D', num: '3.4.2', m: 2, t: 'Comment on why globalisation is generally associated with development.', lv: 2, ll: 'Interpretation', opts: ['Because it links countries into a shared global economy, spreading resources, technology and investment in ways that can create jobs and reduce poverty', 'Because it allows the wealthy nations to keep all their technology and investment strictly within their own borders and away from the poor', 'Because Stiglitz served as the chief economist of the World Bank during the East Asian financial crisis of 1997 and beyond', 'Because it forces every developing country to abandon capitalism and to adopt a centrally planned economy in its place'], c: 0, fb: 'Globalisation is tied to development because interconnection can spread resources, technology and investment that create jobs and cut poverty. It is about sharing across borders, not hoarding within them; it is linked to capitalism, not central planning; and Stiglitz\'s job title is not the reason.'},
  {id: 'q13', src: '3D', num: '3.4.3', m: 2, t: 'Give TWO examples of projects mentioned in the source that benefitted from foreign aid.', lv: 1, ll: 'Extraction', multi: true, mx: 2, opts: ['Irrigation projects that doubled farmers\' incomes', 'Education projects that brought literacy to rural areas', 'Structural adjustment programmes across Africa', 'Balance-of-payments loans from the IMF', 'The privatisation of state-owned mines'], c: [0, 1], fb: 'Source 3D names irrigation projects (which doubled farmers\' incomes) and education projects (which brought literacy) among the aid successes. Structural adjustment and IMF balance-of-payments loans come from Source 3B, and privatising mines is not mentioned at all.'},
  {id: 'q14', src: '3D', num: '3.4.4', m: 2, t: 'What is implied by the statement, \'But to many in the developing world, globalisation has not brought the promised economic benefits\'?', lv: 2, ll: 'Interpretation', opts: ['That, for much of the developing world, globalisation failed to deliver the prosperity it promised, leaving poverty, debt and inequality still widespread', 'That globalisation had already lifted every single developing country out of poverty and had entirely closed the gap with the rich', 'That Stiglitz left the World Bank in January 2000 after serving there as chief economist for almost three full years', 'That the developing countries had simply refused to take any part at all in the workings of the global economy'], c: 0, fb: 'The line signals disappointment: globalisation did not bring the wealth it promised, so poverty, debt and inequality persist in much of the developing world. It does not mean poverty was ended, that developing countries opted out, and Stiglitz\'s departure date is not its meaning.'},
  {id: 'q15', src: '3D', num: '3.4.5', m: 4, t: 'Explain the usefulness of the source to a historian studying globalisation.', lv: 3, ll: 'Reliability', opts: ['It is very useful because Stiglitz writes from first-hand experience inside the World Bank and White House and gives a balanced view of globalisation\'s benefits and failures, though as an insider it is still one person\'s perspective', 'It is useful because it is a neutral statistical survey of every developing economy in the world, though it is limited because it was written long before globalisation had even begun', 'It is useful because it was published by a famous university press, which guarantees that it is completely free of any bias or personal opinion whatsoever', 'It is useful because it records the official policy of the IMF on structural adjustment, though it is limited to reflecting only the IMF\'s own institutional viewpoint'], c: 0, fb: 'The real usefulness is Stiglitz\'s insider, first-hand vantage and his balanced view of globalisation\'s gains and failures, tempered by the limitation that it is one participant\'s perspective. It is a memoir, not a neutral survey or official IMF policy, and a prestigious publisher does not remove bias.'},
  {id: 'q16', src: 'compare', num: '3.5', m: 4, t: 'Use Source 3C and Source 3D. Explain how the information in Source 3C differs from the evidence in Source 3D regarding the impact of globalisation on the African countries.', lv: 3, ll: 'Comparison', opts: ['Source 3C portrays globalisation negatively - a starving poor nation feeding a bloated rich one, showing exploitation - whereas Source 3D stresses its benefits, arguing that foreign aid brought jobs, irrigation, literacy and health gains to the developing world', 'The two sources actually agree completely with one another: both Source 3C and Source 3D argue that globalisation has only ever exploited and badly harmed the poorer African nations and their people', 'Both sources focus only on the balance-of-payments loans and the structural adjustment programmes that were offered by the IMF and the World Bank to the struggling African countries during the crisis', 'Source 3C shows globalisation benefiting the poor nations through generous foreign aid projects, while Source 3D shows those same poor nations being ruthlessly exploited by the wealthy rich nations'], c: 0, fb: 'The sources differ in judgement: 3C\'s cartoon condemns globalisation as exploitation (poor feeding rich), while 3D emphasises its benefits - aid-funded jobs, irrigation, literacy and health projects. They do not agree, they are not both about IMF loans, and neither reverses these positions.'},
  {id: 'q17', src: 'para', num: '3.6a', m: 2, t: 'Step 1 - Topic sentence. Which sentence best states an argument that directly answers the question: how did the IMF and the World Bank shape the globalised economies since the 1980s?', lv: 3, ll: 'Synthesis', opts: ['Since the 1980s the IMF and World Bank have powerfully shaped the globalised economy by locking African and developing countries into debt, conditional loans and dependence on the West', 'The International Monetary Fund and the World Bank are two very powerful international financial institutions that are based in the developed world', 'Globalisation\'s critics point to the devastation of the environment, climate change and the depletion of the world\'s natural and mineral resources', 'Since the 1980s the IMF and World Bank have had almost no real influence at all on the economies of African or developing countries'], c: 0, fb: 'A topic sentence must state an argument that answers \'how\'. The strong option names how the institutions shaped economies through debt and dependence. The others give background about the institutions, list unrelated criticisms of globalisation, or make a claim the sources contradict.'},
  {id: 'q18', src: 'para', num: '3.6b', m: 2, t: 'Step 2 - Source evidence. Which option best uses specific evidence from the sources to support that argument?', lv: 3, ll: 'Synthesis', opts: ['Source 3B shows African states \'locked into dependent relationships\' and turning to the IMF and World Bank for loans, while Source 3A describes globalisation \'from above\' controlled by powerful nations', 'The Freedom Charter of 1955 declared that the mineral wealth beneath South Africa\'s soil would be restored to the ownership of the people as a whole', 'The sources generally show that money and international trade were quite important to a great many countries during the later twentieth century', 'Source 3D proves that the IMF and the World Bank refused to lend any money at all to the struggling African countries in crisis'], c: 0, fb: 'Good evidence quotes the actual sources: 3B\'s \'dependent relationships\' and turn to the IMF and World Bank, and 3A\'s globalisation \'from above\'. The Freedom Charter, a vague statement, or a misread of 3D do not support the argument with source-specific proof.'},
  {id: 'q19', src: 'para', num: '3.6c', m: 2, t: 'Step 3 - Own knowledge. Which fact from your own knowledge best strengthens the paragraph beyond what the sources say?', lv: 3, ll: 'Synthesis', opts: ['Beyond the sources, structural adjustment programmes in the 1980s and 1990s forced many African states to cut public spending and privatise services, deepening hardship and dependence', 'The Truth and Reconciliation Commission held its first public hearings in South Africa in 1996 under the chairmanship of Archbishop Desmond Tutu', 'The Berlin Wall fell in November 1989, an event that came to symbolise the end of the Cold War across Europe', 'The IMF and the World Bank cancelled all African debt during the 1980s, allowing the whole continent to develop freely'], c: 0, fb: 'Relevant own knowledge extends the sources on the same topic - here the structural adjustment programmes that deepened African hardship and dependence. The TRC and the Berlin Wall belong to different topics, and the IMF and World Bank did not cancel African debt.'},
  {id: 'q20', src: 'para', num: '3.6d', m: 2, t: 'Step 4 - Conclusion. Which sentence best concludes the paragraph by tying the evidence back to the question?', lv: 3, ll: 'Synthesis', opts: ['In short, by tying loans to strict conditions the IMF and World Bank became the dominant force shaping developing economies, drawing them deeper into a Western-led global system', 'In conclusion, the IMF and the World Bank are international financial institutions that lend money to countries facing economic difficulty', 'In conclusion, the IMF and World Bank left the African economies completely independent and entirely free from any outside influence at all', 'In conclusion, the IMF and the World Bank single-handedly ended all global poverty and made every developing country in the world wealthy'], c: 0, fb: 'A conclusion should synthesise the argument and return to the question. The strong option restates how the institutions shaped developing economies through conditional lending. The others merely repeat a definition, contradict the evidence, or overclaim that they ended global poverty.'},
];

const MTA_ANSWERS = [
  {label: 'Answer A', text: 'The IMF and the World Bank are powerful financial institutions. Source 3B says that African countries were locked into dependent relationships with the West and had to borrow money from the IMF and the World Bank. Source 3A says that Africa experienced globalisation \'from above\', where powerful nations control the policies. This shows that the IMF and the World Bank had a lot of power over African economies. Many African countries were forced to go into debt.', expLv: 0, expM: '?-5', crit: [{q: 'Does it have a clear topic sentence addressing the question?', cor: 'partial', exp: 'It opens by describing what the institutions are rather than clearly stating HOW they shaped the economies; the argument only appears near the end.'}, {q: 'Does it use specific evidence from the sources?', cor: 'yes', exp: 'It cites Source 3B\'s \'dependent relationships\' and Source 3A\'s globalisation \'from above\', so it uses specific source evidence.'}, {q: 'Does it include own knowledge beyond the sources?', cor: 'no', exp: 'It stays inside the sources and adds no outside knowledge, such as the structural adjustment programmes and their effects.'}, {q: 'Does it explain WHY (analysis), not just WHAT (description)?', cor: 'no', exp: 'It describes the institutions\' power but does not explain WHY the loans and conditions created lasting dependence.'}, {q: 'Does it have a concluding sentence that synthesises?', cor: 'partial', exp: 'The closing sentences restate that Africa was in debt but add little real synthesis beyond the description.'}, {q: 'Is it a coherent paragraph, not a list of disconnected sentences?', cor: 'yes', exp: 'The sentences follow a logical order and read as a connected paragraph, even though the writing is simple.'}]},
  {label: 'Answer B', text: 'Since the 1980s the IMF and the World Bank have shaped the globalised economy by tying developing countries into debt and dependence on the West. Source 3B shows that Africa\'s balance-of-payments crises \'locked them into dependent relationships\' and forced them to turn to these institutions for loans, comparing their grip to \'the days of colonialism\'. Source 3A adds that this was globalisation \'from above\', where powerful nations and institutions control policy for their own benefit. Beyond the sources, the structural adjustment programmes attached to these loans forced states to cut spending and privatise services, deepening poverty. Even Stiglitz, a World Bank insider, concedes that \'globalisation has not brought the promised economic benefits\' (Source 3D). In this way the institutions became the dominant force shaping developing economies.', expLv: 0, expM: '?-8', crit: [{q: 'Does it have a clear topic sentence addressing the question?', cor: 'yes', exp: 'The opening sentence directly states the argument: the institutions shaped the economy by tying countries into debt and dependence.'}, {q: 'Does it use specific evidence from the sources?', cor: 'yes', exp: 'It draws specific evidence from Sources 3A, 3B and 3D, including \'dependent relationships\' and the colonialism comparison.'}, {q: 'Does it include own knowledge beyond the sources?', cor: 'yes', exp: 'It adds outside knowledge - the structural adjustment programmes and their effects - beyond what the sources state.'}, {q: 'Does it explain WHY (analysis), not just WHAT (description)?', cor: 'yes', exp: 'It explains why the loans created dependence, linking conditions and privatisation to deepening poverty and Western control.'}, {q: 'Does it have a concluding sentence that synthesises?', cor: 'yes', exp: 'The closing sentence synthesises the evidence, showing the institutions as the dominant force shaping developing economies.'}, {q: 'Is it a coherent paragraph, not a list of disconnected sentences?', cor: 'yes', exp: 'The paragraph is well structured and flows as a single, coherent argument from claim to conclusion.'}]},
];

/* ═══ KULA LEARN BRIDGE ═══
   Reports results to a parent Kula Learn page via postMessage.
   See project doc: Kula_Revise_results_payload_spec.md (spec v1).
   KR_META is injected by build.py from paper.json meta. The bridge is
   inert unless (a) identity fields are present, (b) the page is inside
   an iframe, and (c) the host origin was passed as ?host=<origin>.   */
const KR_META = {interactiveId: 'history-p2-2023-nov-q3', paper: 'P2', section: 'A', questionNumber: 3, paperRef: 'DBE November 2023'};
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
