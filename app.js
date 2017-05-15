'use strict';

var photos = [
    './images/bag.jpg',
    './images/banana.jpg',
    './images/bathroom.jpg',
    './images/boots.jpg',
    './images/breakfast.jpg',
    './images/bubblegum.jpg',
    './images/chair.jpg',
    './images/cthulhu.jpg',
    './images/dog-duck.jpg',
    './images/dragon.jpg',
    './images/pen.jpg',
    './images/pet-sweep.jpg',
    './images/scissors.jpg',
    './images/shark.jpg',
    './images/sweep.png',
    './images/tauntaun.jpg',
    './images/unicorn.jpg',
    './images/usb.gif',
    './images/water-can.jpg',
    './images/wine-glass.jpg',
];

var displayPhoto = function (photos, id, index) {
    var photoOne = document.getElementById(id);
    photoOne.src = photos[index];
}

var displayPhotos = function(photos) {
    var indices = getIndices(photos);


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

var randomIndex = function(arr) {
    return Math.floor(Math.random() * arr.length);
}

displayPhotos(photos);