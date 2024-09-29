// 1. using var

var a=10;
var a=20;       // can be redeclared
a=30;           // can be updated
console.log("using var --- can be redeclared can be updated");

// 2. using let (cannot be redeclared can be updated)

let b=20;
b=30;               // can be updated
//  let b=10;       // cannot be redeclared

console.log("using let --- cannot be redeclared can be updated");

// 3 . using const --  cannot be redeclared cannot be updated

const c=10;
// c=20;                  cannot be updated
// const c=30;            cannot be redeclared

console.log("using const --- cannot be redeclared cannot be updated")