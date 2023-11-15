const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Square, Circle } = require("./lib/shapes");

// Function to generate SVG string based on user answers
function generateSvgString(answers) {
  const shape = answers.shape.toLowerCase();
  let svgString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
  svgString += "<g>";

  switch (shape) {
    case "triangle":
      svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
      break;
    case "square":
      svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
      break;
    case "circle":
      svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
      break;
    default:
      throw new Error("Invalid shape");
  }

  svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
  svgString += "</g>";
  svgString += "</svg>";

  return svgString;
}

// Function to write SVG string to a file
function writeToFile(fileName, svgString) {
  fs.writeFile(fileName, svgString, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
  });
}

// Function to prompt the user for logo details
function promptUser() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What text should be displayed in your logo (1 to 3 chars max)",
        name: "text",
      },
      {
        type: "input",
        message: "Choose text color, enter the color name or insert hex color code.",
        name: "textColor",
      },
      {
        type: "list",
        message: "Choose either Triangle, Square, or Circle?",
        choices: ["Triangle", "Square", "Circle"],
        name: "shape",
      },
      {
        type: "input",
        message: "Choose the color of your shape, enter a color name or a hex color code.",
        name: "shapeBackgroundColor",
      },
    ])
    .then((answers) => {
      if (answers.text.length > 3) {
        console.log("Must not exceed 3 characters");
        promptUser();
      } else {
        const svgString = generateSvgString(answers);
        writeToFile("logo.svg", svgString);
      }
    });
}

// Invoke the promptUser function to start the application
promptUser();