const express = require('express');
const router = express.Router();
const { db, Page, User } = require('./models');

router.get('/', async (req,res) => {
    const pages = await Page.findAll({
        
    })
});

router.get('/add', async (req,res) => {

});

router.post('/', async (req,res) => {

});


module.exports = router;