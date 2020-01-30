// https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

import iCanHaveAnyName from './module.js'; // As opposed to named imports, default imports can have any name you want.
// Another key difference between these two is that named imports have to be enclosed in brackets.
import {myNameCanChange as myNameChanged} from './module.js'
import {myNameMustMatch} from './module.js' // named imports have to actually match exports in the module.
// import myNameMustMatch from "./module.js" X won't work.
import * as everySingleExport from "./module.js" // This is an object containing every single export from the specified module.

import {logOne, logTwo, addOne} from "./module.js" // It is possible to import multiple exports by separating
// them with commas.
import {one, two} from "./module.js"

console.log(everySingleExport.three) // These values are read only. They can't be modified from outside
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