/*The basic function*/

/*We start off with the keyword function, which means we are defining a function. This is followed by the name we want to give to our function, a set of parentheses, and a set of curly braces. Any parameters we want to give to our function go inside the parentheses, and the code that runs when we call the function goes inside the curly braces.*/

/*Improving the function with parameters*/

/*As it stands, the function is still not very useful — we don't want to just show the same default message every time. Let's improve our function by adding some parameters, allowing us to call it with some different options.*/

/*Update the first line of the functionwith msgText and msgType parameters*/

/*To make use of the first parameter, update msg.textContent to msgText*/

function displayMessage(msgText, msgType) {
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

    /*Call Node.appendChild() on the panel constant to append <p> (through its reference msg) inside <div>*/

    const msg = document.createElement('p');
    msg.textContent = msgText;
    panel.appendChild(msg);

    /*Use document.createElement() to create a <button> element and store a reference to it in a constant called closeBtn. This button will be what needs to be clicked/activated when the user wants to close the message box.*/

     /*Use Node.textContent property to insert an 'x' inside the  <button> element through its reference constant closeBtn.*/

     /*Call Node.appendChild() on the panel constant to append <button> (through its reference closeBtn) inside <div>*/

    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'x'; 
    panel.appendChild(closeBtn);

    /*Use an GlobalEventHandlers.onclick event handler to make it so that when the button is clicked, some code is run to delete the whole panel from the page — to close the message box.*/

    /*The onclick handler is a property available on the button (or in fact, any element on the page) that can be set to a function to specify what code to run when the button is clicked. We are making the onclick handler equal to an anonymous function, which contains the code to run when the button is clicked. The line inside the function uses the Node.removeChild() DOM API function to specify that we want to remove a specific child element of the HTML element — in this case the panel <div>.*/

    closeBtn.onclick = function() {
        panel.parentNode.removeChild(panel);
        /*Can also be written as - panel.remove()*/
    }

}

/*Calling the function*/

/*This line invokes the function, making it run immediately. When you save your code and reload it in the browser, you'll see the little message box appear immediately, only once. We are only calling it once, after all.*/

/*displayMessage();*/

/*In this demo, we'll get the message box to appear when the user clicks the button.*/

/*Select the button and store a reference to it in a constant.*/

const btn = document.querySelector('button');

/*In a similar way to our closeBtn.onclick... line inside the function, here we are calling some code in response to a button being clicked. But in this case, instead of calling an anonymous function containing some code, we are calling our function name directly.*/

btn.onclick = displayMessage;

/*We haven't included the parentheses after the function name. This is because we don't want to call the function immediately — only after the button has been clicked. The parentheses are sometimes called the "function invocation operator". You only use them when you want to run the function immediately*/



