'use strict';

function Image(name, filepath) {
    this.name = name;
    this.filepath = filepath;
    this.timesShown = 0;
    this.timesClicked = 0;
};

var photos = [
    new Image('Bag Photo', './images/bag.jpg'),
    new Image('Banana Photo','./images/banana.jpg'),
    new Image('Bathroom Photo','./images/bathroom.jpg'),
    new Image('Boots Photo','./images/boots.jpg'),
    new Image('Breakfast','./images/breakfast.jpg'),
    new Image('Bubblegum','./images/bubblegum.jpg'),
    new Image('Chair','./images/chair.jpg'),
    new Image('Cthulhu','./images/cthulhu.jpg'),
    new Image('DogDuck','./images/dog-duck.jpg'),
    new Image('Dragon','./images/dragon.jpg'),
    new Image('Pen','./images/pen.jpg'),
    new Image('PetSweep','./images/pet-sweep.jpg'),
    new Image('Scissors','./images/scissors.jpg'),
    new Image('Shark','./images/shark.jpg'),
    new Image('Sweep','./images/sweep.png'),
    new Image('Tauntaun','./images/tauntaun.jpg'),
    new Image('Unicorn','./images/unicorn.jpg'),
    new Image('USB','./images/usb.gif'),
    new Image('WaterCan','./images/water-can.jpg'),
    new Image('WineGlass','./images/wine-glass.jpg'),
];

var displayPhoto = function (photos, id, index) {
    var photoOne = document.getElementById(id);
    photoOne.src = photos[index].filepath;
    photos[index].timesShown ++;
    photoOne.alt = index;
}

var displayPhotos = function (photos) {
    if (totalClicks === 25) {
        alert('Thanks for voting!');
        return;
} 
   
    var indices = getIndices(photos);

    console.log(photos);
    displayPhoto(photos, 'photoOne', indices[0]);
    displayPhoto(photos, 'photoTwo', indices[1]);
    displayPhoto(photos, 'photoThree', indices[2]);
   
}


var photoIndices = [];
var getIndices = function (arr) {
    var lastArray = photoIndices;
    photoIndices= [];
    while (photoIndices.length < 3) {
        var index = randomIndex(arr);

        if (photoIndices.indexOf(index) === -1 && lastArray.indexOf(index)=== -1) {
            photoIndices.push(index);
        }

    }
    return photoIndices;
}

var randomIndex = function (arr) {
    return Math.floor(Math.random() * arr.length);
}

displayPhotos(photos);

var totalClicks = 0

var photoOne = document.getElementById('photoOne');
photoOne.addEventListener('click', voteHandler);
function voteHandler() {
   photos[this.alt].timesClicked ++;
   totalClicks += 1;
   displayPhotos(photos);
}


var photoTwo = document.getElementById('photoTwo');
photoTwo.addEventListener('click', voteHandler);
function voteHandler() {
    photos[this.alt].timesClicked ++;
    totalClicks += 1;
    displayPhotos(photos);
}

var photoThree = document.getElementById('photoThree');
photoThree.addEventListener('click', voteHandler);
function voteHandler() {
    photos[this.alt].timesClicked ++;
    totalClicks += 1;
    displayPhotos(photos);
}


var clickedVotes = (photoOne.timesClicked + photoTwo.timesClicked + photoThree.timesClicked);



