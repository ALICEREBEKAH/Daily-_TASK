// Task 7: Arrays and looping through them

let fruits = ["apple", "banana", "mango", "grapes"];

// Using for loop
for (let i = 0; i < fruits.length; i++) {
  console.log("Fruit:", fruits[i]);
}

// Using for-of loop
for (let fruit of fruits) {
  console.log("Using for-of:", fruit);
}
