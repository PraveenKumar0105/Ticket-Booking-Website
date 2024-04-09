document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registerform');
    const loginForm = document.getElementById('loginform');
  
    if (registrationForm) {
      registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmpassword = document.getElementById('confirmpassword').value;
        
        // Here you can add your validation logic
        if (password !== confirmpassword) {
          alert('Passwords do not match');
          return;
        }
        
        // Store registration data (e.g., in local storage, backend server, etc.)
        // For simplicity, let's assume storing in local storage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        
        // Redirect to login page
        window.location.href = 'login.html';
      });
    }
  
    if (loginForm) {
      loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const loginUsername = document.getElementById('loginUsername').value;
        const loginPassword = document.getElementById('loginPassword').value;
        
        // Retrieve stored registration data
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');
        
        // Check if entered username and password match stored data
        if (loginUsername === storedUsername && loginPassword === storedPassword) {
          // Redirect to home page
          window.location.href = 'index.html'; // Assuming home page is 'index.html'
        } else {
          alert('Invalid username or password');
        }
      });
    }
  });
  