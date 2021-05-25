const body = document.querySelector("body");
body.style.backgroundImage =
  "linear-gradient(to bottom right,  #a8ff78, #78ffd6)";
body.style.backgroundRepeat = "no-repeat";
body.style.backgroundSize = "cover";
var gridColorType = "random";

// header
const sketchHead = document.createElement("h1");
sketchHead.textContent = "Etch-a-Sketch";
sketchHead.style.textAlign = "center";
sketchHead.style.fontSize = "5vh";
sketchHead.style.textDecoration = "underline";

// create boxes
const mainDiv = document.createElement("div"); //main div
mainDiv.style.height = "657px";
mainDiv.style.display = "flex";
const optionBox = document.createElement("div"); //option box
optionBox.style.display = "flex";
optionBox.style.flexDirection = "column";
optionBox.style.alignItems = "center";
optionBox.style.width = "47.5vw";
optionBox.style.marginRight = "2.5vw";
optionBox.style.marginTop = "5vh";
const gridDisplay = document.createElement("div"); //main Grid
gridDisplay.style.display = "grid";
gridDisplay.style.height = "600px";
gridDisplay.style.width = "600px";
gridDisplay.style.marginLeft = "2.5vw";
gridDisplay.style.marginTop = "5vh";
gridDisplay.style.border = "1px solid black";
gridDisplay.style.backgroundColor = "#fff";

// Random colors
const random1 = document.createElement("button");
random1.style.marginTop = "2vh";
random1.textContent = "Random";
random1.addEventListener("click", () => {
  gridColorType = "random";
  colorGrid();
});
const randomColor = (boxes) => {
  boxes.forEach((box1) => {
    box1.addEventListener("mouseover", () => {
      var red = parseInt(Math.random() * (255 - 50) + 50);
      var blue = parseInt(Math.random() * (255 - 50) + 50);
      var green = parseInt(Math.random() * (255 - 50) + 50);
      var opacity = Math.random();
      box1.style.backgroundColor =
        "rgb(" + red + "," + green + "," + blue + ")";
    });
  });
};

// Rainbow colors
var rainbowArr = [
  "#9400D3",
  "#4B0082",
  "#0000FF",
  "#00FF00",
  "	#FFFF00",
  "	#FF7F00",
  "	#FF0000",
];
const rainbow = document.createElement("button");
rainbow.style.marginTop = "2vh";
rainbow.textContent = "Rainbow";
rainbow.addEventListener("click", () => {
  gridColorType = "rainbow";
  colorGrid();

  console.log(gridColorType);
});
const rainbowColor = (boxes) => {
  boxes.forEach((box1) => {
    box1.addEventListener("mouseover", () => {
      var color = rainbowArr[parseInt(Math.random() * 7)];
      box1.style.backgroundColor = color;
      box1.style.opacity = "0.7";
    });
  });
};

// Greyscale
const greyScale = document.createElement("button");
greyScale.style.marginTop = "2vh";
greyScale.textContent = "Greyscale";

greyScale.addEventListener("click", () => {
  gridColorType = "grey";
  colorGrid();
  console.log(gridColorType);
});
const greyColor = (boxes) => {
  boxes.forEach((box1) => {
    box1.addEventListener("mouseover", () => {
      var color = rainbowArr[parseInt(Math.random() * 7)];
      box1.style.backgroundColor = color;
      box1.style.opacity = "0.7";
    });
  });
};

// function for  creating grids
const gridBoxes = (number) => {
  gridDisplay.innerHTML = "";
  // grid create

  for (i = 1; i <= number * number; i++) {
    gridDisplay.style.gridTemplateColumns = "repeat(" + number + ",1fr)";
    var box = document.createElement("div");
    box.style.padding = "auto " + " calc(1px + " + number / number + ")";
    box.style.border = "0.1px solid black";
    box.style.width = "auto";
    box.style.height = "auto";
    gridDisplay.appendChild(box);
  }
  colorGrid();
};

// color grid
const colorGrid = () => {
  const boxes = gridDisplay.querySelectorAll("div");
  if (gridColorType == "grey") {
    greyColor(boxes);
  } else if (gridColorType == "rainbow") {
    rainbowColor(boxes);
  } else {
    randomColor(boxes);
  }
};
// size selection
const sizeDiv = document.createElement("div"); //div
sizeDiv.style.display = "flex";
sizeDiv.style.flexDirection = "column";
sizeDiv.style.alignItems = "center";

const sizeSelect = document.createElement("h3"); //header
sizeSelect.textContent = "Select your grid size";
sizeSelect.style.fontSize = "3vh";

const slider = document.createElement("input"); //slider
slider.type = "range";
slider.min = "1";
slider.max = "60";
slider.value = "16";
slider.style.width = "30vw";
slider.style.height = "25px";

const gridSize = document.createElement("h2"); //display grid size
var gridValue = slider.value;
gridBoxes(gridValue);
gridSize.textContent =
  "Current grid size is  " + slider.value + " x " + slider.value;
gridSize.style.fontSize = "2vh";
slider.oninput = () => {
  gridValue = slider.value;
  gridSize.textContent =
    "Your selected size is " + gridValue + " x " + gridValue;
  gridBoxes(gridValue);
};

//clear button
const boxes = gridDisplay.querySelectorAll("div");
const clearButton = document.createElement("button");
clearButton.textContent = "RESET";
clearButton.style.marginRight = "auto";
clearButton.style.marginLeft = "auto";
clearButton.setAttribute("class", "clearButton");
//clear function
clearButton.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.style.backgroundColor = "white";
  });
});

body.appendChild(sketchHead);
body.appendChild(sizeDiv);
sizeDiv.appendChild(sizeSelect);
sizeDiv.appendChild(slider);
sizeDiv.appendChild(gridSize);
body.appendChild(mainDiv);
mainDiv.appendChild(optionBox);
mainDiv.appendChild(gridDisplay);
optionBox.appendChild(clearButton);
optionBox.appendChild(random1);
optionBox.appendChild(rainbow);
optionBox.appendChild(greyScale);
