const fs = require("fs");

fs.writeFileSync("user.txt", "Welcome John");

function checkUser(content) {

    let words = content.split(" ");
    let name = words[1];

    if (name === "John") {
        console.log("Valid User");
    } else {
        console.log("Unknown User");
    }
}

const data = fs.readFileSync("user.txt", "utf8");

console.log("File Content:", data);

checkUser(data);