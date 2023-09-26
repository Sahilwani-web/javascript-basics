// for of


const number = [1,2,3,4,5]
for (const num of number) {
    console.log(num);
    
};
const char = "Hello world"
for (const letter of char) {
    console.log(`each character is ${letter}`);
    
}

// for in

const myObject = 
{
    js: "javascript",
    c : "c sharp",
    rb : "ruby on rails"

}

for (const key in myObject) {
    console.log(`${key} shorcut is ${myObject[key]}`);


}

// for each

const coding = ["Javascript", "Java", "PHP", "Ruby"] 
coding.forEach( (code) =>  {
    console.log(code)
} );

const myCoding = [
    {
        Language : "Javascript",
        difficulty : "Easy"
    },
    {
        Language : "PHP",
        difficulty : "Tough"
    },
    {
        Language : "Python",
        difficulty : "Medium"
    }
] 

myCoding.forEach( (item) => {
    console.log(item.difficulty);
} )

