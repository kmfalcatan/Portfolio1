function toggleMenu(menuIcon) {
    menuIcon.classList.toggle('change');
    var navigationContainer = document.querySelector('.navigationContainer');
    
    // Check if the viewport width is less than 768px (tablet mode)
    if (window.innerWidth < 768) {
        navigationContainer.style.display = (navigationContainer.style.display === 'flex') ? 'none' : 'flex';
    } else {
        // If not in tablet mode, always show the navigationContainer
        navigationContainer.style.display = 'flex';
    }
}
