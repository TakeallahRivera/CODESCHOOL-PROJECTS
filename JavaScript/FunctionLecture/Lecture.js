// check that JS file is correctly linked to HTML file
console.log("Functions HTML is linked")

/*
A JavaScript function is a block of code designed to perform a particular task.
A JavaScript function is executed when it is called.
*/

/*
A function definition consists of the function keyword, followed by:
- The name of the function.
- A list of parameters to the function, enclosed in parentheses and separated by commas.
- The JavaScript statements that define the function, enclosed in curly brackets, {...}.
*/

// BUILT IN FUNCTIONS
console.log("Some Value") // takes in a parameter and perfoms the actioin `print` to the console
alert("Some Value") // takes in a parameter and performs the action `alert in the browser`
let exampleArray = ["Example 1", "Example 2", "Example 3"]
console.log(exampleArray);
exampleArray.splice(1, 1); // takes in two parameteres and preforms the action `remove` to the array
console.log(exampleArray);

// SIMPLE FUNCTION with PARAMS
// create and call a function named simpleFunction that accepts two parametres and prints "My first parameter is [FIRST PARAM] My second parameter is [SECOND PARAM]"
// SIMPLE FUNCTION with PARAMS
// declare the function 
function simpleFunction(parameter1, parameter2){ 
    console.log(`My first parameter is ${parameter1}\nMy second parameter is ${parameter2}`);
}
// call the function and pass in params (if any)
simpleFunction("Kevin", "Autumn");
simpleFunction("Kenn", "Erin");

// SIMPLE FUNCTION without PARAMS
// create and call a function named simpleFunctionWithoutParams that prints "This function has no parameters"
function simpleFunctionWithoutParams(){
    console.log(`This is  the second example`);
}
simpleFunctionWithoutParams();

// SIMPLE FUNCTION with MATH
// create and call a function named addNumbers that takes two params and retruns the sum of those numbers - declare two number variables assign a number value to each - print "The sum of [FIRST NUMBER] and [SECOND NUMBER] is [RESULT OF FUNCTION]"
function addNumbers(num1, num2){
    return (num1 + num2); // returning a number value instead of printing it
}
let userNumber1 = 10
let userNumber2 = 15
console.log(`The sum of ${userNumber1} and ${userNumber2} is ${addNumbers(userNumber1,userNumber2)}`) // calling the function in a console log to print the value
let sum = addNumbers(userNumber1,userNumber2);
console.log(sum);

// FUNCTION with MATH and USER INPUT
// create and call a function named addNumbers that takes two params and retruns the sum of those numbers - ask the user to enter a number - ask the user to enter another number - print "The sum of [FIRST USER NUMBER] and [SECOND USER NUMBER] is [RESULT OF FUNCTION]"
function addUserNumbers(num1, num2){
    return (num1 + num2); // returning a number value instead of printing it
}
let userInputNumber1 = parseInt(prompt("Enter a number"));
let userInputNumber2 = parseInt(prompt("Enter another number"));
let sum = addUserNumbers(userInputNumber1,userInputNumber2) // saving the returned value to a variable
console.log(`The sum of ${userInputNumber1} and ${userInputNumber2} is ${sum}`); // printing saved variable to the console
function subtractUserNumbers(num1, num2){
    return (num1 - num2);
}
console.log(subtractUserNumbers(25, 5));

// CALLING A FUNCTION IN A FUNCTION
// create and call a function named main - create a function named example1 that prints "Example one function will be called from the main function" - create a function named example2 that prints "Example two function will also be called from the main function" - call both functions from the mian function
function main(){
    example1("Kevin"); // call any functions you want to run when main is called
    example2("25"); // you can comment out function that you don't want to run
}
main();
function example1(yourName){
    console.log(`Your name is ${yourName}`);
}
function example2(yourAge){
    console.log(`Your age is ${yourAge}`)
}

// CALLING A FUNCTION IN AN IF STATEMENT
// create a function named alertTeacherName that takes one parameter and alerts "[PARAM] is a teacher" - create a function called alertStudentName that takes one param and alerts "[PARAM] is a student" - ask the user to enter a name - if the name is Autumn, Kenn, or Kevin run alertTeacherName - if the name is anything else run alertStudentName
function alertTeacherName(teacherName){
    alert(`${teacherName} is a teacher`);
}
function alertStudentName(studentName){
    alert(`${studentName} is a student`);
}
function alertDirector(directorName){
    alert(`${directorName} is a director`)
}
let userName1 = prompt("Enter your name!");
if(userName1 == "Autumn" || userName1 == "Kenn" || userName1== "Kevin"){
    alertTeacherName(userName1);
} else if(userName1 == "Erin" || userName1 == "Meka"){
    alertDirector(userName1);
} else{
    alertStudentName(userName1);
}

// CALLING A FUNCTION IN A LOOP
// create a function called alertUserName that takes one param and alerts "You entered [PARAM]" - ask the user to enter a name five times - run alertUserName after the user enters a name
let userNameInputLoop;
function alertUserName(userName){
    alert(`You entered ${userName}`)
}
for(let i= 0; i < 5; i++){
    userNameInputLoop = prompt(`Enter a name!\nYou have ${5 - i} entries remaining`)
    alertUserName(userNameInputLoop);
}

// CALLING A FUNCTION IN A LOOP with ARRAYS
// create a function named printArrayName that takes two params and prints "[NAME PARAM] is at index [INDEX PARAM]" - create an array with four names - loops throught the array and run printArrayName on each iteration, passing the current array element and current index position
function printArrayName(arrayName, arrayIndex){
    console.log(`${arrayName} is at index ${arrayIndex}`);
}
let array1 = ['Autumn', 'Erin','Meka', 'Kenn', 'Kevin'];
for(let i = 0; i < array1.length; i++){
    printArrayName(array1[i], i);
}