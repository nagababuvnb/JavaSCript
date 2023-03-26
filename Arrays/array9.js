/*
  Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
*/

function removeDuplicates(num) {
  var x,
    len = num.length,
    out = [],
    obj = {};

  for (x = 0; x < len; x++) {
    obj[num[x]] = 0;
  }
  console.log(obj)
  for (x in obj) {
    out.push(Number(x));
  }
  return out;
}
var Mynum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
result = removeDuplicates(Mynum);
console.log(Mynum);
console.log(result);




// By using filter 
var arr = ["apple", "mango", "apple", 
            "orange", "mango", "mango"];
      
    function removeDuplicates(arr) {
        return arr.filter((item, 
            index) => arr.indexOf(item) === index);
    }
      
    console.log(removeDuplicates(arr));



// By using sets
var arr = ["apple", "mango", "apple",
            "orange", "mango", "mango"];
      
    function removeDuplicates(arr) {
        return [...new Set(arr)];   // because sets are also iterable
    }
      
    console.log(removeDuplicates(arr));


// By using includes
var arr = ["apple", "mango", 
        "apple", "orange", "mango", "mango"];
      
    function removeDuplicates(arr) {
        const unique = [];
        arr.forEach(element => {
            if (!unique.includes(element)) {
                unique.push(element);
            }
        });
        return unique;
    }
    console.log(removeDuplicates(arr));


// By using reduce
var arr = ["apple", "mango", 
        "apple", "orange", "mango", "mango"];
  
    function removeDuplicates(arr) {
        var unique = arr.reduce(function (acc, curr) {
            if (!acc.includes(curr))
                acc.push(curr);
            return acc;
        }, []);
        return unique;
    }
    console.log(removeDuplicates(arr));



// By using indexOf
var arr = ["apple", "mango", 
"apple", "orange", "mango", "mango"];

function removeDuplicates(arr) {
var unique = [];
for(i=0; i < arr.length; i++){  
    if(unique.indexOf(arr[i]) === -1) {  
        unique.push(arr[i]);  
    }  
}
return unique;
}
console.log(removeDuplicates(arr));
