// Q135
// reusing the person object from Question 133
var person = {
    name: "John",
    age: 25,
    city: "New York"
};
var jsonstring = JSON.stringify(person, null, 2);
console.log(jsonstring);
