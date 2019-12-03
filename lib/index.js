const fs = require('fs');
const linksArray = [];

module.exports = (path) => { 
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => { 
            if(err){
                reject (err.message);
            }
            const regEx = /\[([^\s].*)\]\((http[s]?:\/\/[^\)].*)\)/gm;
            const matches = data.match(regEx)
            matches.forEach((el) => {
                const title = el.match(/\[(\S.*)\]/)[1];
                const href = el.match(/\((http.*)\)/)[1];
                linksArray.push({title, href})
                resolve (linksArray);
            })
        })
    })
}