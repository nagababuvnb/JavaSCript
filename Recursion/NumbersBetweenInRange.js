/*
 Write a JavaScript program to get the integers in range (x, y).

Example : range(2, 9)
Expected Output : [3, 4, 5, 6, 7, 8]
*/
// var range = function(start, end) 
// {
//   if (end - start === 2) 
//   {
//     return [start + 1];
//   } 
//   else 
//   {
//     var list = range(start, end - 1);
//     list.push(end - 1);
//     return list;
//   }
// };

// console.log(range(2,9));

function integers(m,n,arr){
 arr.push(m+1);
 if(n-m == 2){
  arr.push(m+1);
 }
 return arr.push(integers(m+1,n,arr))
}
console.log(2,5,[]);