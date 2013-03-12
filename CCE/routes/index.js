
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { 
  	title: 'Career Engine',
  	author: 'Mister Sun Studio',
  	description: 'Our aim is to help the Chinese students oversea to better find their job',
  	menus: ["招聘","求职指导","活动","签证","登陆"]
   });
};