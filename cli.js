const mdLinks = require ('./lib/index')

mdLinks('README.md').then ((el) => {
    el.forEach(el => {
        console.log(el.href, el.title)
    });
}).catch ((error) => {
    console.log(error)
})        
