//Adding to an array//


 /*shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];

console.log(shopping);

shopping.push('yogurt');
console.log(shopping);

shopping.pop();
console.log(shopping);

shopping.pop();
console.log(shopping);

//Pop only removes the last element//

//shift and unshift work the same as push and pop, except it works from the beginning//
//"First in last out"//

shopping.shift();
console.log(shopping);

shopping.unshift('meat'); 
console.log(shopping);


let pos = shopping.indexOf('meat');
console.log(pos);
*/

//Ask the user to enter a shopping item to delete
//Get the index of that item
//Delete that item
//Alert the new array

let shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
alert(shopping);
let what_item = prompt("Which item would you like to delete?");
let userItemIndex = shopping.indexOf(what_item);
alert(userItemIndex);
//Remove the item at the inderx of userIndexItem only because we want to get rid of only 1 element

shopping.splice(what_item, 1);
alert(shopping);






