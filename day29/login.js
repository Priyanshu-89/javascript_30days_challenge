document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const postSection = document.getElementById('postSection');
    const postsSection = document.getElementById('postsSection');
    const logoutButton = document.getElementById('logoutButton');

    // Check if the user is already logged in
    const user = localStorage.getItem('user');
    if (user) {
        // Hide login form and show post sections and logout button if user is logged in
        loginForm.style.display = 'none';
        postSection.style.display = 'block';
        postsSection.style.display = 'block';
        logoutButton.style.display = 'block';
    }

    // Handle form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Basic validation (In a real app, you should handle authentication securely)
        if (username && password) {
            // Store user information in localStorage (for this example)
            localStorage.setItem('user', username);
            
            // Hide login form and show post sections and logout button
            loginForm.style.display = 'none';
            postSection.style.display = 'block';
            postsSection.style.display = 'block';
            logoutButton.style.display = 'block';
        } else {
            alert('Please enter both username and password.');
        }
    });

    // Handle logout
    logoutButton.addEventListener('click', () => {
        // Clear user information from localStorage
        localStorage.removeItem('user');

        // Show login form and hide post sections and logout button
        loginForm.style.display = 'block';
        postSection.style.display = 'none';
        postsSection.style.display = 'none';
        logoutButton.style.display = 'none';
    });
});
