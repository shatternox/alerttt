'user strict'

const express = require('express')

const PORT = 55671
const HOST = '0.0.0.0'

const app = express()
const path = require('path')

app.set('view engine', 'pug')


app.use('/public/images', express.static('./assets/images'))
app.use('/public/js', express.static('./assets/js'))
app.use('/public/css', express.static('./assets/css'))
app.use('/public/audio', express.static('./assets/audio'))


app.get('/', (req, res) => {
    res.render('level1')
})

app.get('/home', (req, res) => {
    res.render('level1')
})

app.get('/index', (req, res) => {
    res.render('level1')
})

app.get('/level1', (req, res) => {
    res.render('level1')
})

app.get('/0xdc95937f687f74f8a8a33bb79f5676914ef4b6f2', (req, res) => {
    res.render('level2')
})

app.get('/0x5775e60447a0bc86c67c61472476ebf6fcab0d87', (req, res) => {
    res.render('level3')
})

app.get('/level2', (req, res) => {
    res.render('lol')
})

app.get('/level3', (req, res) => {
    res.render('lol')
})


app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)


