// for (let i = 0; i < 10; i++) {
//   console.log('Hello');
// }

// for (let i = 0; i < 7; i++) {
//   console.log(`Loop ${i}`);
// }

// for (let i = 0; i < 1; i++) {
//   console.log('Loop 0');
//   console.log('Loop 1');
//   console.log('Loop 2');
//   console.log('Loop 3');
//   console.log('Loop 4');
//   console.log('Loop 5');
//   console.log('Loop 6');
// }

// for (let i = 3; i < 9; i++) {
//   console.log(i);
// }

// for (let i = 0; i < 11; i += 2) {
//   console.log(i);
// }

// for (let i = 0; i < 11; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// for (let i = 0; i < 20; i++) {
//   if (i % 3 !== 0) {
//     console.log(i);
//   }
// }

// for (let i = 0; i < 21; i++) {
//   if (i % 2 === 0 && i % 3 === 0) {
//     console.log(i);
//   }
// }

// let sum = 0;
// for (let i = 0; i < 11; i++) {
//   {
//     sum += i;
//     console.log(sum);
//   }
// }

// let sum = 0;
// for (let i = 1; i < 11; i++) {
//   if (i % 2 === 0) {
//     sum += i;
//     console.log(sum);
//   }
// }

// let prod = 1;
// for (let i = 1; i < 11; i++) {
//   prod *= i;
//   console.log(prod);
// }

// let prod = 1;
// let counter = 0;
// for (let i = 1; i < 21; i++) {
//   if (i % 3 === 0) {
//     counter += 1;
//   }
// }
// console.log(counter);

// let nume = 'cristianccC';
// let counter = 0;
// for (let i = 0; i < nume.length; i++) {
//   if (nume[i] === 'c' || nume[i] === 'C') {
//     counter++;
//     console.log(counter);
//   }
// }

// let nume = 'cristianccC';
// let counter = 0;
// for (let i = 0; i < nume.length; i++) {
//   if (nume[i].toUpperCase() === 'C') {
//     counter++;
//     console.log(counter);
//   }
// }

// let nume = 'cristianccC';
// let counter = 0;
// for (let i = 0; i < nume.length; i++) {
//   if (nume[i].match(/[aeiou]/gi)) {
//     counter++;
//     console.log(counter);
//   }
// }

// let str =
//   'asdknasklncklsandkkqjrk3ljiojeiojkdldvnnjkvnjkfghirjfk;adwopqoeoiwujriuthurihnv';
// let counter = 0;

// for (let i = 0; i < str.length; i++) {
//   let letter = str[i].toUpperCase();
//   if (
//     letter === 'A' ||
//     letter === 'E' ||
//     letter === 'I' ||
//     letter === 'O' ||
//     letter === 'U'
//   ) {
//     counter++;
//   }
// }

// console.log(counter);

// let numbers = [5, 31, 304, 12, 0];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
//   console.log(sum);
// }

let numbers = [5, 31, 304, 12, 0, 0, 0, 0, 0, 0];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 0) {
    sum++;
    console.log(sum);
  }
}
