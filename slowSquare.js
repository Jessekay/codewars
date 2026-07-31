function slowSquare(n) {
  console.log(`Computing square of ${n}...`);
  for (let i = 0; i < 1e8; i++) {} // artificial delay
  return n * n;
}

const cache = {};

const handler = {
  apply(target, thisArg, argumentsList) {
    const [n] = argumentsList; // pull the first argument out of the array

    if (n in cache) {
      console.log(`Cache hit for ${n}`);
      return cache[n];
    }

    const result = Reflect.apply(target, thisArg, argumentsList);
    cache[n] = result;
    return result;
  }
};

const fastSquare = new Proxy(slowSquare, handler);

console.log(fastSquare(5));  // "Computing square of 5..." then 25
console.log(fastSquare(5));  // "Cache hit for 5" then 25
console.log(fastSquare(10)); // "Computing square of 10..." then 100
console.log(fastSquare(5));  // "Cache hit for 5" then 25