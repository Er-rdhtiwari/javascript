// for of only for Array
// for in loop for object 
let userDetails = {
firstName:"radhe",
lastName:"Tiwari",
role:"Admin",
loginCount:25,
};


for (let i =0;i<10;i=i+1){
    console.log(`
    i = ${i}
    `)
}

for (i in userDetails){
   console.log(`the key is ${i} and value is ${userDetails[i]}`)
}











