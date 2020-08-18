const volunteer = require("./classes/volunteer")
const opportunity = require("./classes/opportunity")
const database = require("./db/database")
const user = require("./classes/user");
const { pool } = require("./db/database");

const mainController = (router, views) => {
    //define routes
    var index = require(views + 'index')
    var manageWhat = require(views + 'manageWhat')
    var manageVolunteers = require(views + 'manageVolunteers')
    var addVolunteer = require(views + 'addVolunteer')
    var manageOpportunities = require(views + 'manageOpportunities')
    var addOpportunity = require(views + 'addOpportunity')
    var editVolunteer = require(views + 'editVolunteer')
    var editOpportunity = require(views + 'editOpportunity')


    //controllers
    router.get('/',(request,response) => {
        let sess = request.session
        if(sess.user) {
            return response.redirect('/admin')
        }
        response.marko(index)
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

    router.get('/manageVolunteers',(request,response)  => {
        if(request.session.user) {
            async function runme() {
                const client = await database.pool.connect()
                var queryString = 'SELECT * FROM volunteer'
                console.log(queryString)
                const result = await client.query({
                    text: queryString,
                    rowMode: 'array',
                })
                client.release()
                var greeting = "Hello " + request.session.user.email
                response.marko(manageVolunteers, { greeting: greeting , volunteers: JSON.stringify(result.rows)})
            }
            runme()
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
        volunteerObj = volunteer.requestToObject(request)
        async function runme() {
            await database.addVolunteer(volunteerObj)
        }
        runme()
        response.redirect('/manageVolunteers')
    })

    router.get('/editVolunteer/:volunteerId',(request,response) => {
        if(request.session.user) {
            async function runme() {
                const client = await database.pool.connect()
                var queryString = 'SELECT * FROM volunteer WHERE id =' + parseInt(request.params.volunteerId)
                console.log(queryString)
                const result = await client.query({
                    text: queryString,
                    rowMode: 'array',
                })
                client.release()
                var greeting = "Hello " + request.session.user.email
                var volunteerObj = volunteer.arrayToObject(result.rows[0])
                response.marko(editVolunteer, { greeting: greeting , volunteer: volunteerObj, id: result.rows[0][0]})
            }
            runme()
        }
        else {
            response.write('<h1>Please login first.</h1>')
            response.end('<a href='+'/'+'>Login</a>')
        }
        
    })

    router.get('/editOpportunity/:opportunityId',(request,response) => {
        if(request.session.user) {
            async function runme() {
                const client = await database.pool.connect()
                var queryString = 'SELECT * FROM opportunity WHERE id =' + parseInt(request.params.opportunityId)
                console.log(queryString)
                const result = await client.query({
                    text: queryString,
                    rowMode: 'array',
                })
                client.release()
                var greeting = "Hello " + request.session.user.email
                var opportunityObj = opportunity.arrayToObject(result.rows[0])
                response.marko(editOpportunity, { greeting: greeting , opportunity: opportunityObj, id: result.rows[0][0]})
            }
            runme()
        }
        else {
            response.write('<h1>Please login first.</h1>')
            response.end('<a href='+'/'+'>Login</a>')
        }
        
    })

    router.post('/editVolunteer/:volunteerId',(request,response) => {
        volunteerObj = volunteer.requestToObject(request)
        async function runme() {
            await database.editVolunteer(volunteerObj, request.params.volunteerId)
        }
        runme()
        response.redirect('/manageVolunteers')
    })

    
    router.post('/editOpportunity/:opportunityId',(request,response) => {
        opportunityObj = opportunity.requestToObject(request)
        async function runme() {
            await database.editOpportunity(opportunityObj, request.params.opportunityId)
        }
        runme()
        response.redirect('/manageOpportunities')
    })

    router.post('/deleteVolunteer',(request,response) => {
        async function runme() {
            await database.deleteVolunteer(request.body.id)
        }
        runme()
        response.end('done') 
    })

    router.post('/deleteOpportunity',(request,response) => {
        async function runme() {
            await database.deleteOpportunity(request.body.id)
        }
        runme()
        response.end('done') 
    })

    router.get('/manageOpportunities',(request,response) => {
        if(request.session.user) {
            async function runme() {
                const client = await database.pool.connect()
                var queryString = 'SELECT * FROM opportunity'
                console.log(queryString)
                const result = await client.query({
                    text: queryString,
                    rowMode: 'array',
                })
                client.release()
                var greeting = "Hello " + request.session.user.email
                response.marko(manageOpportunities, { greeting: greeting , opportunities: JSON.stringify(result.rows)})
                
                
            }
            runme()
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

    router.post('/addOpportunity',(request,response) => {
        opportunityObj = new opportunity.Opportunity(request.body.name, request.body.email, request.body.address, request.body.phonenumber)
        async function runme() {
            await database.addOpportunity(opportunityObj)
        }
        runme()
        response.redirect('/manageOpportunities')
        // response.end('done') 
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