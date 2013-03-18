
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { 
  	title: 'Career Engine',
  	menus: [{name:"求职",submenus:["面试","简历","笔试","网申","行业资讯","公司资讯"]},
  			{name:"活动"},
  			{name:"登陆",id:"login"}],
  	slides: [{headline:"标题一",description:"专注于为华人留学生寻找最优匹配的职位",url:"/images/search_bar_bg_blur.jpg"},
  			{headline:"Title2",description:"Bla Bla Bla...",url:"/images/search_bar_bg_blur.jpg"},
  			{headline:"Title3",description:"Bla Bla Bla...",url:"/images/search_bar_bg_blur.jpg"}]
   });
};