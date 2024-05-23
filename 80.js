//Object oriented Program
// let obj={
//     a:1,
//     b:"harry"
// }
// console.log(obj);

// let animal={
//     eats: true
// };

// let rabbit={
//     jumps: true
// };
// rabbit._proto_=animal;

class Animal{
    constructor(name){
        this.name=name
        console.log("object is created...")
    }
    eats(){
     console.log("eating")   
    }
    jumps(){
        console.log("sleeping") 
    }
}
class Lion extends Animal{

}

let a= new Animal("Bunny");
console.log(a);

let l=new Lion("Shera")
console.log(l);