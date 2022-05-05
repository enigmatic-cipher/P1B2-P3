// Given n as input, print sum of squares of numbers from 1 to n.

const n = prompt('Enter Number: ');
var sum = 0;
for (let i=1; i<=n; i++){
  sum += i*i;
}
console.log(sum)