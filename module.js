let name = "Sebastian"

window.nice = "nice" // if, for some reason, you need to declare a global variable, you can use
// the window object.

export let one = 1, two = 2, three = 3;

export default function logName() {
    console.log(name)
}

export function lol() {
    console.log(name + "tian")
}

export function myNameCanChange(x) {
    console.log(x)
}

export function more() {
    console.log("more")
}

export function myNameMustMatch() {
    console.log("Names matched.")
}

function logOne() {
    console.log(one)
}

function logTwo() {
    console.log(two)
}

function addOne() {
    one ++
}

export {logOne, logTwo, addOne} // It is also possible to export multiple exports by separating them
// with commas (after you have defined them)

export function destructuring() {
    console.log("I was destructured.")
}