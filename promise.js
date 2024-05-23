console.log('This is Promise');

let prom1 =new Promise((resolve, reject)=>{
    let a= math.random();
    if(a<0.5){
        reject("No random number was supporting you")
    }else{
    setTimeout(()=>{
        console.log("Yes I am done")
        resolve("Hello")
    },3000);}
})

prom1.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})