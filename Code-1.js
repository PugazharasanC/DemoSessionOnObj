/*
Write a Javascript Function to turn the Keys as Capital Letter  / Uppercase

Input ={jack:"Three", jill: "Two",And:"one"};
Expected Output= {JACK: "Three",JILL: "Two",AND: "one"}
        
Key :Val                Key : Capital Letter  / Uppercase                     Value : Remain

*/


let obj = {jack:"Three", jill: "Two",And:"one"};

let finObj = Object.keys(obj).reduce((accum, val) => {
    accum[val.toUpperCase()] = obj[val];
    return accum;
},{}) //Pref

let temp = Object.fromEntries(Object.entries(obj).map(val =>{ 
    val[0] = val[0].toUpperCase()
    return val;
}))

console.log(finObj);

console.log(temp);

let output = {}
for(let key in obj){
    output[key.toUpperCase()] = obj[key];
}
console.log(output);

let expOut = {JACK: "Three",JILL: "Two",AND: "one"};

