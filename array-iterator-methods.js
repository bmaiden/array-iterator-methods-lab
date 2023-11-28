//Array Iterator Methoda

//forEach method - general purpose iterator method
//const friends = ["Melissa", "Marc", "Andrew", "Nick"];
//
//friends.forEach((friend) => {
//  console.log(`I have a friend named ${friend}`);
//});
// logs out "I have a friend named <friend's name>" for each friend

//map method - create a new array from a soucrc array by replacing or transforming its elements
//a.transform an array using map method
//const nums = [1, 2, 3];
//const squared = nums.map(function(num) {
//  return num * num;
//});
//console.log(squared);
// squared -> [1, 4, 9]
//
/*--- using an arrow function for the callback ---*/
//const squared = nums.map((num) => num * num);
//
//b.map an object of "people" objects into an array of DOM elements using map method
//const people = [
//  { name: "Fred", town: "Bedrock" },
//  { name: "Susan", town: "Miami" },
//  { name: "John", town: "Arcadia" },
//];
//
//const els = people.map((person, idx) => {
//  const el = document.createElement("div");
//  el.innerHTML = `${person.name} <span>(${person.town})</span>`;
//  // The new array will contain whatever
//  // is returned from the callback
//  return el;
//});
//
//// Append the <div>s to the end of the <body>
//els.forEach((el) => document.body.append(el));

//filter method - select certain elements from a source array
//obtain just the odd numbers
//const nums = [100, 2, 5, 42, 99];
//const odds = nums.filter((num) => num % 2);
//console.log(odds)
// odds -> [5, 99]

//find method - find an element withn an array
//find a certain car object
//const cars = [
//  { color: "red", make: "BMW", year: 2001 },
//  { color: "white", make: "Toyota", year: 2013 },
//  { color: "black", make: "Ford", year: 2014 },
//  { color: "white", make: "Tesla", year: 2016 },
//];
//
//const firstWhiteCar = cars.find((car) => car.color === "white");
////console.log(firstWhiteCar)
//// firstWhiteCar -> {color: 'white', make: 'Toyota', year: 2013}
//
//const missingCar = cars.find((car) => car.color === "blue");
//console.log(missingCar)
//// missingCar -> undefined


//findIndex method - like find method but returns the found element's index instead of th element.
//find the index of the first match
//const cars = [
//  {color: 'red', make: 'BMW', year: 2001},
//  {color: 'white', make: 'Toyota', year: 2013},
//  {color: 'black', make: 'Ford', year: 2014},
//  {color: 'white', make: 'Tesla', year: 2016}
//];
//
//const idxFirstCarNewerThan2015 = cars.findIndex((car) => car.year > 2015);
//console.log(idxFirstCarNewerThan2015)
//// idxFirstCarNewerThan2015 -> 3
//
//// findIndex returns -1 if callback never returns a truthy value
//const missingCarIdx = cars.findIndex((car) => car.year > 2020);
//console.log(missingCarIdx)
//// missingCarIdx -> -1


//some method - check if array has at least one element that meets a certain condition
//const cars = [
//  {color: 'red', make: 'BMW', year: 2001},
//  {color: 'white', make: 'Toyota', year: 2013},
//  {color: 'black', make: 'Ford', year: 2014},
//  {color: 'white', make: 'Tesla', year: 2016}
//];
//
//const hasFord = cars.some((car) => car.make === 'Ford');
//console.log(hasFord)
//// hasFord -> true


//every method - check if every element in the array meets a certain condition
//are all cars newer than 2000
//const cars = [
//  {color: 'red', make: 'BMW', year: 2001},
//  {color: 'white', make: 'Toyota', year: 2013},
//  {color: 'black', make: 'Ford', year: 2014},
//  {color: 'white', make: 'Tesla', year: 2016}
//];
//
//const everyCarIsNewerThan2000 = cars.every((car) => car.year > 2000);
//console.log(everyCarIsNewerThan2000)
//// everyCarIsNewerThan2000 -> true


//reduce method - reduce an array into a single value or thing (such as an object)
//sum up the numbers in an array
//const nums = [25, 6, 100, 3];
//
//// The callback returns the value of
//// acc (accumulator) for the next iteration.
//// The second argument, `0`, is the value
//// of acc on the first iteration.
//const sum = nums.reduce((acc, num) => {
//  console.log(acc, num)  
//  return acc + num
//});
//
//console.log(sum)
//// The reduce method returns whatever the callback
//// returns for the last iteration.
//// sum equals 134 (the final value returned)

//count votes using reduce method
const votes = ['Yes', 'No', 'No', 'Yes', 'Yes'];
const tally = votes.reduce((runningTally, vote) => {
  // Assign 1 if first time seeing a certain "type" of vote
  // otherwise increase count by 1
  runningTally[vote] = runningTally[vote] ? runningTally[vote] + 1 : 1;
  return runningTally;
}, {});  // Note the initial value is an empty object
console.log(tally)
// tally -> {"No": 2, "Yes": 3}