/**
 * 
 * @param {*} arr 
 * @returns sum of array of integers
 */
function sumOfArray(arr)
{
    if(arr.length>=1)
    {
        let ans = arr.reduce((a,b)=>a+b)
        return ans;
    }
    else{
        return -1 // if not an array or array length < 1
    }
}
let arr = [10,50,46,24]
console.log(sumOfArray(arr));