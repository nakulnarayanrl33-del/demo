const userInfo = require("./userInfo");
const formatName = require("./formatName");

const formattedName = formatName(userInfo.name);

const upperHobby = userInfo.hobby.toUpperCase();

const hobbyLength = userInfo.hobby.length;

console.log("Formatted Name:", formattedName);
console.log("Hobby:", upperHobby);
console.log("Hobby Length:", hobbyLength);