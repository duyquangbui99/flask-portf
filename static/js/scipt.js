<<<<<<< HEAD
// Get references to the menu button, sidebar, and circle container
const menuButton = document.getElementById('open-menu');
const sidebar = document.getElementById('sidebar');
const circleContainer = document.querySelector('.circle-container');
=======
// Get references to the menu button and sidebar
const menuButton = document.getElementById('open-menu');
const sidebar = document.getElementById('sidebar');
>>>>>>> 9917acae4329d42150f58e5d79d1418f48ec9274

// Add event listener to menu button
menuButton.addEventListener('click', () => {
    // Toggle the "sidebar-open" class to show or hide the sidebar
    sidebar.classList.toggle('sidebar-open');
<<<<<<< HEAD

    // Check if the sidebar has the "sidebar-open" class
    if (sidebar.classList.contains('sidebar-open')) {
        // Hide the circle container when the sidebar is open
        circleContainer.classList.add('hide-circle-container');
    } else {
        // Show the circle container when the sidebar is closed
        circleContainer.classList.remove('hide-circle-container');
    }
=======
>>>>>>> 9917acae4329d42150f58e5d79d1418f48ec9274
});
