const sum = [1,2,3,4];

const totreduce = sum.reduce( (acc,curval) => acc  + curval  ,)

console.log(totreduce);



const shoppinpCart =[
    {
        item: "jsCousre",
        price: 2000
    },
    {
        item: "web dev",
        price: 4300
    },
    {
        item: "android",
        price: 3500
    },
    {
        item: "React",
        price: 5500
    },
];

const sumcart = shoppinpCart.reduce( (acc,item) => acc + item.price,0)
console.log(sumcart);