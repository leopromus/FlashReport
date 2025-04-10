document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    // Toggle password visibility
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.textContent = type === 'password' ? '👁️' : '👁️‍🗨️';
    });

    // Form validation
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;

        // Validate name
        const name = document.getElementById('name').value.trim();
        const nameError = document.getElementById('nameError');
        if (name === '') {
            nameError.textContent = 'Please enter your name';
            nameError.style.display = 'block';
            isValid = false;
        } else {
            nameError.style.display = 'none';
        }

        // Validate phone number
        const phone = document.getElementById('phone').value.trim();
        const phoneError = document.getElementById('phoneError');
        const phoneRegex = /^\+?[\d\s-]{10,15}$/;
        if (phone === '') {
            phoneError.textContent = 'Please enter your phone number';
            phoneError.style.display = 'block';
            isValid = false;
        } else if (!phoneRegex.test(phone)) {
            phoneError.textContent = 'Please enter a valid phone number';
            phoneError.style.display = 'block';
            isValid = false;
        } else {
            phoneError.style.display = 'none';
        }

        // Validate password
        const password = passwordInput.value.trim();
        const passwordError = document.getElementById('passwordError');
        if (password === '') {
            passwordError.textContent = 'Please enter your password';
            passwordError.style.display = 'block';
            isValid = false;
        } else if (password.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters';
            passwordError.style.display = 'block';
            isValid = false;
        } else {
            passwordError.style.display = 'none';
        }

        // If form is valid, proceed with login
        if (isValid) {
            alert('Login successful! Redirecting to dashboard...');
        }
    });

    // Signup link functionality
    document.querySelector('.signup-link a').addEventListener('click', function(e) {
        e.preventDefault();
        alert('Redirecting to signup page...');
    });
});
