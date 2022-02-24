'use strict';
const express = require('express')
const router = express.Router()
const Controller = require('../controllers/productController');

router.get('/:productId',(req,res)=>{
    res.send('ini product')
})

router.get('/add', Controller.getProductAdd)
router.post('/add',(req,res)=>{
  res.send('ini product')
})

router.get('/:productId/edit',(req,res)=>{
  res.send('ini product/edit')
})

router.get('/:productId/delete',(req,res)=>{
  res.send('ini product delete')
})

module.exports = router