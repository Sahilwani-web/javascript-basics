// Promise 1


// const promise  = new Promise( function( resolve, reject ){
//     setTimeout( function(){
//         console.log('ASync 1 completed');
//         resolve()
//     },1000)
// });
//  promise.then(function(){
//     console.log("ASync 2 completed");
    
// })

// Promise 2

//  new Promise( function( resolve, reject ){
//     setTimeout( function(){
//         console.log('ASync 24 completed');
//         resolve()
//     },3000)
// }).then(function(){
//     console.log("ASync 23 completed");
 
    
// })

// Promise 3

// const promiseTwo  = new Promise( function( resolve, reject ){
//     setTimeout( function(){
//         console.log('ASync 1 completed');
//         resolve({username : "sahil" , emailId : "sahil@sahil.com"})
//     },1000)
// });
//  promiseTwo.then(function(you){
//     console.log(you);
    
// })
// const promiseThree  = new Promise( function( resolve, reject ){
//     setTimeout( function(){
//         let error = true
//         if (!error) {
//             resolve({username : "sahil" , emailId : "sahil@sahil.com"})   
//         } else{
//             reject('ERROR:something went wrong')
//         }
       
//     },1000)
// });
//  promiseThree.then(function(you){
//     console.log(you);
//     return you.username
// }).then( (username) => {
//     console.log(username);

// }).catch( (error) =>{
//     console.log(error);

// }).finally( () => {
//     console.log('Promise is either rejected or resolved');

// });

// async function consumePromiseThree(){
//     try {
//         const response = await promiseThree
//         console.log(response)
        
//     } catch (error) {
//         console.log(error); 
//     }

// }
// consumePromiseThree()


// async function fetchy(){
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/Users')
//      const resp =await res.json()
//      console.log(resp);
//     } catch (error) {
//         console.log("E:", error);
        
//     }
// }

// fetchy();

fetch('https://jsonplaceholder.typicode.com/Users')
.then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log(data);

})
.catch(()=> console.log(error));


