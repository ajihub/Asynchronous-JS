const getTodos = (resource) =>{

    return new Promise((resolve, reject)=>{
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText)
                resolve(data)
            } else if (request.readyState === 4) {
                reject('error getting resource')
            }
    });
    
    request.open('GET', resource);
    request.send();
    });
};

getTodos('data/db1.json').then(data =>{
    console.log('promise 1 resolved: ', data)
    return getTodos('data/db2.json');
}).then(data=>{
    console.log('promise 2 resolved: ', data)
    return getTodos('data/db3.json');
}).then(data=>{
    console.log('promise 3 resolved: ', data)
    return getTodos('data/db4.json')
}).then(data=>{
    console.log('promise 4 resolved: ', data)
}).catch(err => {
    console.log('promise rejected: ', err)
})


// Example of callback hell ======
// getTodos('data/db1.json', (err, data) => {
//     console.log(data);
//     getTodos('data/db2.json', (err, data) => {
//         console.log(data);
//         getTodos('data/db3.json', (err, data) => {
//             console.log(data);
//             getTodos('data/db4.json', (err, data) => {
//                 console.log(data);
                
//             });
//         });
//     });
// });


// const myFunction = () => {
//     return new Promise((resolve, reject) => { 
//         resolve('data');
//         reject('error');
//     });
// }
 


// myFunction().then((data)=>{
//     console.log(data)
// }, (errors) => {
//     console.log(errors)
// });


// getSomething().then(data=>{
//     console.log(data);
// }).catch(err => {
//     console.log(err)
// })