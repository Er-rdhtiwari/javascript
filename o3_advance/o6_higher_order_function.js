// HOF 
// Callback function : function takes  parametres as a function, function returns function
// - Callback
let square = (n) => {
    return n**2
}

let cube = (square,n) =>{
    return square(n)*n
}

console.log(cube(square,5))

console.log(cube(square,6))

courseName = () => {
    console.log("Welcome to Timeout course")
}
setTimeout(courseName,2000)
















