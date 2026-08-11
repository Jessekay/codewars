function last() {
  if (arguments.length > 1) {
   return arguments[arguments - 1]; 
  }
  
  const arg = arguments[0];
  
  if (Array.isArray(arg) || typeof arg === 'string') {
    return arg[arg.length - 1];
  }
  return arg;
}