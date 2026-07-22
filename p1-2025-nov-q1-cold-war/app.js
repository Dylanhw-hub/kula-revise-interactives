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
    type: 'Speech Extract',
    html: `<div class="sp-body">A shadow has fallen upon the scenes so lately lighted by the Allied victory. Nobody knows what Soviet Russia and its communist international organisation intend to do in the immediate future, or what are the limits, if any, to their expansive and proselytising (persuasive) tendencies. I have a strong admiration and regard for the valiant (brave) Russian people and for my wartime comrade, Marshal Stalin. There is deep sympathy and goodwill in Britain &ndash; and I doubt not here also &ndash; towards the peoples of all the Russias and a resolve (decision) to persevere (continue) through many differences and rebuffs (rejections) in establishing lasting friendships.<br><br>We understand the Russian need to be secure on her Western frontiers by the removal of all possibility of German aggression. We welcome Russia to her rightful place among the leading nations of the world. We welcome her flag upon the seas. Above all, we welcome constant, frequent and growing contacts between the Russian people and our own people on both sides of the Atlantic. It is my duty, however &ndash; for I am sure you would wish me to state the facts as I see them to you &ndash; to place before you certain facts about the present position in Europe.<br><br>From Stettin in the Baltic to Trieste in the Adriatic, an Iron Curtain has descended (fallen) across the continent. Behind that line lie all the capitals of the ancient states of Central and Eastern Europe. Warsaw, Berlin, Prague, Vienna, Budapest, Belgrade, Bucharest and Sofia: all these famous cities and the populations around them lie in what I must call the Soviet sphere, and all are subject, in one form or another, not only to Soviet influence but to a very high and, in many cases, increasing measure of control from Moscow &hellip;</div>`,
    attr: 'From Chambers Book of Great Speeches edited by A Burnet. Churchill\'s \'Iron Curtain\' speech, Fulton, Missouri, 5 March 1946'
  },
  '1B': {
    label: 'Source 1B',
    type: 'Political Cartoon',
    html: `<img class="sp-img" src="1B.png" alt="A black-and-white political cartoon. A figure of Uncle Sam swings a large mallet labelled 'U.S. AID' to drive fence posts marked 'GREECE' and 'TURKEY' into a barbed-wire fence labelled 'NON-COMMUNIST SMALL NATIONS'. Behind him a large dark shape labelled 'COMMUNIST INFILTRATION AND DICTATORSHIP THREATS' spreads across the ground, with onion-domed buildings on the horizon. Signed S.J. Ray."><div class="sp-body" style="margin-top:12px;">Caption: 'WHAT WE'RE DRIVING AT'</div>`,
    attr: 'From the <em>Kansas City Star</em>, 13 March 1947. Cartoon by S.J. Ray.'
  },
  '1C': {
    label: 'Source 1C',
    type: 'Historical Article',
    html: `<div class="sp-body">Marshall Plan policymakers had two main concerns here. First of all, broken economies might foster the growth of communism much like mulch (compost) fosters mushrooms, a fear particularly prevalent (common) with regard to France, Italy, Greece and *Trizone Germany. A second major goal of American policy was to contain the Soviet Union, which was perceived (seen) as having embarked on active expansion and as being irremediably (severely) hostile to the United States. A swift glance (look) at a map made it clear why Turkey, Greece, Ireland, Iceland, Norway and Sweden were included: Turkey and Greece would guard the eastern Mediterranean; Ireland would guard the approaches to the British Isles and the western Mediterranean; Norway and Iceland were strategically placed athwart (diagonally); the routes across the North Atlantic and Sweden lay across the Baltic Sea from the Soviet Union, its entire south-eastern coast effectively ringed with Soviet military forces.<br><br>The need to contain the Soviet Union, plus the desire to rebuild the European economy, came together in the third goal, which was the drive for European integration. An integrated Europe working together politically as well as economically, would constitute the strongest possible barrier to Soviet expansion, and certainly the United States maintained constant pressure on the participants in the Marshall Plan to move towards this goal.<br><br><em>*Trizone: Germany was divided into four zones of occupation (by the Allied powers), namely the USA zone, the British zone, the French zone and the Russian zone. 'Trizone' refers to the three zones of the Western countries, i.e. the USA, Britain and France tied together by the ideology of capitalism.</em></div>`,
    attr: 'From \'The Marshall Plan: Filling in Some Blanks\' by K Burk, <em>Contemporary European History</em>, 2001'
  },
  '1D': {
    label: 'Source 1D',
    type: 'Historical Account',
    html: `<div class="sp-body">The Molotov Plan was the system created by the Soviet Union in 1947 to provide aid to rebuild the countries in Eastern Europe that were politically and economically aligned with the Soviet Union. It can be seen as the USSR's version of the Marshall Plan, which for political reasons the Eastern European countries would not be able to join without leaving the Soviet sphere of influence. Soviet foreign minister, Vyacheslav Molotov, rejected the Marshall Plan (1947), proposing the Molotov Plan &ndash; the Soviet-sponsored economic grouping which was eventually expanded to become the *COMECON. The Molotov Plan was symbolic of the Soviet Union's refusal to accept aid from the Marshall Plan or allow any of their satellite states to do so because of their belief that the Plan was an attempt to weaken Soviet interest in their satellite states through the conditions imposed and by making beneficiary (receiving) countries economically dependent on the United States.<br><br>The plan was a system of bilateral trade agreements that established the COMECON to create an economic alliance of socialist countries. This aid allowed countries in Europe to stop relying on American aid, and therefore allowed Molotov Plan states to reorganise their trade to the USSR instead.<br><br><em>*COMECON: a Soviet-led economic organisation of communist states formed in 1949 to promote economic cooperation and integration among its members.</em></div>`,
    attr: 'From <em>History of Western Civilization</em> by J McLean'
  },
  'compare': {
    label: 'Sources 1A + 1B',
    type: 'Comparison',
    html: `<div class="sp-body"><strong>Source 1A &mdash; Churchill's 'Iron Curtain' speech</strong><br><br>A shadow has fallen upon the scenes so lately lighted by the Allied victory. Nobody knows what Soviet Russia and its communist international organisation intend to do in the immediate future, or what are the limits, if any, to their expansive and proselytising (persuasive) tendencies. &hellip;<br><br>From Stettin in the Baltic to Trieste in the Adriatic, an Iron Curtain has descended (fallen) across the continent. Behind that line lie all the capitals of the ancient states of Central and Eastern Europe. Warsaw, Berlin, Prague, Vienna, Budapest, Belgrade, Bucharest and Sofia: all these famous cities and the populations around them lie in what I must call the Soviet sphere, and all are subject, in one form or another, not only to Soviet influence but to a very high and, in many cases, increasing measure of control from Moscow &hellip;</div><img class="sp-img" src="1B.png" alt="A black-and-white political cartoon. A figure of Uncle Sam swings a large mallet labelled 'U.S. AID' to drive fence posts marked 'GREECE' and 'TURKEY' into a barbed-wire fence labelled 'NON-COMMUNIST SMALL NATIONS'. Behind him a large dark shape labelled 'COMMUNIST INFILTRATION AND DICTATORSHIP THREATS' spreads across the ground, with onion-domed buildings on the horizon. Signed S.J. Ray."><div class="sp-body" style="margin-top:12px;"><strong>Source 1B &mdash; cartoon, 'WHAT WE'RE DRIVING AT'</strong></div>`,
    attr: 'Re-read both sources, then explain how they connect.'
  },
  'para': {
    label: 'Paragraph Task',
    type: 'Q1.6, 8 marks',
    html: `<div class="sp-body">Now build an eight-mark paragraph answering the guiding question: <em>How did the policy of containment contribute to Cold War tensions between the USA and the Soviet Union in 1947?</em><br><br>Work through it in four steps &ndash; a topic sentence, evidence from the sources, your own knowledge, and a synthesising conclusion. Choose the strongest option at each step.</div>`,
    attr: 'Build the paragraph one move at a time.'
  },
  'mta': {
    label: 'Mark This Answer',
    type: 'Evaluative Task',
    html: `<div class="sp-body">Below are two learner paragraphs answering the same eight-mark question. Read each one carefully and mark it against the six criteria, deciding for each criterion whether the paragraph does it fully, partially, or not at all.</div>`,
    attr: 'Mark like an examiner.'
  },
};

const QS = [
  {id: 'q1', src: '1A', num: '1.1.1', m: 2, t: 'Who, according to the source, did Churchill blame for \'A shadow has fallen upon the scenes so lately lighted by the Allied victory\'? Choose TWO responses.', lv: 1, ll: 'Extraction', multi: true, mx: 2, opts: ['Soviet Russia', 'Its communist international organisation', 'The valiant Russian people and their bravery', 'German aggression on the Western frontiers', 'His wartime comrade, Marshal Stalin'], c: [0, 1], fb: 'The opening lines say \'Nobody knows what Soviet Russia and its communist international organisation intend to do\', so the shadow is attributed to those two. The Russian people, Stalin and German aggression all appear in the source, but Churchill speaks of them with sympathy or as a past danger, not as the cause of the shadow.'},
  {id: 'q2', src: '1A', num: '1.1.2', m: 2, t: 'Why do you think Churchill adopted a conciliatory (soft) attitude towards the Soviet Union despite its expansive tendencies?', lv: 2, ll: 'Interpretation', opts: ['He valued the wartime alliance and hoped that acknowledging Russia\'s security needs would preserve goodwill and avoid open conflict.', 'He was certain the Soviet Union was far too weak after the war to pose any real threat to the nations of Western Europe.', 'He admired the Russian people and Stalin so deeply that he had no genuine concern at all about Soviet expansion in Europe.', 'He wanted Britain to stay strictly neutral in any future quarrel between the USA and the Soviet Union over Eastern Europe.'], c: 0, fb: 'Churchill praises his \'wartime comrade\' and the \'valiant Russian people\' and calls for \'lasting friendships\', so the soft tone is about protecting goodwill and avoiding conflict while still delivering a warning. The other options misread the source: he clearly does see a threat, and says nothing about Soviet weakness or British neutrality.'},
  {id: 'q3', src: '1A', num: '1.1.3', m: 2, t: 'Define the term Iron Curtain in your own words.', lv: 1, ll: 'Concept', opts: ['The political and ideological divide that separated Soviet-controlled Eastern Europe from the democratic West after 1945.', 'A wall of barbed wire and concrete that Stalin physically built along the Soviet Union\'s western border during 1946.', 'A trade embargo imposed by the Western powers to stop goods from reaching the Soviet Union and its allies.', 'The military alliance formed by the Soviet Union to defend communist states against attack from the West.'], c: 0, fb: 'The \'Iron Curtain\' is a metaphor for the political and ideological line dividing the Soviet-controlled East from the democratic West. It was not a physical wall in 1946 (the Berlin Wall came in 1961), nor a trade embargo, nor a military alliance.'},
  {id: 'q4', src: '1A', num: '1.1.4', m: 2, t: 'Comment on what Churchill implied by the words, \'… all these famous cities and the populations around them lie in what I must call the Soviet sphere …\'', lv: 2, ll: 'Interpretation', opts: ['That the capitals of Central and Eastern Europe had fallen under Soviet domination and increasing control from Moscow, not mere influence.', 'That these cities had freely and willingly chosen communism and now welcomed close, friendly cooperation with the Soviet Union.', 'That the Soviet Union had stationed troops in these cities but had left their national governments completely free and independent.', 'That these famous cities remained under Western protection but simply happened to lie close to Soviet-controlled territory.'], c: 0, fb: 'Churchill stresses that the cities are subject to \'increasing measure of control from Moscow\', implying domination rather than free choice or mere proximity. The other options soften or reverse that meaning.'},
  {id: 'q5', src: '1A', num: '1.1.5', m: 4, t: 'Explain the reliability of this source to a historian researching the origins of the Cold War.', lv: 3, ll: 'Reliability', opts: ['Reliable because Churchill had first-hand insight into Stalin from the wartime conferences, but limited because as a committed anti-communist his speech was politically motivated.', 'Reliable because it was delivered at an American university, which gives it academic authority, but limited because it reflects only one man\'s personal opinion.', 'Reliable because it was printed in a respected book of great speeches, but limited because it was written many decades after the events it describes.', 'Reliable because it gives precise statistics on Soviet troop numbers, but limited because Churchill was out of office and therefore held no real power.'], c: 0, fb: 'The genuine strength is Churchill\'s insider position at the wartime conferences; the genuine limitation is his anti-communist political agenda. The other options pair a weak or false strength (a university setting, a speech book, invented statistics) with a limitation that misjudges the source, so each collapses on closer reading.'},
  {id: 'q6', src: '1B', num: '1.2.1(a)', m: 2, t: 'Explain the symbolic representation of the dark shape labelled \'COMMUNIST INFILTRATION AND DICTATORSHIP THREATS\'.', lv: 2, ll: 'Interpretation', opts: ['It represents the looming danger of communism spreading into and taking over the small non-communist nations of Europe.', 'It represents the strength of the Soviet economy, which the USA hoped to copy through the Marshall Plan.', 'It represents the wartime alliance between the USA and the Soviet Union that was still firmly in place in 1947.', 'It represents the fear that the small European nations would launch an attack on the Soviet Union first.'], c: 0, fb: 'The dark, spreading mass stands for the threat of communism advancing over the small nations. It is not a symbol of Soviet economic strength, a surviving alliance, or European aggression against the USSR.'},
  {id: 'q7', src: '1B', num: '1.2.1(b)', m: 2, t: 'Explain the symbolic representation of the \'U.S. AID\' hammer.', lv: 2, ll: 'Interpretation', opts: ['It symbolises American financial and military assistance used as a tool to strengthen and protect non-communist nations against communism.', 'It symbolises the military force the USA threatened to use to invade Soviet-controlled countries in Eastern Europe.', 'It symbolises the destruction the USA intended to bring to the economies of the communist states of Europe.', 'It symbolises the rebuilding of American industry and factories in the years after the Second World War.'], c: 0, fb: 'The hammer labelled \'U.S. AID\' stands for American assistance being used to shore up non-communist nations like Greece and Turkey. It is aid as a defensive tool, not invasion, destruction, or the rebuilding of American industry.'},
  {id: 'q8', src: '1B', num: '1.2.2', m: 2, t: 'Comment on why you would consider the caption \'WHAT WE\'RE DRIVING AT\' appropriate.', lv: 2, ll: 'Interpretation', opts: ['It is a play on words: Uncle Sam physically drives in the fence posts while the phrase also captures what the USA is really aiming at, walling nations off from communism.', 'It is appropriate because it shows the USA driving all communist supporters out of the United States and back towards the Soviet Union in the East.', 'It is appropriate because it shows the Soviet Union driving its tanks and its armies steadily westwards towards the small nations of Western Europe.', 'It is appropriate because it shows the Americans driving away from Europe altogether in order to avoid any further involvement in its affairs.'], c: 0, fb: 'The caption works on two levels: Uncle Sam is physically \'driving\' fence posts, and the phrase also captures what America is \'driving at\', its aim of walling off nations from communism. The other options misplace the action or reverse the message into isolation or Soviet aggression.'},
  {id: 'q9', src: 'compare', num: '1.3', m: 4, t: 'Explain how the information in Source 1A supports the evidence in Source 1B regarding the increasing threat of communism.', lv: 3, ll: 'Comparison', opts: ['Both present communism as an expanding menace: 1A describes Soviet control spreading across Eastern Europe\'s capitals, while 1B pictures that same threat looming over the small nations the USA defends.', 'They contradict each other: 1A argues the Soviet threat was greatly exaggerated, while 1B presents it as a genuine and serious danger to the whole of Europe.', 'Both argue that the USA itself caused Cold War tensions: 1A blames American aid, while 1B shows Uncle Sam deliberately provoking the Soviet Union.', '1A supports 1B by showing that communism had already been completely defeated across Greece and Turkey thanks to the arrival of American aid.'], c: 0, fb: 'Both sources warn of a growing communist threat, the written \'Iron Curtain\' warning in 1A matching the looming dark mass in 1B. They complement each other; they do not contradict, blame the USA, or claim communism was already beaten.'},
  {id: 'q10', src: '1C', num: '1.4.1', m: 2, t: 'What, according to the source, was the first concern of the Marshall Plan policymakers?', lv: 1, ll: 'Extraction', opts: ['That broken economies might foster the growth of communism, much like compost fosters mushrooms.', 'That the Soviet Union would launch a direct military invasion of France and Italy.', 'That European nations would refuse to accept any financial assistance from the USA.', 'That American industry would collapse without new export markets in Europe.'], c: 0, fb: 'The source opens by naming the first concern directly: \'broken economies might foster the growth of communism much like mulch (compost) fosters mushrooms\'. The other options are not given as the first concern in the source.'},
  {id: 'q11', src: '1C', num: '1.4.2', m: 2, t: 'Why, according to the source, was containing the Soviet Union the second major goal of American policy? Choose TWO responses.', lv: 1, ll: 'Extraction', multi: true, mx: 2, opts: ['It was perceived as having embarked on active expansion', 'It was seen as irremediably (severely) hostile to the United States', 'It had already invaded both Turkey and Greece', 'It had refused to join the new United Nations', 'It had developed its own atomic bomb by 1947'], c: [0, 1], fb: 'The source states the Soviet Union was \'perceived as having embarked on active expansion and as being irremediably (severely) hostile to the United States\'. The other three options are not given in the source as reasons.'},
  {id: 'q12', src: '1C', num: '1.4.3', m: 2, t: 'Quote TWO pieces of evidence from the source that suggest the aims of the third goal of the policy of containment.', lv: 1, ll: 'Extraction', multi: true, mx: 2, opts: ['The desire to rebuild the European economy', 'An integrated Europe working together politically as well as economically', 'The removal of all American troops from Europe', 'The creation of a single European army under American command', 'The immediate independence of all European overseas colonies'], c: [0, 1], fb: 'The third goal was \'the drive for European integration\', supported by \'the desire to rebuild the European economy\' and \'an integrated Europe working together politically as well as economically\'. The other options do not appear in the source.'},
  {id: 'q13', src: '1C', num: '1.4.4', m: 4, t: 'Explain the implication of the phrase, \'… the drive for European integration …\', in the context of the policy of containment.', lv: 2, ll: 'Interpretation', opts: ['It implies that uniting Europe economically and politically would build a single strong barrier capable of resisting and blocking further Soviet expansion.', 'It implies that European nations would be forced to give up their governments and merge directly into the Soviet bloc.', 'It implies that the USA actually wanted Europe to stay divided and weak so that America could dominate the continent.', 'It implies that Europe would combine its armies with the Soviet Union in order to prevent a third world war.'], c: 0, fb: 'The source says an integrated Europe \'would constitute the strongest possible barrier to Soviet expansion\', so integration is a containment tool. The other readings reverse the aim or attach it to the wrong side.'},
  {id: 'q14', src: '1D', num: '1.5.1', m: 2, t: 'Why, according to the source, was the Molotov Plan created by the Soviet Union in 1947?', lv: 1, ll: 'Extraction', opts: ['To provide aid to rebuild the Eastern European countries that were politically and economically aligned with the Soviet Union.', 'To provide direct financial aid to France and Italy to stop them from becoming communist states.', 'To fund the Soviet Union\'s development of nuclear weapons for use against the United States.', 'To repay the war debts that the Soviet Union still owed to the United States after 1945.'], c: 0, fb: 'The source states the Molotov Plan was created \'to provide aid to rebuild the countries in Eastern Europe that were politically and economically aligned with the Soviet Union\'. The other options describe things the plan was not for.'},
  {id: 'q15', src: '1D', num: '1.5.2', m: 2, t: 'Quote TWO reasons from the source why the Soviet Union refused to accept financial aid from the Marshall Plan.', lv: 1, ll: 'Extraction', multi: true, mx: 2, opts: ['The conditions imposed would weaken Soviet interest in its satellite states', 'It would make beneficiary (receiving) countries economically dependent on the United States', 'The Soviet Union had already fully rebuilt its economy without any help', 'The Marshall Plan formally excluded the Soviet Union from applying', 'The United States demanded repayment of the aid with high interest'], c: [0, 1], fb: 'The source gives two reasons: the plan was seen as an attempt \'to weaken Soviet interest in their satellite states through the conditions imposed\' and \'by making beneficiary (receiving) countries economically dependent on the United States\'. The others are not stated.'},
  {id: 'q16', src: '1D', num: '1.5.3', m: 2, t: 'Explain the term satellite states in the context of the Cold War.', lv: 2, ll: 'Concept', opts: ['Countries in Eastern Europe that were officially independent but were politically, economically and militarily controlled by the Soviet Union.', 'Countries that launched satellites into orbit as part of the space and arms race against the United States.', 'Neutral countries that deliberately refused to take any side between the USA and the Soviet Union.', 'Western European allies of the United States that received assistance under the Marshall Plan.'], c: 0, fb: '\'Satellite states\' were nominally independent Eastern European countries kept under tight Soviet control, orbiting Moscow like satellites. It has nothing to do with space technology, and they were not neutral or Western-aligned.'},
  {id: 'q17', src: '1D', num: '1.5.4', m: 4, t: 'Using the information in the source and your own knowledge, comment on what the COMECON offered the USSR and its satellite states.', lv: 2, ll: 'Interpretation', opts: ['It offered an economic alliance of socialist states, letting them trade with the USSR instead of relying on American aid and tightening Soviet control.', 'It offered the satellite states full political independence and genuinely free multiparty elections held under the direct supervision of the United Nations.', 'It offered the satellite states military protection through a shared nuclear weapons programme that was aimed squarely at the United States of America.', 'It offered the satellite states full membership of the Marshall Plan on exactly the same generous terms as the countries of Western Europe.'], c: 0, fb: 'COMECON created an economic alliance of socialist countries, letting the satellite states reorganise their trade towards the USSR and away from American aid, which deepened Soviet control. It was not about independence, a nuclear programme, or joining the Marshall Plan.'},
  {id: 'q18', src: 'para', num: '1.6a', m: 2, t: 'Choose the best topic sentence for a paragraph explaining how the policy of containment contributed to Cold War tensions between the USA and the Soviet Union in 1947.', lv: 3, ll: 'Synthesis', opts: ['The USA\'s policy of containment, expressed through the Marshall Plan, deepened Cold War tensions by provoking a hostile Soviet response in 1947.', 'The Second World War came to an end in 1945 when the Allied powers finally defeated Nazi Germany and Japan.', 'Winston Churchill was the former Prime Minister of Britain who delivered a very famous speech in the United States.', 'There were many different opinions about the spread of communism in Europe during the twentieth century.'], c: 0, fb: 'A topic sentence must answer the question directly and set up an argument. Only the first names containment and links it to rising tension. The others are true or vague background statements that do not state how containment raised tensions.'},
  {id: 'q19', src: 'para', num: '1.6b', m: 2, t: 'Which piece of source evidence best supports the topic sentence about containment raising Cold War tensions?', lv: 3, ll: 'Synthesis', opts: ['Source 1C shows the USA used the Marshall Plan to contain the Soviet Union, which was seen as expansionist and hostile.', 'Source 1A mentions Churchill\'s admiration for the bravery of the Russian people and his wartime comrade Stalin.', 'Source 1D states that COMECON was formally established as an organisation in the year 1949.', 'Source 1B is a cartoon that was drawn by the artist S.J. Ray for an American newspaper.'], c: 0, fb: 'Good evidence must connect directly to the claim. Source 1C ties containment to the Marshall Plan and Soviet hostility. The other options are true but irrelevant to the argument, or describe a detail rather than support the claim.'},
  {id: 'q20', src: 'para', num: '1.6c', m: 2, t: 'Which piece of your own knowledge best strengthens the argument that containment raised tensions in 1947?', lv: 3, ll: 'Synthesis', opts: ['The Truman Doctrine of 1947 pledged American aid to Greece and Turkey to stop the spread of communism, directly challenging the Soviet Union.', 'The United Nations was founded in 1945 with the aim of helping to maintain international peace and security.', 'The Berlin Wall was built in the year 1961 to stop East Germans from fleeing across into the West.', 'The Cuban Missile Crisis of 1962 brought the two superpowers very close to a nuclear war.'], c: 0, fb: 'Own knowledge must fit the year and the argument. The Truman Doctrine (1947) is the containment measure that directly raised tensions. The UN is true but off-point, and the Berlin Wall and Cuban Missile Crisis belong to later periods.'},
  {id: 'q21', src: 'para', num: '1.6d', m: 2, t: 'Choose the best concluding sentence that synthesises the paragraph\'s argument.', lv: 3, ll: 'Synthesis', opts: ['In this way, containment and the Soviet counter-response through the Molotov Plan hardened the divide between East and West, intensifying Cold War tensions.', 'Therefore, the Soviet Union and the USA remained close and trusting allies right through the whole of 1947 and beyond.', 'This shows that the Marshall Plan was mainly concerned with rebuilding roads and bridges across Europe.', 'As a result, communism had been completely defeated across the whole of Europe by the end of 1947.'], c: 0, fb: 'A conclusion should draw the argument together. The first links containment to the Soviet counter-response and rising tension. The others contradict the evidence or shrink the argument to a minor point.'},
];

const MTA_ANSWERS = [
  {label: 'Answer A', text: 'The policy of containment caused tension between America and the Soviet Union. The USA made the Marshall Plan to give money to European countries so that they would not turn to communism. Source 1C says the Americans wanted to contain the Soviet Union because it was expanding. The Soviet Union did not like this and so it made its own plan instead. This caused problems between the two countries and they did not trust each other anymore after that.', expLv: 0, expM: '?-5', crit: [{q: 'Does it have a clear topic sentence addressing the question?', cor: 'partial', exp: 'The opening names containment and tension but does not clearly state HOW containment produced that tension, so it sets up the topic only loosely.'}, {q: 'Does it use specific evidence from the sources?', cor: 'partial', exp: 'It refers to Source 1C but only in general terms and does not quote or develop the evidence to build the argument.'}, {q: 'Does it include own knowledge beyond the sources?', cor: 'no', exp: 'It stays inside the sources. There is no outside fact such as the Truman Doctrine, COMECON or the Molotov Plan named and explained.'}, {q: 'Does it explain WHY (analysis), not just WHAT (description)?', cor: 'no', exp: 'It mostly describes what each side did and ends with \'this caused problems\', without explaining why containment actually deepened the hostility.'}, {q: 'Does it have a concluding sentence that synthesises?', cor: 'partial', exp: 'The final sentence restates that there were problems and lost trust, but it does not pull the argument together into a clear synthesis.'}, {q: 'Is it a coherent paragraph, not a list of disconnected sentences?', cor: 'yes', exp: 'The sentences follow on from one another and read as a single connected paragraph rather than a disjointed list.'}]},
  {label: 'Answer B', text: 'The USA\'s policy of containment sharply increased Cold War tensions with the Soviet Union in 1947. Through the Marshall Plan, America offered economic aid to rebuild Europe, but Source 1C makes clear that a central aim was to contain the Soviet Union, which was seen as expansionist and hostile. This alarmed Stalin, who read the plan as a way of pulling Eastern Europe into an American economic sphere. Beyond the sources, the Truman Doctrine of 1947 had already committed American aid to Greece and Turkey to resist communism. In response, the Soviet Union rejected Marshall aid and set up the Molotov Plan, later COMECON, to bind its satellite states to Moscow. Containment and this counter-response together deepened the divide between East and West.', expLv: 0, expM: '?-8', crit: [{q: 'Does it have a clear topic sentence addressing the question?', cor: 'yes', exp: 'The first sentence states directly that containment sharply increased Cold War tensions in 1947, answering the question and setting up the argument.'}, {q: 'Does it use specific evidence from the sources?', cor: 'yes', exp: 'It draws specifically on Source 1C to show that a central aim of the Marshall Plan was to contain an expansionist, hostile Soviet Union.'}, {q: 'Does it include own knowledge beyond the sources?', cor: 'yes', exp: 'It brings in the Truman Doctrine of 1947, an accurate fact from beyond the sources that fits the year and the argument.'}, {q: 'Does it explain WHY (analysis), not just WHAT (description)?', cor: 'yes', exp: 'It explains why the plan alarmed Stalin and how the Soviet counter-response deepened the divide, moving beyond description into causal reasoning.'}, {q: 'Does it have a concluding sentence that synthesises?', cor: 'yes', exp: 'The closing sentence ties containment and the Soviet counter-response together to explain the widening East-West divide.'}, {q: 'Is it a coherent paragraph, not a list of disconnected sentences?', cor: 'yes', exp: 'The paragraph flows logically from claim to evidence to own knowledge to conclusion, reading as a sustained argument.'}]},
];

/* ═══ KULA LEARN BRIDGE ═══
   Reports results to a parent Kula Learn page via postMessage.
   See project doc: Kula_Revise_results_payload_spec.md (spec v1).
   KR_META is injected by build.py from paper.json meta. The bridge is
   inert unless (a) identity fields are present, (b) the page is inside
   an iframe, and (c) the host origin was passed as ?host=<origin>.   */
const KR_META = {interactiveId: 'history-p1-2025-nov-q1', paper: 'P1', section: 'A', questionNumber: 1, paperRef: 'DBE November 2025'};
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
