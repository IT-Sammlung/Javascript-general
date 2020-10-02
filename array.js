// Verkettung von Array-Methoden wie map, filter oder reduce
const array1 = ['1', 'Max', '2', '3', '4', '5', 'Peter', '6', '7', '8', '9'];
const result = array1.map(x => parseInt(x)).filter(x => !isNaN(x)).reduce((x, y) => x + y);
console.log(result); // 45
