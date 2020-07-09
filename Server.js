require("marko/node-require");
const express = require('express')
const markoExpress = require("marko/express");
const session = require('express-session')
const bodyParser = require('body-parser')
const redis = require('redis')
const redisStore = require('connect-redis')(session)
const client  = redis.createClient()
const router = express.Router()
const app = express()
app.set('views', __dirname + '/views');
app.use(markoExpress());
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(session({
    secret: 'ssshhhhh',
    // create new redis store.
    store: new redisStore({ host: 'localhost', port: 6379, client: client,ttl : 260}),
    saveUninitialized: false,
    resave: false
}))

const views = __dirname + '/views/'
//define routes
var index = require(views + 'index')
var manageVolunteers = require(views + 'manageVolunteers')

router.get('/',(req,res) => {
    let sess = req.session
    if(sess.email) {
        return res.redirect('/admin')
    }
    var test = "test123"
    res.marko(index, {myString: "test123"})
})

router.post('/login',(req,res) => {
    req.session.email = req.body.email
    res.end('done') 
})

router.get('/admin',(req,res) => {
    
    if(req.session.email) {
        var greeting = "Hello " + req.session.email
        res.marko(manageVolunteers, { greeting: greeting })
    }
    else {
        res.write('<h1>Please login first.</h1>')
        res.end('<a href='+'/'+'>Login</a>')
    }
})

router.get('/logout',(req,res) => {
    req.session.destroy((err) => {
        if(err) {
            return console.log(err)
        }
        res.redirect('/')
    })

})

app.use('/', router)

app.listen(process.env.PORT || 3000,() => {
    console.log(`App Started on PORT ${process.env.PORT || 3000}`)
})