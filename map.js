const number = [1,2,3,4,45,6];

const newNum = number.map( (i) =>{return i * 2} );
console.log(newNum);


// chaining of map

const sum = [1,2,3,4,5,6];

const add = sum
           .map( (i)=> {return i + 5 } )
           .map( (i) => i + 2 )
           .filter((i) => i >= 9 );
console.log(add);           

