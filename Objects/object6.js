/*
11. Write a JavaScript function to print all the methods in an JavaScript object. Go to the editor
Test Data :
console.log(all_properties(Array));
["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"]
*/

function methods(obj){
   return  Object.getOwnPropertyNames(obj).filter((item) => {
        return  typeof(obj[item]) == 'function'
    })
}
console.log(methods(Math))
console.log(methods(Array))
console.log(methods(Date))