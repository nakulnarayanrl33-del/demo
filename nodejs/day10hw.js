const fs = require("fs");
const path = require("path");

const introStream = fs.createReadStream("intro.txt");
const conclusionStream = fs.createReadStream("conclusion.txt");

let chunks = [];

introStream.on("data", (chunk) => {
    chunks.push(chunk);
});

introStream.on("end", () => {

    chunks.push(Buffer.from("\n"));

    conclusionStream.on("data", (chunk) => {
        chunks.push(chunk);
    });

    conclusionStream.on("end", () => {

        const finalBuffer = Buffer.concat(chunks);

        const writeStream = fs.createWriteStream("full_report.txt");

        writeStream.write(finalBuffer);

        writeStream.end();

        writeStream.on("finish", () => {
            console.log("Merging complete!");
            console.log("File saved as full_report.txt");
        });
    });
});