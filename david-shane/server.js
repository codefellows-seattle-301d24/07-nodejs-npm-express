'use strict';

// DONE: Initialize your project using NPM to create and populate a package.json file

// TODO: Require the Express package that you installed via NPM, and instantiate the app
const EXPRESS = require('express');
const PORT = process.env.PORT || 3000;

// Remember to install express, and be sure that it's been added to your package.json as a dependency
// There is also a package here called body-parser, which is required in for use in a new route.
// Be sure to install that and save it as a dependency after you create your package.json.
const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;

// TODO: Include all of the static resources as an argument to app.use()
APP.use(EXPRESS.static('public'));
// TODO: (STRETCH) Write a new route that will handle a request and send the new.html file back to the user


app.post('/articles', bodyParser, function(request, response) {
  // REVIEW: This route will receive a new article from the form page, new.html,
  // and log that form data to the console. We will wire this up soon to actually
  // write a record to our persistence layer!
  console.log(request.body);
  response.send('Record posted to server!!');
})

app.listen(PORT, function() {
  // TODO: Log to the console a message that lets you know which port your server has started on
});

/*
'use strict';

const EXPRESS = require('express');
const APP = EXPRESS();
const PORT = process.env.PORT || 3000;

APP.use(EXPRESS.static('public'));

APP.get('/', function(request, response){
  response.sendFile('index.html', {root: './public'});
});

let someData = {one: 1, two: 2};

APP.get('/data', function(request, response){
  response.send(someData)
});

APP.get('*', function(request, response){
  response.sendFile('404.html', {root: './public'});
});

APP.listen(PORT, function(){
  console.log(`Express server currently running on port ${PORT}`);
});

*/
