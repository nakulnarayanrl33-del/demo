use("workshopdb");

db.registrations.insertMany([
  { name: 'John', city: 'Trivandrum' },
  { name: 'Deepak', city: 'Kollam' },
  { name: 'Dean', city: 'Trivandrum' },
  { name: 'Rahul', city: 'Calicut' },
  { name: 'Ashwin', city: 'Calicut' },
  { name: 'Rolly', city: 'Alleppy' },
  { name: 'Nikhil', city: 'Kottayam' },
  { name: 'Raymond', city: 'Trivandrum' },
  { name: 'Dean', city: 'Calicut' },
]);

db.registrations.updateOne(
  { name: "John" },
  {
    $set: {
      name: "Johnny",
      city: "Chennai"
    }
  }
);

db.registrations.updateMany(
  { name: "Dean" },
  {
    $set: {
      city: "Kollam"
    }
  }
);

db.registrations.deleteOne(
  { name: "Deepak" }
);

db.registrations.deleteMany(
  { name: { $regex: "^D" } }
);