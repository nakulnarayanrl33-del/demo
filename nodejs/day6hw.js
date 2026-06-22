const fs = require("fs");

const profileData = "Name: Riya\nAge: 22\nCity: Mumbai";

fs.writeFileSync("profile.txt", profileData);

console.log("profile.txt created successfully");

const data = fs.readFileSync("profile.txt", "utf8");

const lines = data.split("\n");
const nameLine = lines[0]; 
const name = nameLine.split(": ")[1];

console.log("Extracted Name:", name);

function verifyProfile(userName) {
    if (userName === "Riya") {
        console.log("Profile verified");
    } else {
        console.log("Invalid profile");
    }
}

verifyProfile(name);

fs.appendFileSync("profile.txt", "\nStatus: Active");

console.log("Status added to file");

fs.renameSync("profile.txt", "verified_profile.txt");

console.log("File renamed to verified_profile.txt");