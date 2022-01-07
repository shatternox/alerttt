'user strict'

const express = require('express')

const PORT = 55671
const HOST = '0.0.0.0'

const app = express()
const path = require('path')
const router = express.Router()

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/view/index.html'))
})






