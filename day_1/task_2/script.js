// Task 2: Understanding data types and conversions

// Number type
let num = 29;

// String type
let str = "123";

// Boolean type
let isStudent = true;

// Array type
let colors = ["red", "pink", "blue"];

// Undefined value
let notDefined;

// Null value
let emptyValue = null;

// Showing the types of different values
console.log("Data Types:");
console.log(typeof num, typeof str, typeof isStudent, typeof colors, typeof notDefined, typeof emptyValue);

// Convert string to number
let strToNum = Number(str);

// Convert number to string
let numToStr = String(num);

// Showing the converted values
console.log("Converted string to number:", strToNum);
console.log("Converted number to string:", numToStr);

// Simple math using string and numbers
console.log("5 * 2 =", "5" * 2); // Auto converts string to number
console.log("5 + 2 =", "5" + 2); // Adds as string (concatenation)
