//Practice Selectors
console.log('Loaded classwork3,js');
let my_div = document.getElementById('playground');
alert('ABOUT TO CHANGE DIV!');
my_div.style.backgroundColor = 'red';
my_div.color = 'blue';

//Separation of Concerns- Tri-Force


//hardcoded style info

my_div.classList.add('blueredtext');


//QuerySelector and QuerySelectorALL

//QuerySelector gives you the first match 
//QUerSelectorall gives you an array 

let qs_element = document.querySelector(".centered_paragraph");
console.log(qs_element);

let qs_element = document.querySelectorAll(`.centered_paragraph`);
console.log(qs_element_list);

//HW- STUDY Event handling//