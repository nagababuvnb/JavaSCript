/*
  Write a JavaScript program to find the most frequent item of an array. Go to the editor
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times )
*/

// let count = 0;
// let mostFrequent = 0;
// let item = "";

// function frequent(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         count = count + 1;
//         if (mostFrequent < count) {
//           mostFrequent = count;
//           item = arr[i];
//         }
//       }
//     }
//   }

//   return `${item} (${mostFrequent} times)`;
// }

// var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
// console.log(frequent(arr1));

// var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// var mf = 1;
// var m = 0;
// var item;
// for (var i=0; i<arr1.length; i++)
// {
//         for (var j=i; j<arr1.length; j++)
//         {
//                 if (arr1[i] == arr1[j])
//                  m++;
//                  if (mf<m)
//                 {
//                   mf=m;
//                   item = arr1[i];
//                 }
//         }
//         m=0;
// }
// console.log(item+" ( " +mf +" times ) ") ;

var arr1 = [
  3,
  "a",
  "a",
  "a", 
  2,
  3,
  4,
  3,
  6,
  "f",
  3,
  "s",
  3,
  "a",
  3,
  "a",
  2,
  4,
  9,
  3,
];
// create an object to store the frequency of each item
var freqMap = {};
for (var i = 0; i < arr1.length; i++) {
  var item = arr1[i];
  freqMap[item] = (freqMap[item] || 0) + 1;
}
// find the item with the highest frequency
var maxFreq = 0;
var maxItem = null;
for (var item in freqMap) {
  if (freqMap[item] > maxFreq) {
    maxFreq = freqMap[item];
    maxItem = item;
  }
}
console.log(maxItem + " appears " + maxFreq + " times in the array.");
