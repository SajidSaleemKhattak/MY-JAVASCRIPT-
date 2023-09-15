// Declarations Functions
function volume(r, h) {
    return 3.14 * r * r * h
}
let vol = volume(1.2, 3);
console.log(vol);
/*Here we can see that the function is called and is stored in another varible . Now we are we not 
bound to do that like for example we can also directly call the function and and it will run like normal
but if we want to use the return value of a function like for further operations (+,-,/,*) or comparisons (>,<,===) or in conditionals etc 
then we definitely need to store that value of a function in another variable and then further use that value 
so that is why we have called the function, and assinged that function to another variable....!*/

// Expression Function:
/* In Expression Function we directly assing a function to a variable and that varible store the 
value of that return type i.e */

let area = function (l) {
    // area of a cube
    return l + l + l + l + l + l;
}
console.log(area(5));
// Now how are we gonna use the value of this function for that we need to store it in another variable like i.e

let a = area(5);
console.log(a);

/*There is no practical diffreence between declaration function and expression Function
but one key diffrence between the two is that we all call the declration function even before actually creaing it,
But we cannot call an expression function before creating it i.e (In case of an expression function you first 
have to create it and then call it , while declarative function are not ristristed to be first declared).
It is because of the concept of HOISTING IN JAVASCRIPT.....! e.g */

let mv = momentum(67, 12);

// Here We have called a function first even before it has been declared or created.
// Now creating or declaring the actual function :

function momentum(mass, velocity) {
    return mass * velocity;
}

console.log(mv);

// We cannot do that with expression function i.e Expression Function are on top and code for calling them is
// at the bottom.
