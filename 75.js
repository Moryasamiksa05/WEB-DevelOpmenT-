//callback & Promises
console.log("i am a hacker")

setTimeout(() =>{
    console.log("I am inside timeout")
} ,2000);

console.log("The end");
setTimeout(() =>{
    console.log("I am inside timeout")
} ,0);

const callback=()=>{
    console.log(arg)
}
const loadScript =(src, callback)=>{
  let sc=  document.createElement("script");
  sc.src =src;
  sc.onload=callback("harry");
  document.head.append(src)
}

loadScript(
    
)