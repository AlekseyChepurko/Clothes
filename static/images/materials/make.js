/**
 * Created by Алексей on 14.07.2017.
 */

const testFolder = './';
const fs = require('fs');
const files = [];

fs.readdirSync(testFolder).forEach(file => {
    files.push(file);
});


fs.writeFile("./res.json", JSON.stringify(files) , function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});

// console.log(JSON.stringify(files));