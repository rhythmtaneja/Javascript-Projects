console.log("Script.js initializing...");

let boxes = document.getElementsByClassName("box")//type gebcn for autocomplete
//let boxes = document.querySelector(".container").children (another way)


/* function getRandomColor(){
    let val1 = 233;
    let val2 = 124;
    let val3 = 111;
    return `rgb(${val1}, ${val2}, ${val3})`;
} */

function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random() * (255));
    let val2 = Math.ceil(0 + Math.random() * (255));
    let val3 = Math.ceil(0 + Math.random() * (255));
    return `rgb(${val1}, ${val2}, ${val3})`;
}

Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getRandomColor();
    e.style.color = getRandomColor();
})
/*we'll use Array.from method since these are just HTML collections not arrays, we can't use 'for each' or other js methods directly on HTML collections */


/* CONCEPT:

a + r(b-a)
where r = Math.random() --> gives a random number between a and b (including a & b) 
now in our case we need random no. b/w 0 and 255 since rgb(0-255)

hence,
0 + Math.random() * (255 - 0)
also, 
Math.ceil() --> rounds up the number to the next big integer
Math.ceil(0 + Math.random() * (255 - 0))

*/
