const input = [1, -5, 2, 10, -30, 29, 50];
let sum = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] > 0) {
    sum = sum + input[i];
  }
}
console.log("given array =", input);
console.log("The total sum of all the positive numbers are ", sum);
