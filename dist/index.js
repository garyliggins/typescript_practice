"use strict";
//basic types
let id = 5;
let company = "gary liggins";
let isTrue = true;
let x = "hello";
x = true; //no errors because we set x to be a type of any
let age; //initializing the variable before its defined
let ids = [1, 2, 3, 3]; //defining a array of only numbers
// ids.push("hello") //gives error because the array is defined as only numbers
let arr = [1, true, "hello"]; //this works because the array is set to any 
//tuple array with multiple types
let person = [1, "gary", true]; // needs to be in the exact order as the defined data type
//tuple array - arrays inside of arrays
let employee;
employee = [
    [1, 'brad'],
    [2, 'jim'],
    [3, 'gary']
];
//unions - setting a variable to multiple data types
let pid; // pid can be a string or number
pid = '22';
pid = 10;
//enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
const user = {
    id: 1,
    name: 'john'
};
//type assertion - telling the compiler you want to change the type
let cid = 1;
let customerId = cid; //changes cid from any to a number type
let customerid = cid; //changes cid from any to a number type
//fucntions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
//void
function log(message) {
    console.log(message);
}
console.log(log("hello message"));
const user1 = {
    id: 1,
    name: 'john'
};
//cant use interface with unions or primitives, you would need to use type for those.
// adding readonly before the variable name means the value can not be changed, only readable
