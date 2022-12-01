var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
const mapNumbers = numbers.map(function (x) {
  return x * 2;
});

console.log(mapNumbers);
/////////////////////////////////////////////////////////////////////////////////////////////////////

//Filter - Create a new array by keeping the items that return true. (similar and can be done in for each)
const filterNumbers = numbers.filter(function (num) {
  return num > 10;
});

console.log(filterNumbers);
/////////////////////////////////////////////////////////////////////////////////////////////////////

//Reduce - Accumulate a value by doing something to each item in an array.
var accumNumber = numbers.reduce(function (accumulator, currentNumber) {
  return accumulator + currentNumber;
});
console.log(accumNumber);
/////////////////////////////////////////////////////////////////////////////////////////////////////

//Find - find the first item that matches from an array.
const fidnNum = numbers.find(function (num) {
  return num > 10;
});
console.log(fidnNum);
/////////////////////////////////////////////////////////////////////////////////////////////////////

//FindIndex - find the index of the first item that matches.
const findIndexNum = numbers.findIndex(function (num) {
  return num > 10;
});
console.log(findIndexNum);
