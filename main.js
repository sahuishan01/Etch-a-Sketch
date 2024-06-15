var gridColorType = "random";
const body = document.querySelector("body");
const html = document.querySelector("html");

html.style.height = "100%";
html.style.margin = "0";

body.style.backgroundImage =
  "linear-gradient(to bottom right,  #a8ff78, #78ffd6)";
body.style.minHeight = "100%";
body.style.margin = "0";
body.style.backgroundRepeat = "no-repeat";
body.style.boxSizing = "border-box";
body.style.display = "flex";
body.style.padding = "2%";
body.style.justifyContent = "space-around";

const spinnerDiv = document.createElement("div")
spinnerDiv.style.height = "100%";
spinnerDiv.style.display = "absolute";
spinnerDiv.style.top = "0";
spinnerDiv.style.left = "0";
spinnerDiv.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
spinnerDiv.style.width = "100%";
spinnerDiv.style.zIndex = "1000";


const spinner = document.createElement("div");
spinner.classList.add("spinner");
spinnerDiv.appendChild(spinner);

const style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML = `
    @keyframes spinner {
      to { transform: rotate(360deg); }
    }
    
    .spinner:before {
      content: '';
      box-sizing: border-box;
      position: absolute;
      top: calc(50% - 10px);
      left: calc(50% - 10px);
      width: 20px;
      height: 20px;
      margin-top: -10px;
      margin-left: -10px;
      border-radius: 50%;
      border: 2px solid #ccc;
      border-top-color: #000;
      animation: spinner .6s linear infinite;
    }
  `;

  // Append the style element to the head
  document.head.appendChild(style);


html.appendChild(spinnerDiv);

// left side
const leftDiv = document.createElement("section");
leftDiv.style.margin = "0";
leftDiv.style.boxSizing = "border-box";
leftDiv.style.padding = "0";
leftDiv.style.display = "flex";
leftDiv.style.flexDirection = "column";
leftDiv.style.rowGap = "2%";
leftDiv.style.justifyContent = "center"

// // header
const sketchHead = document.createElement("h1");
sketchHead.textContent = "Etch-a-Sketch";
sketchHead.style.boxSizing = "border-box";
sketchHead.style.margin = "0"
sketchHead.style.textAlign = "center";
sketchHead.style.fontSize = "3rem";
sketchHead.style.textDecoration = "underline";
leftDiv.appendChild(sketchHead);

//clear button
const clearButton = document.createElement("button");
clearButton.textContent = "RESET";
clearButton.type = "button"
clearButton.setAttribute("class", "clearButton");

//clear function
clearButton.addEventListener("click", clearGridColor);

function clearGridColor(){
  let boxes = gridContainer.querySelectorAll("div");
  boxes.forEach((box) => {
    box.style.backgroundColor = "white";
  });
  if (gridColorType == "grey") {
    greyColor(boxes);
  }
}

leftDiv.appendChild(clearButton);

// // Random colors
const randomColors = document.createElement("button");
randomColors.textContent = "Random";
randomColors.type = "button"
randomColors.addEventListener("click", () => {
  gridColorType = "random";
  colorGrid();
});
const randomColor = (boxes) => {
  boxes.forEach((box1) => {
    box1.addEventListener("mouseover", () => {
      var red = parseInt(Math.random() * (255 - 50) + 50);
      var blue = parseInt(Math.random() * (255 - 50) + 50);
      var green = parseInt(Math.random() * (255 - 50) + 50);
      var opacity = Math.random() * 2;
      box1.style.backgroundColor =
        "rgba(" + red + "," + green + "," + blue + "," + opacity + ")";
    });
  });
};
leftDiv.appendChild(randomColors);


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
rainbow.textContent = "Rainbow";
rainbow.type = "button"
rainbow.addEventListener("click", () => {
  gridColorType = "rainbow";
  colorGrid();

  console.log(gridColorType);
});
const rainbowColor = (boxes) => {
  boxes.forEach((box1) => {
    box1.addEventListener("mouseover", () => {
      var color = rainbowArr[parseInt(Math.random() * 7)];
      box1.style.opacity = "1";
      box1.style.backgroundColor = color;
    });
  });
};
leftDiv.appendChild(rainbow);

// Greyscale
const greyScale = document.createElement("button");
greyScale.textContent = "Greyscale";
greyScale.type = "button"
greyScale.addEventListener("click", () => {
  gridColorType = "grey";
  colorGrid();
});
const greyColor = (boxes) => {
  boxes.forEach((box1) => {
    console.log("running completed");
    let opacity = 0.1;
    box1.addEventListener("mouseover", () => {
      box1.style.backgroundColor = "#000";
      box1.style.opacity = opacity;
      opacity += 0.1;
    });
  });
};
leftDiv.append(greyScale);


// color grid
const colorGrid = () => {
  const boxes = gridContainer.querySelectorAll("div");
  if (gridColorType == "grey") {
    greyColor(boxes);
  } else if (gridColorType == "rainbow") {
    rainbowColor(boxes);
  } else {
    randomColor(boxes);
  }
};

const centerDiv = document.createElement("section");
centerDiv.style.margin = "0";
centerDiv.style.display = "flex";
centerDiv.style.flexDirection = "column"
centerDiv.style.rowGap = "2%;"
centerDiv.style.alignItems = "center";
centerDiv.style.justifyContent = "center";

const gridSizeText = document.createElement("h2");
gridSizeText.style.textAlign = "center";
gridSizeText.innerText = "Scroll the slider to change grid size\nCurrent Size 16 x 16";
centerDiv.appendChild(gridSizeText);

const gridContainer = document.createElement("div");
gridContainer.style.margin = 0;
gridContainer.style.padding = 0;
gridContainer.style.width = "800px";
gridContainer.style.height = "800px";
gridContainer.style.backgroundColor = "white";
gridContainer.style.display = "grid";

centerDiv.appendChild(gridContainer);

// // function for  creating grids
  const gridBoxes = (number) => {
    spinnerDiv.style.visibility = "visible";
    gridContainer.innerHTML = "";
    gridContainer.style.gridTemplateColumns = "repeat(" + number + ",1fr)";
    setTimeout(() => {
      // Create the grid
      for (let i = 1; i <= number * number; i++) {
        const box = document.createElement("div");
        box.classList.add("paintBox");
        box.style.padding = "auto";
        box.style.width = "auto";
        box.style.height = "auto";
        gridContainer.appendChild(box);
      }

      // Call colorGrid after the grid is created
      colorGrid();

      // Hide the spinner after grid is created
      spinnerDiv.style.visibility = "hidden";
    }, 0);
  };


//right div
const rightDiv = document.createElement("section");
const slider = document.createElement("input");
slider.type = "range";
slider.min = "1";
slider.max = "100";
slider.value = "16";
slider.style.width = "10%";
slider.style.height = "100%";
slider.style.appearance = "slider-vertical";

rightDiv.appendChild(slider)

var gridValue = slider.value;
gridBoxes(gridValue);
slider.oninput = () => {
  gridValue = slider.value;
  gridSizeText.innerText = "Scroll the slider to change grid size\nCurrent Size "+ gridValue + " x " + gridValue;
};
slider.onmouseup = () => {
  clearGridColor()
  gridBoxes(gridValue);
};


body.appendChild(leftDiv);
body.appendChild(centerDiv);
body.appendChild(rightDiv);
// body.appendChild(mainDiv);
// mainDiv.appendChild(optionBox);
// mainDiv.appendChild(gridDisplay);
// optionBox.appendChild(clearButton);
// optionBox.appendChild(randomColors);
// optionBox.appendChild(rainbow);
// optionBox.appendChild(greyScale);
