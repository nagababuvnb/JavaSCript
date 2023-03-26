/*
 Write a JavaScript program to sort the items of an array. Go to the editor
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/
const arr2 =[]
function sorting(arr){
  //return arr.sort((a,b) => a-b);
  for(let i=0; i<arr.length; i++){
    arr[i]>arr[i+1] ? arr2.unshift(arr[i]) : arr2.push(arr[i])
  }
  return arr2;
}
console.log(sorting([ -3, 8, 7, 6, 5, -4, 3, 2, 1]))