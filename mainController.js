
const mainController = (router, views) => {
    //define routes
    var index = require(views + 'index')
    var manageVolunteers = require(views + 'manageVolunteers')

    //controllers
    router.get('/',(request,response) => {
        let sess = request.session
        if(sess.email) {
            return response.redirect('/admin')
        }
        var test = "test123"
        response.marko(index, {myString: "test123"})
    })

    router.post('/login',(request,response) => {
        request.session.email = request.body.email
        response.end('done') 
    })

    router.get('/admin',(request,response) => {
        
        if(request.session.email) {
            var greeting = "Hello " + request.session.email
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
