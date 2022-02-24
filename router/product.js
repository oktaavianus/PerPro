'use strict';

const express = require('express')
const router = express.Router()


router.get('/:productId',(req,res)=>{
    res.send('ini product')
})

router.get('/add',(req,res)=>{
  res.send('ini product')
})

router.get('/:productId/edit',(req,res)=>{
  res.send('ini product/edit')
})

router.get('/:productId/delete',(req,res)=>{
  res.send('ini product delete')
})

module.exports = router