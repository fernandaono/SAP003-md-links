const fs = require('fs');

module.exports = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject("Could not open file");
      } else {
        const regEx = /\[([^\s].*)\]\((http[s]?:\/\/[^\)].*)\)/gm;
        const linksArray = [];
        const matches = data.match(regEx);
        matches.forEach((el) => {
          const text = el.match(/\[(\S.*)\]/)[1];
          const href = el.match(/\((http.*)\)/)[1];
          linksArray.push({text, href});
          resolve(linksArray);
        });
      };
    });
  });
};