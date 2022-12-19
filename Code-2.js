
/* Write a Javascript Function to find the Number  of Occurrence of Each element in the Array, can use any one of the Method Map, Filter, Object Method, For, Foreach 

Input = [3,4,3,5,3,6] 

Expected Output : {3:3,4:1,5:1,6:1} 

Output may be a  [Key : Val ]- List      or       {Key : Val }- Object 
*/


let arr = [3,4,3,5,3,6];

let count = arr.reduce((accum, val)=>{
    if(accum[val] == undefined){
        accum[val] = 0;
    }
    accum[val]+=1;
    return accum;
},{})

console.log(count)
let expOut = {3:3,4:1,5:1,6:1}
