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




// Q11
// 	 * This program reads a number n from the user and prints the 
// 	 factorial of numbers from 1 to n in a table format.
	 
// 	 Problem Flow:
// 	Read n from user
// 	Start fact = 1
// 	Loop from 1 to n
// 	Multiply fact *= i
// 	Print each number with its factorial
	
// 	Sample Output:
// 	Input:
// 	Enter the N value: 5

// 	Output:
// 	N   |   Factorial
// 	--------------------
//   	1  |            1
//   	2  |            2
//   	3  |            6
//   	4  |           24
//   	5  |          120

// 	let n = parseInt(prompt("Enter the N value:"));


// console.log("\nN   |   Factorial");
// console.log("--------------------");

// let fact = 1;

// for (let i = 1; i <= n; i++) {
//     fact *= i;

//     let nStr = i.toString().padEnd(3, ' ');
//     let factStr = fact.toString().padStart(11, ' ');
//     console.log(`${nStr}|${factStr}`);
// }

//  Q12
// 	 * This program reads 5 numbers (each between 1 and 30) from the user.
// 	 For each number, it prints a line with that many asterisks *, 
// 	 forming a simple bar chart or histogram.
	 
// 	 Problem Flow:
// 	Read 5 numbers from the user
// 	Loop through each number
// 	For each number:
// 	Print the number
// 	Print that many * using inner loop
	
// 	Sample Output:
// 	Input:
// 	Enter 5 Numbers in a same line: 
// 	3 7 2 6 1
// 	Output:
// 	3 ***
//  	7 *******
//  	2 **
//  	6 ******
//  	1 *
// 	 */


// 	let input = prompt("Enter 5 numbers between 1 and 30 (separated by spaces):");

// // Split input into an array
// let numbers = input.split(" ");

// // Loop through each number
// for (let i = 0; i < numbers.length; i++) {
//     let num = parseInt(numbers[i]);
    
//     // Print number and stars
//     let stars = "";
//     for (let j = 0; j < num; j++) {
//         stars += "*";
//     }

//     console.log(num + " " + stars);
// }

// Q13
// 	 * This program first reads how many numbers the user wants to enter 
// 	 (N). Then it reads those N numbers and finds the smallest among 
// 	 them.
	 
// 	 Problem Flow:
// 	Get total number of inputs N
// 	Read first number as smallest
// 	Loop remaining N-1 times
// 	Compare each number with smallest
// 	Update smallest if a smaller number is found
// 	Print final smallest number
	
// 	Sample Input / Output:
// 	Input:
// 	Enter how many numbers you want to input: 5
// 	Enter number 1: 22
// 	Enter number 2: 18
// 	Enter number 3: 31
// 	Enter number 4: 6
// 	Enter number 5: 27
// 	Output:
// 	The smallest number is: 6

// 	 */
	
// let n = parseInt(prompt("Enter how many numbers you want to input:"));


// let smallest = parseInt(prompt("Enter number 1:"));
// for (let i = 2; i <= n; i++) {
//     let num = parseInt(prompt("Enter number " + i + ":"));

//     if (num < smallest) {
//         smallest = num;
//     }
// }

// console.log("The smallest number is: " + smallest);


// Q14
// 	 *  This program will read a line of text from the user, analyze 
// 	 each character, and count how many are letters, digits, whitespace, 
// 	 or other types of characters (like punctuation).
	 
// 	 Problem Flow:
// 	Prompt the user to input a line of text.
// 	Initialize counters for letters, digits, spaces, and other characters.
// 	Loop through each character and classify it into one of the categories.
// 	Display the count for each category: letters, digits, spaces, and others.

// 	Sample Input / Output:
// 	Input:
// 	Enter the text below:
// 	Hello World! 123

// 	Output:
// 	Letters : 10
// 	Digits : 3
// 	Space Chars : 2
// 	Others : 2


// let text = prompt("Enter the text below:");


// let letters = 0;
// let digits = 0;
// let spaces = 0;
// let others = 0;


// for (let i = 0; i < text.length; i++) {
//     let ch = text[i];

//     if ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z')) {
//         letters++;
//     } else if (ch >= '0' && ch <= '9') {
//         digits++;
//     } else if (ch === ' ') {
//         spaces++;
//     } else {
//         others++;
//     }
// }
// console.log("Letters: " + letters);
// console.log("Digits: " + digits);
// console.log("Space Chars: " + spaces);
// console.log("Others: " + others);


// Q15
// 	 *  This program uses a switch statement to examine the value of 
// 	 an integer called flag. Based on its value, it prints one of the
// 	 following messages:
// 		HOT if the flag has the value 1.
// 		LUKE WARM if the flag has the value 2.
// 		COLD if the flag has the value 3.
// 		OUT OF RANGE if the flag has any other value.
		
// 	 Problem Flow:
// 	Prompt the user to input an integer value for the flag.
// 	Use a switch statement to check the value of the flag and assign the correct heat status.
// 	Print the flag value and its corresponding heat status.
	
// 	Sample Input / Output:
// 	Input:
// 	Enter Heat code (1-3): 2

// 	Output:
// 	Flag 2 is LUKE WARM


// 	 */

// let flag = parseInt(prompt("Enter Heat code (1-3):"));

// let status;

// switch (flag) {
//     case 1:
//         status = "HOT";
//         break;
//     case 2:
//         status = "LUKE WARM";
//         break;
//     case 3:
//         status = "COLD";
//         break;
//     default:
//         status = "OUT OF RANGE";
//         break;
// }

// console.log("Flag " + flag + " is " + status);


// Q16 
// 	 *  This program uses a switch statement to examine the value of a 
// 	 char-type variable called colour and prints one of the following
// 	 messages, depending on the character assigned:
// 		RED if either r or R is assigned to colour.
// 		GREEN if either g or G is assigned to colour.
// 		BLUE if either b or B is assigned to colour.
// 		BLACK if any other character is assigned to colour.
		
// 		Problem Flow:
// 		Prompt the user to enter a single character for the color code.
// 		Use a switch statement to check the character and assign the corresponding color.
// 		Print the entered color code and the corresponding color name.

// 		Sample Input / Output:
// 		Input:
// 		Enter Color code character: g
// 		Output:
// 		Color Code g is GREEN


// let colour = prompt("Enter Color code character:");


// colour = colour.charAt(0);


// let colorName;

// switch (colour.toLowerCase()) {
//     case 'r':
//         colorName = "RED";
//         break;
//     case 'g':
//         colorName = "GREEN";
//         break;
//     case 'b':
//         colorName = "BLUE";
//         break;
//     default:
//         colorName = "BLACK";
//         break;
// }

// // Show the result
// console.log("Color Code " + colour + " is " + colorName);

// Q17


// 	 *  This program checks the temperature value (temp) and determines 
// 	 the physical state of water:
// 		If temp < 0 → "ICE"
// 		If temp is between 0 and 100 (inclusive) → "WATER"
// 		If temp > 100 → "STEAM"
		
// 		Flow Summary:
// 		Get user input for temperature
// 		Use if-else to decide the state of water
// 		Display the result to the user
		
// 		Sample I/O:
// 		Input:
// 		Enter the water temperature: 120
// 		Output:
// 		Water status is STEAM for the Temperature 120.00


// let temp = parseFloat(prompt("Enter the water temperature:"));

// let state;

// if (temp < 0) {
//     state = "ICE";
// } else if (temp <= 100) {
//     state = "WATER";
// } else {
//     state = "STEAM";
// }

// console.log("Water status is " + state + " for the Temperature " + temp.toFixed(2));


// Q18
// 	 *  This program takes a string (text) and creates its reverse 
// 	 version in another string (reverseText). Each character from the 
// 	 original string is added in reverse order to the new string.
	 
// 	 Flow Summary
// 	Read the input string
// 	Loop from last character to first
// 	Use comma operator in loop (i--, j++)
// 	Add each character to reverseText
// 	Print the reversed output
	
// 	Sample I/O
// 	Input:
// 	Enter the string below:
// 	hello
// 	Output:
// 	Reversed Text: olleh


// let text = prompt("Enter the string below:");

// let reverseText = "";

// for (let i = text.length - 1, j = 0; i >= 0; i--, j++) {
//     reverseText += text[i];
// }

// console.log("Reversed Text: " + reverseText);

// Ask the user how many numbers they want to input



// Q19


// 	 * This program reads a set of numbers from the user and calculates 
// 	 the cumulative product, which means multiplying all the numbers 
// 	 together one by one.
	 
// 	 Code Flow 
// 	Get number count n
// 	Use for loop to input numbers
// 	Multiply each number with product
// 	Print final result
	
// 	Test Data
// 	Input:
// 	6.2, 12.3, 5.0, 18.8, 7.1, 12.8
// 	Output:
// 	Cumulative Total = 514537.165312


// let n = parseInt(prompt("Enter the number of values:"));

// // Variable to store the cumulative product
// let product = 1;

// // Loop to get each number and multiply with the product
// for (let i = 1; i <= n; i++) {
//     let num = parseFloat(prompt("Enter number " + i + ":"));
//     product *= num;  // Multiply the current number with the cumulative product
// }

// // Display the result
// console.log("Cumulative Total = " + product);


// 	Q20
// 	 * This program calculates and displays the first n numbers in the 
// 	 Fibonacci sequence. Each number is the sum of the previous 
// 	 two numbers.
	 
// 	 Code Flow 
// 	Input: number of terms n
// 	Initialize first two terms: f1 = 1, f2 = 1
// 	Loop from i = 3 to n:
// 		Find next term using f = f1 + f2
// 		Shift values for next round
// 	Display all terms
	
// 	Sample Input/Output
//  	Input:
// 	How many Fibonacci terms? 10
// 	Output:
// 	1 1 2 3 5 8 13 21 34 55

// 	 */

// let n = parseInt(prompt("How many Fibonacci terms?"));

// let f1 = 1, f2 = 1;


// let fibonacciSequence = [f1, f2];

// for (let i = 3; i <= n; i++) {
//     let f = f1 + f2; // Next term is the sum of the previous two
//     fibonacciSequence.push(f); // Add the term to the sequence
//     f1 = f2; // Shift the values for next round
//     f2 = f;  // New second term
// }

// // Display all the terms
// console.log(fibonacciSequence.join(" "));

// Q21
// 	 * This program reads a number n and prints the first n prime numbers.
// 	 A prime number is a number that is divisible only by 1 and itself.
	 
// 	 Problem Flow
// 	Get input n (how many primes).
// 	Start checking from 2.
// 	Use isPrime() to validate.
// 	If prime, print it and increment count.
// 	Stop when count reaches n.
	 
// 	Input / Output Example
// 	Input:
// 	How many Prime numbers? 10
// 	Output:
// 	2 3 5 7 11 13 17 19 23 29



// function isPrime(num) {
//     if (num < 2) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }

// let n = parseInt(prompt("How many Prime numbers?"));
// let count = 0;
// let num = 2;  

// while (count < n) {
//     if (isPrime(num)) {
//         primes.push(num);
//         count++;
//     }
//     num++;
// }

// console.log(primes.join(" "));


// Q22
//    This program prints a right-aligned triangle star pattern using 
// 	 nested for loops. The number of lines (n) is provided by the user.
	 
// 	Problem Flow
// 	Get number of lines from user.
// 	Loop from 1 to n (line-by-line).
// 	For each line:
// 	Print n - i spaces.
// 	Print i stars.
// 	Go to the next line.

// 	Input / Output Example
// 	Input:
// 	How many Lines? 5
// 	Output:
//     *
//    **
//    ***
//   ****
// *****

// let n = parseInt(prompt("How many Lines?"));

// for (let i = 1; i <= n; i++) {
    
//     let spaces = " ".repeat(n - i);
//     let stars = "*".repeat(i);
//     console.log(spaces + stars + spaces);
// }

// Q23
//    This program prints a numeric pyramid pattern where numbers 
// 	 increase from the middle outwards and then decrease symmetrically. 
// 	 The pattern is centered and uses nested loops
	 
// 	 Problem Flow Summary
// 	Ask user for number of lines (n).
// 	For each line i from 1 to n:
// 	Print spaces to align the pyramid.
// 	Print increasing numbers (i to i + i - 1).
// 	Print decreasing numbers back to i.
// 	Move to the next line after printing each row.
	
// Input / Output Example
// Input:
// Enter Number of Lines: 5

// Output:
//     1
//    232
//   34543
//  4567654
// 567898765


// let n = parseInt(prompt("Enter Number of Lines:"));

// for (let i = 1; i <= n; i++) {
//     let line = "";
//     line += " ".repeat(n - i);
//     for (let j = 0; j < i; j++) {
//         line += (i + j);
//     }
//     for (let j = i - 2; j >= 0; j--) {
//         line += (i + j);
//     }
//     console.log(line);
// }


//  Q24
// 	 * This program reads n numbers into an array, calculates the average 
// 	 of those numbers using a loop, and displays the result. 
// 	 It demonstrates how to use arrays and object-oriented concepts 
// 	 like classes and methods in Java.
	 
// 	Problem Flow
// 	Read input size n
// 	Read n elements into array
// 	Loop through array to compute sum
// 	Divide sum by n to get average
// 	Display result
	
// 	 Input / Output Example
// Input:
// Enter how many numbers: 5
// Enter the numbers:
// 10
// 20
// 30
// 40
// 50

// Output:
// Average of the numbers: 30.00



// let n = parseInt(prompt("Enter how many numbers:"));

// let numbers = [];
// let sum = 0;
// for (let i = 0; i < n; i++) {
//     let num = parseFloat(prompt("Enter number " + (i + 1) + ":"));
//     numbers.push(num);
//     sum += num;
// }
// let average = sum / n;
// console.log("Average of the numbers: " + average.toFixed(2));


// Q25
// 	 * This program reads n integers into an array and finds the second
// 	 largest number among them. It uses a class with methods for input, 
// 	 processing (finding second largest), and output. It showcases 
// 	 array handling and object-oriented principles in Java.
	 
// 	Problem Flow 
// 	Read input size n
// 	Store values in array
// 	Use loop to compare and find:
// 		largest
// 		secondLargest
// 	Display result
	
// 	Input / Output Example
// Input:
// Enter how many numbers: 6
// Enter the numbers:
// 10
// 45
// 22
// 45
// 8
// 19

// Output:
// Second largest number is: 22

// let n = parseInt(prompt("Enter how many numbers:"));


// let numbers = [];
// for (let i = 0; i < n; i++) {
//     let num = parseInt(prompt("Enter number " + (i + 1) + ":"));
//     numbers.push(num);
// }
// let uniqueNumbers = [...new Set(numbers)];

// uniqueNumbers.sort((a, b) => b - a);

// if (uniqueNumbers.length >= 2) {
//     console.log("Second largest number is: " + uniqueNumbers[1]);
// } else {
//     console.log("Second largest number not found (not enough unique values).");
// }
