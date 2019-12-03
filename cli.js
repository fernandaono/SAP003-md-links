const index = require ('./lib/index')

console.log("vamos executar a promessa") 
mdLinks('README.md').then ((value) => {
    console.log(value)
}).then ((value) => {
    console.log("Promessa cumprida!")
})        
