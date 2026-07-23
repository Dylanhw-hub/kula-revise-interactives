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
    type: 'Academic Journal',
    html: `<div class="sp-body">Globalisation has offered multinational corporations (MNCs), like Walmart, enormous opportunities in spreading their operations and activities to the far corners of the world. Companies expand their activities across borders for many reasons. Amongst these, access to larger markets, economies of scale and cheaper resources are the most popular reasons for expansion. In Walmart's case, the company's survival was directly linked to its growth, and the international arena provided an ideal platform for sustainable (maintainable) growth.<br><br>Walmart could not afford to confine (limit) its operations to a country that accounts for only 4 per cent of the world's population – the USA. As a result, the company began globalising in 1991, and has since aggressively pursued a globalisation strategy.<br><br>Although free trade agreements, advances in technology and transportation have made it easier for firms to conduct business across borders, Pearce and Robinson (2011) are of the opinion that there are numerous complexities (difficulties) associated with the international trade process.<br><br>Walmart would have also examined the relative 'openness' of South Africa to international trade. Being signatory to the Southern African Development Community (SADC), as well as the recently formed BRICS (Brazil, Russia, India, China and South Africa) community, has signalled that South Africa is relatively open to trade. Consequently, Walmart settled on South Africa as its first host country on the African continent.</div>`,
    attr: 'P Soni and AM Karodia, <em>International Journal of Accounting Research</em>, Vol. 1, No. 10, 2014'
  },
  '3B': {
    label: 'Source 3B',
    type: 'Photograph',
    html: `<div class="sp-body">The photograph below is from the <em>Independent Online (IOL)</em> newspaper published on 1 June 2011. It shows some members of the South African Commercial and Catering Worker's Union (SACCAWU) demonstrating against the merger of Walmart with Massmart outside the Department of Trade and Industry's offices in Pretoria where the Competition Board hearing was held.</div><img class="sp-img" src="3B.png" alt="A photograph of a crowd of demonstrators in matching T-shirts marching in a street, many raising their fists and shouting, holding up printed placards. Several placards read 'anti-walmart coalition' and 'WALMART – THE ECONOMIC COLONISER!'. Parked cars are visible in the background. Two printed labels beneath the photograph repeat the words 'ANTI-WALMART COALITION' and 'WALMART – THE ECONOMIC COLONISER!'.">`,
    attr: '<em>Independent Online (IOL)</em>, 1 June 2011'
  },
  '3C': {
    label: 'Source 3C',
    type: 'Submission',
    html: `<div class="sp-body">Our primary concern regards the fact that the presence of Walmart will negatively affect local employment and the local manufacturing sector due to decreased demand within the retail sector for locally-produced products and increased demand for imported products (in respect of the merged entity and even its competitors).<br><br>This shall have the effect of causing: significant foreclosure (on an industry-wide basis) of domestic manufacturers within the industries which supply the retail sector; job losses, especially in the manufacturing sector but also in the retail sector and particularly amongst black workers; de-industrialisation within the South African manufacturing sector; and small businesses and businesses owned or controlled by historically disadvantaged persons to become less competitive.<br><br>The presence of Walmart in the local market will also lead to worsened conditions for employees in the industry. Walmart's practices indicate that its lowering of prices comes at a significant cost to employees, who are compelled to accept lower wages and working conditions. This negates (refuses) any consumer welfare benefits claimed by the merging parties arising out of lowering prices and also raises significant public interest concerns.</div>`,
    attr: 'SACTWU Submission to the Portfolio Committee on Economic Development, 15 July 2011'
  },
  '3D': {
    label: 'Source 3D',
    type: 'Speech Extract',
    html: `<div class="sp-body">The Walmart/Massmart considerations largely revolved around the threat that was likely in the future. There was a fear that if Walmart came into the country, in view of its sophisticated (modern) network to procure (buy), local suppliers would not have a chance to sell their products. One option was to keep Walmart out of the country. The second – which was followed – was to allow Walmart to enter, but then to build local suppliers to become more efficient and have a greater competitive ability. The supplier development fund and other conditions were articulated (expressed), also in response to interventions by government, which were first announced before the Tribunal.<br><br>It was obviously also in the interests of Walmart to have good local supplies, particularly in respect of perishables (food that will lose freshness), and it was likely that Walmart would in any event, even without the order for the establishment of the Fund, have done something to pursue improvement of local supply. Suppliers were not obliged to supply Walmart only, so now they would be improving for all their customers. In relation to the media articles referred to by the chairperson, it seemed that legislators in the USA were taking similar steps to try to protect their own local industries.<br><br>Despite its ideological positions, the USA seemed to adopt a protectionist stance. In the long term, the commitment by Walmart might have an impact, depending on how it was implemented, but it must be remembered that no matter what Walmart's commitment in the USA, the political circumstances there could never override the Competition Appeal Court (CAC)'s ruling that it must comply with in South Africa.</div>`,
    attr: 'Parliamentary Monitoring Group, Competition Commission Update, 30 January 2013'
  },
  'compare': {
    label: 'Sources 3B + 3C',
    type: 'Comparison',
    html: `<div class="sp-body"><strong>Source 3B</strong> — SACCAWU members demonstrating against the Walmart–Massmart merger outside the Department of Trade and Industry in Pretoria, holding placards reading 'WALMART – THE ECONOMIC COLONISER!'.</div><img class="sp-img" src="3B.png" alt="Photograph of SACCAWU demonstrators marching with raised fists and holding placards reading 'anti-walmart coalition' and 'WALMART – THE ECONOMIC COLONISER!'."><div class="sp-body" style="margin-top:12px;"><strong>Source 3C</strong> — 'the presence of Walmart will negatively affect local employment and the local manufacturing sector &hellip; This shall have the effect of causing: significant foreclosure &hellip; of domestic manufacturers &hellip; job losses, especially in the manufacturing sector &hellip; de-industrialisation within the South African manufacturing sector &hellip;'</div>`,
    attr: 'Re-read both sources, then explain how the information in Source 3C supports the evidence in Source 3B.'
  },
  'para': {
    label: 'Paragraph Task',
    type: 'Q3.6 · 8 marks',
    html: `<div class="sp-body">Using the information in the relevant sources and your own knowledge, write a paragraph of about EIGHT lines (about 80 words) explaining <strong>why there was resistance to Walmart's expansion into South Africa in 2011.</strong><br><br>Build your paragraph in four moves: a topic sentence, source evidence, own knowledge, and a synthesising conclusion. The four questions that follow walk you through each move.</div>`,
    attr: 'Draws on Sources 3A, 3B, 3C and 3D.'
  },
  'mta': {
    label: 'Mark This Answer',
    type: 'Evaluative Task',
    html: `<div class="sp-body">Below are two learner paragraphs answering the 8-mark question: <em>Why was there resistance to Walmart's expansion into South Africa in 2011?</em><br><br>Read each one, then use the six marking criteria to judge how well it answers the question. Decide the mark each deserves out of 8 before you reveal the guidance.</div>`,
    attr: 'Apply the marking criteria as if you were the examiner.'
  },
};

const QS = [
  {id: 'q1', src: '3A', num: '3.1.1', m: 2, t: 'Define the term globalisation in your own words.', lv: 1, ll: 'Concept', opts: ['The process by which the world becomes more integrated and connected across borders through trade, technology, transport and communication.', 'A government policy of protecting local industries by placing high tariffs and taxes on all imported foreign goods.', 'The movement of people from the rural areas into the large cities in search of factory work and better wages.', 'The process by which a single country becomes completely self-sufficient and stops trading with any of the other nations.'], c: 0, fb: 'Globalisation is the growing integration and interconnectedness of the world across borders through trade, technology, transport and communication — exactly what let Walmart expand into South Africa. Protecting local industry with tariffs is protectionism (its near-opposite), and rural-to-city migration and national self-sufficiency describe quite different processes.'},
  {id: 'q2', src: '3A', num: '3.1.2', m: 3, t: 'Give THREE reasons in the source why companies expand their activities across borders.', lv: 1, ll: 'Extraction', multi: true, mx: 3, opts: ['Access to larger markets', 'Economies of scale', 'Cheaper resources', 'To avoid paying company tax', 'To escape strict labour laws', 'To reduce home competition'], c: [0, 1, 2], fb: 'Source 3A states the \'most popular reasons for expansion\' are \'access to larger markets, economies of scale and cheaper resources\'. Avoiding tax, escaping labour laws, or reducing home competition are plausible business motives but are not the reasons this source actually gives.'},
  {id: 'q3', src: '3A', num: '3.1.3', m: 2, t: 'Using the information in the source and your own knowledge, explain why Walmart aggressively pursued a globalisation strategy.', lv: 2, ll: 'Interpretation', opts: ['Its growth was limited in a US market with only 4 per cent of the world\'s population, so it expanded abroad to keep growing and survive.', 'Walmart began globalising back in 1991 and then chose South Africa as its first host country on the African continent.', 'Walmart wanted to donate cheaper goods to developing countries as part of a charitable programme to help reduce world poverty.', 'Walmart was ordered by the United States government to open new stores right across Africa to spread American culture there.'], c: 0, fb: 'Source 3A says Walmart \'could not afford to confine its operations to a country that accounts for only 4 per cent of the world\'s population\'. Its survival was \'directly linked to its growth\', so it had to expand abroad. The 1991 start date is a true detail but not the reason, and charity or a government order are inventions.'},
  {id: 'q4', src: '3A', num: '3.1.4', m: 2, t: 'Give any TWO factors, according to the source, which made it easier for firms to conduct business across borders.', lv: 1, ll: 'Extraction', multi: true, mx: 2, opts: ['Free trade agreements', 'Advances in technology', 'Lower company tax rates', 'Stronger labour trade unions', 'Higher import tariffs'], c: [0, 1], fb: 'Source 3A says \'free trade agreements, advances in technology and transportation have made it easier for firms to conduct business across borders\'. Lower taxes, stronger unions and higher tariffs are not the factors named — higher tariffs would in fact make cross-border trade harder, not easier.'},
  {id: 'q5', src: '3A', num: '3.1.5', m: 2, t: 'Explain the meaning of the statement, \'… South Africa is relatively open to trade\', in the context of globalisation.', lv: 2, ll: 'Interpretation', opts: ['As a member of SADC and BRICS, South Africa has fewer trade restrictions and welcomes foreign investment, making it easy for companies like Walmart to enter.', 'South Africa had recently joined the BRICS group made up of Brazil, Russia, India, China and South Africa itself.', 'It means South Africa keeps its shops open for much longer trading hours so that customers can buy goods late at night.', 'It means South Africa places heavy tariffs on imports in order to protect its own local industries from foreign competition.'], c: 0, fb: '\'Relatively open to trade\' means South Africa has few trade barriers and welcomes foreign investment — signalled by its SADC and BRICS membership — which is why Walmart chose it. Simply naming BRICS gives no meaning, reading \'open\' as shop hours is literal, and heavy protective tariffs would mean the opposite.'},
  {id: 'q6', src: '3B', num: '3.2.1', m: 2, t: 'Why do you think this photograph was taken?', lv: 2, ll: 'Interpretation', opts: ['To record and publicise SACCAWU\'s protest against the Walmart–Massmart merger and to build support and solidarity for the workers\' opposition.', 'To show members of SACCAWU simply standing outside the Department of Trade and Industry\'s offices in the city of Pretoria.', 'To advertise the opening of a brand-new Walmart store in Pretoria and to attract shoppers to its very low prices.', 'To celebrate the workers\' happiness that Walmart was finally going to bring thousands of new jobs to South Africa.'], c: 0, fb: 'The photograph captures SACCAWU members demonstrating against the merger — its purpose is to publicise the protest and rally support. Merely describing where they stand gives no purpose, and advertising a Walmart store or celebrating new jobs both contradict what the placards (\'economic coloniser\') actually say.'},
  {id: 'q7', src: '3B', num: '3.2.2', m: 4, t: 'Comment on the meaning of the words, \'WALMART – THE ECONOMIC COLONISER!\'', lv: 2, ll: 'Interpretation', opts: ['It portrays Walmart, a US giant, as a neo-coloniser that enters South Africa to dominate local retail and manufacturing and to exploit workers for its own profit.', 'The words appear on a placard that is being held up by a protester at the demonstration outside the Department of Trade and Industry.', 'It means Walmart literally planned to colonise land in South Africa and to govern parts of the country as its own colony.', 'It praises Walmart for bringing modern American business methods and much cheaper goods to benefit ordinary South African consumers.'], c: 0, fb: 'Calling Walmart \'the economic coloniser\' frames a powerful US corporation as a new coloniser that will dominate local industry and exploit workers — a form of neo-colonialism. Describing where the placard is gives no meaning, a literal land-colony reading misses the metaphor, and the slogan is plainly hostile, not praise.'},
  {id: 'q8', src: '3B', num: '3.2.3', m: 4, t: 'Explain the limitations of this source for a researcher studying the impact of globalisation on South Africa.', lv: 3, ll: 'Reliability', opts: ['It shows only SACCAWU\'s one-sided, hostile view of the merger and uses emotive language (\'economic coloniser\'), so it ignores any possible benefits of Walmart\'s entry.', 'It is limited because it is only a photograph, and photographs can never be used as reliable historical evidence by any serious researcher.', 'It is limited because it was taken in 2011, which is far too recent a date for a historian to study the impact of globalisation.', 'It is limited because it does not clearly show the exact number of workers who actually attended the SACCAWU protest that day.'], c: 0, fb: 'The key limitation is bias: the source gives only SACCAWU\'s hostile, emotive view (\'economic coloniser\') and hides any benefits of the merger. \'Photographs can never be evidence\' is a misconception, being recent is not itself a limitation, and not counting the crowd is trivial next to the one-sidedness.'},
  {id: 'q9', src: '3C', num: '3.3.1', m: 2, t: 'According to the source, why would the presence of Walmart negatively affect local employment and the local manufacturing sector? Give TWO responses.', lv: 1, ll: 'Extraction', multi: true, mx: 2, opts: ['Decreased demand for locally-produced products', 'Increased demand for imported products', 'A sharp rise in national fuel prices', 'A serious shortage of skilled factory workers'], c: [0, 1], fb: 'Source 3C says Walmart\'s presence will harm local employment and manufacturing \'due to decreased demand within the retail sector for locally-produced products and increased demand for imported products\'. Fuel prices and a skills shortage are plausible economic problems but are not the reasons this source gives.'},
  {id: 'q10', src: '3C', num: '3.3.2', m: 4, t: 'Using the information in the source and your own knowledge, explain how Walmart\'s entry into South Africa would lead to a de-industrialisation within the manufacturing sector.', lv: 2, ll: 'Interpretation', opts: ['Cheaper imported goods would undercut local factories, causing job losses and the foreclosure of domestic manufacturers until many local industries were forced to close down.', 'SACTWU made a submission to the Parliamentary Portfolio Committee on Economic Development on 15 July 2011 about the proposed merger.', 'Walmart would build many new factories across South Africa, which would rapidly expand the country\'s whole manufacturing sector.', 'The government would nationalise all of the local factories and run them directly, which would slowly reduce manufacturing output.'], c: 0, fb: 'De-industrialisation happens because Walmart would source cheaper imports, undercutting local factories and causing job losses and \'significant foreclosure ... of domestic manufacturers\' until industries close. Citing the submission\'s date explains nothing, building new factories is the opposite, and nationalisation is not in the source at all.'},
  {id: 'q11', src: '3C', num: '3.3.3', m: 2, t: 'Identify evidence in the source that indicates that Walmart\'s presence in the local market would worsen conditions for employees.', lv: 1, ll: 'Extraction', opts: ['Its lowering of prices comes at a significant cost to employees, who are compelled to accept lower wages and working conditions.', 'Walmart would give all of its employees far higher wages and much shorter working hours than any local retailer offered.', 'Walmart\'s entry would lead to an increased demand for cheaper imported products from other countries around the world.', 'Walmart would be forced to hire only foreign workers and would not employ any South Africans at all in its stores.'], c: 0, fb: 'Source 3C states \'its lowering of prices comes at a significant cost to employees, who are compelled to accept lower wages and working conditions\' — that is the direct evidence. Higher wages is the opposite, the imports point is about manufacturing not worker conditions, and hiring only foreigners is not in the source.'},
  {id: 'q12', src: 'compare', num: '3.4', m: 4, t: 'Refer to Sources 3B and 3C. Explain how the information in Source 3C supports the evidence in Source 3B regarding the reaction of trade unions towards the merger of Walmart and Massmart.', lv: 3, ll: 'Comparison', opts: ['Both show trade unions opposing the merger: 3B shows SACCAWU protesting and branding Walmart an \'economic coloniser\', and 3C is SACTWU\'s submission warning of job losses and de-industrialisation.', 'The two sources contradict each other: Source 3B supports the merger while Source 3C strongly opposes Walmart\'s entry into South Africa.', 'Source 3C simply lists all the industries that supply the retail sector and the kinds of workers who would be affected by the merger.', 'Source 3B shows the unions celebrating the merger while Source 3C shows the government banning Walmart from the country altogether.'], c: 0, fb: 'Both sources show unions united against the merger: 3B (SACCAWU protesting, \'economic coloniser\') and 3C (SACTWU\'s submission on job losses and de-industrialisation). They reinforce each other, so framing 3B as pro-merger, using only 3C, or inventing a government ban all misread the connection.'},
  {id: 'q13', src: '3D', num: '3.5.1', m: 1, t: 'What, according to the source, was South Africa\'s fear if Walmart came into the country with its \'sophisticated modern network to procure\'?', lv: 1, ll: 'Extraction', opts: ['That local suppliers would not have a chance to sell their products', 'That the price of imported goods would rise sharply for all consumers', 'That Walmart would refuse to open any of its stores in the rural areas', 'That South Africa would be forced to leave the BRICS trade community'], c: 0, fb: 'Source 3D states the fear was that \'if Walmart came into the country, in view of its sophisticated network to procure, local suppliers would not have a chance to sell their products\'. Rising import prices, avoiding rural areas, or leaving BRICS are not the fear the source describes.'},
  {id: 'q14', src: '3D', num: '3.5.2', m: 2, t: 'Quote TWO options from the source that South Africa had on how to deal with Walmart\'s intentions to expand into the country.', lv: 1, ll: 'Extraction', multi: true, mx: 2, opts: ['Keep Walmart out of the country', 'Allow Walmart to enter but build local suppliers', 'Nationalise all of Walmart\'s local stores', 'Place a total ban on every import'], c: [0, 1], fb: 'Source 3D gives the two options as \'to keep Walmart out of the country\' and \'to allow Walmart to enter, but then to build local suppliers to become more efficient\'. Nationalising Walmart\'s stores or banning all imports are not the options the source presents.'},
  {id: 'q15', src: '3D', num: '3.5.3', m: 4, t: 'Comment on why you think it was necessary for Walmart to have reliable local suppliers especially for perishable products.', lv: 2, ll: 'Interpretation', opts: ['Perishable foods lose freshness quickly, so reliable nearby suppliers keep produce fresh and safe, cut transport costs and avoid importing food that would spoil in transit.', 'Suppliers were not obliged to supply Walmart only, so they could improve their goods for all of their other customers too.', 'Local suppliers were far cheaper because the government paid them a special subsidy for every perishable product that they sold.', 'Perishable products actually last for a very long time, so Walmart could safely import all of them from other countries.'], c: 0, fb: 'Because perishables \'lose freshness\' fast, Walmart needed reliable local suppliers to keep food fresh and safe, cut costs and avoid spoilage from long-distance importing. The \'not obliged to supply Walmart only\' point is a true but different idea, the subsidy is invented, and claiming perishables last a long time contradicts the term itself.'},
  {id: 'q16', src: '3D', num: '3.5.4', m: 2, t: 'Explain the concept protectionist in the context of international trade relations.', lv: 2, ll: 'Concept', opts: ['Government policies, such as tariffs and import limits, that restrict foreign trade in order to protect a country\'s own domestic industries.', 'A policy of removing all tariffs and trade barriers so that goods can move completely freely between all countries.', 'A policy of protecting individual consumers from unsafe or faulty products by inspecting the goods that are sold in shops.', 'A policy of encouraging as many foreign companies as possible to buy up and take over the local industries.'], c: 0, fb: 'Protectionism uses tariffs and import restrictions to shield a country\'s own industries from foreign competition — the stance Source 3D says the USA adopted. Removing all barriers is free trade (its opposite), inspecting goods is consumer protection, and inviting takeovers is the opposite of protecting local industry.'},
  {id: 'q17', src: 'para', num: '3.6a', m: 2, t: 'Topic sentence — Which sentence best states an argument that directly answers: \'Why was there resistance to Walmart\'s expansion into South Africa in 2011?\'', lv: 3, ll: 'Synthesis', opts: ['There was strong resistance to Walmart\'s expansion because trade unions feared the merger would destroy local jobs, industries and workers\' conditions through cheap imports.', 'Walmart is a very large American multinational corporation that began pursuing its globalisation strategy back in 1991.', 'Globalisation has steadily connected the whole world across borders through trade, technology, transport and improved communication networks.', 'There was almost no resistance to Walmart because most South Africans warmly welcomed the cheaper prices the store would bring.'], c: 0, fb: 'A strong topic sentence argues a position answering the question — here, that unions resisted because the merger threatened jobs, industries and workers. Describing Walmart, defining globalisation, or claiming there was no resistance do not argue why the resistance arose.'},
  {id: 'q18', src: 'para', num: '3.6b', m: 2, t: 'Source evidence — Which option best uses specific evidence from the sources to support the topic sentence?', lv: 3, ll: 'Synthesis', opts: ['Source 3B shows SACCAWU branding Walmart an \'economic coloniser\', while Source 3C warns of job losses, foreclosure of manufacturers and de-industrialisation.', 'Source 2D describes the symbolic burial of Sizwe Kondile at Freedom Park in Pretoria in July 2016.', 'The sources generally show that many South Africans had a lot of different opinions about big foreign companies.', 'Source 3A proves that Walmart promised to create thousands of new manufacturing jobs right across South Africa.'], c: 0, fb: 'Specific evidence here comes from 3B (SACCAWU\'s \'economic coloniser\' protest) and 3C (job losses, foreclosure, de-industrialisation). Source 2D belongs to the TRC question, \'different opinions\' cites nothing specific, and 3A describes Walmart\'s globalisation motives, not a promise of new jobs.'},
  {id: 'q19', src: 'para', num: '3.6c', m: 2, t: 'Own knowledge — Which fact from your own knowledge best strengthens the argument beyond what the sources say?', lv: 3, ll: 'Synthesis', opts: ['From own knowledge, South African firms and unions feared that Walmart\'s low prices would flood the market with cheap imports and undercut local producers.', 'From own knowledge, civic organisations led the rent boycotts right across the Vaal townships throughout the 1980s.', 'From own knowledge, Walmart was completely banned from South Africa and was never allowed to open any stores.', 'From own knowledge, the Cold War between the USA and the Soviet Union finally came to an end in the year 1991.'], c: 0, fb: 'Relevant own knowledge extends the resistance argument: local firms and unions feared Walmart\'s cheap imports would flood the market and undercut local producers. The rent boycotts and the end of the Cold War are real but off-topic, and Walmart was not banned — the merger was approved with conditions.'},
  {id: 'q20', src: 'para', num: '3.6d', m: 2, t: 'Conclusion — Which sentence best concludes the paragraph by tying the evidence back to the question?', lv: 3, ll: 'Synthesis', opts: ['Resistance to Walmart therefore came mainly from unions and local industry, who feared that cheap imports and job losses would outweigh any benefit of lower prices.', 'In conclusion, Walmart is a very big American company and a great many people in South Africa had opinions about it.', 'In conclusion, South Africa had recently become a member of the BRICS trade group alongside Brazil, Russia, India and China.', 'In conclusion, there was really no good reason at all for anyone in South Africa to resist Walmart\'s expansion in 2011.'], c: 0, fb: 'A synthesising conclusion ties it together: resistance came mainly from unions and local industry fearing cheap imports and job losses would outweigh cheaper prices. Noting Walmart is big adds no synthesis, BRICS membership is an unlinked point, and saying there was no reason to resist contradicts the sources.'},
];

const MTA_ANSWERS = [
  {label: 'Answer A', text: 'There was resistance to Walmart coming into South Africa in 2011. Source 3B shows SACCAWU workers protesting and calling Walmart \'the economic coloniser\'. Source 3C says the merger would cause job losses and de-industrialisation in the manufacturing sector. The unions were worried about workers losing their jobs. Source 3A says Walmart wanted to expand to make more profit. So people resisted Walmart because they were scared of what it would do to the country.', expLv: 0, expM: '?-5', crit: [{q: 'Does it have a clear topic sentence addressing the question?', cor: 'partial', exp: 'It says there \'was resistance\' but does not clearly argue why, so the position it takes is only loosely stated.'}, {q: 'Does it use specific evidence from the sources?', cor: 'yes', exp: 'It cites Source 3B (the \'economic coloniser\' slogan), Source 3C (job losses, de-industrialisation) and Source 3A, so it uses specific source evidence.'}, {q: 'Does it include own knowledge beyond the sources?', cor: 'no', exp: 'It draws only on the sources; no outside fact, such as fears of cheap imports flooding the market, is added to deepen the argument.'}, {q: 'Does it explain WHY (analysis), not just WHAT (description)?', cor: 'partial', exp: 'It notes the unions were \'worried\' but does not fully explain why the merger provoked such strong resistance.'}, {q: 'Does it have a concluding sentence that synthesises?', cor: 'partial', exp: 'The last line concludes people were \'scared\', which gestures at a conclusion without really synthesising the evidence.'}, {q: 'Is it a coherent paragraph, not a list of disconnected sentences?', cor: 'yes', exp: 'The sentences follow a clear order and read as a connected paragraph rather than a disconnected list.'}]},
  {label: 'Answer B', text: 'Resistance to Walmart in 2011 came mainly from trade unions who feared the merger would destroy local jobs and industries through cheap imports. Source 3B shows SACCAWU members protesting and branding Walmart \'the economic coloniser\', while Source 3C, a SACTWU submission, warns of job losses, the foreclosure of local manufacturers and de-industrialisation. Source 3A explains that Walmart expanded aggressively to grow its markets and profits. From my own knowledge, local producers feared Walmart\'s low prices would flood the market with cheap imports and undercut them. Resistance therefore grew because unions and industry believed the costs to workers outweighed any benefit of lower prices.', expLv: 0, expM: '?-8', crit: [{q: 'Does it have a clear topic sentence addressing the question?', cor: 'yes', exp: 'The opening states a clear argument — unions resisted because the merger threatened local jobs and industries — answering the question directly.'}, {q: 'Does it use specific evidence from the sources?', cor: 'yes', exp: 'It cites 3B, 3C and 3A with specific detail: the slogan, foreclosure, de-industrialisation and Walmart\'s growth motive.'}, {q: 'Does it include own knowledge beyond the sources?', cor: 'yes', exp: 'It adds that local producers feared cheap imports flooding the market and undercutting them, a point that goes beyond the sources.'}, {q: 'Does it explain WHY (analysis), not just WHAT (description)?', cor: 'yes', exp: 'It explains the mechanism — cheap imports undercutting local industry and jobs — rather than only listing what happened.'}, {q: 'Does it have a concluding sentence that synthesises?', cor: 'yes', exp: 'The final sentence synthesises, weighing the costs to workers against lower prices, and ties back to the question.'}, {q: 'Is it a coherent paragraph, not a list of disconnected sentences?', cor: 'yes', exp: 'It is well structured, moving from argument to evidence to own knowledge to conclusion as a single coherent paragraph.'}]},
];

/* ═══ KULA LEARN BRIDGE ═══
   Reports results to a parent Kula Learn page via postMessage.
   See project doc: Kula_Revise_results_payload_spec.md (spec v1).
   KR_META is injected by build.py from paper.json meta. The bridge is
   inert unless (a) identity fields are present, (b) the page is inside
   an iframe, and (c) the host origin was passed as ?host=<origin>.   */
const KR_META = {interactiveId: 'history-p2-2024-nov-q3', paper: 'P2', section: 'A', questionNumber: 3, paperRef: 'DBE November 2024'};
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
