// Task 4: If-Else and Switch statements

let marks = 90;

if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 75) {
  console.log("Grade: B");
} else if (marks >= 60) {
  console.log("Grade: C");
} else {
  console.log("Grade: Fail");
}

// Using switch to check days
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("Weekend is near");
    break;
  case "Sunday":
    console.log("Holiday!");
    break;
  default:
    console.log("Just another day");
}
