const data = `underscore_case
first_name
Some_Variable 
 calculate_AGE
delayed_departure`;


const dataArr = data.split('\n')
for(let [i,value] of dataArr.entries()){
    const [first,second] = value.trim().split('_')
    const output = `${first}${second.replace(second[0],second[0].toUpperCase())}`
    console.log(output.padEnd(25).concat('✅'.repeat(i+1)))
}


// output

// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅