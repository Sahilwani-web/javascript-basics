// filter
const num = [2,3,4,5,6,7,8,9,10];

const nyNum = num.filter( (i) =>{
    return i >4
} );
console.log(nyNum);



const Books =[
    {
        title: "Book 1" , genre : "History", publish: 2000, edition: 2008
    },
    {
        title: "Book 2" , genre : "History", publish: 2001, edition: 2000
    },
    {
        title: "Book 3" , genre : "Physics", publish: 1950, edition: 2010
    },
    {
        title: "Book 4" , genre : "Chemistry", publish: 1800, edition: 1979
    },
    {
        title: "Book 5" , genre : "Physics", publish: 1990, edition: 2010
    },
    {
        title: "Book 6" , genre : "Chemistry", publish: 1900, edition: 1995
    },
    {
        title: "Book 7" , genre : "History", publish: 1996, edition: 2008
    },
    {
        title: "Book 8" , genre : "Chemistry", publish: 2000, edition: 2080
    },
    {
        title: "Book 9" , genre : "Physics", publish: 1990, edition: 2108
    }
];

const Newbook = Books.filter( (num) => { return num.genre === "Physics"})
const Newbook1 = Books.filter( (num) => num.publish >= 1990)
console.log(Newbook);
console.log(Newbook1);
