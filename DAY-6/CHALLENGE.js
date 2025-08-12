let gender = prompt("enter your gender (male/female):") .toLowerCase();
let age = parseInt(prompt("enter your age"));

if (age != null && age >=18) {
    console.log("you are eligible for vote");
} else {
    console.log("your are not eligible for vote:");
    
}