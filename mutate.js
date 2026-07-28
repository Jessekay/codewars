const inventory = ["sword", "shield", "potion"];
// inventory.push("bow");
inventory.splice(inventory.indexOf("shield"), 1);
// 1. Add "bow" to the end without reassigning inventory
// 2. Remove "shield" from the array
// 3. Replace "potion" with "elixir" using index assignment
inventory.splice(2, 1, "elixir")
// 4. Sort the array alphabetically
inventory.sort((a, b) => a.localeCompare(b));
// 5. Try inventory = [] and confirm it throws a TypeError

console.log(inventory);