/*Напишите функцию, которая будет проверять, является ли число простым,
возвращая true или false.*/
const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(1), isPrime(2), isPrime(17), isPrime(8));