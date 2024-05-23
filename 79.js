//errors handling

let a=prompt("enter a number: ");

let b=prompt("enter second number: ")
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed")
}
let sum=parseInt(a)+parseInt(b);
try{
console.log("The sum is",sum*x)}
catch(error){
    console.log("error is occur!")
}
finally{
    console.log("files are being closed and db connection is being closed")
}