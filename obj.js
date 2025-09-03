/* Q-2. - Compute cart total from an array of item objects (sum price * qty).
Given: cart = [{ price: 50, qty: 2 }, { price: 30, qty: 1 }]
Goal: Return 130
*/

cart = [
  { price: 50, qty: 2 },
  { price: 30, qty: 1 },
];
const total = cart.reduce((sum, item) => {
  return sum + item.price * item.qty;
}, 0);
console.log(total);

/* 
Q-4. -Convert an array of [key, value] pairs into an object (like Object.fromEntries).
Given: pairs = [['id', 7], ['name', 'Neo']]
Goal: Return { id: 7, name: 'Neo' }

*/

const pairs = [
  ["id", 7],
  ["name", "Neo"],
];

const obj = Object.fromEntries(pairs);

console.log(obj);

/* 
Q-1. Replace keys using a mapping object (rename multiple keys).
Given: user = { fn: 'Asha', ln: 'Sharma' }, map = { fn: 'firstName', ln: 'lastName' }
Goal: Return { firstName: 'Asha', lastName: 'Sharma' }

*/

const user = {
  fname: "Asha",
  lname: "Sharma",
};

const map = {
  fname: "firstName",
  lname: "lastName",
};

const rename = Object.fromEntries(
  Object.entries(user).map(([key, value]) => [map[key] || key, value])
);
console.log(rename);

/* 

Q-5 - Convert an object to a Map and back to an object.
Given: obj = { a: 1, b: 2 }
Goal: Create Map([['a',1],['b',2]]) then back to { a: 1, b: 2 }

*/

// Obj to Map

const obj2 = { a: 1, b: 2 };

const map2 = new Map(Object.entries(obj2));
console.log(map2);

// Map to Obj

const obj3 = { a: 1, b: 2 };

const newObj = Object.fromEntries(map2);

console.log(newObj);
