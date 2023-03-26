/*
3. Write a JavaScript program to get the length of a JavaScript object. Go to the editor
Sample object :
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
*/

function objLength(obj){
    let length=0;

    for(let key in obj){
      if(obj.hasOwnProperty(key)) length++;
    }
    console.log(length)
}
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};
objLength(student);