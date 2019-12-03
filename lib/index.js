const fs = require('fs');

function mdLinks(file) { 
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf-8', (err, data) => { 
            if(err){
                reject ("Could not open file")
            }
            resolve (data) 
        })
    })
}

module.exports = mdLinks;