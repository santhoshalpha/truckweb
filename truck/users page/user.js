// Get the user input from the sign-in form and display it on the user page
function displayUserInformation() {
    // Get the user information from the sign-in form (replace with your actual form input fields)
    const username = "john_doe";
    const name = "John Doe";
    const email = "johndoe@example.com";
  
    // Update the HTML elements with the user information
    document.getElementById('username').textContent = username;
    document.getElementById('name').textContent = name;
    document.getElementById('email').textContent = email;
  }
  
  // Call the function to display user information when the user page loads
  document.addEventListener('DOMContentLoaded', displayUserInformation);
  