const yaml = require('js-yaml');
const fs   = require('fs');

// Get yml file contents and place inside text editor for user to edit
try {
  const data = fs.readFileSync('assets/data/sample.yml', 'utf8');
  document.getElementById('source').innerHTML = data
} catch (e) {
  console.log(e);
}