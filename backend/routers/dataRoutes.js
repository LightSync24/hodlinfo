const express = require('express');
const router = express.Router();
const Wazir = require("../models/wazirx");

router.get('/', async(req, res) =>{
    const dt = await Wazir.find({});
    return res.status(200).json({dt});
})

module.exports =  router;