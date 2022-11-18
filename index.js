//alert('Buy databundle at a discounte rate of 5% and 15% for registered members');
console.log(document);

// changing the text, font-size and the text-colour using the javascrippt DOM
document.getElementById("ptxt").innerHTML = "changed the text using DOM";
document.getElementById('ptxt').style.fontSize = '2rem';
document.getElementById('ptxt').style.color = 'red';

// using function to change the text, font and color
function test1(){
    document.getElementById('fun').innerHTML = 'Playing with function';
    document.querySelector('#fun').style.fontSize = '2.5rem';
    document.querySelector('#fun').style.color = 'rgb(234, 213, 145)';

}

document.getElementById('fun').onclick = test1;

// playing arounf with array
const fruits = ['mango', 'apple', 'banana', 'pawpaw', 'orange'];
console.log(fruits);
fruits.length;
document.getElementById('array-item').innerHTML = fruits[fruits.length-1];
// document.getElementById('loop-array').innerHTML = for(let size=0; size< fruits.length; size++){
//     fruits[size];
// }

// pritning the array as a list item using the for loop
let arrayList = '<ul>'; // adding ul

// executing the for loop
for(let size = 0; size<fruits.length; size++){
    arrayList+='<li>' + fruits[size] + '</li>';
}
// ending the ul
arrayList += '</ul>';
// assigning the array to the html
document.getElementById('arrayMe').innerHTML = arrayList;

// adding an array called team
const team = ['barcelona', 'real madrid', 'bayer munich', 'chelsea'];
// adding a new item to the array list
team.push('Arsenal');
// using the length property 
team[team.length]= 'manchester city';
// console the array length
console.log(team.length);
// accessing the last element of the array
console.log(team[team.length-1]);
// assigning the array to html tag using DOM
document.getElementById('team').innerHTML = team.join('<ul> <li> </li> </ul>');
// display the type of array
console.log(typeof team);
// check if the data type is an array
console.log(Array.isArray(team));
console.log(team instanceof Array);

// creating an array object
const userData = {
    firstName: 'Yusuf',
    lastName: 'Jamiu',
    username: 'Adewale',
    jobTitle: 'web developer',


    // creating a method----- a function in an object
    company(){
        alert('I am learning javaScript for web development');
    }
}
// printing the array data
console.log(userData);
// consoling the user firstname
console.log(userData.firstName);
// priting the userData length
console.log(userData.length);
// call the company method
// userData.company();

