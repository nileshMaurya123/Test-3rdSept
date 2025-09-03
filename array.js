/* 

Q-3 :Union of two arrays (unique values, order by first appearance).
Given: arr1 = [1, 2, 2], arr2 = [2, 3]
Goal: Return [1, 2, 3]

*/

const arr1 = [1, 2, 2];
const arr2 = [2, 3];

const union = [...new Set([...arr1, ...arr2])]; // spread operator used
console.log(union);

/* 
Q-4 - Count occurrences of a given number in the array.
Given: arr = [3, 5, 3, 2, 3, 1], target = 3
Goal: Return 3
*/

const arr = [3, 5, 3, 2, 3, 1];
const target = 3;

const count = arr.filter((num) => num === target).length;
console.log(count);

/* 
Q-5 - Find common numbers (intersection, unique) between two arrays.
Given: arr1 = [3, 5, 6], arr2 = [4, 5, 7]
Goal: Return [5]
*/

const arr3 = [3, 5, 6];
const arr4 = [4, 5, 7];

const commonnumbers = arr3.filter((num) => arr4.includes(num));
console.log(commonnumbers);

/* 

Q1 - Build a frequency map (object) counting how many times each element appears.
Given: arr = ['a', 'b', 'a', 'c', 'b', 'a']
Goal: Return {'a': 3, 'b': 2, 'c': 1}


*/

const arr5 = ["a", "b", "a", "c", "b", "a"];

const map = {};

for (const num of arr5) {
  map[num] = (map[num] || 0) + 1; /* || OR Operator  */
}
console.log(map);
