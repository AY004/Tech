const { error } = require('console')
const articles = require('../models/articles')
const { response } = require('express')

// now i am going to create functions that will be fed to routes to show and add new articles.


// this finds all items on the collection using the .find() method..it must have a promise handling solution
const index = (req,res, next) => {
    articles.find()
    .then(response => {
        res.json({response})
    }). catch(error =>  {
        message: 'An error has occured'
    })

}

// this is how you creat a new entry into the db...very usefull in post requests.
const newArticle = (req,res,next) => {
    let article = new articles( {
        title: req.body.title,
        link: req.body.link,

    })
    article.save()
    .then(response => {
        res.json({
            massage: 'Article added successfully'
        })
    }).catch(error => {
        res.json({
            message: 'There was an error'
        })
    })
}

module.exports = {
    newArticle, index
}