
const user = require("./classes/user");
const mainController = (router, views) => {
    //define routes
    var index = require(views + 'index')
    var manageWhat = require(views + 'manageWhat')
    var manageVolunteers = require(views + 'manageVolunteers')
    var addVolunteer = require(views + 'addVolunteer')
    var manageOpportunities = require(views + 'manageOpportunities')
    var addOpportunity = require(views + 'addOpportunity')


    //controllers
    router.get('/',(request,response) => {
        let sess = request.session
        if(sess.user) {
            return response.redirect('/admin')
        }
        var test = "test123"
        response.marko(index, {myString: "test123"})
    })

    router.post('/login',(request,response) => {
        request.session.user = new user.User(request.body.email, request.body.pass)
        response.end('done') 
    })

    router.get('/admin',(request,response) => {
        
        if(request.session.user) {
            var greeting = "Hello " + request.session.user.email
            response.marko(manageWhat, { greeting: greeting })
        }
        else {
            response.write('<h1>Please login first.</h1>')
            response.end('<a href='+'/'+'>Login</a>')
        }
    })

    router.get('/manageVolunteers',(request,response) => {
        if(request.session.user) {
            var greeting = "Hello " + request.session.user.email
            response.marko(manageVolunteers, { greeting: greeting })
        }
        else {
            response.write('<h1>Please login first.</h1>')
            response.end('<a href='+'/'+'>Login</a>')
        }
        
    })

    router.get('/addVolunteer',(request,response) => {
        if(request.session.user) {
            var greeting = "Hello " + request.session.user.email
            response.marko(addVolunteer, { greeting: greeting })
        }
        else {
            response.write('<h1>Please login first.</h1>')
            response.end('<a href='+'/'+'>Login</a>')
        }
        
    })

    router.post('/addVolunteer',(request,response) => {
        volunteerObj = new volunteer.Volunteer('joe', 'dirt', 'joedirt69', 'password', [1,5,4], 'whoopin ass', '9-5 babty', '112 my address', '904111222333', 'joeDirt@comcast.net', 'educat', 'lisc', 'bobby bob','904333222111', 'emerg@email', 'emerg address', 'true', 'true')
        database.addVolunteer(volunteerObj)
        response.end('done') 
    })

    router.get('/manageOpportunities',(request,response) => {
        if(request.session.user) {
            var greeting = "Hello " + request.session.user.email
            response.marko(manageOpportunities, { greeting: greeting })
        }
        else {
            response.write('<h1>Please login first.</h1>')
            response.end('<a href='+'/'+'>Login</a>')
        }
    })
    router.get('/addOpportunity',(request,response) => {
        if(request.session.user) {
            var greeting = "Hello " + request.session.user.email
            response.marko(addOpportunity, { greeting: greeting })
        }
        else {
            response.write('<h1>Please login first.</h1>')
            response.end('<a href='+'/'+'>Login</a>')
        }
        
    })

    router.get('/logout',(request,response) => {
        request.session.destroy((err) => {
            if(err) {
                return console.log(err)
            }
            response.redirect('/')
        })

    })
    return router
}
exports.mainController = mainController 
