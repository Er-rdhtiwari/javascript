// basic function

function squar(){
    let num = 2;
    console.log(num*num)
}

squar();
function cube(num){
    console.log(arguments);
    console.log(num*num*num)
}

cube(3);

function areaofcircle(r){
    let area = Math.PI*r*r;
    return area
}
let result = areaofcircle(7)
console.log(result)



function sumOfAll(){
    console.log(arguments);
    let sum = 0;
    for(let i = 0;i <arguments.length;i++){
        sum = sum+arguments[i];

    }
    return sum
}
let allsum = sumOfAll((1,2,3))
console.log(allsum)













