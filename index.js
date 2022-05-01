// index.js
const Mustache = require('mustache');
const fs = require('fs');
const MUSTACHE_MAIN_DIR = './main.mustache';
/**
  * DATA is the object that contains all
  * the data to be provided to Mustache
  * Notice the "name" and "date" property.
*/

const projects = require('./data/projects.js');
const skills = require('./data/skills.js');
const languages = require('./data/languages.js');
const engLevel = require('./data/eng-level.js');
const getCurrentAge = require('./getCurrentAge.js');

let DATA = {
  age: getCurrentAge('04.08.2011'),
  skills: skills.map((elem) => elem.toString()).join('\n'),
  engLevel,
  projects: projects.map((elem) => elem.toString()).join('\n'),
  languages: languages.map((elem) => elem.toString()).join('\n')
};
/**
  * A - We open 'main.mustache'
  * B - We ask Mustache to render our file with the data
  * C - We create a README.md file with the generated output
  */
function generateReadMe() {
  fs.readFile(MUSTACHE_MAIN_DIR, (err, data) =>  {
    if (err) throw err;
    const output = Mustache.render(data.toString(), DATA);
    fs.writeFileSync('README.md', output);
  });
}
generateReadMe();