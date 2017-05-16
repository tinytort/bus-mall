'use strict';

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
}

var displayPhotos = function (photos) {
    var indices = getIndices(photos);

    console.log(photos);
    displayPhoto(photos, 'photoOne', indices[0]);
    displayPhoto(photos, 'photoTwo', indices[1]);
    displayPhoto(photos, 'photoThree', indices[2]);
}


var getIndices = function (arr) {
    var photoIndices = [];
    while (photoIndices.length < 3) {
        var index = randomIndex(arr);

        if (photoIndices.indexOf(index) === -1) {
            photoIndices.push(index);
        }

    }
    return photoIndices;
}

var randomIndex = function (arr) {
    return Math.floor(Math.random() * arr.length);
}

displayPhotos(photos);

function Image(name, filepath) {
    this.name = name;
    this.filepath = filepath;
    this.timesShown = 0;
    this.timesClicked = 0;
};

photoOne.addEventListener('click', voteHandler);
function voteHandler() {
    var gettingClicks = document.getElementById('photoOne');
    console.log('clicked it');
    if (photoOne === true) {
    timesClicked += 1;
    }
}

photoTwo.addEventListener('click', voteHandler);
function voteHandler() {
    var gettingClicks = document.getElementById('photoTwo');
    console.log('clicked it');
}

photoThree.addEventListener('click', voteHandler);
function voteHandler() {
    var gettingClicks = document.getElementById('photoThree');
    console.log('clicked it');
}


for (numberOfVotes = 0; numberOfVotes < 25; numberOfVotes++) {
    if (voteHandler === 25) {
        alert('Thanks for voting!');
    }
}
