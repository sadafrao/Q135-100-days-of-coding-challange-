// Q135
// reusing the person object from Question 133
const person ={
    name: "John",
    age: 25,
    city: "New York"
};
const jsonstring = JSON.stringify(person,null,2);
console.log(jsonstring);