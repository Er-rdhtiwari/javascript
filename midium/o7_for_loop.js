for (let i =0; i<=5; i=i+1){
    console.log(`
    Mobile  ${i}
    `
    );
}

let mobile = ["mobile1", "mobile2"]
for (let i=0; i<mobile.length;i++){
    console.log(`
    ${mobile[i]}
    `)
}

let phone = [];
for (let i=0; i<mobile.length;i++){
    phone.push(mobile[i].toUpperCase())
}
console.log(phone)















