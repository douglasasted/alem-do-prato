var intervalTime = 10;
var transitionTime = 1.25; 
var homeImagesUrls = [
    'armenia_1.jpg', 'armenia_2.jpg','armenia_3.jpg',
    'colombia_1.jpg','colombia_2.jpg','colombia_3.jpg',
    'franca_1.jpg','franca_2.jpg','franca_3.jpg',
    'grecia_1.jpg','grecia_2.jpg','grecia_3.jpg',
    'italia_1.jpg','italia_2.jpg','italia_3.jpg',
    'japao_1.jpg','japao_2.jpg','japao_3.jpg']
var homeImages = [];

// Utility
function getRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min)) + min;
}

function preloadImages()
{
    var img;
    for (var i = 0; i < homeImagesUrls.length; i++) 
    {
        img = new Image();
        img.src = 'img/home/' + homeImagesUrls[i];
        homeImages.push(img);
    }
}


// Main
var previousImg;

function fadeInImage() 
{
    var i = getRandomInt(0, homeImages.length);

    if (i == previousImg)
    {
        i++;
        if (i >= homeImages.length)
            i = 0;
    }

    var backgroundImg = 'url("' + homeImages[i].src + '")';
    var img = document.getElementsByClassName('focus')[0];

    console.log(img);

    document.body.style.backgroundImage = backgroundImg;
    document.body.className = "in"; 
    img.src = backgroundImg;
    previousImg = i;
}

function fadeOutImage() 
{
    // Fade out previous background
    document.body.className = "";
    
    // Fade in new background
    setTimeout(() => { fadeInImage(); }, transitionTime * 1000);
}

preloadImages();

var intervalId = window.setInterval(function() { fadeOutImage(); }, intervalTime * 1000);

fadeInImage();