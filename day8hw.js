const express = require("express");
const multer = require("multer");
const nodemailer = require("nodemailer");
const path = require("path");

const app = express();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

app.get("/", (req, res) => {
    res.send(`
        <h2>Tech Support File Upload</h2>
        <form action="/upload" method="POST" enctype="multipart/form-data">
            <input type="file" name="supportFile" required />
            <button type="submit">Upload File</button>
        </form>
    `);
});

app.post("/upload", upload.single("supportFile"), async (req, res) => {

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "your_email@gmail.com",
            pass: "your_app_password"
        }
    });

    let mailOptions = {
        from: "your_email@gmail.com",
        to: "admin@example.com",
        subject: "File Uploaded",
        text: "A user uploaded a file to the support portal."
    };

    try {
        await transporter.sendMail(mailOptions);

        res.send("File uploaded successfully and email notification sent.");
    } catch (error) {
        console.log(error);
        res.send("File uploaded but email could not be sent.");
    }
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});