//Test Data

const companies = [
    {
        name: "Company One",
        category: "Finance",
        start: 1981,
        end: 2004
    },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//Const= values cant be changed.

//foreach


/*doStuff = (current_el) => {
    console.log(`current element: ${current_el}`)
    console.log(`current index: ${current_idx}`)
    console.log(`original array: ${original_array}`)
}

ages.forEach(doStuff);

//Using arrow functions 

ages.forEach(function(current_el)
{
    console.log(current_el);
})

//arrow

ages.forEach((current_el) => {
console.log(current_el);
})
*/

//Map

/*let new_array = ages.map((current_el) => {

    let new_el ='' //variable

    if (current_el >= 18) {
        new_el = `You are old enough to vote at ${current_el}`;
    }
    else {
        new_el = `You are NOT old enough to vote at ${current_el}`;
    }
    return new_el;
})

*/

//Use filter to list ages 18 or over

 const brand_new_array = ages.filter((el) => {
     return (el >= 18 ? true :false)
 }
 )
 
brand_new_array.forEach((new_el) => {
    console.log(new_el);
})
