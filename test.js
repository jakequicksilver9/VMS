const express = require('express')
const expressThymeleaf = require('express-thymeleaf')
// const {TemplateEngine, StandardDialect } = require('thymeleaf')
var thymeleaf  = require('thymeleaf');
var TemplateEngine = thymeleaf.TemplateEngine;
var StandardDialect = thymeleaf.StandardDialect;
var fs = require('fs');
var path = require('path');

// Configure your application to use Thymeleaf via the express-thymeleaf module
let app = express();
var templateEngine = new TemplateEngine({
  dialects: [
    new StandardDialect('th')
  ]
});
var relativePath = '/views/';
function getThymeleaf(filePath, params, handle) {
  var html = fs.readFileSync(path.join(__dirname, relativePath,filePath), {
    encoding: 'utf-8'
  });
  html = handle(html);
  return new Promise((resolve,reject) => {
    templateEngine.process(html, params)
    .then(result => {
      resolve(result)
    });
  })
}
app.engine('html', expressThymeleaf(templateEngine));
app.set('view engine', 'html');
// app.set('views', __dirname + '/views');
var index = __dirname + "/views/index.html"

// Render views as you would normally in response to requests
app.get('/', function(request, response) {
  // response.render('index');
  // response.render(index, {myString: "FUUUUUCK"})
  getThymeleaf('index.html', {
    myString: "FUUUUUCK"
  }, function(html){
    html = html.replace("${type}!='manage'", "true")
    return html
   })
   .then(result => {
     res.send(result)
   });
});

app.listen(process.env.PORT || 3000,() => {
  console.log(`App Started on PORT ${process.env.PORT || 3000}`)
})