const mainController = require("./mainController")

require("marko/node-require")
const express = require('express')
const markoExpress = require("marko/express")
const session = require('express-session')
const bodyParser = require('body-parser')
const redis = require('redis')
const redisStore = require('connect-redis')(session)
const client  = redis.createClient()
const app = express()
const views = __dirname + '/views/'

app.set('views', __dirname + '/views')

app.use(markoExpress())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true   
    
}))
app.use(session({
    secret: 'ssshhhhh',
    // create new redis store.
    store: new redisStore({ host: 'localhost', port: 6379, client: client,ttl : 260}),
    saveUninitialized: false,
    resave: false
}))
app.use('/js', [
    express.static(__dirname + '/node_modules/jquery/dist/'),
    express.static(__dirname + '/node_modules/bootstrap/dist/'),

])

const router = mainController.mainController(express.Router(), views)

app.use('/', router)

app.listen(process.env.PORT || 3000,() => {
    console.log(`App Started on PORT ${process.env.PORT || 3000}`)
})