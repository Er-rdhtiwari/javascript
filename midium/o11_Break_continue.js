let mobile = ["mobile1", "mobile2","mobile3", "mobile4","mobile6", "mobile7"]
for (let i=0; i<mobile.length;i++){
    if (mobile[i]=="mobile1"){
        continue;
    }
    console.log(`
    ${mobile[i]}
    `)
}
for (let i=0; i<mobile.length;i++){
    if (mobile[i]=="mobile1"){
        break;
    }
    console.log(`
    ${mobile[i]}
    `)
}