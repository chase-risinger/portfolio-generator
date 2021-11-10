const fs = require('fs')
const generatePage = require('./src/page-template.js')

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;


fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;

    console.log('Portfolio complete! Check out index.html to see the output!')
});




//url error in video 9.2.5
/* const url = require('url')
var newUrl = 'http://localhost:5000/index.htm?year=2020&month=december';

var q = url.parse(newUrl, true);

console.log(q.host);

console.log(q.search); */