// Get references to the menu button, sidebar, and circle container
const menuButton = document.getElementById('open-menu');
const sidebar = document.getElementById('sidebar');
const circleContainer = document.querySelector('.circle-container');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-button');



//const

const project = document.getElementById('hahaproject')
const aboutMe = document.getElementById('aboutMe')
const contact = document.getElementById('btn-contact');

// Add event listener to menu button
menuButton.addEventListener('click', () => {
    // Toggle the "sidebar-open" class to show or hide the sidebar
    sidebar.classList.toggle('sidebar-open');

    // Check if the sidebar has the "sidebar-open" class
    if (sidebar.classList.contains('sidebar-open')) {
        // Hide the circle container when the sidebar is open
        circleContainer.classList.add('hide-circle-container');
        userInput.classList.add('hide-circle-container')
        sendBtn.classList.add('hide-circle-container')
        document.querySelectorAll('.bot-response-container').forEach(div => {
            div.classList.add('hide-circle-container');
        });
    } else {
        // Show the circle container when the sidebar is closed
        circleContainer.classList.remove('hide-circle-container');
        userInput.classList.remove('hide-circle-container')
        sendBtn.classList.remove('hide-circle-container')
        document.querySelectorAll('.bot-response-container').forEach(div => {
            div.classList.remove('hide-circle-container');
        });
    }
});
// close the side-bar
project.addEventListener('click', () => {
    sidebar.classList.remove('sidebar-open');
    circleContainer.classList.remove('hide-circle-container');
    userInput.classList.remove('hide-circle-container');
    sendBtn.classList.remove('hide-circle-container');
    document.querySelectorAll('.bot-response-container').forEach(div => {
        div.classList.remove('hide-circle-container');
    });
});
aboutMe.addEventListener('click', () => {
    sidebar.classList.remove('sidebar-open');
    circleContainer.classList.remove('hide-circle-container');
    userInput.classList.remove('hide-circle-container');
    sendBtn.classList.remove('hide-circle-container');
    document.querySelectorAll('.bot-response-container').forEach(div => {
        div.classList.remove('hide-circle-container');
    });
});
contact.addEventListener('click', () => {
    sidebar.classList.remove('sidebar-open');
    circleContainer.classList.remove('hide-circle-container');
    userInput.classList.remove('hide-circle-container');
    sendBtn.classList.remove('hide-circle-container');
    document.querySelectorAll('.bot-response-container').forEach(div => {
        div.classList.remove('hide-circle-container');
    });
});

// Add event listener for window resize
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {  // Example breakpoint for desktop screen
        sidebar.classList.remove('sidebar-open');
        circleContainer.classList.remove('hide-circle-container');
        userInput.classList.remove('hide-circle-container');
        sendBtn.classList.remove('hide-circle-container');
        document.querySelectorAll('.bot-response-container').forEach(div => {
            div.classList.remove('hide-circle-container');
        });
    }
});