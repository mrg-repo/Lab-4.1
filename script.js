// Task 1  

function formatFullName(firstName, lastName) {
  if (!firstName || !lastName) {
    return "Invalid name input.";
  }
  let formattedFirst = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  let formattedLast = lastName.charAt(0).toUpperCase() + lastName.slice(1);
  return formattedLast + ", " + formattedFirst;
}

console.log(formatFullName("rashaad", "galloway"));
console.log(formatFullName("rashaad", ""));


// Task 2 


/*
function calculateTotalCost(price, quantity, taxRate) {
  if (typeof price !== "number" || typeof quantity !== "number" || typeof taxRate !== "number") {
    return "Invalid input.";
  }
  let totalCost = (price * quantity) * (1 + taxRate);
  return totalCost;
}
*/

console.log(calculateTotalCost(10, 2, 0.05));
console.log(calculateTotalCost("ten", 2, 0.05));


// Task 3

function checkEligibility(age, isEmployed) {
  if (age > 18 && isEmployed) {
    return "Eligible.";
  } else if (age > 18) {
    return "Conditionally eligible.";
  } else {
    return "Not eligible.";
  }
}

console.log(checkEligibility(30, true));
console.log(checkEligibility(47, false));
console.log(checkEligibility(15, true));

// Task 4

function calculateTotalCost(price, quantity, taxRate, discount = 0) {
  if (typeof price !== "number" || typeof quantity !== "number" || typeof taxRate !== "number") {
    return "Invalid input.";
  }
  let totalCost = ((price * quantity) - discount) * (1 + taxRate); 
  return totalCost;
}

console.log(calculateTotalCost(10, 2, 0.05, 2));
console.log(calculateTotalCost(15, 2, 0.05));