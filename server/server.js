
const express = require('express');
const app = express()
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cors = require('cors');
const uri = 'mongodb+srv://beeny790:W30sD9IrS2EctDMI@dbtest.jxkmofo.mongodb.net/?retryWrites=true&w=majority'

const ArticleRoutes = require('../server/routes/articlesRoutes')

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection

db.on('error', (err)=> {
    console.log(err)
})
db.once('open', () =>{
    console.log('db connection established')
})
app.use(cors());
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())


//routes
//app.get('/', ArticleRoutes)

app.get('/hello', (req, res) =>{
    res.send('server is on')
})
const port = 4000;


app.listen(port, console.log(`server is listening on port ${port}`));

// i dont know how route can be served as a middleware but it seems to work..i need to know more of how this is possible.

app.use('/api', ArticleRoutes)





