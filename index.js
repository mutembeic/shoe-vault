// Function to fetch and display men's shoes
function displayMenShoes() {
  // Fetch the shoe data from the server
  fetch("http://localhost:3000/mens")
    .then((response) => response.json())
    .then((data) => {
      // Get the shoe container element
      const shoeContainer = document.getElementById("shoeList");

      // Clear the shoe container
      shoeContainer.innerHTML = "";

      // Create shoe cards and append them to the container
      data.forEach((shoe) => {
        const shoeCard = createShoeCard(shoe);
        shoeContainer.appendChild(shoeCard);
      });
    })
    .catch((error) => {
      console.log("Error fetching shoe data:", error);
    });
}

// Function to create a shoe card element
function createShoeCard(shoe) {
  const card = document.createElement("div");
  card.classList.add("grid-item");

  const image = document.createElement("img");
  image.src = shoe.image;
  image.alt = shoe.name;
  card.appendChild(image);

  const details = document.createElement("div");
  details.classList.add("product-details");

  const name = document.createElement("h2");
  name.textContent = shoe.name;
  details.appendChild(name);

  // Add other shoe details (price, color, size, etc.) here...

  const addToCartBtn = document.createElement("a");
  addToCartBtn.href = "#";
  addToCartBtn.classList.add("btn");
  addToCartBtn.textContent = "Add To Cart";
  details.appendChild(addToCartBtn);

  card.appendChild(details);

  return card;
}

// Event listener for "Men" link click
document.getElementById("menLink").addEventListener("click", displayMenShoes);


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