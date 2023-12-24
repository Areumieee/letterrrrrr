const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const gif = document.querySelector('.gif');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

yesBtn.addEventListener('click', ()=>{
    question.innerHTML = "Haii jeemmm merry christmas! you know ba na you're the best friend that I have aside from Rose. Kase you have this one thing that only I feel from you, your comforting presence and I love that about you shempre. Kahit na nakakatakot ka pag nagagalit mas nakakatakot na mawala ka, legit toh promise HAHAHAHAH kasiii ikaw lang naman lagi nag aalaga sakin kahit na mas matanda ako sayo, mukha ka namang mas matanda kaya ok lang hEHhehEHEH. You know may isang bagay na meron ka na di maipagpapalit, yun yung pagiging maalagain, kahit na mas gusto mo ikaw ung inaalagaan kame naman ung inaalagaan mo. You know ba na you're irreplaceable? Kahit na nakalimutan kita sa mind ko nung elementary at lagi din kita inaaway nun or sinasabunutan ganun ganun, naalala paden kitaaa. Di ko nga alam kung pano uli kita naging ka close e pero naging masaya naman ako, I know na may 3rd at 4th quarter pa tayo so di pa naman gudbye toh pero I still want to let you know na kahit nasa caloocan nako ikaw padin ang maaalala ko, siguro icocompare pa kita dun sa mga yun e. Kaya kinakabahan ako kase alam ko mahirap na makahanap ng tulad mo. Basta next year mag bago ka na a HAHAHAHAH wag na tulog ng tulog sa classroom~ Siguro kung di kita naging kaclose baka mapunta ako sa mga bad influence, pero ok lang meron pa naman akong Rose mae HEHEHHEHE kaso baka mainfluence din ako kase madami jowa ehhe sorri lola mahal na mahal kita. Though jeem, pag broken ka lagi ka nalang nagagalit, ano ka ba lolo HAHAHAHAH grumpy lolo~, still natatandaan ko pa ung mga linilibre mo sakenn so thank you so much sana ol nalang lagi may pera, you introduced me to all kinds of things na nagustuhan ko, you helped me be a better person for everyone kahit minsan ay nagiging plastik ako alam ko, madami naman siguro akong nakakainis na personality pero atlis tiniis mo waw, kaya sana someday na mapuntahan moko sa caloocan para ma house tour kita HAHAHAHHA gusto nga lagyan ng elevator ni lolo e shesh talaga pag nastuck tayo dun ikaw bala tas ako taga video HAHAHAHAH, thank you Juan Miguel Descalzo for everything, for playing with me, for carrying me on horror games, for giving me a happy life (di naman ako mamatay, sakanya lang patay na patay), for making me feel special <3 Bakit pako mag hahanap ng bagong kaibigan kung nanjan ka lang naman??? The more the merrier pero you're enough, I know na di ko sinasali dito ung iba ko pang friends kase letter toh para sayo e HAHAHHAHAH, Well alam ko naman na alam mo na ikaw ung comfort person ng lahat pero sana lagi ka mag masaya kase ikaw nalang lagi nag cocomfort, sana lagi ka mag ingat hahhh baka mawalan ka ng cp bigay mo nalang sakin yan HAHAHAHAH, sana di ka maimpluwensyahan ng mga problema na lagi mo naririnig! Anyways, merry christmas uli tito jeem, pahingi pamasko kahit si Jungkook lang!";
    gif.src = "https://media.tenor.com/9isPGD8bRy4AAAAd/venti-genshin-impact.gif";
});

noBtn.addEventListener('mouseover', ()=> {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
})