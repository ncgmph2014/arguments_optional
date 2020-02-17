function addTogether() {
  let args = arguments;
  let sum = 0;

  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}

console.log(addTogether(2, 3));
console.log(addTogether(2, 3) + " should return 5.");
console.log(addTogether(2)(3) + " should return 5.");
console.log(addTogether("http://bit.ly/IqT6zt") + " should return undefined.");
console.log(addTogether(2, "3") + " should return undefined.");
console.log(addTogether(2)([3]) + " should return undefined.");
console.log("Something is happening here");
