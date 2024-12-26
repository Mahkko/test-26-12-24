//Napisati program koji pronalazi sve brojeve u nizu koji su veći od prosjeka brojeva u istom nizu.
//Ulaz:
//[1, 2, 3, 4, 5]

//Izlaz:
//[4, 5]

const arr = [1, 2, 3, 4, 5];
let sum = 0;
let overallAvrg = 0;
let biggerThanAverage = [];
arr.forEach((element) => {
  sum += element;
});

arr.forEach((element) => {
  if (element > overallAvrg) {
    biggerThanAverage.push(element);
  }
}, (overallAvrg = sum / arr.length));
console.log(biggerThanAverage);
