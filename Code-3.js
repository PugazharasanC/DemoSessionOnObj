/*Write a Javascript Function to find the Number of  Occurrence of Each String in the Array, 
 can use any one of the Method Map, Filter, Object Method, For, Foreach 


Input = ["jack","And","jack", "jill","jack","jill"]

Expected output: ["jack": 3, "jill": 2,’And’:1]


Output may be a  [Key : Val ]- List      or       {Key : Val }- Object 
*/
//         0       1      2       3      4     5
let arr = ["jack","And","jack", "jill","jack","jill"];

let count = arr.reduce((accum, val)=>{
    if(accum[val] == undefined){
        accum[val] = 0;
    }
    accum[val]+=1;
    return accum;
},{})

console.log(count)

function countFunc(arr, i){
    let c = 0;
    for(let val of arr){
        if(val == i) c++;
    }
    return c;
}


let filteredArr = arr.filter((val,ind) => arr.indexOf(val)==ind)

let obj = {}

for(let i of filteredArr){
    obj[i] = countFunc(arr, i);
}

console.log(obj)

console.log(filteredArr)

