'use strict';

const express = require('express')
const router = express.Router()


router.get('/',(req,res)=>{
    res.send('ini login')
})

module.exports = router