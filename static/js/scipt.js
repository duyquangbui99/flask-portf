// Get references to the menu button and sidebar
const menuButton = document.getElementById('open-menu');
const sidebar = document.getElementById('sidebar');

// Add event listener to menu button
menuButton.addEventListener('click', () => {
    // Toggle the "sidebar-open" class to show or hide the sidebar
    sidebar.classList.toggle('sidebar-open');
});
