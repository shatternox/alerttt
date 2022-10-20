'user strict'

const express = require('express')

const PORT = 55671
const HOST = '0.0.0.0'

const app = express()
const path = require('path')
const bodyParser = require('body-parser')

app.set('view engine', 'pug')


app.use('/public/images', express.static('./assets/images'))
app.use('/public/js', express.static('./assets/js'))
app.use('/public/css', express.static('./assets/css'))
app.use('/public/audio', express.static('./assets/audio'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.redirect('/level1')
})

app.get('/home', (req, res) => {
    res.redirect('/level1')
})

app.get('/index', (req, res) => {
    res.redirect('/level1')
})

app.get('/level1', (req, res) => {
    res.render('level1', {pass : 0, title:"Alerttt - Level 1", answer:''})
})

app.post('/level1', (req, res) => {

    answer = req.body.payload
    pass = 0

    if(answer.includes("<script>")){
        if(answer.includes("</script>")){
            if(answer.includes("alert(1)") || answer.includes("alert('1')")|| answer.includes('alert("1")')){
                pass = 1
            }
        }
    }

    
    res.render('level1', {pass: pass, answer:answer})
})


app.get('/0xdc95937f687f74f8a8a33bb79f5676914ef4b6f2', (req, res) => {
    res.render('level2', {pass : 0, title:"Alerttt - Level 2", answer:''})
})


app.post('/0xdc95937f687f74f8a8a33bb79f5676914ef4b6f2', (req, res) => {

    answer = req.body.payload
    pass = 0

    answer = answer.replaceAll("script", '')

    if(answer.includes("<script>")){
        if(answer.includes("</script>")){
            if(answer.includes("alert(1)") || answer.includes("alert('1')")|| answer.includes('alert("1")')){
                pass = 1
            }
        }
    }

    res.render('level2', {pass : pass, answer:answer})
})



app.get('/0x5775e60447a0bc86c67c61472476ebf6fcab0d87', (req, res) => {
    res.render('level3', {title:"Alerttt - Level 3", pass:0, answer:''})
})


app.post('/0x5775e60447a0bc86c67c61472476ebf6fcab0d87', (req, res) => {

    answer = req.body.payload
    pass = 0
    // console.log(req.body.payload)

    if(!(answer.includes("<script>"))){
        if(answer.includes("<") && answer.includes(">")){
            if(answer.includes("</") || answer.includes("/>")){
            
                if(answer.includes("onafterprint=") || answer.includes("onbeforeprint=") || answer.includes("onbeforeunload=")|| answer.includes("onerror=")|| answer.includes("onresize=")|| answer.includes("onload=")|| answer.includes("onpagehide=")|| answer.includes("onoffline=")|| answer.includes("onmousedown=")|| answer.includes("onclick=")|| answer.includes("onmousemove=")|| answer.includes("onmouseout=")|| answer.includes("onmouseover=")|| answer.includes("onmouseup=")|| answer.includes("onwheel=")|| answer.includes("onscroll=")){

                    if(answer.includes("alert(1)") || answer.includes("alert('1')")|| answer.includes('alert("1")')){
                        pass = 1
                    }

                }
            }
            
        }
    }

    res.render('level3', {pass:pass, answer:answer})
})



app.get('/level2', (req, res) => {
    res.render('lol')
})

app.get('/level3', (req, res) => {
    res.render('lol')
})


app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)






