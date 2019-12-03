const fs = require('fs');

module.exports = (path) => { 
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => { 
            if(err){
                reject ("Could not open file");
            }
            const regEx = /\[([^\s].*)\]\((http[s]?:\/\/[^\)].*)\)/gm;
            const matches = data.match(regEx)
            const regExpression = /\[([^\s].*)\]\((http[s]?:\/\/[^\)].*)\)/;
            const linksArray = [];
            matches.forEach((el) => {
                const textLink = el.match(regExpression);
                linksArray.push({text:textLink[1], href:textLink[2]})
                resolve (linksArray);
            })
        })
    })
}