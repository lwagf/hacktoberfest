// LANGUAGE: Javascript
// ENV: between script tags ;)
// AUTHOR: Ariel Blasi
// GITHUB: https://github.com/LiteSoul


//This prompts for your Name and then does a Hello World and welcomes you!
//Add this script on any html file:
let person = prompt("Please enter your name", "Harry Potter?");

if (person) {
	alert(`"Hello World! and welcome ${person}`)
}