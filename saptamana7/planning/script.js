// let calculateTotalPrice = (price, subscription) => {
//   let totalPrice = price + price * 0.19;

//   if (subscription === false) {
//     totalPrice += (10 / 100) * totalPrice;
//   }
//   return totalPrice;
// };

let calculateTotalPrice = (price, hasPaidSubscription) => {
  let totalPrice = price;
  if (hasPaidSubscription === false) {
    totalPrice += totalPrice * 0.1;
  }

  totalPrice += 0.19 * totalPrice;
  return totalPrice;
};

// console.log(calculateTotalPrice(100, false));

// let passPower = (password) => {
//   while (password === null) {
//     alert('This field is required');
//     password = prompt('Insert a password');
//   }
//   if (passPower.length > 8) {
//     console.log('ok');
//   } else console.log('nu');
// };

// let password = prompt('Insert a password');

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let validatePassword = (password) => {
  if (password.length === 0) {
    return 'This field is required';
  }

  let criterias = 0;

  if (password.length >= 8) {
    criterias++;
  }

  for (let i = 0; i < password.length; i++) {
    let convertedToNumber = parseInt(password[i]);
    if (numbers.includes(convertedToNumber)) {
      criterias++;
      break;
    }
  }

  //   Check if there is a number in the string
  if (password.match(/\d/g)) {
    console.log('ok');
  }
  ///////////////////////////////

  if (password !== password.toLowerCase()) {
    criterias++;
  }

  if (
    password.includes('!') ||
    password.includes('@') ||
    password.includes('#')
  ) {
    criterias++;
  }

  if (criterias === 0 || criterias === 1) {
    return 'Weak password';
  }

  if (criterias === 2) {
    return 'Medium password';
  }

  if (criterias === 3) {
    return 'Strong password';
  }

  if (criterias === 4) {
    return 'Very strong password';
  }
};

// console.log(validatePassword(password));

let cartItems = [
  {
    price: 100,
    quantity: 1,
  },
  {
    price: 69,
    quantity: 3,
  },
  {
    price: 200,
    quantity: 2,
  },
];

let getCartTotal = (products) => {
  if (products.length === 0) {
    return 'Cart is empty';
  }

  let sum = 0;

  for (let i = 0; i < products.length; i++) {
    sum += products[i].price * products[i].quantity;
  }

  return sum;
};

// console.log(getCartTotal(cartItems));

let person = {
  name: 'John',
  age: 30,
  generateWelcomeMessage: function () {
    console.log(`Welcome ${this.name}`);
  },
};

person.generateWelcomeMessage();
