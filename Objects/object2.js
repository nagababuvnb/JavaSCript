/*
2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. Go to the editor
Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
*/

function deleteProp(obj){
    console.log(obj);
 delete obj.rollno;
 console.log(obj);


}
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
 };
 deleteProp(student)
