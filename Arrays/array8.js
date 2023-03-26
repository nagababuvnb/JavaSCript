/*
Write a JavaScript program which prints the elements of the following array. Go to the editor
Note : Use nested for loops.
Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
Sample Output :
"row 0"
" 1"
" 2"
" 1"
" 24"
"row 1"
------
------
*/


//BY USING ARRAY>FOREACH METHOD

// function fun(arr){
//   arr.forEach((a,i)=>{
//     console.log("row "+i);
//     a.forEach((b)=>{
//         console.log(`"${b}"`);
//     })
//   })
// }



// BY USING FOR  LOOPS
function fun(arr){
  for( let i in arr){      // OR for(let i=0; i<arr.length;i++)
    console.log("row "+i)
    for(let j in arr[i]){    //for(let i=0; j<arr.length;j++)
      console.log(`"${arr[i][j]}"`)
    }
  }
}


let a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
fun(a);

