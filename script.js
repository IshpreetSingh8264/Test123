// Three.js
// EXPLORE THE FEATURES OF WEB ACCESSIBILITY
// e.preventDefault()
// how to change the default behaviour with the usage of ARIA tag
// Explore the document object
// Classlist
// for: of, in, each
// Create a repository in github and write some lines about github

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