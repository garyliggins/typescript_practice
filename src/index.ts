//basic types
let id: number = 5 
let company: string = "gary liggins"
let isTrue: boolean = true
let x: any = "hello"
x = true //no errors because we set x to be a type of any
let age: number //initializing the variable before its defined

let ids: number[] = [1,2,3,3] //defining a array of only numbers
// ids.push("hello") //gives error because the array is defined as only numbers
let arr: any[] = [1,true,"hello"] //this works because the array is set to any 

//tuple array with multiple types
let person: [number,string,boolean] = [1, "gary", true] // needs to be in the exact order as the defined data type


//tuple array - arrays inside of arrays
let employee: [number,string] []

employee = [
    [1,'brad'],
    [2,'jim'],
    [3,'gary']
]

//unions - setting a variable to multiple data types
let pid: string | number  // pid can be a string or number
pid = '22'
pid = 10


//enum
enum Direction1 {
    Up,
    Down,
    Left,
    Right,
}
console.log(Direction1.Up)

//objects

// const user: {
//     id: number,
//     name: string
// } = {
//     id: 1,
//     name: 'john'
// }


//setting a variable for defining the types
type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'john'
}

//type assertion - telling the compiler you want to change the type
let cid: any = 1
let customerId = <number>cid //changes cid from any to a number type
let customerid = cid as number //changes cid from any to a number type

//fucntions
function addNum(x: number,y: number):number //this says your return value is expected to be a number
 {
    return x + y
}
console.log(addNum(1,2))


//void
function log(message:string | number): void 
{
    console.log(message)
}

console.log(log("hello message"))

//interfaces - 
interface Userinterface {
    id: number,
    name: string,
    age?:number //this is incase you want to use another element but your not sure, it wontn give you a error because age is optional now 
}

const user1: Userinterface = {
    id: 1,
    name: 'john'
}

//cant use interface with unions or primitives, you would need to use type for those.
// adding readonly before the variable name means the value can not be changed, only readable

