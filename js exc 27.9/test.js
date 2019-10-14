/*function tripAdviser(city){
    city1.advice = 'Negative'  /*   adding property to object */
/*    if(city.population < 8000){
        city1.advice = 'Positive'
    }
    return `${city.name}   has a population of   ${city.population}   and is situated in  ${city.continent} and our advice is ${city.advice}` ;
}

let city1 = {
    name:'Paris',
    population:'2,140,526',
    continent:'Europe'
}
let city2 = {
    name:'Tokyo',
    population:'13,929,286',
    continent:'Asia'
}

     
document.write(tripAdviser(city1));
*/






////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/* function tripAdviser(arr){
    
    let temp = prompt('What City do you want to visit');
    for(i=0; i< arr.length; i++){
        if(arr[i].name == temp){
            if(arr[i].population < 8000){
                arr[i].advice = 'Positive';    
            }
            else{arr[i].advice = 'Negative';}
            return `${arr[i].name}   has a population of   ${arr[i].population}   and is situated in  ${arr[i].continent} and our advice is ${arr[i].advice}`;
    }
    
    }
    
}

let city1 = {
    name:'Paris',
    population:'2,140,526',
    continent:'Europe'
}
let city2 = {
    name:'Tokyo',
    population:'13,929,286',
    continent:'Asia'
}
let city3 = {
    name:'London',
    population:'8.136,000',
    continent:'Europe'
}
cityArray =[city1, city2, city3];

document.write(tripAdviser(cityArray));

 */




/* 
function tripAdviser(arr){
    let temp = arr[0].population;
     for(i=0; i< arr.length; i++){
        if(arr[i].population < temp && arr[i].continent == 'Europe'){
            temp = arr[i].population ;
        }      
            }
            for(j=0; j< arr.length; j++){
               if(arr[j].population == temp){
                arr[j].advice = 'Positive';
                return  arr[j];
               } 
        }
           
    }
    
   

let city1 = {
    name:'Paris',
    population:'2,140,526',
    continent:'Europe'
}
let city2 = {
    name:'Tokyo',
    population:'13,929,286',
    continent:'Asia'
}
let city3 = {
    name:'London',
    population:'8.136,000',
    continent:'Europe'
}
arrayOfCitys =[city1, city2, city3];

console.log(tripAdviser(arrayOfCitys));   */






////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 

function tripAdviser(arr){
    let temp = arr[0];
     for(i=0; i< arr.length; i++){
        if(arr[i].population < temp.population && arr[i].continent == 'Europe'){
            temp = arr[i] ;
        }      
    }
        return  temp;
        } 
     
   

let city1 = {
    name:'Paris',
    population:'2,140,526',
    continent:'Europe'
}
let city2 = {
    name:'Tokyo',
    population:'13,929,286',
    continent:'Asia'
}
let city3 = {
    name:'London',
    population:'8.136,000',
    continent:'Europe'
}
arrayOfCitys =[city1, city2, city3];

console.log(tripAdviser(arrayOfCitys));  
 */





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* 
function tripAdviser(arrC, arrP){
    let temp = [];
    for(i=0; i< arrC.length; i++){
        for(j=0; j< arrP.length; j++){
    if(arrC[i].name.includes(arrP[j]) ||arrC[i].population.includes(arrP[j]) || arrC[i].continent.includes(arrP[j])){
        temp.push(arrC[i]);
        break;
    }
}
    }
    return temp
    }
   

let city1 = {
    name:'Paris',
    population:'2,140,526',
    continent:'Europe'
}
let city2 = {
    name:'Tokyo',
    population:'13,929,286',
    continent:'Asia'
}
let city3 = {
    name:'London',
    population:'8,136,000',
    continent:'Europe'
}
let city4 = {
    name:'Newyork',
    population:'8.623,000',
    continent:'America'
}
arrayOfCitys =[city1, city2, city3, city4];
arrayOFPreferences = ['Europe']
console.log(tripAdviser(arrayOfCitys, arrayOFPreferences));
 */




////////////////////////////////////////////////////////////////////////////////////////////////////////////



function storyBuilder(titleArr, paraArr, t){
for(i=0; i<titleArr.length; i++){
    if(paraArr[i].title.type.includes(t)){
       return `${paraArr[i].title.topic} </br> </br> ${paraArr[i].text}`
        }
    }
}


let HarryPotter = {
    type: 'fantasy',
    keyword: "'magic', 'Harry', 'Potter'",
    topic: 'Throughout the series, Harry is described as having his father\'s perpetually untidy black hair, his mother\' s bright green eyes, and a lightning bolt-shaped scar on his forehead. He is further described as "small and skinny for his age" with "a thin face" and "knobbly knees", and he wears round eyeglasses.'
}
let Alien = {
    type: 'Horror',
    keyword: "'horror', 'alien', 'rippley'",
    topic: 'Alien is a 1979 science fiction horror film directed by Ridley Scott and written by Dan O\'Bannon. Based on a story by O\'Bannon and Ronald Shusett, it follows the crew of the commercial space tug Nostromo who encounter the eponymous Alien, a deadly and aggressive extraterrestrial set loose on the ship.'
}
let LionKing = {
    type: 'Animation',
    keyword: "'Lion', 'Simba', 'scar'",
    topic: 'The Lion King tells the story of Simba (Swahili for lion), a young lion who is to succeed his father, Mufasa, as King of the Pride Lands; however, after Simba\'s paternal uncle Scar murders Mufasa, Simba is manipulated into thinking he was responsible and flees into exile.'
}
let paragraph1 = {
    title: HarryPotter ,/* <<<<<important  referes to the object */
    text:'An eleven year old boy, Harry Potter, who lives with his uncle, aunt and cousin, having lost his parents as an infant, finds out that he’s a wizard (someone with magical powers) and attends Hogwarts School of Witchcraft and Wizardry. There he makes many friends, the best of them being Ron Weasley and Hermione Granger. A new teacher at the school that year is possessed by Lord Voldemort, the antagonist of the series, who partially lost his life when he failed to kill baby-Harry (difficult to explain in short). He tries to steal a stone that’s guarded by the headmaster of the school, Albus Dumbledore, because it’s an elixir of life. It’s up to the trio to try and stop him.'
}
let paragraph2 = {
    title: Alien ,
    text:'In deep space, the crew of the commercial starship Nostromo is awakened from their cryo-sleep capsules halfway through their journey home to investigate a distress call from an alien vessel. The terror begins when the crew encounters a nest of eggs inside the alien ship. An organism from inside an egg leaps out and attaches itself to one of the crew, causing him to fall into a coma.'
}
let paragraph3 = {
    title: LionKing ,
    text:'In the Pride Lands of Africa, a pride of lions rule over the animal kingdom from Pride Rock. King Mufasa\'s and Queen Sarabi\'s newborn son, Simba, is presented to the gathering animals by Rafiki the mandrill, the kingdom\'s shaman and advisor. Mufasa shows Simba the Pride Lands and explains to him the responsibilities of kingship and the "circle of life", which connects all living things. Mufasa\'s younger brother, Scar, covets the throne and plots to eliminate Mufasa and Simba, so he may become king. He tricks Simba and his best friend Nala (to whom Simba is betrothed) into exploring a forbidden elephants\' graveyard, where they are attacked by three spotted hyenas, Shenzi, Banzai, and Ed, who are in league with Scar. Mufasa is alerted about the incident by his majordomo, the hornbill Zazu, and rescues the cubs. Though upset with Simba, Mufasa forgives him and explains that the great kings of the past watch over them from the night sky, from which he will one day watch over Simba.'  
}
let arrayOftitles = [HarryPotter, Alien, LionKing]
let arrayOfParagraphs = [paragraph1, paragraph2, paragraph3]
let type = 'Horror';
let result = storyBuilder(arrayOftitles, arrayOfParagraphs, type)
document.write(result);
