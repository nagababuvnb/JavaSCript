/*
1. Write a JavaScript program to list the properties of a JavaScript object. Go to the editor
Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
Sample Output: name,sclass,rollno
*/

function properties(obj){
    for(prop in obj){
        console.log(prop)
    }
}
const student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };
properties(student)
