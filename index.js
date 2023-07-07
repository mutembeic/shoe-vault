


// Rest of your code...
const addToCartButtons = document.getElementsByClassName('btn');
const popupMessage = document.getElementById('popup-message');

// Attach event listener to each "Add To Cart" button
Array.from(addToCartButtons).forEach(function(button) {
  button.addEventListener('click', function(event) {
    event.preventDefault();
    popupMessage.style.display = 'block';

    setTimeout(function() {
      popupMessage.style.display = 'none';
    }, 3000);
  });
});

// Get the menu icon element
const menuIcon = document.getElementById('menu-icon');

// Get the menu items element
const menuItems = document.querySelector('.menu-items');

// Function to toggle menu items display
function toggleMenuItems() {
  if (menuItems.style.display === 'none') {
    menuItems.style.display = 'block';
  } else {
    menuItems.style.display = 'none';
  }
}

// Add click event listener to menu icon
menuIcon.addEventListener('click', toggleMenuItems);
//function of purchase and cancel button
function purchaseItem(button) {
  var productDetails = button.parentNode.parentNode;
  var purchaseButton = productDetails.querySelector('.purchase-btn');
  var cancelButton = productDetails.querySelector('.cancel-btn');

  // Update button styles
  purchaseButton.classList.add('purchased');
  cancelButton.disabled = false; // Set the 'disabled' attribute to false

  // Show success message
  alert('Purchase was successful we will contact you on delivery details');
}

function cancelPurchase(button) {
  var productDetails = button.parentNode.parentNode;
  var purchaseButton = productDetails.querySelector('.purchase-btn');
  var cancelButton = productDetails.querySelector('.cancel-btn');

  // Update button styles
  purchaseButton.classList.remove('purchased');
  cancelButton.disabled = true;

  // Show cancellation message
  alert('Cancellation was successful');
}



function showLoginForm() {
  document.getElementById("loginForm").style.display = "block";
}

document.getElementById("loginFormContent").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  // Perform any necessary actions with the username and password values
  // For example, you can make an AJAX request to submit the form data to the server
  
  // Clear the form fields
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  
  // Hide the form
  document.getElementById("loginForm").style.display = "none";
  
  // Show success message
  alert("Form submitted successfully!");
});