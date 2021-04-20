/*The basic function*/

/*We start off with the keyword function, which means we are defining a function. This is followed by the name we want to give to our function, a set of parentheses, and a set of curly braces. Any parameters we want to give to our function go inside the parentheses, and the code that runs when we call the function goes inside the curly braces.*/

function displayMessage() {
    /*Use a DOM API function called document.querySelector() to select the <html> element and store a reference to it in a constant called html, so we can do things to it later on*/

    const html = document.querySelector('html');

    /*Use DOM API function called document.createElement() to create a <div> element and store a reference to it in a constant called panel. This element will be the outer container of our message box.*/

    const panel = document.createElement('div');

}