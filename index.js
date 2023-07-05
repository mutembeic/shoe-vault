  // JavaScript
   // Declare the shoesData variable outside the fetch request
let shoesData;

// Get the 'Men' link element
const menLink = document.getElementById('menLink');

// Add click event listener to 'Men' link
menLink.addEventListener('click', displayMenShoes);

// Function to display men's shoes
function displayMenShoes() {
  // Get the container element to display the shoes
  const shoesContainer = document.getElementById('shoesContainer');

  // Clear any existing content in the container
  shoesContainer.innerHTML = '';

  // Loop through the men's shoes data and create HTML elements
  shoesData.forEach(shoe => {
    // Create the shoe card element
    const shoeCard = document.createElement('div');
    shoeCard.classList.add('shoe-card');

    // Create the shoe image element
    const shoeImage = document.createElement('img');
    shoeImage.src = shoe.image;
    shoeImage.alt = shoe.name;

    // Create the shoe name element
    const shoeName = document.createElement('h3');
    shoeName.textContent = shoe.name;

    // Create the shoe price element
    const shoePrice = document.createElement('p');
    shoePrice.textContent = `Price: ${shoe.price}`;

    // Append the elements to the shoe card
    shoeCard.appendChild(shoeImage);
    shoeCard.appendChild(shoeName);
    shoeCard.appendChild(shoePrice);

    // Append the shoe card to the container
    shoesContainer.appendChild(shoeCard);
  });

  // Show the shoes container after rendering the shoes
  shoesContainer.style.display = 'block';
}

fetch('http://localhost:3000/mens')
  .then(response => response.json())
  .then(data => {
    // Store the fetched data in the shoesData variable
    shoesData = data;
  })
  .catch(error => {
    console.log('An error occurred while fetching data:', error);
  });

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




 