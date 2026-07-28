function initials(name) {
  const parts = name.split(' ');

  if (parts.length <= 2) return name;

  const first = parts[0];
  const last = parts[parts.length - 1];
  const middles = parts.slice(1, -1).map(m => m[0] + ".");

  return [first, ...middles, last].join(' ')
}

console.log(initials("Jesse Megan Kayigire"));
