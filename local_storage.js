//7th question

function saveNoteToLocalStorage(note){

    localStorage.setItem("note",note); 
}
let note=localStorage.getItem("note")
document.write(note)
document.querySelector("button").addEventListener("click", ()=>{
    let a=prompt("Enter your note")
    saveNoteToLocalStorage(note)
    localStorage.setItem("name",a);  
document.write(note) 
})
    