# SVG Logo Maker


  - [SVG Logo Maker](#svg-logo-maker)
  - [About](#about)
  - [Installation](#installation)
  - [Running the SVG Logo Maker](#running-the-svg-logo-maker)
  - [Example Output](#example-output)
  - [Prerequisites](#prerequisites)
  - [Author](#author)
  - [Contact Me](#contact-me)

## About
The SVG Logo Maker isa comand-line tool that enables users to effortlessly create customized SVG logos for their projects.  Designed to be user-friendly, the program prompts users with a series of questions to tailor the logo according to their preferences.

## Installation
1. Type each line seperately into your integrated terminal to setup the required dependencies:
    > `npm init -y`
    >
    > `npm install jest`
    >
    > `npm install inquirer@6`

2. Modify package.json to include the following lines:
    > "test": "jest", </br>
   > "start": "node index.js"

## Running the SVG Logo Maker
  
  - Ensure you have completed the [Installation](#installation) section above:
  - To run the program, type into your integrated terminal:
     > ` npm start `
  - You will be presented with several questions in order to create your SVG file.
    - Choose 1-3 characters for your logo
    - Choose the color of those text characters (color name or hex color code)
    - Choose the shape of your SVG logo behind the text
    - Choose the color of that shape
    - ![Alt text](/screenshots/ExampleRunthrough.png)
- Your SVG file will be created with the title "logo.svg" inside the program's folder.

## Example Output

  - SVG file output:
    - ![Alt text](/logo.svg)
  - code output from second image:
    - `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><g><polygon points="150, 18 244, 182 56, 182" fill="black"/><text x="150" y="130" text-anchor="middle" font-size="40" fill="white">KCM</text></g></svg>`


## Prerequisites
- node.js
- inquirer
- jest

## Author
Kevin Mead </br>
kcburner10@gmail.com

## Contact Me
[Kevin Mead](https://kcmead.github.io/project_portfolio/)

## License

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.


THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
