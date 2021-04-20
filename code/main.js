/*The basic function*/

/*We start off with the keyword function, which means we are defining a function. This is followed by the name we want to give to our function, a set of parentheses, and a set of curly braces. Any parameters we want to give to our function go inside the parentheses, and the code that runs when we call the function goes inside the curly braces.*/

function displayMessage() {
    /*Use a DOM API function called document.querySelector() to select the <html> element and store a reference to it in a constant called html, so we can do things to it later on*/

    const html = document.querySelector('html');

    /*Use DOM API function called document.createElement() to create a <div> element and store a reference to it in a constant called panel. This element will be the outer container of our message box.*/

    /*Use DOM API function called Element.setAttribute() to set a class attribute on our panel with a value of msgBox. This is to make it easier to style the element — if you look at the CSS on the page, you'll see that we are using a .msgBox class selector to style the message box and its contents.*/

    /*Call a DOM function called Node.appendChild() on the html constant we stored earlier, which nests one element inside the other as a child of it. We specify the panel <div> as the child we want to append inside the <html> element. We need to do this as the element we created won't just appear on the page on its own — we need to specify where to put it.*/

    const panel = document.createElement('div');
    panel.setAttribute('class', 'msgBox');
    html.appendChild(panel);

    /*Use DOM API function called document.createElement() to create a <p> element and store a reference to it in a constant called msg. This is the paragraph element that will hold the text inside the message box*/

    /*Use Node.textContent property to assign text to the <p> elements through its reference constant msg. This is the text that will be displayed inside the message box*/

    const msg = document.createElement('p');
    msg.textContent = 'This is a message box';

    

}