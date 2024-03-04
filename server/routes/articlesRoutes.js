const express = require('express');
const router = express.Router()
const mongoose = require('mongoose')
const articles = require('../models/articles')

const {index, newArticle} = require('../controllers/articlesController')


// also need more knowledge on routers and how they work..can tell why the module export is route only.


router.get('/', index)
router.post('/add', newArticle)


module.exports = router

