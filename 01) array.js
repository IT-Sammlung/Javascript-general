// Verkettung von Array-Methoden wie map,
const array1 = ['1', 'Max', '2', '3', '4', '5', 'Peter', '6', '7', '8', '9'];
const result = array1
.map(x => parseInt(x)) // ['1', 'NaN', '2', '3', '4', '5', 'NaN', '6', '7', '8', '9'];
.filter(x => !isNaN(x)) // ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
.reduce((x, y) => x + y); // 1+2+3+4+5+6+7+8+9 = 45
console.log(result); // 45





// Entferne duplizierte Einträge aus Array
const nums = [0,1,2,3,4,5,6,7,8,9,9];
function removeDuplicate(nums) {
  return [...new Set(nums)];
}
removeDuplicate(nums);
