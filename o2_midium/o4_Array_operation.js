//Read : https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
let num = [1,2,3,4,5,6,7,8,9,8]
// copy within copyWithin(index,start,end)----> note: end is inclusive
console.log(num.copyWithin(1,4,8))
console.log(num.includes(100))
console.log(num.indexOf(9))
// check is Array or not 
console.log(Array.isArray(num))

let series = [1,2,3,45,7,8,7,5,5,9,879,78,5,6,7,8,9,8]
// last index 
console.log(series.lastIndexOf(8))





