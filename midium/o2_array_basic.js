const myArr = [];
console.log(myArr)
console.log(typeof myArr)

let myArr2 = ["rdh","tiwari",30,{age :true}]
console.log(myArr2)
myArr2.push({designation:"developer"})
console.log(myArr2)

let price = ["lowTohigh", "highTolow"]
console.log(price.length)
// get last eliment of array 
console.log(price[price.length-1])
// Array Slicing 
console.log(myArr2.slice(0,2))
// Enterind data at petricular index (posintion.deltecount,insertitem)
myArr2.splice(2,2,"adha","pura",{kaka:"failed"})
console.log(myArr2)
myArr2.splice(2,5)
console.log(myArr2)



