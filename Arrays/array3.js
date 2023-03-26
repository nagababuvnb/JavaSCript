/*
 Write a simple JavaScript program to join all elements of the following array into a string. Go to the editor
Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output :
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"
*/

myColor = ["Red", "Green", "White", "Black"];
const arrf = function(arr){
  console.log(arr.toString(','));
  console.log(arr.join(','));
  console.log(arr.join('+'));
}
arrf(myColor);