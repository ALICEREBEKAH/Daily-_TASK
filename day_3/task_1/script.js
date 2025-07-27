// Function greeting
function greet(name) {
    console.log(`hello, ${name}`);
}
greet('world');

// Function to sum all arguments
function sumAll() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log(sum);
}
sumAll(1, 2, 3, 4, 5);
