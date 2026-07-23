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
    type: 'Government Statement',
    html: `<div class="sp-body">This source is an extract from a statement by the South African Department of Energy, issued on 30 November 2011. It highlights South Africa's commitment to the United Nations Framework Convention on Climate Change (UNFCCC).<br><br>South Africa is a party to both the United Nations Framework Convention on Climate Change (UNFCCC) and its Kyoto Protocol, having acceded (agreed) to the Convention in 1997 and ratified (approved) the Protocol in 2002. As a signatory (participant), the country has to comply with and participate in meetings and discussions of the UNFCCC and its Kyoto Protocol.<br><br>The United Nations Framework Convention on Climate Change (UNFCCC) is the main global response to climate change. The associated Kyoto Protocol is an international agreement that classifies countries by their level of industrialisation and commits certain countries to greenhouse gas (GHG) emission-reduction targets.<br><br>The South African Cabinet approved the hosting of the United Nations Climate Change Conference in May 2008, which will encompass (include) the seventeenth Conference of the Parties (COP17) of the United Nations Framework Convention on Climate Change (UNFCCC). The UNFCCC accepted the country's offer to host in December 2008.<br><br>The Department of Environmental Affairs (DEA) together with the Department of International Relations and Cooperation (DIRCO) are the main lead departments in the coordination of the conference. The Interministerial Committee on Climate Change constituting all of the relevant departments has been established to oversee both the logistics and substantive (practical) content issues of our hosting, and at operational level two technical working subcommittees have been formed to look at logistics and substantive content, respectively.</div>`,
    attr: 'From http://www.energy.gov.za/cop17/... Accessed on 15 May 2022.'
  },
  '3B': {
    label: 'Source 3B',
    type: 'Speech Extract',
    html: `<div class="sp-body">This source below is an extract from a transcript of a speech made by Greta Thunberg, a Swedish environmental activist at the UN's 25th Conference of Parties (COP25) in Madrid, Spain, on 11 December 2011. It highlights how rich and developing countries were not honouring their commitment to reduce emissions of greenhouse gases.<br><br>For about a year I have been constantly talking about our rapidly declining carbon budgets over and over again. But since that is still being ignored, I will just keep repeating it. The G20 countries account for almost 80 per cent of total emissions (discharges). The richest 10 per cent of the world's population produce half of our carbon dioxide (CO2) emissions, while the poorest 50 per cent account for just one-tenth. We indeed have some work to do but some more than others.<br><br>Recently, a handful of rich countries pledged (promised) to reduce their emissions of greenhouse gases by so-and-so many per cent by this or that date or to become climate neutral or net zero in so-and-so many years. This may sound impressive at first glance but even though the intentions may be good, this is not leadership. This is not leading. This is misleading because most of these pledges do not include aviation, shipping, imported and exported goods and consumption. They do, however, include the possibility of countries to offset their emissions elsewhere.<br><br>&hellip; and without that sense of urgency, how can we, the people, understand that we are facing a real crisis. And if the people are not fully aware of what is going on, then they will not put pressure on the people in power to act. And without pressure from the people, our leaders can get away with basically not doing anything, which is where we are now.<br><br>Well, I'm telling you, there is hope. I have seen it but it does not come from the governments or corporations. It comes from the people. The people who have been unaware but are now starting to wake up. And once we become aware, we change. People can change. People are ready for change.</div>`,
    attr: 'From Express, 13 December 2019'
  },
  '3C': {
    label: 'Source 3C',
    type: 'Speech Extract',
    html: `<div class="sp-body">The source below is an extract from the national statement made by the Indian Prime Minister, Shri Narendra Modi, at the COP26 Summit in Glasgow on 2 November 2021. It highlights how India was committed to honouring climate change programmes.<br><br>When I first came to Paris for the Climate Summit, it was not my intention to add one promise to the many promises already being made in the world. I came with a concern for humanity. I came as a representative of a culture that gave the message of 'Sarve Bhavantu Sukhinah', which means 'Happiness for All'. And so, for me the event in Paris was not a summit, it was a sentiment and a commitment. And India was not making those promises to the world, but crores (ten million) Indians were making those promises to themselves.<br><br>And I am happy that a developing country like India, which is working to lift crores of people out of poverty, and which is working day and night on the ease of living for crores of people, today, despite being 17% of the world's population, whose responsibility has been only 5 per cent in emissions, it has left no stone unturned to show that it has fulfilled its obligation.<br><br>Today the whole world believes that India is the only big economy which has delivered in letter and spirit on the Paris Commitment. We are making every effort with determination; and we are working hard and showing results. Today India is moving forward on the subject of climate with great courage and great ambition. India also understands the suffering of all other developing countries, shares them, and will continue to express their expectations.<br><br>For many developing countries, climate change is looming (threatening) large over their existence. We have to take big steps today to save the world. This is the need of the hour and this will also prove the relevance of this forum. I am confident that the decisions taken in Glasgow will save the future of our future generations, giving them the gift of a secure and prosperous life.</div>`,
    attr: 'From Ministry of External Affairs, Media Centre, 2 November 2021'
  },
  '3D': {
    label: 'Source 3D',
    type: 'Photograph',
    html: `<div class="sp-body">This photograph by C Kampfner for The Times newspaper was taken outside the COP26 Summit held at Glasgow, Scotland, on 12 November 2012. It portrays a protest by Brazilians against their political leaders (Joaquim Leite, Minister of Environment, and Bolsonaro, Brazilian President) for not doing enough in protecting the Brazilian forests.</div><img class="sp-img" src="3D.png" alt="Black-and-white photograph of masked protesters at an outdoor demonstration holding hand-written placards. Placard captions reproduced beside the image read 'AMAZON OR BOLSONARO', 'CAATINGA FOR SALE $1.89' and 'JOAQUIM LEITE — MINISTRO DO NENHUM AMBIENTE'; one protester holds a cut-out portrait of a man in a suit."><div class="sp-body" style="margin-top:12px;">*AMAZON &ndash; Brazilian Rain Forest<br>*CAATINGA &ndash; Brazilian Forest</div>`,
    attr: 'From The Times, 12 November 2021'
  },
  'compare': {
    label: 'Sources 3B + 3D',
    type: 'Comparison',
    html: `<div class="sp-body"><strong>Source 3B (extract):</strong> 'And without pressure from the people, our leaders can get away with basically not doing anything, which is where we are now.' &hellip; 'there is hope. I have seen it but it does not come from the governments or corporations. It comes from the people.'</div><div class="sp-body" style="margin-top:12px;"><strong>Source 3D</strong> &ndash; photograph of Brazilians protesting outside COP26 against their leaders for failing to protect the Amazon and Caatinga forests:</div><img class="sp-img" src="3D.png" alt="Black-and-white photograph of masked protesters holding hand-written placards at a demonstration; captions beside the image read 'AMAZON OR BOLSONARO', 'CAATINGA FOR SALE $1.89' and 'JOAQUIM LEITE — MINISTRO DO NENHUM AMBIENTE'.">`,
    attr: 'Re-read both sources, then explain how the information in Source 3B supports the evidence in Source 3D.'
  },
  'para': {
    label: 'Paragraph Task',
    type: 'Q3.6 &middot; 8 marks',
    html: `<div class="sp-body">Using the information in the relevant sources and your own knowledge, write a paragraph of about EIGHT lines (about 80 words) explaining the commitment of developing countries of BRICS to global climate change issues between 2000 and 2021.<br><br>Build the paragraph in four steps: (a) a topic sentence, (b) evidence from the sources, (c) your own knowledge, and (d) a conclusion.</div>`,
    attr: 'Plan the 8-mark paragraph one step at a time.'
  },
  'mta': {
    label: 'Mark This Answer',
    type: 'Evaluative Task',
    html: `<div class="sp-body">Below are two sample answers to the 8-mark paragraph question on the commitment of developing BRICS countries to climate change issues. Read each one and judge it against the six marking criteria, then compare your verdict with the examiner's.</div>`,
    attr: 'Bonus round &middot; evaluate each answer against the rubric.'
  },
};

const QS = [
  {id: 'q1', src: '3A', num: '3.1.1', m: 2, t: 'Identify TWO roles that South Africa has to play as a signatory to the United Nations Framework Convention on Climate Change.', lv: 1, ll: 'Extraction', multi: true, mx: 2, opts: ['To comply with the UNFCCC and its Kyoto Protocol', 'To participate in meetings and discussions of the UNFCCC and its Kyoto Protocol', 'To provide financial aid to all other developing countries facing climate change', 'To set binding emission targets for the entire African continent'], c: [0, 1], fb: 'The source states that as a signatory South Africa \'has to comply with and participate in meetings and discussions of the UNFCCC and its Kyoto Protocol\'. It says nothing about South Africa funding other developing countries or setting targets for the whole of Africa.'},
  {id: 'q2', src: '3A', num: '3.1.2', m: 2, t: 'Define the concept climate change in your own words.', lv: 1, ll: 'Concept', opts: ['A long-term shift in global or regional temperatures and weather patterns, largely driven by human activities such as burning coal, oil and gas.', 'The normal change in the weather from one day to the next and from one season to another across a single year.', 'A short-term natural disaster, such as a flood, a drought or a violent storm, that damages one particular region.', 'An international agreement that commits the more industrialised countries of the world to reducing their greenhouse gas emissions over a set period of time.'], c: 0, fb: 'Climate change is a long-term shift in temperatures and weather patterns, driven largely by human activity like burning fossil fuels. It is not ordinary day-to-day weather, not a single natural disaster, and not the Kyoto Protocol (an agreement, not the phenomenon itself).'},
  {id: 'q3', src: '3A', num: '3.1.3', m: 2, t: 'Give TWO responsibilities of the Kyoto Protocol, stated in the source.', lv: 1, ll: 'Extraction', multi: true, mx: 2, opts: ['It classifies countries by their level of industrialisation', 'It commits certain countries to greenhouse gas emission-reduction targets', 'It provides funding to build renewable energy plants in poor countries', 'It bans the burning of coal in all member states'], c: [0, 1], fb: 'The source says the Kyoto Protocol \'classifies countries by their level of industrialisation and commits certain countries to greenhouse gas (GHG) emission-reduction targets\'. It does not mention funding renewable plants or banning coal — those are not in the text.'},
  {id: 'q4', src: '3A', num: '3.1.4', m: 2, t: 'State TWO activities in the source that were delegated to the Inter-Ministerial Committee on Climate Change in preparation for the hosting of the UNFCCC in May 2008.', lv: 1, ll: 'Extraction', multi: true, mx: 2, opts: ['To oversee both the logistics and substantive content issues of the hosting', 'To form two technical working sub-committees for logistics and substantive content', 'To negotiate the final wording of the Kyoto Protocol with other nations', 'To raise funding from private companies to pay for the conference'], c: [0, 1], fb: 'The committee was \'established to oversee both the logistics and substantive content issues of our hosting\', and \'two technical working subcommittees have been formed to look at logistics and substantive content\'. It was not asked to renegotiate the Kyoto Protocol or to raise private funding.'},
  {id: 'q5', src: '3B', num: '3.2.1a', m: 1, t: 'According to the source, what amount of CO2 emissions is produced by the richest 10 per cent of the world population?', lv: 1, ll: 'Extraction', opts: ['Half of all CO2 emissions', 'One tenth of all CO2 emissions', 'One fifth of all CO2 emissions', 'Three quarters of all CO2 emissions'], c: 0, fb: 'The source states the richest 10 per cent \'produce half of our carbon dioxide (CO2) emissions\'. The \'one-tenth\' figure belongs to the poorest 50 per cent; the other two amounts do not appear in the source.'},
  {id: 'q6', src: '3B', num: '3.2.1b', m: 1, t: 'According to the source, what amount of CO2 emissions is produced by the poorest 50 per cent of the world population?', lv: 1, ll: 'Extraction', opts: ['One tenth of all CO2 emissions', 'Half of all CO2 emissions', 'One quarter of all CO2 emissions', 'One third of all CO2 emissions'], c: 0, fb: 'The source says the poorest 50 per cent \'account for just one-tenth\'. The \'half\' figure belongs to the richest 10 per cent; the quarter and third amounts are not mentioned in the source at all.'},
  {id: 'q7', src: '3B', num: '3.2.2', m: 4, t: 'Why do you think rich countries failed to honour their pledge to reduce their emission of greenhouse gases?', lv: 2, ll: 'Interpretation', opts: ['They were unwilling to sacrifice the profits and economic growth that came from their high-emission industries, and lacked the political will to make real cuts.', 'Rich countries simply did not have the advanced technology that they needed in order to reduce their greenhouse gas emissions any further.', 'Rich countries had already cut their emissions all the way to zero, so there was nothing further left for them to pledge.', 'The pledges were never legally binding, so actually honouring them in full would have amounted to breaking international law.'], c: 0, fb: 'Rich countries protected the profits of their high-emission industries and lacked the will to act — Thunberg calls their impressive-sounding pledges \'misleading\'. They had the technology, had not cut emissions to zero, and honouring a pledge would not break any law.'},
  {id: 'q8', src: '3B', num: '3.2.3', m: 2, t: 'Comment on what Greta Thunberg meant by the statement, \'there is hope. I have seen it but it does not come from the governments or corporations. It comes from the people\', in the context of dealing with challenges posed by climate change.', lv: 2, ll: 'Interpretation', opts: ['Real change will be driven by ordinary people becoming aware and pressuring their leaders, not by governments and corporations who put profit before the environment.', 'Governments and corporations have all the money and technology, so realistically only they can ever solve the climate crisis on the world\'s behalf.', 'There is no real hope of ever solving climate change, because the ordinary people are completely powerless against big business and government.', 'Ordinary people are the main cause of climate change, so they must be the ones to change their own daily habits first of all.'], c: 0, fb: 'Thunberg locates hope in an aware public that pressures leaders into acting, since governments and corporations chase profit. She is not saying only the powerful can act, not denying hope exists, and not blaming ordinary people for the crisis.'},
  {id: 'q9', src: '3B', num: '3.2.4', m: 4, t: 'Explain the reliability of the source to a historian researching the climate change issues between 2000 and 2021.', lv: 3, ll: 'Reliability', opts: ['Reliable: it is a first-hand speech by a prominent activist at a UN climate conference and can be corroborated by Source 3D; limitation: as activism it is one-sided and emotive, meant to persuade rather than to give balanced analysis.', 'Reliable: because Thunberg is world-famous, people generally assume that everything she says in public must be completely factual; limitation: the speech is far too short to contain any information a historian could ever use in research.', 'Reliable: it quotes some exact emissions statistics for the world population; limitation: because the speech openly criticises rich governments it is therefore completely worthless as a genuine piece of historical evidence.', 'Reliable: it was written by a neutral government scientist who was reporting official data; limitation: it only ever reflects the private commercial views of the large corporations that she happens to represent.'], c: 0, fb: 'The source is reliable as a first-hand speech at a UN conference that Source 3D corroborates, but limited because activism is one-sided and persuasive. The distractors fail: fame does not equal accuracy, criticising governments does not make it worthless, and Thunberg is an independent activist, not a scientist or a corporate representative.'},
  {id: 'q10', src: '3C', num: '3.3.1', m: 2, t: 'Give TWO concerns that the Indian Prime Minister, Shri Narendra Modi brought to the Paris Climate Summit.', lv: 1, ll: 'Extraction', multi: true, mx: 2, opts: ['That India\'s promises were being made by crores of Indians to themselves, not merely to the rest of the world', 'A concern for humanity', 'A demand that the rich countries pay India billions of dollars in climate compensation right away', 'A threat that India might withdraw itself from the United Nations climate change process altogether in the future'], c: [0, 1], fb: 'Modi says he \'came with a concern for humanity\' and that \'India was not making those promises to the world, but crores (ten million) Indians were making those promises to themselves\'. He made no demand for compensation and no threat to withdraw from the process.'},
  {id: 'q11', src: '3C', num: '3.3.2', m: 4, t: 'Comment on the implication of the statement, \'for me the event in Paris was not a summit, it was a sentiment and a commitment\', in the context of India\'s involvement in the Paris Climate Summit.', lv: 2, ll: 'Interpretation', opts: ['Modi meant that for India, Paris was not just another meeting but a heartfelt, binding promise to protect the environment that the whole nation stood behind.', 'Modi was pointing out that the Paris conference had failed to reach any binding agreement at all and had therefore been a complete waste of time.', 'Modi meant that India would only ever act on climate change if it first received a strong emotional appeal from the other world leaders.', 'Modi was suggesting that summits and conferences are basically pointless and that India intended to act entirely on its own in the future.'], c: 0, fb: 'Modi treats Paris as a genuine, heartfelt commitment shared by all Indians, not merely a diplomatic event. He is not saying the summit failed, not making action conditional on others\' appeals, and not dismissing international cooperation as pointless.'},
  {id: 'q12', src: '3C', num: '3.3.3', m: 2, t: 'Explain the concept developing countries with reference to Brazil, India and South Africa.', lv: 2, ll: 'Concept', opts: ['Poorer countries that are still building their economies, with fewer industries and advanced facilities and where most people earn a low or middle income.', 'Wealthy, highly industrialised nations that have very advanced technology and high average incomes for the great majority of their citizens.', 'Countries that have only recently gained their political independence but have not yet held their very first democratic elections.', 'Countries that produce by far the largest share of the world\'s greenhouse gas emissions from their heavy industry.'], c: 0, fb: 'Developing countries like Brazil, India and South Africa are still building their economies, with fewer industries and mostly low- to middle-income populations. The other options describe developed nations, use independence/elections as the wrong test, or describe the biggest industrial polluters.'},
  {id: 'q13', src: '3C', num: '3.3.4', m: 2, t: 'Why, according to the source, did the whole world believe that India is the only big economy that has delivered in letter and in spirit on the Paris commitment? Give TWO responses.', lv: 1, ll: 'Extraction', multi: true, mx: 2, opts: ['\'It has left no stone unturned to show that it has fulfilled its obligation\'', '\'We are making every effort with determination and we are working hard and showing results\'', '\'India has already completely stopped using all coal and fossil fuels for its energy\'', '\'India has paid in full for the emission reductions of every other developing country\''], c: [0, 1], fb: 'The source says India \'has left no stone unturned to show that it has fulfilled its obligation\' and that \'we are making every effort with determination... working hard and showing results\'. It never claims India stopped using fossil fuels or paid for others\' emission cuts.'},
  {id: 'q14', src: '3D', num: '3.4.1', m: 4, t: 'Explain why you think this photograph that appeared in The Times newspaper on 12 November 2021 was taken.', lv: 2, ll: 'Interpretation', opts: ['To publicise a protest by Brazilians against their leaders for failing to protect the Amazon and Caatinga forests, drawing global attention at the COP26 summit.', 'To advertise a genuine sale of cheap land in the Caatinga forest to interested international property investors and developers.', 'To celebrate the Brazilian government\'s great success in protecting all of its rainforests from deforestation, illegal mining and land clearing.', 'To document a peaceful gathering of ordinary tourists who were visiting the city of Glasgow during the COP26 summit.'], c: 0, fb: 'The photograph publicises Brazilians protesting their government\'s failure to protect the forests, spotlighting the issue at COP26. The \'for sale\' placard is protest satire, not a real advert; the government is being criticised, not celebrated; and these are protesters, not tourists.'},
  {id: 'q15', src: '3D', num: '3.4.2', m: 4, t: 'Using the information in the source and your own knowledge, comment on why Brazilians were concerned about the Amazon and Caatinga Forests.', lv: 2, ll: 'Interpretation', opts: ['These forests absorb carbon and protect biodiversity, so clearing them for mining and farming worsens climate change and destroys the habitats and livelihoods of indigenous people.', 'Brazilians were mainly worried that the forests were becoming far too crowded with foreign tourists arriving to visit them each year.', 'Brazilians feared that the forests would soon be nationalised and then closed off completely to all of the local communities.', 'Brazilians were concerned that protecting the forests too strictly would end up slowing down the country\'s economic growth by too much.'], c: 0, fb: 'The forests store carbon and shelter biodiversity and indigenous communities, so deforestation for mining and farming accelerates climate change and destroys livelihoods. The other options misread the protest — it was not about tourism, nationalisation or protecting economic growth.'},
  {id: 'q16', src: 'compare', num: '3.5', m: 4, t: 'Use Source 3B and Source 3D. Explain how the information in Source 3B supports the evidence in Source 3D regarding the implementation of the climate change agreements.', lv: 3, ll: 'Comparison', opts: ['Both sources show ordinary people pressuring leaders who fail to act: Thunberg says hope \'comes from the people\' (3B), and Source 3D shows Brazilians protesting their government\'s inaction.', 'The two sources contradict each other: Source 3B praises rich governments while Source 3D praises the Brazilian government for protecting its forests so well.', 'Both sources focus mainly on India\'s success in meeting all of its Paris commitments under Prime Minister Narendra Modi\'s leadership.', 'Source 3B lists South Africa\'s detailed plans to host the COP17 conference and Source 3D shows the original signing of the Kyoto Protocol.'], c: 0, fb: 'Both sources make the same point — ordinary people must pressure leaders who fail to implement agreements. Thunberg says hope \'comes from the people\' (3B) and Brazilians are shown protesting inaction (3D). The distractors invent a contradiction, point to India (3C), or to COP17/Kyoto (3A).'},
  {id: 'q17', src: 'para', num: '3.6a', m: 2, t: 'Step 1 — Topic sentence. Which sentence works best as a topic sentence that directly answers the question about the commitment of developing BRICS countries to climate change?', lv: 3, ll: 'Synthesis', opts: ['Between 2000 and 2021 developing BRICS countries showed a mixed but real commitment to climate action, with strong pledges from India and South Africa but weaker delivery from Brazil.', 'The United Nations Framework Convention on Climate Change is often described as the main global response to the growing problem of climate change.', 'Greta Thunberg is a Swedish environmental activist who addressed the United Nations COP25 climate conference held in Madrid, Spain, back in December 2019.', 'Climate change is clearly one of the most serious problems that faces the whole of the world in the twenty-first century.'], c: 0, fb: 'A topic sentence must take a position and answer the question — here, that BRICS commitment was real but mixed. The others define the UNFCCC, give a fact about Thunberg, or offer a vague general statement, none of which states how committed BRICS countries were.'},
  {id: 'q18', src: 'para', num: '3.6b', m: 2, t: 'Step 2 — Source evidence. Which option best uses specific evidence from the sources to support the topic sentence?', lv: 3, ll: 'Synthesis', opts: ['South Africa ratified the Kyoto Protocol and hosted COP17 (Source 3A), and India claimed to be the only big economy delivering on its Paris commitment (Source 3C).', 'The G20 countries together account for almost 80 per cent of the total global greenhouse gas emissions produced each year.', 'The sources show that climate change is a very serious issue that a great many people around the world care deeply about.', 'Source 3B explains that the richest 10 per cent of the world\'s people produce fully half of all carbon dioxide emissions.'], c: 0, fb: 'Strong evidence names BRICS actions in the sources: South Africa ratifying Kyoto and hosting COP17 (3A) and India\'s Paris claim (3C). The G20 and richest-10% statistics come from 3B but are not about BRICS commitment, and the third option is vague.'},
  {id: 'q19', src: 'para', num: '3.6c', m: 2, t: 'Step 3 — Own knowledge. Which piece of own knowledge (beyond the sources) best strengthens the paragraph?', lv: 3, ll: 'Synthesis', opts: ['Beyond the sources, BRICS nations such as China and India have invested heavily in solar and wind power, though their economies still rely on coal.', 'Beyond the sources, the Truth and Reconciliation Commission was chaired by Archbishop Desmond Tutu in South Africa from 1995 to 1998.', 'Beyond the sources, the Mass Democratic Movement organised \'Open Hospital\' defiance campaigns against health segregation in South African cities during 1989.', 'Beyond the sources, Modi said the Paris event \'was not a summit, it was a sentiment and a commitment\'.'], c: 0, fb: 'Good own knowledge adds relevant context the sources omit — BRICS investment in renewables alongside continued reliance on coal. The TRC and MDM belong to other topics, and the Modi quote is taken straight from Source 3C, so it is not own knowledge.'},
  {id: 'q20', src: 'para', num: '3.6d', m: 2, t: 'Step 4 — Conclusion. Which sentence best concludes the paragraph by tying the evidence back to the question?', lv: 3, ll: 'Synthesis', opts: ['Overall, developing BRICS countries were committed to climate agreements in principle, but between 2000 and 2021 their record was uneven, with pledges often outpacing real delivery.', 'In conclusion, climate change is a topic that will surely remain very important for the whole world for many more years to come.', 'Finally, the COP26 summit was held in the city of Glasgow, Scotland, and it was attended by many world leaders in 2021.', 'Overall, the developing countries of BRICS showed no commitment whatsoever to the climate change agreements at any point during this period.'], c: 0, fb: 'A strong conclusion synthesises the argument and returns to the question — BRICS commitment was real but uneven, with pledges outpacing delivery. The others are vague, drift into new detail about COP26, or flatly contradict the evidence used.'},
];

const MTA_ANSWERS = [
  {label: 'Answer A', text: 'Developing countries of BRICS were committed to climate change issues between 2000 and 2021. South Africa signed the UNFCCC and the Kyoto Protocol and hosted a big climate conference (Source 3A). India said that it was the only big economy that had delivered on the Paris commitment (Source 3C). However, in Brazil ordinary people had to protest because their leaders were not protecting the forests (Source 3D). This shows that some BRICS countries did more than others did.', expLv: 0, expM: '?-5', crit: [{q: 'Does it have a clear topic sentence addressing the question?', cor: 'partial', exp: 'The opening claims BRICS countries \'were committed\' but states it flatly and does not signal the mixed record the rest of the paragraph describes.'}, {q: 'Does it use specific evidence from the sources?', cor: 'yes', exp: 'It cites South Africa\'s treaties and hosting (3A), India\'s Paris claim (3C) and the Brazilian protest (3D), so real source evidence is present.'}, {q: 'Does it include own knowledge beyond the sources?', cor: 'no', exp: 'Every point comes directly from the sources. There is no added context such as BRICS investment in renewable energy or reliance on coal.'}, {q: 'Does it explain WHY (analysis), not just WHAT (description)?', cor: 'partial', exp: 'It mostly lists what each country did. The final line notes \'some did more than others\' but does not analyse why commitment varied.'}, {q: 'Does it have a concluding sentence that synthesises?', cor: 'partial', exp: 'The last sentence makes a general comparison rather than drawing the evidence into a clear judgement about BRICS commitment.'}, {q: 'Is it a coherent paragraph, not a list of disconnected sentences?', cor: 'yes', exp: 'The sentences are ordered logically and read as a connected paragraph, even though the analysis stays shallow.'}]},
  {label: 'Answer B', text: 'Developing BRICS countries showed a mixed but real commitment to climate action between 2000 and 2021. South Africa ratified the Kyoto Protocol and hosted COP17 (Source 3A), while India claimed to be the only major economy delivering on its Paris pledge (Source 3C). Yet Source 3D shows Brazilians forced to protest their government\'s failure to protect the Amazon. Although BRICS nations have invested in renewable energy, their continued reliance on coal meant that pledges often outpaced real delivery on the ground.', expLv: 0, expM: '?-8', crit: [{q: 'Does it have a clear topic sentence addressing the question?', cor: 'yes', exp: 'The first sentence takes a clear position: BRICS commitment was mixed but real, directly answering the question.'}, {q: 'Does it use specific evidence from the sources?', cor: 'yes', exp: 'It cites South Africa ratifying Kyoto and hosting COP17 (3A), India\'s Paris claim (3C) and the Brazilian protest (3D).'}, {q: 'Does it include own knowledge beyond the sources?', cor: 'yes', exp: 'It adds context the sources omit — BRICS investment in renewables alongside continued reliance on coal — which sharpens the argument.'}, {q: 'Does it explain WHY (analysis), not just WHAT (description)?', cor: 'yes', exp: 'It weighs strong pledges against weak delivery and explains that reliance on coal meant promises outran real action.'}, {q: 'Does it have a concluding sentence that synthesises?', cor: 'yes', exp: 'The final sentence pulls the evidence together into a judgement: pledges often outpaced real delivery.'}, {q: 'Is it a coherent paragraph, not a list of disconnected sentences?', cor: 'yes', exp: 'The paragraph flows from claim to evidence to own knowledge to conclusion, reading as one sustained argument.'}]},
];

/* ═══ KULA LEARN BRIDGE ═══
   Reports results to a parent Kula Learn page via postMessage.
   See project doc: Kula_Revise_results_payload_spec.md (spec v1).
   KR_META is injected by build.py from paper.json meta. The bridge is
   inert unless (a) identity fields are present, (b) the page is inside
   an iframe, and (c) the host origin was passed as ?host=<origin>.   */
const KR_META = {interactiveId: 'history-p2-2022-nov-q3', paper: 'P2', section: 'A', questionNumber: 3, paperRef: 'DBE November 2022'};
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
