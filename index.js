const fs = require('fs')
  
fs.readFile('currentDisplay.txt', (err, data) => {
    if (err) alert(err);
    if (err) throw err;
  
    alert(data.toString());
})
