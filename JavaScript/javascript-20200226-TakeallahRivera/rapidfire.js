/*

//Loop until user enters first and last name//
let fName= "";
let lName= "";
while(fName == "" || lName== "")
{
    fName = prompt("What is your first name");
    if (fName == "")
    {
        alert('First name cannot be blank!');
        continue;
    }

    Name = prompt("What is your last name");
    if (lName == "")
    {
        alert('Last name cannot be blank!');
        continue;
console.log(`${fName} ${lName}`)};
    }

    //After loop finishes//
    alert(`Hello ${fName} ${lName}`);

    */

 

    let the_word = '';

    while(the_word != 'X')
    {
        the_word = prompt('Enter something. X to exit');

    }
