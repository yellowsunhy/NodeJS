
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , mongoose = require('mongoose');

var app = express();
var database_name = "ChineseCareerEngine";
var job_collection = "jobs";
mongoose.connect('mongodb://localhost/'+database_name);

var schema = new mongoose.Schema({
  JobName: String,
  JobLink: String,
  JobLocation: String,
  JobEntry: String,
  JobLanguage: String,
  JobCertificate: String,
  JobFunction: String,
  JobDescription: String,
  CompanyName: String,
  CompanyLink: String,
  CompanyIndustry: String,
  CompanyProperty: String,
  PostDate: Date
});

var Job = mongoose.model(job_collection, schema);

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
  }));
});

// app.configure('development', function(){
//   app.use(express.errorHandler());
// });

app.get('/', routes.index);

// Get jobs
app.get('/api/jobs', function(req, res){
  return Job.find().limit(5).exec(function(err, jobs){
    return res.send(jobs);
  });
});



http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
