function addTogether() {
  let args = [...arguments];

  //return false;
}

console.log(addTogether(2, 3));
console.log(addTogether(2, 3) + " should return 5.");
console.log(addTogether(2)(3) + " should return 5.");
console.log(addTogether("http://bit.ly/IqT6zt") + " should return undefined.");
console.log(addTogether(2, "3") + " should return undefined.");
console.log(addTogether(2)([3]) + " should return undefined.");
