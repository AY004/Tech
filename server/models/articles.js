const mongoose = require('mongoose')
const Schema = mongoose.Schema
// schemas is how you create a model of what you want to save to your db
const articlesSchema = new Schema( {
    title: {
        type: String 
    },
    link: {
        type: String
    },

}, {timestamps: true})


const Articles = mongoose.model('Articles', articlesSchema)

module.exports = Articles