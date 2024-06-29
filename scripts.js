document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('year').textContent = new Date().getFullYear();

    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    // Function to set the theme
    function setTheme(theme) {
        if (theme === 'light') {
            document.body.classList.add('light-mode');
            themeIcon.textContent = '🌞'; // Sun icon for light mode
        } else {
            document.body.classList.remove('light-mode');
            themeIcon.textContent = '🌙'; // Moon icon for dark mode
        }
    }

    // Check the user's system preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDarkScheme ? 'dark' : 'light');

    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
        if (document.body.classList.contains('light-mode')) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    });
});