var intervalTime = 10;
var transitionTime = 1; 
var homeImages = ['armenia_1.jpg', 'armenia_2.jpg','armenia_3.jpg']

// Utility
function getRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min)) + min;
}

// Main
function changeImage() 
{
    // Fade out previous background
    document.body.className = "";
    
    // Fade in new background
    setTimeout(() => { 
        var i = getRandomInt(0, homeImages.length);
        document.body.style.backgroundImage = "url('./img/home/" + homeImages[i] + "')";
        document.body.className = "in"; 
    }, transitionTime * 1000);
}

var intervalId = window.setInterval(function(){changeImage();}, intervalTime * 1000);
document.body.className = "in"; 