
let scope_var = 100;

function testScope()
{
    scope_var = 2112;

}



console.log(scope_var);
testScope();
console.log(scope_var);

// Arrow functions//
//Event-driven vs procedureal//


//

testScope = () => {
    let scope_var = 2112;
    console.log(`In function ${scope_var}`);
}

//Get rid of function key word,put an equal sign between the name of function 
//and parenthesis, afterparams, place arrows//