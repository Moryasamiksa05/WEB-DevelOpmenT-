//interview questions
let students=["vaibhav","samiksha","rimu","anikit","swati","shubham","saurabh","kaif","kamal"]

let houses=[]

for (const student of students ){
    if(student.length <6){
        houses.push("red")
    }
else if(student.length <8 ){
    houses.push("blue")
}
else if(student.length <3){
    houses.push("green")
}

else{
    houses.push("yellow") 
}
}
console.log(houses);
//2nd 
