const fs = require('fs');

module.exports = (path) => { 
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => { 
            if(err){
                reject ("Could not open file");
            }
            const regex = /\[([^\s].*)\]\((http[s]?:\/\/[^\)].*)\)/gm;
            const matches = data.match(regex)
            resolve (matches); 
        })
    })
}