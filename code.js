const express = require('express')
const prodcutManager = require('./product_manager')

const app = express()
const manager =new prodcutManager('productos.json')

app.get('/',async(req, res)=> {



})