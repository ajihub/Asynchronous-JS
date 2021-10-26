//fetch api

const myFunction = async () => { 
    const response = await fetch('data/db1.json');  

    if(response.status !==200){
        throw new Error('cannot fetch the data');
    }
    const data = await response.json();
    return data;
    
};
myFunction()
    .then(data => console.log('resolved', data))
    .catch(err => console.log('rejected', err.message));

    // console.log(dataaRR)

// fetch('data/db1.json').then((response)=>{
//     console.log('resolved', response);
//     return response.json();
// }).then(data =>{
//     console.log(data)
// }).catch((err)=>{
//     console.log('rejected', error);
// });



// const myFunction = async () => { 
//     const response = await fetch('data/db1.json');  
//     const data = await response.json();
//     return data;
//     // const data = await response.json();
//     // return data;
// };

// // const data = await myFunction();
// // console.log({data})
// myFunction()
//     .then(data => console.log('resolved', data))
//     .catch(err => console.log('rejected', err.message));