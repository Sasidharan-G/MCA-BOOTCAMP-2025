/*Q1

let r = parseFloat( prompt("Enter the area of Circle:"));
if(r > 0)
{
    let area = (22.0 / 7) * r * r;
    console.log("Area of Circle with Radius "+ r.toFixed(4) + "is"+ area.toFixed(4))
}
else {
    console.log("invalid");
}
    */
/*check the output on websote console*/
/*

    Q2

        
        let P = parseFloat(prompt("Enter Principal Amount:"));
		let R = parseFloat(prompt("Enter Rate of Interest:"));
		let N = parseFloat(prompt("Enter No. of Years:"));

		if (!isNaN(P) && !isNaN(R) && !isNaN(N)) {
			const SI = (P * R * N) / 100;
			console.log("Your Simple Interst Value is:" + SI);
		} else {
			console.log("Please Enter the Correct Case Value");
		}
            */

    /*

	Q3 

       

        let P = parseFloat(prompt("Enter your Principal Value:"))
        let R = parseFloat(prompt("Enter your Rate of Interest:"))
        let N = parseFloat(prompt("Enter your No. of Years"))

        if ( !isNaN(P) || !isNaN(R) || !isNaN(N)){
            let i = R / 100 ;
            const F = P * Math.pow((1+i),2);
            console.log("Your Compound Intrest is:" + F.toFixed(2));
        }
        else{
            console.log("Pleas Enter the Valid Number");
            
        }
             */
 /*

     Q4

     
	 * This program converts temperature from Fahrenheit to Celsius using the formula:
		C = (5/9) × (F - 32)
		
	Problem Flow:
	Input temperature in Fahrenheit
	Apply formula: C = (5 / 9.0) × (F - 32)
	Display result in Celsius
	
	Input / Output Example:
	Sample Inputs to Test (from question):
	68, 150, 212, 0, -22
	Sample Output (for 68°F):
	68.000000 deg F is 20.000000 deg C
	
	 */
    /*

    let F = parseFloat(prompt("Enter temperature in Fahrenheit:"))

    if (!isNaN(F)){
        const C = (5/9) * (F - 32)
        console.log("Here is Your Exact Value: " + F.toFixed(6) + " deg F is " + C.toFixed(6) + " deg C");
    }
    else{
        console.log("Pleas Enter the Correct Value in Number:");
        
    }
        */
    
    
    /*


    Q5



    *  This program calculates the Volume and Surface Area of a sphere 
	 *  using the following formulas:
			Volume (V) = (4/3) × π × r³
			Area (A) = 4 × π × r²
	
	Problem Flow:
	Get r (radius) from user
	Calculate area using A = 4πr²
	Calculate volume using V = (4/3)πr³
	Display both values
	
	 Input / Output Example:
	Input:
	Enter Radius of Sphere: 7
	Output:
	Volume of Sphere: 1436.571429
	Area of Sphere  : 615.428571
*/
    /*
    let r = parseFloat(prompt("Enter Radius of Sphere:"))

    if(!isNaN(r)){
        let V = (4/3) * (22.00/7) * Math.pow(r,3) 
        let A = 4 * (22.00/7) * Math.pow(r,2)
        console.log("Volume of Sphere:" + V.toFixed(6));
        console.log("Area of Sphere  :" + A.toFixed(6));   
    }
    else{
        console.log("Pleas Enter Valid Value");
    }
    */
   /*


   Q6


	 * This program allows the user to enter 3 test marks of a student, 
	 calculates the total and average, and displays the result.
	 
	Problem Flow:
	Get 3 marks from user
	Add marks → total
	Divide total by 3.0 → average
	Display total and average
	
	Input / Output Example:
	Input:
	Enter Mark 1: 80  
	Enter Mark 2: 75  
	Enter Mark 3: 85  
	Output:
	Total Marks   = 240  
	Average Marks = 80.0
    

    let T = parseFloat(prompt("Enter Mark 1:"))
    let E = parseFloat(prompt("Enter Mark 2:"))
    let M = parseFloat(prompt("Enter Mark 3:"))

    if(!isNaN(T) || !isNaN(E) || !isNaN(M)){
        let total = T + E + M
        let Average = total * 100 / 300
        console.log("Total Marks Scored ="+ total );
        console.log("Average Marks ="+ Average );   
    }
    else{
        console.log("Pleas Enter the Valid Number...!");
        
    }
        */
    /*


    // Q7


	 * This program reads a five-letter word from the user and encodes 
	 it by subtracting 1 from the ASCII value of each character. 
	 It then prints the newly encoded word.
	 
	 Problem Flow:
	Get 5-letter word input
	Loop each character → subtract 1 from ASCII
	Build new string with changed characters
	Print encoded result
	
	Input / Output Example:
	Input:
	Enter a Five letter word: white
	Output:
	Encoded Word: vghsd
	 */
    
    // let word = (prompt("Enter the Word:"))

    // if(word.length === 5){
    //     let encoded = "";

    //     for (let i = 0; i < word.length; i++) {
    //         let encodedChar = String.fromCharCode(word.charCodeAt(i) - 1);
    //         encoded += encodedChar;
    //     }
    //     console.log("Encoded Word = " + encoded);
    // }
    // else{
    //     console.log("Pleas Enter The Valid Five Letter Word....!");
    // }

    // Q8 


    //  * This program calculates the sum of the first n odd integers 
	//  (Example: 1 + 3 + 5 + ... + (2n - 1)).
	 
	//  Problem Flow:
	// Input n from user
	// Loop from 1 to (2n−1) in steps of 2
	// Accumulate the sum
	// Print the result
	
	// Input / Output Example:
	// Input:
	// Enter how many odd numbers to sum: 5
	// Output:
	// Sum of first 5 odd numbers is 25
	// (1 + 3 + 5 + 7 + 9 = 25)


// let n = parseInt(prompt("Enter the n value:"))

// if (isNaN(n) || n <= 0) {
//   console.log("Please enter a valid positive number.");
// } else {
//   let sum = 0;
//   let currentOdd = 1;
//   let expression = "";

//   for (let i = 0; i < n; i++) {
//     sum += currentOdd;
//     expression += currentOdd;
//     if (i < n - 1) {
//       expression += " + ";
//     }
//     currentOdd += 2;
//   }

//   console.log(`Sum of first ${n} odd numbers is ${sum}`);
//   console.log(`(${expression} = ${sum})`);
// }


// Q9


	//  * This program finds the sum of even numbers between 2 and 30 (inclusive).
	 	
	//  Problem Flow:
	// Start loop from 2 to 30
	// Check if number is even (i % 2 == 0)
	// Add to sum
	// Print final sum
	
	//  Input / Output Example:
	// Output:
	// Sum of even numbers from 2 to 30 = 240
	// (Even numbers: 2 + 4 + 6 + ... + 30 = 240)
	//  */

//     let start = parseInt(prompt("Enter the starting value:"));
//     let end = parseInt(prompt("Enter the ending value:"));

// 	let sum = 0;    
// let expression = "";

// for (let i = 2; i <= 30; i++){
//   if (i % 2 === 0) {
//     sum += i;
// 	expression += i + (i < 30 ? " + " : ""); // Avoid trailing plus after last number
//   }
// }

// console.log(`Sum of even numbers from 2 to 30 = ${sum}`);
// console.log(`(Even numbers: ${expression} = ${sum})`);


// Q10


// 	 * This program calculates and prints the product of odd numbers from 1 to 15.
// 		(Odd numbers: 1, 3, 5, 7, ..., 15)
		
// 		Problem Flow:
// 		Start from 1 to 15
// 		Increment by 2 to get odd numbers
// 		Multiply all odd numbers
// 		Print the final product
		
// 		Input / Output Example:
// 		Output:
// 		Product of odd numbers from 1 to 15 = 2027025
// 		(Odd numbers: 1 × 3 × 5 × 7 × 9 × 11 × 13 × 15 = 2027025)


		let product = 1;
		let expression = "";

		for (let i = 1; i <= 15; i += 2){
			product	*= i;
			expression += i + (i < 15 ? " x " : "");
		}

		console.log(`Product of odd numbers from 1 to 15 = ${product}`);
		console.log(`Odd numbers: ${expression} = ${product}`);
				

		