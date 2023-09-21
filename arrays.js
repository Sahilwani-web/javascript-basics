const myArr = [1,2,3,4,5]
console.log(myArr);

// another way of defining array
const myAr = new Array(7,10,12,15);
console.log(myAr); 

myArr.push(6);
console.log(myArr);

myArr.pop();
console.log(myArr);

myArr.unshift(7);
console.log(myArr);

myArr.shift();
console.log(myArr);

const myArr2 = myArr.slice( 1, 3);
console.log(myArr2);

const myArr3 = myArr.splice(1,3);
console.log(myArr3 );


const Heroes = ["SRK", "Salman", "Sahil"]

const villains = ["AmbrishPuri", "Haka", "Teja"]

const actors = Heroes.concat(villains)
console.log(actors);

const actorrs = [...Heroes, ...villains];
console.log(actorrs);


const number = [1,2,3,4 ,['sahil', 'faizan'], [true,false],  [5,6,7]];

const another_number = number.flat(Infinity);
console.log(another_number);


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));