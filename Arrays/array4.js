/*
 Write a JavaScript program which accept a number as input and insert dashes (-) 
 between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8. 
*/

const myFun = (input)=> {
    console.log(input)
    const a = input.toString().split('')
    console.log(a)
    let str = [a[0]];
    for( let i=0; i<a.length;i++){
       if(a[i]%2 == 0 && a[i+1]%2 == 0 || a[i]== 0){
          str.push('-',a[i+1]);
       }else{
        str.push(a[i+1])
       }
    }
    return str.join('');
}

console.log(myFun(2064684516102468));