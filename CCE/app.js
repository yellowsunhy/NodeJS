
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

app.get('/', function(req, res){
  res.render('index', { 
    title: 'Career Engine',
    menus: [{name:"求职",submenus:["面试","简历","笔试","网申","行业资讯","公司资讯"]},
            {name:"活动"},
            {name:"登陆",id:"login"}],
    slides: [{headline:"标题一",description:"专注于为华人留学生寻找最优匹配的职位",url:"/images/search_bar_bg_blur.jpg"},
            {headline:"Title2",description:"Bla Bla Bla...",url:"/images/search_bar_bg_blur.jpg"},
            {headline:"Title3",description:"Bla Bla Bla...",url:"/images/search_bar_bg_blur.jpg"}]
   });
});

app.get('/about', function(req, res){
  res.render('hero_info',{
    title: "关于我们",
    menus: [{name:"求职",submenus:["面试","简历","笔试","网申","行业资讯","公司资讯"]},
            {name:"活动"},
            {name:"登陆",id:"login"}],
    info: {
      title: "关于我们",
      content: [{
        title: "",
        content: "关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们。"
      },{
        title: "",
        content: "关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们。"
      },{
        title: "联系我们",
        content: "联系我们联系我们联系我们联系我们联系我们联系我们联系我们"
      }]
    }
  });
});

app.get('/privacy', function(req, res){
  res.render('hero_info',{
    title: "用户协议",
    menus: [{name:"求职"},
            {name:"活动"},
            {name:"登陆",id:"login"}],
    info: {
      title: "用户协议",
      content: [{
        title: "版权",
        content: "版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权"
      },{
        title: "",
        content: "版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权版权"
      },{
        title: "免责条款",
        content: "免责条款免责条款免责条款免责条款免责条款免责条款免责条款免责条款免责条款免责条款免责条款免责条款免责条款免责条款免责条款免责条款免责条款免责条款免责条款免责条款免责条款免责条款免责条款免责条款免责条款免责条款免责条款免责条款免责条款免责条款免责条款免责条款免责条款免责条款免责条款免责条款免责条款免责条款免责条款免责条款免责条款免责条款"
      },{
        title: "风险声明",
        content: "风险声明风险声明风险声明风险声明风险声明风险声明风险声明风险声明风险声明风险声明风险声明风险声明风险声明风险声明风险声明风险声明风险声明风险声明风险声明风险声明风险声明风险声明风险声明"
      }]
    }
  });
});

app.get('/careers', function(req, res){
  res.render('hero_info',{
    title: "加入我们",
    menus: [{name:"求职"},
            {name:"活动"},
            {name:"登陆",id:"login"}],
    info: {
      title: "加入我们",
      content: [{
        title: "",
        content: "公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍"
      },{
        title: "职位一",
        content: "职位一职位一职位一职位一职位一职位一职位一职位一职位一职位一职位一职位一职位一职位一职位一职位一职位一职位一职位一职位一职位一职位一职位一职位一职位一职位一职位一职位一职位一职位一职位一职位一职位一职位一职位一职位一职位一职位一职位一职位一职位一职位一职位一职位一职位一职位一职位一职位一职位一职位一职位一职位一"
      },{
        title: "职位二",
        content: "职位二职位二职位二职位二职位二职位二职位二职位二职位二职位二职位二职位二职位二职位二职位二职位二职位二职位二职位二职位二职位二职位二职位二职位二职位二职位二职位二职位二职位二职位二职位二职位二职位二职位二职位二职位二职位二职位二职位二职位二职位二职位二职位二职位二职位二职位二职位二职位二职位二职位二职位二"
      },{
        title: "职位三",
        content: "职位三职位三职位三职位三职位三职位三职位三职位三职位三职位三职位三职位三职位三职位三职位三职位三职位三职位三职位三职位三职位三职位三"
      },{
        title: "简历投放",
        content: "简历投放简历投放简历投放简历投放简历投放简历投放简历投放"
      }]
    }
  });
});

// Get jobs
app.get('/api/jobs', function(req, res){
  return Job.find().limit(5).exec(function(err, jobs){
    return res.send(jobs);
  });
});



http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
