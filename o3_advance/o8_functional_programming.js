// for each 
const arr1 = ["Hey","hi","hello","Namaste"]
arr1.forEach(
    (val)=>{
        return console.log(val)

})
// without return 
// we can not pass logic in for each 
console.log("-----------without return----------")
arr1.forEach((val)=>console.log(val))


// map : we can pass logic in for each 
const mynum = [1,2,3,4,5,6,7]
const square = mynum.map((val)=>console.log(val**2))


const names =  ["Hey","hi","hello","Namaste"]
const uppercase = names.map(  (name) => name.toUpperCase())
console.log(uppercase)


// filter 
const countries = ["india","srilanka","nepal","thailad","bangladesh","china","rassia"]

let country = countries.filter( (values)=> values.includes("ia") )
console.log(country)


// Reduce 

const nums = [1,2,3,4,5,6,7,8,9]
const default_val = 0
const sum = nums.reduce( (accumulator,current)=> accumulator + current ,default_val )
console.log(sum)
const sum2 = nums.reduce( (accumulator,current)=> accumulator + current ,5 )
console.log(sum2)









