function greet(name) {
  return `Hello ${name}`;
}

const handler = {
  apply(target, thisArg, argumentList) {
    console.log("Function is being called!");
    console.log("Arguments passed:", argumentList);
    
    return Reflect.apply(target, thisArg, argumentList);
  }
};

const proxyGreet = new Proxy(greet, handler);

console.log(proxyGreet("Jesse Kayigire"));
