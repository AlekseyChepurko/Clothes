/**
 * Created by Алексей on 19.07.2017.
 */
const fs = require('fs');
const path = require('path');

function getDirectories (srcpath) {
    return fs.readdirSync(srcpath)
        .filter(file => fs.lstatSync(path.join(srcpath, file)).isDirectory())
}

function getFiles(srcpath) {
    return fs.readdirSync(srcpath)
        .filter(file => !fs.lstatSync(path.join(srcpath, file)).isDirectory())
}

function makeObjectByFolderFullName(folderFullName, name){

    const subFolders = getDirectories(folderFullName),
            files = getFiles(folderFullName).map(e=> path.basename(e, '.png')),
            parameters = [],
            subChoice = [];

    if (subFolders.length <= files.length || !subFolders){
        files.forEach(fileName => {
            parameters.push(fileName)
        })
    }

    subFolders.forEach((folder)=>{
        subChoice.push(
            makeObjectByFolderFullName(path.resolve(folderFullName, folder), folder)
        )
    });

    return Object.assign({},
        {name},
        parameters.length > 0 ? {parameters} : null,
        subChoice.length > 0 ? {subChoice} : null
    );
}

const items = [];

getDirectories(path.resolve(__dirname))
    .forEach(dir => items.push(
        makeObjectByFolderFullName(path.resolve(__dirname, dir), dir)
));

fs.writeFile(path.resolve(__dirname, "res.json"), JSON.stringify(items) , function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});