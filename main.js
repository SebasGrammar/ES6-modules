import iCanHaveAnyName from './module.js'; // As opposed to named imports, default imports can have any name you want.
// Another key difference between these two is that named imports have to be enclosed in brackets.
import {myNameCanChange as myNameChanged} from './module.js'
import {myNameMustMatch} from './module.js' // named imports have to actually match exports in the module.
// import myNameMustMatch from "./module.js" X won't work.
import * as everySingleExport from "./module.js" // This is an object containing every single export from the specified module.

myNameMustMatch(myNameMustMatch)


console.log(iCanHaveAnyName)

iCanHaveAnyName()

console.log(myNameChanged)

myNameChanged()

console.log("Wihout brackets")

everySingleExport.more()