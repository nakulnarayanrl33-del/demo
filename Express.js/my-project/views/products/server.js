const express = require("express");
const methodOverride = require("method-override");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

let phones = [
    {
        id: 1,
        name: "Samsung Galaxy S24",
        description: "8GB RAM, 256GB Storage",
        price: 75000
    },
    {
        id: 2,
        name: "iPhone 15",
        description: "128GB Storage",
        price: 80000
    }
];

// View all phones
app.get("/", (req, res) => {
    res.render("index", { phones });
});

// Add phone form
app.get("/add", (req, res) => {
    res.render("add");
});

// Add phone
app.post("/add", (req, res) => {
    const { name, description, price } = req.body;

    phones.push({
        id: Date.now(),
        name,
        description,
        price
    });

    res.redirect("/");
});

// Edit form
app.get("/edit/:id", (req, res) => {
    const phone = phones.find(p => p.id == req.params.id);
    res.render("edit", { phone });
});

// Update phone
app.put("/edit/:id", (req, res) => {
    const phone = phones.find(p => p.id == req.params.id);

    phone.name = req.body.name;
    phone.description = req.body.description;
    phone.price = req.body.price;

    res.redirect("/");
});

// Delete phone
app.delete("/delete/:id", (req, res) => {
    phones = phones.filter(p => p.id != req.params.id);
    res.redirect("/");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});