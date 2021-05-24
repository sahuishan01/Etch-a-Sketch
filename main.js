const body = document.querySelector("body");
body.style.backgroundImage =
  "linear-gradient(to bottom right,  #a8ff78, #78ffd6)";
body.style.backgroundRepeat = "no-repeat";
body.style.backgroundSize = "cover";

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
optionBox.textContent = "Hello";
const gridDisplay = document.createElement("div"); //main Grid
gridDisplay.style.display = "grid";
gridDisplay.style.height = "600px";
gridDisplay.style.width = "600px";
gridDisplay.style.marginLeft = "2.5vw";
gridDisplay.style.marginTop = "5vh";
gridDisplay.style.border = "1px solid black";
gridDisplay.style.backgroundColor = "#fff";
// function for  creating grids
var count = 0;
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
  // color grid
  const boxes = gridDisplay.querySelectorAll("div");
  boxes.forEach((box1) => {
    box1.addEventListener("mouseover", () => {
      var red = parseInt(Math.random() * 255);
      var blue = parseInt(Math.random() * 255);
      var green = parseInt(Math.random() * 255);
      var opacity = Math.random();
      count++;
      box1.style.backgroundColor =
        "rgba(" + red + "," + green + "," + blue + "," + opacity + ")";
      if (count > 10) {
        box1.previousElementSibling.style.backgroundColor = "white";
        console.log(count);
        count--;
      }
    });
  });
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
console.log(gridValue);
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

body.appendChild(sketchHead);
body.appendChild(sizeDiv);
sizeDiv.appendChild(sizeSelect);
sizeDiv.appendChild(slider);
sizeDiv.appendChild(gridSize);
body.appendChild(mainDiv);
mainDiv.appendChild(optionBox);
mainDiv.appendChild(gridDisplay);
