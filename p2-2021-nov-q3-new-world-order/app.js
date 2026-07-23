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
    type: 'Historical Article',
    html: `<div class="sp-body">Since the rise of globalisation, the world has become more closely connected and people can easily interact with one other without facing any serious barriers. This has been both beneficial and detrimental (negative) to the social, political and economic spheres as far as the welfare of people is concerned. The free movement of people, goods and services brought about by globalisation have stimulated socio-economic development, but it has also become a channel for the spread of diseases. As a result of the technological developments associated with globalisation an outbreak, such as Covid-19, has turned into a major pandemic that affects people around the world regardless of their geographical location. According to K Lee, globalisation is defined as the 'changing nature of human interaction across a wide range of spheres including economic, political, social, technological and environmental &hellip; The process of change can be described as globalising in the sense that the boundaries of various kinds are becoming eroded'.<br><br>Thus, it is fair to assert that globalisation, which made free movement of people from different cities, countries and continents possible, is the main enabler (source) of the spread of Covid-19 around the world. This is simply because technological advancement, which is one of the main forces for globalisation, has made it easier for people to travel by land, sea and air from one part of the world to another without facing any obstacles. If travellers have contracted a disease, such as Covid-19, in city or country (A), they can easily transmit it to the previously non-infected city or country (B) &hellip;</div>`,
    attr: 'S Kitenge, \'Globalisation and the Covid-19 pandemic: How is Africa\'s economy impacted?\'. From https://www.policycenter.ma/. Accessed 30 May 2021'
  },
  '3B': {
    label: 'Source 3B',
    type: 'Speech Extract',
    html: `<div class="sp-body">Fellow South Africans, I am addressing you this evening on a matter of great national importance. The world is facing a medical emergency far graver (serious) than what we have experienced in over a century. The World Health Organisation has declared the coronavirus outbreak as a global pandemic. There are now more than 162 000 people who have tested positive for the coronavirus across the globe. Given the scale and the speed at which the virus is spreading, it is now clear that no country is immune (safe) from the disease or will be spared its severe impact.<br><br>From the start of the outbreak in China earlier this year, the South African government has put in place measures to screen visitors entering the country, to contain its spread and to treat those infected. As of now, South Africa has 61 confirmed cases of people infected with the virus, and this number is expected to rise in the coming days and weeks.<br><br>Following an extensive analysis of the progression of the disease worldwide and in South Africa, Cabinet has decided on the following measures:<br><br>Firstly, to limit contact between persons who may be infected and South African citizens, we are imposing a travel ban on foreign nationals from high-risk countries, such as Italy, Iran, South Korea, Spain, Germany, the United States, the United Kingdom and China as from 18 March 2020. South African citizens are advised to refrain (hold back) from all forms of travel to or through the European Union, United States, United Kingdom and other identified high-risk countries such as China, Iran and South Korea.<br><br>It is true that we are facing a grave (serious) emergency. But if we act together, if we act now, and if we act decisively, we will overcome it. I thank you.</div>`,
    attr: 'President Cyril Ramaphosa, address to the nation on Covid-19 measures, 15 March 2020. From https://www.gov.za/speeches/'
  },
  '3C': {
    label: 'Source 3C',
    type: 'Historical Article',
    html: `<div class="sp-body">Poverty and inequality have been heightened (increased) by the Covid-19 pandemic. When South Africa went into a hard lockdown on 26 March 2020, many informal workers and precarious (irregular) workers found themselves without any means of generating income. Many of these workers are black women, whose families are reliant (dependent) on them for their survival. The National Income Dynamics Coronavirus Rapid Mobile Survey estimated that nearly three million people had lost their jobs because of the pandemic and the official unemployment rate now stands at a shockingly high rate of 30,1%. South Africans are now more afraid of unemployment than the coronavirus: unemployment is more than a state of joblessness, it means worrying about being able to afford everyday basic necessities, how to send children to school, how to stay healthy and nourished (fed) and it means worrying about being able to access health care should anything happen &hellip;<br><br>Townships and informal settlements whose demographic profile is predominately black people and people of colour who are employed in low-paying jobs that increase their risk of exposure to Covid-19, have become Covid-19 hotspots. This is because of dynamics, such as spatial planning, that hold the legacies of apartheid, such as the Group Areas Act in 1950 where black and non-white South Africans were forced to relocate to the areas outside of major cities and economic hubs (centres). These areas are still largely underdeveloped, overly populated, have poor sanitation facilities, lack of running water in many low-income communities and a poorly structured public healthcare system. The pandemic is exposing how persistent the various factors of inequality are heightening the devastating effects of Covid-19.</div>`,
    attr: 'Vuyokazi Futshane (Oxfam South Africa), <em>The Conversation</em>. From https://theconversation.com/. Accessed 26 May 2021'
  },
  '3D': {
    label: 'Source 3D',
    type: 'Editorial Cartoon',
    html: `<img class="sp-img" src="3D.png" alt="A cartoon captioned BETWEEN A ROCK AND A HARD PLACE. On the left a wave of coronavirus particles labelled COVID-19 looms over a small frightened mother and child holding a shield labelled THE POOR. On the right a large grim reaper with a scythe, wearing a robe labelled POVERTY & HUNGER and carrying a money bag, stands among graves marked with crosses. Signed Mangena.">`,
    attr: 'Cartoon by H Mangena, African News Agency, 21 April 2020. From https://jcom.sissa.it/. Accessed 30 May 2021'
  },
  'compare': {
    label: 'Sources 3C + 3D',
    type: 'Comparison',
    html: `<div class="sp-body"><strong>Source 3C (extract)</strong><br><br>Poverty and inequality have been heightened (increased) by the Covid-19 pandemic. When South Africa went into a hard lockdown &hellip; many informal workers &hellip; found themselves without any means of generating income. Many of these workers are black women &hellip; unemployment &hellip; means worrying about being able to afford everyday basic necessities, how to send children to school &hellip;</div><img class="sp-img" src="3D.png" alt="Cartoon captioned BETWEEN A ROCK AND A HARD PLACE: a wave of coronavirus labelled COVID-19 on one side and a grim reaper robed POVERTY & HUNGER among graves on the other, with a frightened mother and child holding a shield labelled THE POOR." style="margin-top:12px;">`,
    attr: 'Re-read both sources, then explain how the information in Source 3C supports the evidence in Source 3D.'
  },
  'para': {
    label: 'Paragraph Task',
    type: 'Q3.6, 8 marks',
    html: `<div class="sp-body">Your task: write a paragraph of about EIGHT lines (about 80 words) explaining the impact that the global Covid-19 pandemic has had on South Africa.<br><br>Build it in four steps &ndash; a topic sentence, evidence from the sources, your own knowledge, and a conclusion. For each step below, choose the option that does the job best.</div>`,
    attr: 'Synthesise the sources and your own knowledge into one coherent paragraph.'
  },
  'mta': {
    label: 'Mark This Answer',
    type: 'Evaluative Task',
    html: `<div class="sp-body">Below are two learner paragraphs answering Question 3.6: <em>the impact that the global Covid-19 pandemic has had on South Africa</em>.<br><br>Read each one, then judge it against the six marking criteria. Decide for yourself how many marks out of 8 each deserves before you reveal the guide's view.</div>`,
    attr: 'Bonus round: mark two sample paragraphs against the criteria.'
  },
};

const QS = [
  {id: 'q1', src: '3A', num: '3.1.1(a)', m: 1, t: 'Quote from the source the effect of the rise of globalisation on the world. (1 x 1)', lv: 1, ll: 'Extraction', opts: ['The world has become more closely connected', 'People can easily interact without facing any serious barriers', 'It has stimulated socio-economic development everywhere', 'It has become a channel for the spread of diseases'], c: 0, fb: 'The source says that since the rise of globalisation \'the world has become more closely connected\'. The other options are all genuine phrases from the source, but they describe the effect on people, the benefits, or the harms &ndash; not the effect on the world itself.'},
  {id: 'q2', src: '3A', num: '3.1.1(b)', m: 1, t: 'Quote from the source the effect of the rise of globalisation on people. (1 x 1)', lv: 1, ll: 'Extraction', opts: ['People can easily interact with each other without facing any serious barriers', 'The world has become more closely connected than it was before', 'It has stimulated socio-economic development across the various spheres', 'It has become a channel for the rapid spread of dangerous diseases'], c: 0, fb: 'The source says people \'can easily interact with one other without facing any serious barriers\'. The remaining options are real source phrases, but they describe the effect on the world or the benefits and harms &ndash; not the effect on people.'},
  {id: 'q3', src: '3A', num: '3.1.2(a)', m: 1, t: 'According to the source, how has the free movement of people, goods and services been beneficial to the world? (1 x 1)', lv: 1, ll: 'Extraction', opts: ['It has stimulated wide socio-economic development', 'It has become a channel for spreading diseases', 'The world has become more closely connected', 'People can interact without facing serious barriers'], c: 0, fb: 'The source says free movement \'has stimulated socio-economic development\' &ndash; that is the benefit. Becoming \'a channel for the spread of diseases\' is the harm, and the other options describe connection and interaction rather than the benefit asked for.'},
  {id: 'q4', src: '3A', num: '3.1.2(b)', m: 1, t: 'According to the source, how has the free movement of people, goods and services been detrimental to the world? (1 x 1)', lv: 1, ll: 'Extraction', opts: ['It has become a channel for the spread of diseases', 'It has stimulated wide and rapid socio-economic development', 'The world has become far more closely connected', 'Boundaries of various kinds are becoming eroded'], c: 0, fb: 'The detriment is that free movement \'has also become a channel for the spread of diseases\'. Stimulating development is the benefit, closer connection is neutral, and the eroding of boundaries is part of the definition of globalisation, not a harm.'},
  {id: 'q5', src: '3A', num: '3.1.3', m: 2, t: 'Define the concept globalisation in your own words. (1 x 2)', lv: 1, ll: 'Concept', opts: ['A process by which the world becomes more integrated as people, goods, money and ideas move faster and more cheaply, largely through technology', 'A government policy that deliberately opens a country\'s borders to allow unlimited immigration from poorer nations in every part of the world', 'The process by which powerful countries impose their languages and cultures on weaker nations through military conquest and armed occupation', 'An international agreement that fixes exactly the same trade tariffs and customs duties for every single country in the whole world'], c: 0, fb: 'Globalisation is the growing integration of the world through faster, cheaper movement of people, goods, money and ideas, driven by technology. Unlimited immigration policy, cultural conquest (imperialism) and a single global tariff are all different ideas that misdefine the concept.'},
  {id: 'q6', src: '3A', num: '3.1.4', m: 4, t: 'Using the information in the source and your own knowledge, explain how technological advancement has contributed to Covid-19 becoming a global pandemic. (2 x 2)', lv: 2, ll: 'Analysis', opts: ['Faster air, sea and rail travel let infected people move between cities and countries within hours, carrying the virus worldwide before it could be contained', 'Technological advancement allowed scientists to develop effective vaccines and treatments very quickly once the coronavirus outbreak had begun to spread', 'Social media technology actually created the coronavirus itself by spreading false and misleading health information rapidly across the whole internet', 'Modern technology meant that most people could easily work from their homes, and this is the main reason the virus spread so quickly'], c: 0, fb: 'Technology sped up the movement of people by land, sea and air, so an infected traveller could carry the virus across the globe in hours. Vaccines slow a pandemic rather than cause one, social media cannot create a virus, and working from home limits spread rather than driving it.'},
  {id: 'q7', src: '3B', num: '3.2.1', m: 1, t: 'Name the international organisation that declared the coronavirus outbreak a global pandemic. (1 x 1)', lv: 1, ll: 'Extraction', opts: ['The World Health Organisation', 'The United Nations Security Council', 'The World Trade Organisation', 'The World Economic Forum'], c: 0, fb: 'The source states that \'the World Health Organisation has declared the coronavirus outbreak as a global pandemic\'. The Security Council, WTO and World Economic Forum are real international bodies but are not the one named in the source.'},
  {id: 'q8', src: '3B', num: '3.2.2', m: 2, t: 'Explain the term pandemic in the context of Covid-19. (1 x 2)', lv: 2, ll: 'Interpretation', opts: ['A contagious disease that spreads rapidly across many countries and continents, affecting people worldwide regardless of their location', 'A contagious disease that affects only one country or region and does not cross any international borders into other states', 'A government lockdown that is imposed in order to stop people from travelling between different cities and provinces', 'A seasonal illness like ordinary influenza that returns at the same time every year but is fairly easily treated'], c: 0, fb: 'A pandemic is a disease spreading across many countries and continents worldwide. A disease confined to one region is an epidemic, a lockdown is a response rather than the term, and a mild recurring seasonal illness does not capture a global pandemic.'},
  {id: 'q9', src: '3B', num: '3.2.3', m: 4, t: 'Using the information in the source and your own knowledge, explain why it was necessary for the South African government to introduce measures to contain the spread of the coronavirus. (2 x 2)', lv: 2, ll: 'Analysis', opts: ['There was no vaccine yet, so limiting contact was the only way to slow transmission, prevent hospitals being overwhelmed and reduce the number of deaths', 'The World Health Organisation had already formally declared the coronavirus outbreak to be a global pandemic affecting every country', 'The measures were needed mainly to protect the wealthy foreign tourists who were visiting South Africa from various high-risk countries', 'Introducing the measures would allow the government to reopen the whole economy immediately without facing any health risk at all'], c: 0, fb: 'With no vaccine available, reducing contact was the only way to slow the virus, protect hospitals and save lives. The WHO declaration is a cause rather than the reason measures were needed, the aim was to protect citizens (not mainly tourists), and containment slows, not instantly reopens, the economy.'},
  {id: 'q10', src: '3B', num: '3.2.4', m: 2, t: 'Name any TWO high-risk countries in the source on which the South African government imposed a travel ban. (2 x 1)', lv: 1, ll: 'Extraction', multi: true, mx: 2, opts: ['Italy', 'Iran', 'France', 'Brazil', 'India'], c: [0, 1], fb: 'The source lists high-risk countries including \'Italy, Iran, South Korea, Spain, Germany, the United States, the United Kingdom and China\' &ndash; so Italy and Iran are named. France, Brazil and India were badly hit by Covid-19 but are not listed in this source, and extraction answers must come from the text.'},
  {id: 'q11', src: '3C', num: '3.3.1', m: 1, t: 'Identify ONE negative economic indicator mentioned in the source that was heightened by the Covid-19 pandemic. (1 x 1)', lv: 1, ll: 'Extraction', opts: ['Poverty and inequality', 'Rising foreign investment', 'Faster economic growth', 'Increased household savings'], c: 0, fb: 'The source opens by stating that \'poverty and inequality have been heightened by the Covid-19 pandemic\'. Rising investment, faster growth and higher savings would be positive indicators and are not mentioned as heightened by the pandemic.'},
  {id: 'q12', src: '3C', num: '3.3.2', m: 4, t: 'Using the information in the source and your own knowledge, explain how the Covid-19 pandemic left many black women without any means of generating an income. (2 x 2)', lv: 2, ll: 'Analysis', opts: ['Many black women were informal or precarious workers, so the hard lockdown stopped them trading or doing casual work and cut off their only income', 'The source states that nearly three million people in total had lost their jobs because of the Covid-19 pandemic in South Africa', 'Black women lost their income because the government decided to stop paying out all social grants during the hard lockdown period', 'Black women were the first workers to be retrenched because their employers regarded them as the least skilled members of staff'], c: 0, fb: 'Because so many black women did informal or casual work, the hard lockdown that banned trading and gatherings removed their only source of income. The three-million figure is true but does not explain the how, grants actually continued, and the \'least skilled\' claim is a misconception, not source reasoning.'},
  {id: 'q13', src: '3C', num: '3.3.3', m: 2, t: 'According to the source, why are more South Africans now afraid of unemployment than of the Covid-19 pandemic? Give TWO reasons. (2 x 1)', lv: 1, ll: 'Extraction', multi: true, mx: 2, opts: ['Worrying about being able to afford everyday basic necessities', 'Worrying about how to send their children to school', 'Worrying about rising crime rates in the townships', 'Worrying about the cost of internet data for online learning', 'Worrying about paying for private medical insurance'], c: [0, 1], fb: 'The source says unemployment means \'worrying about being able to afford everyday basic necessities\' and \'how to send children to school\'. Township crime, data costs and private medical insurance are plausible worries but are not the reasons given in this source.'},
  {id: 'q14', src: '3C', num: '3.3.4', m: 2, t: 'Give TWO reasons mentioned in the source why townships became Covid-19 hotspots. (2 x 1)', lv: 1, ll: 'Extraction', multi: true, mx: 2, opts: ['They are overcrowded and overly populated', 'They have very poor sanitation facilities', 'They contain a high number of private hospitals', 'Most residents worked comfortably from home during lockdown', 'They received the most vaccine doses early on'], c: [0, 1], fb: 'The source lists townships as \'overly populated\' with \'poor sanitation facilities\' among the reasons they became hotspots. Plenty of private hospitals, working from home and early vaccines are the opposite of the source\'s picture of under-developed, crowded areas.'},
  {id: 'q15', src: '3C', num: '3.3.5', m: 4, t: 'Explain the limitations of this source for a student researching the economic impact that lockdown has had on townships and informal settlements in South Africa. (2 x 2)', lv: 3, ll: 'Reliability', opts: ['It is one-sided, giving only Futshane\'s Oxfam viewpoint; it ignores how the lockdown affected the middle class and the rich and implies only the poor were hurt', 'It is limited because it was written in English, so many of the township residents it describes could not actually read it for themselves', 'It is limited because it gives an exact unemployment figure of 30,1%, a statistic that will quickly become outdated over time', 'It is limited because it was clearly written well before the Covid-19 pandemic had ever reached South Africa in the first place'], c: 0, fb: 'The main limitation is that it presents only one perspective (Oxfam\'s) and looks only at the poor, ignoring other classes. The language it is written in is irrelevant, an out-of-date statistic is a minor point, and the source was plainly written during the pandemic, not before it.'},
  {id: 'q16', src: '3D', num: '3.4.1', m: 2, t: 'Explain what the cartoonist means by the caption, \'BETWEEN A ROCK AND A HARD PLACE\', regarding the position of the poor. (1 x 2)', lv: 2, ll: 'Interpretation', opts: ['The poor were trapped between two deadly threats &ndash; catching Covid-19 on one side and poverty and hunger on the other &ndash; with no safe way out', 'The poor were literally trapped between large rocks and rough stony ground while they were trying to flee out of the cities', 'The government itself was caught between the difficult choice of saving the economy and saving lives during the hard lockdown', 'The poor simply had to choose between two different low-paying jobs during the difficult period of the hard lockdown'], c: 0, fb: '\'Between a rock and a hard place\' means facing two dangers at once: Covid-19 on one side, poverty and hunger on the other, with no safe option. A literal reading, a comment about the government\'s dilemma, or a choice between jobs all miss the point about the poor\'s trap.'},
  {id: 'q17', src: '3D', num: '3.4.2', m: 4, t: 'What messages are conveyed by the cartoonist regarding the Covid-19 pandemic? Use the visual clues in the source to support your answer. (2 x 2)', lv: 2, ll: 'Interpretation', opts: ['Covid-19 and poverty both threaten the poor with death, shown by the grim reaper robed \'poverty & hunger\', the graves and the frightened mother and child labelled \'the poor\'', 'The cartoon shows that the South African government had successfully protected the poor from both the deadly virus and from hunger', 'The cartoon suggests that only the older and elderly members of society were ever really at any risk from the Covid-19 pandemic', 'The cartoon shows that the poor were far more afraid of the grim reaper figure than they were of losing their jobs'], c: 0, fb: 'The visual clues &ndash; the grim reaper labelled \'poverty & hunger\', the graves and the terrified mother and child labelled \'the poor\' &ndash; show both the virus and poverty threatening the poor with death. The cartoon is not praising the government, not limiting risk to the elderly, and not ranking the poor\'s fears.'},
  {id: 'q18', src: 'compare', num: '3.5', m: 4, t: 'Study Sources 3C and 3D. Explain how the information in Source 3C supports the evidence in Source 3D regarding the impact that the lockdown has had on the poor. (2 x 2)', lv: 3, ll: 'Comparison', opts: ['Source 3C says the lockdown heightened poverty and hunger among the poor, and Source 3D pictures this as a poor, worried mother facing Covid-19 and a reaper labelled \'poverty & hunger\'', 'The sources contradict each other: 3C blames the hard lockdown while 3D blames the poor themselves for causing their own hunger and suffering', 'Source 3C lists the high-risk countries banned from travel, while Source 3D shows South Africa closing its borders to all foreign travellers', 'Both of the sources appear to focus mainly on how quickly the world\'s leading scientists managed to develop a working Covid-19 vaccine'], c: 0, fb: 'They reinforce each other: 3C\'s description of lockdown deepening poverty and hunger is exactly what 3D pictures &ndash; a poor, frightened mother caught between Covid-19 and a reaper labelled \'poverty & hunger\'. There is no contradiction, 3C is not about travel bans, and neither source is about vaccine development.'},
  {id: 'q19', src: 'para', num: '3.6a', m: 2, t: 'STEP 1 &ndash; Topic sentence. Which sentence best states an argument that directly answers \'what impact has the Covid-19 pandemic had on South Africa\'?', lv: 3, ll: 'Synthesis', opts: ['The Covid-19 pandemic hit South Africa hard, deepening poverty, unemployment and inequality for the poor while government scrambled to contain its spread', 'Covid-19 is a disease caused by a coronavirus that first broke out in the city of Wuhan in China late in 2019', 'The year 2020 turned out to be a very difficult and highly unusual year for people living all around the world', 'The Covid-19 pandemic had almost no lasting effect at all on South Africa\'s economy or on the lives of its people'], c: 0, fb: 'A topic sentence must state the pandemic\'s impact on South Africa as an argument, which the correct option does. Describing the virus\'s origin answers a different question, the \'2020 was difficult\' line is too vague, and \'almost no effect\' is factually wrong.'},
  {id: 'q20', src: 'para', num: '3.6b', m: 2, t: 'STEP 2 &ndash; Source evidence. Which option best uses specific evidence from the sources to support the topic sentence?', lv: 3, ll: 'Synthesis', opts: ['Source 3B shows Ramaphosa announcing travel bans and containment measures, while Source 3C reports nearly three million job losses and 30,1% unemployment', 'Source 3A explains that globalisation connects the world by letting people, goods and ideas move freely across many borders', 'Source 3D is a cartoon that uses a grim reaper and rows of graves mainly to grab the reader\'s attention', 'The sources all seem to agree that the pandemic left South Africa\'s economy and its people completely unaffected'], c: 0, fb: 'Strong evidence must back the argument about South Africa\'s impact: 3B (containment measures) and 3C (job losses, 30,1% unemployment) do that. The globalisation point is background, the comment on 3D\'s style is not evidence of impact, and the \'completely unaffected\' claim is false.'},
  {id: 'q21', src: 'para', num: '3.6c', m: 2, t: 'STEP 3 &ndash; Own knowledge. Which fact from beyond the sources best strengthens the argument about the pandemic\'s impact on South Africa?', lv: 3, ll: 'Synthesis', opts: ['South Africa\'s initially limited access to vaccines left more people exposed to the virus and contributed to the loss of many lives', 'The World Health Organisation has its main permanent headquarters located in the city of Geneva, in the country of Switzerland', 'Globalisation has allowed diseases to spread across the world faster now than ever before in human history', 'South Africa was the only country anywhere in the entire world to avoid imposing any Covid-19 lockdown at all'], c: 0, fb: 'South Africa\'s slow early vaccine access is real own knowledge that directly deepened the pandemic\'s impact. The WHO\'s headquarters is irrelevant, the globalisation point comes from the source rather than own knowledge, and the \'only country to avoid lockdown\' claim is false.'},
  {id: 'q22', src: 'para', num: '3.6d', m: 2, t: 'STEP 4 &ndash; Conclusion. Which sentence best concludes the paragraph by tying the evidence back to the question?', lv: 3, ll: 'Synthesis', opts: ['Overall, the pandemic exposed and deepened South Africa\'s existing inequalities, hitting the poor hardest while forcing the government into drastic containment measures', 'In conclusion, the World Health Organisation officially declared Covid-19 to be a global pandemic in March of the year 2020', 'In conclusion, the Covid-19 pandemic was a very sad and worrying time for a great many different people everywhere', 'In conclusion, the pandemic actually managed to reduce both poverty and unemployment right across the whole of South Africa'], c: 0, fb: 'A strong conclusion synthesises the argument and links back to the question, as the correct option does. Restating the WHO declaration adds no synthesis, the \'sad time\' line is vague, and claiming the pandemic reduced poverty is factually wrong.'},
];

const MTA_ANSWERS = [
  {label: 'Answer A', text: 'The Covid-19 pandemic had a big impact on South Africa. President Ramaphosa gave a speech and said the World Health Organisation had declared a global pandemic. He announced a travel ban on high-risk countries like Italy and Iran. When South Africa went into lockdown many people lost their jobs. The source says nearly three million people became unemployed. Poor people and black women were affected the most. A cartoon also shows the poor being scared of Covid-19 and hunger. So the pandemic affected many South Africans.', expLv: 0, expM: '?-5', crit: [{q: 'Does it have a clear topic sentence addressing the question?', cor: 'partial', exp: 'It opens by saying the pandemic had a big impact, which is on topic, but \'a big impact\' is vague and does not state the argument clearly.'}, {q: 'Does it use specific evidence from the sources?', cor: 'partial', exp: 'It refers to Ramaphosa\'s speech, the travel ban and the job-loss figure, but the evidence is stated loosely and not tied to the named sources.'}, {q: 'Does it include own knowledge beyond the sources?', cor: 'no', exp: 'Everything comes from the sources; nothing extra, such as South Africa\'s limited early vaccine access, is added.'}, {q: 'Does it explain WHY (analysis), not just WHAT (description)?', cor: 'no', exp: 'It lists what happened but never explains WHY the poor were hit hardest or why the measures were needed.'}, {q: 'Does it have a concluding sentence that synthesises?', cor: 'partial', exp: 'The final line says the pandemic affected many people, but it restates rather than pulling the evidence into a judgement.'}, {q: 'Is it a coherent paragraph, not a list of disconnected sentences?', cor: 'yes', exp: 'The sentences run in a sensible order and read as one connected paragraph rather than a disjointed list.'}]},
  {label: 'Answer B', text: 'The Covid-19 pandemic deepened South Africa\'s poverty and inequality while forcing the government into drastic action. In Source 3B, Ramaphosa announced travel bans and containment measures because, with no vaccine available, this was the only way to slow the virus and protect hospitals. Source 3C shows the human cost: nearly three million job losses, 30,1% unemployment, and informal black women workers left without income. Source 3D captures this as the poor trapped between Covid-19 and hunger. Beyond the sources, South Africa\'s slow early access to vaccines cost lives. The pandemic therefore hit the poorest hardest, exposing apartheid\'s lasting inequalities.', expLv: 0, expM: '?-8', crit: [{q: 'Does it have a clear topic sentence addressing the question?', cor: 'yes', exp: 'The first sentence states the impact directly &ndash; deepening poverty and inequality while forcing drastic government action.'}, {q: 'Does it use specific evidence from the sources?', cor: 'yes', exp: 'It cites specific, correctly attributed evidence from Sources 3B, 3C and 3D.'}, {q: 'Does it include own knowledge beyond the sources?', cor: 'yes', exp: 'It adds South Africa\'s slow early access to vaccines, knowledge that goes beyond the four sources.'}, {q: 'Does it explain WHY (analysis), not just WHAT (description)?', cor: 'yes', exp: 'It explains WHY the measures were needed (no vaccine) and WHY the poor were hit hardest (apartheid\'s inequalities).'}, {q: 'Does it have a concluding sentence that synthesises?', cor: 'yes', exp: 'The final sentence draws the evidence into a synthesising judgement about the poor and lasting inequality.'}, {q: 'Is it a coherent paragraph, not a list of disconnected sentences?', cor: 'yes', exp: 'It flows as one linked argument from claim through evidence to conclusion.'}]},
];

/* ═══ KULA LEARN BRIDGE ═══
   Reports results to a parent Kula Learn page via postMessage.
   See project doc: Kula_Revise_results_payload_spec.md (spec v1).
   KR_META is injected by build.py from paper.json meta. The bridge is
   inert unless (a) identity fields are present, (b) the page is inside
   an iframe, and (c) the host origin was passed as ?host=<origin>.   */
const KR_META = {interactiveId: 'history-p2-2021-nov-q3', paper: 'P2', section: 'A', questionNumber: 3, paperRef: 'DBE November 2021'};
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
