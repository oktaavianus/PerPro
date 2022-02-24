'use strict';

const express = require('express')
const router = express.Router()
const loginRouter = require('./login')
const cartRouter = require('./cart')
const productRouter = require('./product')
const profileRouter = require('./profile')
const registerRouter = require('./register')
// const Controller = require('../controller')

router.get('/', (req, res) => {
  res.send('Halaman home')
})

router.use('/login',loginRouter)
router.use('/product',productRouter)
router.use('/cart',cartRouter)
router.use('/register',registerRouter)
router.use('/profile',profileRouter)

module.exports =router