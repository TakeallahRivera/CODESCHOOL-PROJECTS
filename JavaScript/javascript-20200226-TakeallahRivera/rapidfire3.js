console.log('loaded rapidfire3.js');
let my_var = 'some value';
try {
    console.log(`The value is ${my_var}`);

}

catch(ex) {
   console.log(`Caught Exception! ${ex}`);
   throw ex;
}
finally {
    console.log('Finally made it!');
}

console.log('Program Complete!');

//finally- always runs!//


