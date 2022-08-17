//ES5 - export => module.exports,  import => require(filename)

//ES6 contains export and import keywords to do the required job
//named export/import and default export/import

//constant.js
export default constant = 9.81; //default export, only one default is allowed from one file

export const pi = 3.1414; //named export, there can be many exports from one file
export const shy = 3.19;

export class User { };
export function Calculate(params) { }

//mathconstant.js
//export const pi = 3.144;

//when we import these in other file
//ImportData.js
//default import
import constant from "./constant"; // we import default exports without {}

console.log(constant)

// named import
import {pi, User} from "./constant"; // we put all the exports in {} that we need to import as named import
import {pi as mathPi} from "./mathconstant";

//import all the named exports as one value

import * as nameImports from "./constant"

console.log(nameImports.shy)
console.log(nameImports.Calculate)
console.log(mathPi)

