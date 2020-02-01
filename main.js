import iCanHaveAnyName from './module.js'; // As opposed to named imports, default imports can have any name you want.
// Another key difference between these two is that named imports have to be enclosed in brackets.
import {myNameCanChange as myNameChanged} from './module.js'
import {myNameMustMatch} from './module.js' // A named import has to actually match an export in the module.
// import myNameMustMatch from "./module.js" X won't work. Don't forget to put in the brackets.
import * as everySingleExport from "./module.js" // This is an object containing every single export from the specified module.
import {logOne, logTwo, addOne} from "./module.js" // It is possible to import multiple exports by separating
// them with commas.
import {one, two} from "./module.js"
/*****************************************************************************************************/
console.log(everySingleExport.three) // These values are read only. They can't be modified from outside the module
// if not through a function defined in the same module.
console.log(nice) // Didn't even have to import this one because it's global.

myNameMustMatch(myNameMustMatch)

console.log(iCanHaveAnyName)

iCanHaveAnyName()

console.log(myNameChanged)

myNameChanged()

console.log("Wihout brackets")

everySingleExport.more()


logOne()
addOne()
logOne()
console.log(one)
addOne()
// one += 5 won't work!
console.log(one)

const {destructuring: iWasDestructured} = everySingleExport; // Since, as mentioned above, this is an object,
// you can use good ol' destructuring to pull out variables.

iWasDestructured()

let a = 2

let test = {
    b: 4,
}; // This semicolon here is mandatory; not including it would yield an error
// caused by this chunk of code being interpreted as a function (?)

({b: a} = test) // This is how you reassign a value to a previously defined variable
// by using destructuring.

console.log(a)

