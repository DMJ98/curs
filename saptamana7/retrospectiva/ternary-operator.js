// const username = 'Cristian';

// if (username.length > 0) {
//   console.log(`Hello, ${username}!`);
// } else {
//   console.log(`Hello, Guest!`);
// }

//Poate fi rescrisa cu ternary operator

const username = 'Cristian';

const getWelcomeMessage = (name) =>
  name.length > 0 ? `Hello, ${name}!` : `Hello, Guest!`;

// ? = ternary operator (if)
// : = ternary operator (else)
