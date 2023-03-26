/*
  7. Write a JavaScript program which returns a subset of a string. Go to the editor
  Sample Data: dog
  Expected Output: ["d", "do", "dog", "o", "og", "g"]
*/
function subsets(str){
    let subsetArr = [];
    for(let i=0; i<str.length; i++){
        for(j=i+1;j<=str.length; j++){
         if(!subsetArr.includes(str.substring(i,j))) subsetArr.push(str.substring(i,j))
        }
    }
    return subsetArr.join(',');
}
console.log(subsets("nagababu"))