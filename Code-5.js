

let obj = {jack:"Three", jill: "Two",And:"one"};

let out = Object.keys(obj).reduce((accum, val)=>{
    accum[obj[val]] = val;
    return accum;
},{})

console.log(out);
let expOutput = {"Three" : "jack", "Two" : "jill", "one" : "And"}