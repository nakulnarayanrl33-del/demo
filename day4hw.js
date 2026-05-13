
const manager = require("./managerInfo");
const capitalizeName = require("./capitalizeName");

let formattedName = capitalizeName(manager.name);

let upperRole = manager.role.toUpperCase();

let roleLength = manager.role.length;

let searchResult = manager.role.search("inventory");

console.log("Manager Name:", formattedName);
console.log("Manager Role:", upperRole);
console.log("Role Character Count:", roleLength);
console.log("Search Result for 'inventory':", searchResult);