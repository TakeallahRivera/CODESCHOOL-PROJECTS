//console.log("Hello World");

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

//use map to produce a new company array with company objects with only 'name' and 'category'



/*let new_array = companies.map((company) => {
    return (
        {
            name: company.name,
            category: company.category
        }
    )
}

)

new_array.map((el) => {
    console.log(el);
}
)
*/

//extra: Use FILTER to create a new company array with only companies started 1990 or later

//use map to generate a new array of ages 21 or more noting ages >21

//const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

function processElement(current_el) {
    return (current_el >= 21 ? `${current_el} IS greater or equal to 21!` : current_el);
}

//map the array and get a new array 21 or older

let new_array2 = ages.map(processElement);
new_array2.forEach((crap) => {
    console.log(crap);
})


