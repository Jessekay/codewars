// function last() {
//   if (arguments.length > 1) {
//    return arguments[arguments - 1]; 
//   }
  
//   const arg = arguments[0];
  
//   if (Array.isArray(arg) || typeof arg === 'string') {
//     return arg[arg.length - 1];
//   }
//   return arg;
// }

function last(...args) {

  if (args.length === 1) {
    const singleArg = args[0];


    if (Array.isArray(singleArg) || typeof singleArg === 'string') {
      return singleArg[singleArg.length - 1];
    }


    return singleArg;
  }

  return args[args.length - 1];
}