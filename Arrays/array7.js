/*
   Write a JavaScript program which accept a string as input and swap the case of each character. 
   For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
*/
var str = "cfcfch gvhyv mnhgvyhjyfFTYD nnfdYTDtY";
var UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var LOWER = "abcdefghijklmnopqrstuvwxyz";
var result = [];

for (var x = 0; x < str.length; x++) {
  if (UPPER.indexOf(str[x]) !== -1) {
    result.push(str[x].toLowerCase());
  } else if (LOWER.indexOf(str[x]) !== -1) {
    result.push(str[x].toUpperCase());
  } else {
    result.push(str[x]);
  }
}
console.log(result.join(""));



// function caseChange(input){
//   let output ="";
//   for(let i=0; i<input.length;i++){
//     if(input[i] === input[i].toUpperCase()){
//         output += input[i].toLowerCase()
//     }else{
//         output += input[i].toUpperCase()
//     }
//   }
//   return output;
// // }
// console.log(caseChange("Naga BabU"));
