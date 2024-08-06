// Three.js
// how to change the default behaviour with the usage of ARIA tag
// Web scraping is a technique to extract the content of any website and store it
// Bubbling effect and stop propagation
// Session cookies and databases


// Error handling
// Promises



// First way

// let num1 = prompt("Enter the first number: ")
// let num2 = prompt("Enter the second number: ")
// let num3 = prompt("Enter the third number: ")
// let num4 = prompt("Enter the fourth number: ")
// let num5 = prompt("Enter the fourth number: ")

// const arr = new Array(num1,num2,num3,num4,num5)
// console.log(arr);

// Second way
// let arr = new Array();
// arr[0] = parseInt(prompt("Enter the first number: "))
// arr[1] = parseInt(prompt("Enter the second number: "))
// arr[2] = parseInt(prompt("Enter the third number: "))
// arr[3] = parseInt(prompt("Enter the fourth number: "))
// arr[4] = parseInt(prompt("Enter the fourth number: "))
// console.log(arr.sort());


// Array Methods/functions

// We refer to the array by writing the element's index in square brackets along with the array name;

// let cars = ["BMW","Mercedes","Volvo","Toyota","Hundayi"]
// console.log(cars.length);
// console.log(cars.sort());
// console.log(cars.reverse());
// console.log(cars.pop());
// var randomData = new Array();
// randomData[0] = prompt("enter anything")
// randomData[2] = prompt("enter anything")
// randomData[3] = prompt("enter anything")
// randomData.sort()
// randomData.pop();
// console.log(randomData);
// cars.push("Honda");
// console.log(cars);
// cars.shift()
// cars.unshift("Gjgdsf")
// delete cars[2]
//     cars.sort()
//     cars.pop()

// console.log(cars);

// if(!(1==2)){
//     console.log("This is a true statement");
// }else{
//     console.log("The statement was false");
// }



// Concept of Local Storage

// let a = localStorage.getItem("pageCount");

// if (!a) {
//     localStorage.setItem("pageCount", 1);
// }

// a = localStorage.getItem("pageCount");
// a = parseInt(a) + 1;
// localStorage.setItem("pageCount", a);
// console.log(localStorage.getItem("pageCount", a));

// test = parseInt(prompt("Enter your number: "));

// switch (test) {
//     case 1:
//         console.log("The provided input was " + 1);
//         break;

//     default:
//         console.log("the provided input was not accepted");
//         break;
// }

// let dayNo = parseInt(prompt("Enter the number: "))
// function func1(dayNo) {
//     var obj ={
//         1:"Monday",
//         2:"Tuesday",
//         3:"Wednesday",
//         4:"Thursday",
//         5:"Friday",
//         6:"Saturday",
//         7:"Sunday"
//     }
//     console.log(obj[dayNo]);
// }
// func1(dayNo);

// Let, Var, Const
// Array and constants are reference variables

// const arr = [1, 2, 3, 4, 5, 6]
// console.log(arr);

// const arr2 = [7, 8, 9, 10, 11, 12];
// console.log(arr2);

// arr2.splice(1, 3)

// console.log(arr +  arr2); The arrays are now converted into string and then they are concatenated
// console.log(arr.concat(arr2));
// a = arr2.slice(1, 3);


// console.log(arr.join(","));

// DOM Requirements
// To change anything present in the HTML document such as manupilating the data, handling events, adding or removing elements styling or their values
// We have HTML, XML and Core DOM.
// The only required DOM to manupilate the data in the frontend web dev is HTML DOM
// HTML DOM is a standard object model and programming interface for HTML.
// HTML elements are elemnt nodes, attributes are attribute nodes and text in html elements have text nodes
// THe doc node does not have any parent and every other node has a parent
// Also every node may or may not have any parent
// The document object is the root of the HTML document and the parent of all other nodes



// DOM MANUPILATION EXAMPLE
// let a =document.createElement("h1")
// let b=document.createTextNode("This is a heading")
// a.appendChild(b)
// document.body.appendChild(a)

// console.log(document.getElementById("something").parentNode.nodeName)
// console.log(document.getElementById("parentSomething").parentNode)
// in order ot simplify the above code we can declare a variable and then store the values of parent node in that variable
// let paren= document.body.firstChild
// console.log(paren);
// let x = document.getElementById("something");
// y= document.getElementById("parentSomething").childNodes
// firstChild, parentNode, childNode, siblingNode


// NODE TYPE
// IT WILL RETURN A STRING
// 1. Element Node
// 2. Attribute Node
// 3. Text Node
// 8. Comment

// condition in a if else statement will require the usage of node type
// conditions of loops might require the usage of node type
// whenever we need to compare any values, we might require to know the type of the nodes

// NODE NAME
// IT WILL RETURN A STRING
// 1. #Element Node
// 2. #Attribute Node
// 3. #Text Node
// 8. #Comment
// 9. #Document Node

//document.documentElement
// INSERT BEFORE 
// it is like appendChild but in this, the element is created as a sibling and it is inserted before the selected node

// REMOVE CHILD
// it is used to remove a child node from the parent node
// let a = document.getElementById("something")
// let b = document.getElementById("parentSomething")
// b.removeChild(a)

// REPLACE CHILD
// it is used to replace a child node with another child node
// let a = document.getElementById("something")
// let b = document.getElementById("parentSomething")
// let c = document.createElement("h1")
// let d = document.createTextNode("This is a new heading")
// c.appendChild(d)
// b.replaceChild(c,a)

// let firstList = document.getElementById("firstList")
// console.log(firstList);

// let rows = 5;
// let pattern = "";
// for (i = 1; i <=rows; i++){
//     for (j = 1; j<=5; j++){
//         pattern += j;
//         console.log(pattern);
//     }
//     pattern += "\n" ;
// }

// HTML events are things that happen to html elements
// when javascript is used in html pages javsacript can react on these events
// an html event can be something the browser does or something a user does
// Examples of HTML events are
// 1. An HTML web page has finished loading
// 2. An HTML input field was changed:- Form submission
// 3. An HTML button was clicked

// KEYBOARD EVENTS
// 1. onkeydown
// 2. onkeypress
// 3. onkeyup

// "This" keyword
// The code changes the content of its own element using this.innerHTML
// onclick = (this.innerHTML = Date())

// let button = document.getElementById("button")
// button.addEventListener('click', function () {
//     clicked()
// });

// counter = 0;
// let timer;
// function clicked() {
//     if (timer !==0) {


//         counter += 1;
//         if (counter == 9) {
//             alert("You have clicked the button 9 times");
//             document.getElementById("button").innerHTML = Date();
//         }
//     }
// }
// function start() {
//     timer = setInterval(clicked, 2000);
// }


// let selection = document.getElementById("selection");
// selection.addEventListener('change',function () {
//     alert(selection.value)
// });

// let body = window
// window.addEventListener('keydown',function(event){
//     if (event.shiftKey && event.key == "Q") {
//         alert("You have pressed the save button")
//     }
// })


// let tag = document.querySelector("h1.test").innerHTML
// let tag = document.querySelector("h1#test").innerHTML
// console.log(tag);


// GIT HAS THREE MAIN AREAS WHERE IT PERFORMS ITS FUNCTION
// WORKING DIRECTORY
// STAGING AREA
// LOCAL REPOSITORY

//working directory is the directory where we are working
// staging area is the area where we add the files that we want to commit
// local repository is the area where the files are committed

// First we initialise using git init
// After that we will add it to our staging area using git add .
// after adding it to your staging area we will commit it to our branch for example main branch using git commit -m "Initial commit"
//After commiting it to our main branch we can push it to our


// String manipulation
// In built functions to manipulate string
// Make a program to implement string functions

// Any type of text which can store our information is called a string and it is a type of variable
// let txt = "ABCD";

// console.log(txt.charCodeAt());

// charCodeAt() method returns the unicode of the character at the specified index in a string
// The method returns a number which represents the unicode of the character at the specified index

//  length, replace, touppercase, tolowercase , concat, lastindex of, index of, charat, char code at, search, slice, substring, substr
// settimeout setinterval, clear interval
// bubbling in javascript 
// HTML injection, JS injection.

// What are arrow func
// Arrow functions are a new way to write anonymous function expressions in JavaScript
// Arrow functions have a shorter syntax compared to function expressions
// Arrow functions do not have their own this. They are not well suited for defining object methods
// Arrow functions are not hoisted
// Arrow functions should not be used as object methods

// what is hoisting
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope before code execution
// Hoisting is JavaScript's default behavior of moving declarations to the top



// QUESTION NUMBER 2

// let existingUser = localStorage.getItem('userName');

// if (!existingUser) {

//     label = document.createElement('label')
//     label.innerHTML = "Please enter your name: "
//     document.body.appendChild(label);
//     br = document.createElement('br')
//     document.body.appendChild(br);

//     input = document.createElement('input')
//     input.setAttribute('type', 'text')
//     input.setAttribute('placeholder', 'Please enter your name');
//     input.setAttribute('id', 'mainInput')
//     document.body.appendChild(input)

//     button = document.createElement('button');
//     button.innerHTML = 'submit';
//     button.setAttribute('id', 'submitButton')
//     document.body.appendChild(button)

//     button.addEventListener('click', function () {
//         let name = document.getElementById('mainInput').value;
//         console.log(name);
//         localStorage.setItem('userName', name)
//         document.body.innerHTML = '';
//         let welcome = document.createElement('h1');
//         welcome.innerHTML = "Welcome " + name;
//         document.body.appendChild(welcome)
//         resetBtn = document.createElement('button');
//         resetBtn.innerHTML = "Reset";
//         document.body.appendChild(resetBtn);
//         resetBtn.addEventListener('click', function () {
//             localStorage.removeItem('userName');
//             location.reload();
//         })
//     });



// }else{
//     let name = "Your name is "+ existingUser;

//     alert(name);
//     let welcome = document.createElement('h1');
//     welcome.innerHTML = "Welcome " + existingUser;
//     document.body.appendChild(welcome)
//     resetBtn = document.createElement('button');
//     resetBtn.innerHTML = "Reset";
//     document.body.appendChild(resetBtn);
//     resetBtn.addEventListener('click',function(){
//         localStorage.removeItem('userName');
//         location.reload();
//     })
// }

// let groups = {
//     firstGroup:{
//         groupName:"First Group",
//         groupMembers:{
//             John:{
//                 name:"John",
//                 questionsAnswered:2
//             },
//             PearlWalton: {
//                 name: "Pearl Walton",
//                 questionsAnswered: 1
//             },
//             LesterOrtiz: {
//                 name: "LesterOrtiz",
//                 questionsAnswered: 3
//             },
//             MikeParker: {
//                 name: "MikeParker",
//                 questionsAnswered: 4
//             },
//             OliviaSutton: {
//                 name: "OliviaSutton",
//                 questionsAnswered: 1
//             }

//         }
//     },
//     secondGroup:{
//         groupName: "Second Group",
//         groupMembers: {
//             LillieSullivan: {
//                 name: "Lillie Sullivan",
//                 questionsAnswered: 2
//             },
//             EvaWelch: {
//                 name: "Eva Welch",
//                 questionsAnswered: 1
//             },
//             RuthHart: {
//                 name: "Ruth Hart",
//                 questionsAnswered: 3
//             },
//             TylerLittle: {
//                 name: "Tyler Little",
//                 questionsAnswered: 4
//             },
//             LouBurns: {
//                 name: "Lou Burns",
//                 questionsAnswered: 1
//             }

//         }


//     }
// }

// let group1Members = groups.firstGroup.groupMembers

// for (groupMember in group1Members){
//     console.log(group1Members[groupMember]);

// }


// let possibleHexColourValues = {
//     0: "0",
//     1: "1",
//     2: "2",
//     3: "3",
//     4: "4",
//     5: "5",
//     6: "6",
//     7: "7",
//     8: "8",
//     9: "9",
//     10: "A",
//     11: "B",
//     12: "C",
//     13: "D",
//     14: "E",
//     15: "F"
// }

// function changeColour() {
//     try{
//     document.getElementById('btn').setAttribute('disabled','')
//     setInterval(() => {

//         let hexValue = "#";
//         for (let i = 0; i < 6; i++) {
//             hexValue += possibleHexColourValues[Math.floor(Math.random() * 16)]
//         }
//         console.log(hexValue);
//         document.body.style.backgroundColor = hexValue

//     }, 2000);
//     }catch(err){
//         console.log("An error occured while executing the code: " + err)
//     }
//     finally{
//         console.log("The function has been called")
//     }
// }


// Callback functions are those functions which expect another function as arguements
// array.forEach(element => {

// });

// when executing javascript code, different types of errors can occur.
// Errors can be coding errors made by the programmer errors due to wrong input and other unforeseeable things

// Try catch block, throw and finally
// function tryCatch(){
//     try{
//         throw "gfkjdhgidfgkfdlkj"
//     }  
//     catch(err){
//         console.log("There was an error " + err);
//     }
//     finally{
//         console.log("This is finally block and will always run");
//     }
// }
// tryCatch()

// The finally statement lets you execute a piece if cide regardless
// It is written after try and catch

// resolve, reject, promise
// pending state, fulfilled state


// callback hell

const arr = [
    {
        name: "John",
        age: 25
    },
    {
        name: "Mike",
        age: 30
    },
    {
        name: "Olivia",
        age: 35
    }
];
