//forEach - general purpose iterator method
//const friends = ['Spring', 'Chris', 'Anna', 'Harley'];
//
//friends.forEach((friend) => {
//    friend.toLowerCase();
//})
//console.log(friends)


//map method - create a new array from a source array by replacing or transforming its elements
//The returned array is always the same length as the source array
const instructors = ["Alex", "Stephanie", "Daniel"];

const els = instructors.map((instructor) => {
    return `${instructor} is awesome`;
});
console.log(els)


//filter method - select certain elements from a source array
//const peoples = ["jerks", "nice people", "jerks", "nice people", "nice people"];
//
//const jerks = peoples.filter((people) => people === "jerks")
//console.log(jerks);


//find method - find an element within an array
//const cars = [
//    {color: 'red', make: 'BMW', year: 2001},
//    {color: 'white', make: 'Toyota', year: 2013},
//    {color: 'black', make: 'Ford', year: 2014},
//    {color: 'white', make: 'Tesla', year: 2016}
//  ];
//  
//  const firstCarOlder2014 = cars.find((car) => car.year === 2014);
//  console.log(firstCarOlder2014)


//some method - check if array has at least one element that meets a certain condition
//will return true or false
//const myRoom = ["evil monkey", "bed", "lamp"];
//const isEvilMonkeyInRoom = myRoom.some((item) => item === "evil monkey")
//console.log(isEvilMonkeyInRoom)
