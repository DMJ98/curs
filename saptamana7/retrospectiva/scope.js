const price = 100; //global scope

if (price > 0) {
  const totalPrice = price + price * 0.19;
  //totalPrice este block scope
  console.log(`Total price is ${totalPrice}`);
}
