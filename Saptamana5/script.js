// let cantitateProdus = prompt('Introdu cantitatea');
// cantitateProdus = Number(cantitateProdus);

// let pretProdusPerUnit = 100;
// let a = cantitateProdus * pretProdusPerUnit;

// let numeProdus = 'mere';

// if (cantitateProdus <= 0) {
//   console.log(`Selecteaza minim  o unitate din produsul ${numeProdus}`);
// } else {
//   console.log(
//     `Comanda poate fi plasata. Ai comandat ${cantitateProdus} unitati din produsul ${numeProdus}. Totalul este ${a} lei`
//   );
// }

///////////////////////////////////////////////////////////////////////////////////////

// let userPass = prompt('Introdu parola');
// // let userPass = 'aaaaaaaa';

// if (userPass.length === 0) {
//   console.log('This field is required');
// } else if (userPass.length < 8 && userPass.includes(0) === true) {
//   console.log('The password must contain at least 8 characters and one number');
// } else {
//   console.log('Good to go');
// }

/////////////////////////////////////////////////////////////////////////////////

// let userAge = prompt('Introdu varsta');
// userAge = Number(userAge);

// // if (userAge < 0 || userAge > 99) {
// //   console.log('Invalid age');
// // }

// if (!(userAge >= 0 && userAge <= 99)) {
//   console.log('Invalid age');
// }

//////////////////////////////////////////////

// let isPremiumAccount = true;
// let isAdmin = false;

// if (isAdmin === true || isPremiumAccount === true) {
//   console.log('Acces granted');
// } else {
//   console.log('Acces denied');
// }

///////////////////////////////////////////////////

// let listaDeIngrediente = ['pui', 'bere', 'whiskey', 'vodka', 'gin'];

// console.log(listaDeIngrediente[1]);
// listaDeIngrediente.push('branza');
// console.log(listaDeIngrediente);

// let array = ['seminte', 'nuci', 'salata', 'ceapa'];

// console.log(array[0], array[2]);
// array.push('rosie');
// console.log(array);

///////////////////////////////////////////////////////////////

let pass = prompt('Introdu parola');

if (pass === null) {
  console.log('No password entered');
} else {
  console.log(pass.length);

  if (pass.length === 0) {
    console.log('This field is required');
  } else if (pass.length < 8 || !(pass.includes('0') || pass.includes('1'))) {
    console.log(
      'The password must contain at least 8 characters and one number'
    );
  } else {
    console.log('Good');
  }
}
