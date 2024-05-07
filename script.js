var currentIndex = 0;
var images = [
    'image1.jpg',
    'image2.png',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg',
    'image7.jpg',
];

function showMessage() {
    var body = document.body;
    var popup = document.getElementById('messagePopup');
    popup.style.display = 'flex';

    showImage();
    updateBackgroundColor();

    var intervalId = setInterval(function () {
        currentIndex = (currentIndex + 1) % images.length;
        showImage();
        updateBackgroundColor();

        if (currentIndex === images.length - 1) {
            showButtons();
            clearInterval(intervalId); // Stop the slideshow
        }
    }, 3000);
}

function updateBackgroundColor() {
    var body = document.body;
    var hue = 341 - currentIndex * 20;
    body.style.backgroundColor = 'hsl(' + hue + ', 100%, 96%)';
}
function showMessage() {
    var popup = document.getElementById('messagePopup');
    popup.style.display = 'flex';
    showImage();
    var intervalId = setInterval(function () {
        currentIndex = (currentIndex + 1) % images.length;
        showImage();
        if (currentIndex === images.length - 1) {
            showButtons();
            clearInterval(intervalId);
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
    imageContainer.style.backgroundImage = 'url(' + images[currentIndex] + ')';
    popupContent.innerHTML = '';
    popupContent.appendChild(imageContainer);
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
    popupContent.innerHTML = '';
    var gifImage = document.createElement('img');
    gifImage.src = 'gif.gif';
    gifImage.alt = 'Love Gif';
    popupContent.appendChild(gifImage);
    popupContent.innerHTML += '<p>Thank you for accepting my love! 💖</p>';
}


function moveNoButton() {
    var noButton = document.querySelector('.no-button');
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
