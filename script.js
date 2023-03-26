// function a(){
//     var x=1;
//  return  setTimeout(function b() {
//     for (x ; x <= 5; x++) {
//       console.log(x);
//     }
//   }, 2000);
  
// }
// a();

// function getMaxLessThanK(n,k){
//   let arr = [];
//   for(let i=n; i>0;i--){
//       arr.push(i);
//   }
//   let len = arr.length;
//   let arr2 = [];
//   for(let j=0;j<len;j++){
//       for(let p=j+1;p<len;p++){
//           arr2.push(arr[j]&arr[p])
//       }
//   }
//   console.log(arr2)
//   let fin = [];
//   arr2.filter(v => {
//      if(v<k){
//        fin.push(v);
//      }
//   });
//  console.log(Math.max.apply(null,fin))
 
  
// }
// getMaxLessThanK(900,255);




// const add = () => {
//   const cache = {};
//   return num => {
//     if (num in cache) {
//       return `From cache! ${cache[num]}`;
//     } else {
//       const result = num + 10;
//       cache[num] = result;
//       return `Calculated! ${result}`;
//     }
//   };
// };

// const addFunction = add();
// console.log(addFunction(10));
// console.log(addFunction(10));
// console.log(addFunction(5 * 2));



/* Factory functions 
       vs 
Constructorfunctions 
      vs 
      classes */


class ClassCar {
  drive () {
    console.log('Vroom!');
  }
}

const car1 = new ClassCar();
console.log(car1.drive());


// constructor
function ConstructorCar () {}

ConstructorCar.prototype.drive = function () {
  console.log('Vroom!');
};

const car2 = new ConstructorCar();
console.log(car2.drive());


// factory
const proto = {
  drive () {
    console.log('Vroom!');
  }
};

const factoryCar = () => Object.create(proto);

const car3 = factoryCar();
console.log(car3.drive());