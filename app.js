const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then(answers => console.log(answers))


/* const fs = require('fs')
const generatePage = require('./src/page-template.js')

const pageHTML = generatePage(name, github);


fs.writeFile('./index.html', pageHTML, err => {
    if (err) throw err;

    console.log('Portfolio complete! Check out index.html to see the output!')
});
 */



//url error in video 9.2.5
/* const url = require('url')
var newUrl = 'http://localhost:5000/index.htm?year=2020&month=december';

var q = url.parse(newUrl, true);

console.log(q.host);

console.log(q.search); */