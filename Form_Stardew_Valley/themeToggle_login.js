function toggleTheme() {
    // Get the current theme by checking the href attribute of the stylesheet link
    const themeLink = document.getElementById('themeStylesheet');

    if (themeLink.getAttribute('href') === 'login_light.css') {
        // Switch to dark theme
        themeLink.setAttribute('href', 'login_dark.css');
        document.getElementById('themeToggle').textContent = 'Light Mode';
    } else {
        // Switch back to light theme
        themeLink.setAttribute('href', 'login_light.css');
        document.getElementById('themeToggle').textContent = 'Dark Mode';
    }
}
