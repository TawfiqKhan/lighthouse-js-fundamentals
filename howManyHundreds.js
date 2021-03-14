function howManyHundreds(number) {
  if(number - 100 < 0){
    return 0;
  }
  let remainder = number % 100;
  let modifiedNumber = number - remainder;
  let containerCount = modifiedNumber / 100;
  return containerCount;
}
console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);