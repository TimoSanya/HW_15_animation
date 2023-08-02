setInterval(move, 1)
const heightSize = container.offsetHeight - box.offsetHeight;
const widthSize = container.offsetWidth - box.offsetWidth

let posHeight = 0;
let posWidth = 0;
let currentHeight = 1;
let currentWidth = 1;

let rightDirection = true;
let bottomDirection = true;


move();


function move() {
    if (posHeight >= heightSize) {
        bottomDirection = false
        currentHeight = -1;
        currentWidth = rightDirection ? 1 : -1
        updateColor()
    }

    if (posHeight <= 0) {
        bottomDirection = true
        currentHeight = 1;
        currentWidth = rightDirection ? 1 : -1
        updateColor()
    }


    if (posWidth >= widthSize) {
        rightDirection = false
        currentWidth = -1
        currentHeight = bottomDirection ? 1 : -1;
        updateColor()
    }


    if (posWidth <= 0) {
        rightDirection = true
        currentWidth = 1
        currentHeight = bottomDirection ? 1 : -1;
        updateColor()
    }

    posHeight = posHeight + currentHeight;
    posWidth = posWidth + currentWidth;

    box.style["left"] = `${posWidth}px`;
    box.style["top"] = `${posHeight}px`;
}

function updateColor() {
    let color = Math.round(Math.random() * 100);
    document.getElementById("box").style.background = `hsl(${color},100%,50%)`;
}





