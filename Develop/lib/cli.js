const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./shapes");
const fs = require("fs");

const validateCharacterNum = (input) => {
  if (input.length > 3) {
    return 'Please use less than 3 characters.';
  } else {
    return true;
  }
};

const questions = [
  {
    name: 'characterNum',
    message: 'Type up to 3 characters you would like in the logo:',
    type: 'input',
    validate: validateCharacterNum
  },
  {
    name: 'textColor',
    message: 'What color would you like your text to be?',
    type: 'input'
  },
  {
    type: "list",
    name: 'logoShape',
    message: 'What shape would you like?',
    choices: ['Circle', 'Triangle', 'Square']
  },
  {
    name: 'shapeColor',
    message: 'What color would you like the shape to be?',
    type: 'input'
  }
];

const generateSVG = (shape, bgColor, textColor, text) => {
  let svg;
  if (shape === "Circle") {
    svg = new Circle(bgColor, textColor, text).render();
  } else if (shape === "Triangle") {
    svg = new Triangle(bgColor, textColor, text).render();
  } else {
    svg = new Square(bgColor, textColor, text).render();
  }
  return svg;
};

function writeSVGToFile(logo) {
  fs.writeFile("logo.svg", logo, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Generated new logo!");
    }
  });
}

const runCLI = async () => {
  try {
    const data = await inquirer.prompt(questions);
    const { logoShape, shapeColor, textColor, characterNum } = data;

    const logo = generateSVG(logoShape, shapeColor, textColor, characterNum);

    writeSVGToFile(logo);
  } catch (err) {
    console.log(err.message);
  }
};

class CLI {
  run() {
    runCLI();
  }
}

module.exports = CLI;
