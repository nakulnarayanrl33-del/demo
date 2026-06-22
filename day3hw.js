let userName = "Alex";
let initialBalance = 1000;
let amountAdded = 500;
let amountSpent = 700;

function updateWallet(name, balance, added, spent) {
    if (name.toLowerCase() === "guest") {
        return "Access Denied";
    }

    let finalBalance = balance + added - spent;
    return finalBalance;
}

let finalBalance = updateWallet(
    userName,
    initialBalance,
    amountAdded,
    amountSpent
);

console.log("Final Balance:", finalBalance);

console.log("Balance greater than 0:", finalBalance > 0);

console.log("Data type of final balance:", typeof finalBalance);