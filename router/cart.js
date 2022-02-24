'use strict';

const express = require('express')
const cartRouter = express.Router()


cartRouter.get('/',(req,res)=>{
    res.send('ini cart')
})
cartRouter.get('/delete/:ProductId',(req,res)=>{
  res.send('ini cart delete')
})

module.exports =cartRouter
