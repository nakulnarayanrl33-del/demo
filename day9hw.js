const fs = require("fs");
const path = require("path");

let buffer1 = Buffer.from("Node.js buffers are powerful");

buffer1.write("FAST ");

let buffer2 = Buffer.from(" and flexible!");

let finalBuffer = Buffer.concat([buffer1, buffer2]);

let finalString = finalBuffer.toString();

const filePath = path.join(__dirname, "buffer_output.txt");

fs.writeFileSync(filePath, finalString);

console.log("File saved successfully!");
console.log("Full File Path:", filePath);

console.log("Final Buffer Content:");
console.log(finalString);