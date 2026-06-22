use("mashupdb");

db.leads.insertMany([
    { name: "Arjun", city: "Kannur" },
    { name: "Meera", city: "Kochi" },
    { name: "Lakshmi", city: "Calicut" }
]);

db.leads.findOne(
    { city: "Kochi" },
    { _id: 0, name: 1, city: 1 }
);