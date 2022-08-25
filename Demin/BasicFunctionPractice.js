// 1. Create a function that console logs the string "FUNctions are fun!"
// 2. Create a function that adds two numbers (just like in the content document) and returns the sum.
// 3. Invoke the function with two numbers of your choice.
// 4. Create another function that multiplies two numbers and returns the product.  Invoke this function.
// 5. Create another function that adds two numbers and then multiplies the sum by a third number.  Complete this task by invoking the other two math functions within your new function.  Test this function by invoking it and console logging the output.

const string = () => {
  console.log(`FUNctions are fun!`);
};

const addition = (num1, num2) => {
  let add = num1 + num2;
  return add;
};
// addition(4, 4);

const multiplication = (num1, num2) => {
  let multiply = num1 * num2;
  return multiply;
};

// multiplication(5, 5);

const fun = (a, b, num3) => {
  let sum = addition(a, b);
  let dem = multiplication(sum, num3);
  console.log(dem);
};

fun(5, 5, 10);
