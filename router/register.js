'use strict';

const express = require('express')
const router = express.Router()


router.get('/',(req,res)=>{
    res.send('ini register')
})

module.exports = router