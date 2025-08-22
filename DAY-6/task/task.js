
let gender = prompt("Enter gender (male/female)").toLowerCase();
let age = parseInt(prompt("Enter age"));

if ((gender === "male" && age > 30) || (gender === "female" && age > 25)) {
    console.log("Eligible");
} else {
    console.log("Not eligible");
}