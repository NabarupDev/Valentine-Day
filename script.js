var currentIndex = 0;
var images = [
    'image1.jpg',
    'image2.png',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg',
    'image7.jpg',
    // Add more image filenames as needed
];

function showMessage() {
    var body = document.body;
    var popup = document.getElementById('messagePopup');
    popup.style.display = 'flex';

    // Show the initial image and set initial background color
    showImage();
    updateBackgroundColor();

    // Automatically advance to the next image every 3 seconds
    var intervalId = setInterval(function () {
        currentIndex = (currentIndex + 1) % images.length;
        showImage();
        updateBackgroundColor();

        // Check if it's the last image to display the buttons and stop the slideshow
        if (currentIndex === images.length - 1) {
            showButtons();
            clearInterval(intervalId); // Stop the slideshow
        }
    }, 3000);
}

function updateBackgroundColor() {
    var body = document.body;
    var hue = 341 - currentIndex * 20; // Adjust the hue based on currentIndex
    body.style.backgroundColor = 'hsl(' + hue + ', 100%, 96%)';
}

// ... rest of your existing JavaScript code


function showMessage() {
    var popup = document.getElementById('messagePopup');
    popup.style.display = 'flex';

    // Show the initial image
    showImage();

    // Automatically advance to the next image every 3 seconds
    var intervalId = setInterval(function () {
        currentIndex = (currentIndex + 1) % images.length;
        showImage();

        // Check if it's the last image to display the buttons and stop the slideshow
        if (currentIndex === images.length - 1) {
            showButtons();
            clearInterval(intervalId); // Stop the slideshow
        }
    }, 3000);
}

function hideMessage() {
    var popup = document.getElementById('messagePopup');
    popup.style.display = 'none';
}

function showImage() {
    var popupContent = document.querySelector('.popup-content');
    var imageContainer = document.createElement('div');
    imageContainer.className = 'image-container';

    // Set the background image of the image container
    imageContainer.style.backgroundImage = 'url(' + images[currentIndex] + ')';

    // Add the image container to the popup content
    popupContent.innerHTML = '';
    popupContent.appendChild(imageContainer);

    // Update the content with a sweet message
    popupContent.innerHTML += '<span class="close" onclick="hideMessage()">&times;</span>' +
        '<p>You make my world brighter and more beautiful. I love you!</p>' ;
}


function showButtons() {
    var popupContent = document.querySelector('.popup-content');

    // Check if it's the last image to display the buttons and additional paragraph
    if (currentIndex === images.length - 1) {
        // Add Yes and No buttons
        popupContent.innerHTML += 
             '<p>How much do you mean to me?</p>' +
            '<button class="yes-button" onclick="showGif()">Yes</button>' +
            '<button class="no-button" onmouseover="moveNoButton()" onmouseout="resetNoButton()">No</button>';
    }
}


function showGif() {
    var popupContent = document.querySelector('.popup-content');

    // Clear the popup content
    popupContent.innerHTML = '';

    // Create an image element for the gif
    var gifImage = document.createElement('img');
    gifImage.src = 'gif.gif'; // Replace 'your_love_gif.gif' with the actual filename/path of your gif
    gifImage.alt = 'Love Gif';

    // Add the image to the popup content
    popupContent.appendChild(gifImage);

    // Add a message or additional content
    popupContent.innerHTML += '<p>Thank you for accepting my love! 💖</p>';
}


function moveNoButton() {
    var noButton = document.querySelector('.no-button');
    
    // Move the No button to a random position within the entire page
    if (currentIndex === images.length - 1) {
        var offsetX = Math.random() * (window.innerWidth - noButton.clientWidth);
        var offsetY = Math.random() * (window.innerHeight - noButton.clientHeight);

        noButton.style.transition = 'transform 0.5s ease-in-out';
        noButton.style.transform = 'translate(' + offsetX + 'px, ' + offsetY + 'px)';
    }
}



function resetNoButton() {
    var noButton = document.querySelector('.no-button');
    noButton.style.transition = 'transform 0.8s ease-in-out';
    noButton.style.transform = 'translate(0, 0)';
}
