/* Create a business name generator by combining list of adjectives and shop name and another word
(can't use arrays)
Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub
*/

let rand = Math.random(); // random no between 0 and 1
let first, second, third;

//lets generate the first word
if (rand<0.33){
     first = "Crazy";
}
else if(rand<0.66 && rand>=0.33){
    first = "Amazing";
}
else{
    first = "Fire";
}
// select first para then press: option(alt) + shift + down arrow to copy same thing below


//lets generate the second word
rand = Math.random()
if (rand<0.33){
     second = "Engine";
}
else if(rand<0.66 && rand>=0.33){
    second = "Foods";
}
else{
    second = "Garments";
}



//lets generate the third word
rand = Math.random()
if (rand<0.33){
    third = "Bros";
}
else if(rand<0.66 && rand>=0.33){
   third = "Limited";
}
else{
   third = "Hub";
}

console.log(`${first} ${second} ${third}`); 

