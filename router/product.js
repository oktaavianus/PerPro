'use strict';
const express = require('express')
const router = express.Router()
const Controller = require('../controllers/productController');


router.get('/add', Controller.getProductAdd)
router.post('/add', Controller.postProductAdd)
  
router.get('/:productId', Controller.getProductDetail)

router.get('/:productId/edit', Controller.getProductEdit)
router.post('/:productId/edit',(req,res)=>{
  res.send('ini product/edit')
})

router.get('/:productId/delete',Controller.fiturDelete)

module.exports = router