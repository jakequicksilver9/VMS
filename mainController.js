
const user = require("./pojos/user");
const mainController = (router, views) => {
    //define routes
    var index = require(views + 'index')
    var manageVolunteers = require(views + 'manageVolunteers')

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
            response.marko(manageVolunteers, { greeting: greeting })
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
