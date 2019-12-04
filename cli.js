#!/usr/bin/env node

const mdLinks = require ('./lib/index')
const path = process.argv[2]

mdLinks(path).then ((el) => {
    el.forEach(el => {
        console.log(el.href, el.text)
    });
    }).catch ((error) => {
        console.log(error)
    })        
