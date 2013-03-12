$(function(){

	//Job Model
	Job = Backbone.Model.extend({
		defaults: function(){
			return {
				JobName: "New Job",
				JobLink: "",
				JobLocation: "",
				JobEntry: "",
				JobLanguage: "",
				JobCertificate: "",
				JobFunction: "",
				JobDescription: "",
				CompanyName: "",
				CompanyLink: "",
				CompanyIndustry: "",
				CompanyProperty: "",
				PostDate: "",
			};
		},
		initialize: function(){
			console.log('New Job Created');
		}
	});

	Jobs = Backbone.Collection.extend({
		model: Job,
		url: '/api/jobs'
	});

	job_lists = new Jobs;

	JobView = Backbone.View.extend({
		template: _.template($('#job-template').html()),
		initialize: function(){
			
		},
		render: function(){
			var html = this.template(this.model.toJSON());
			// this.$el.html(html);
			// this.setText();
			return html;
		},
		setText: function(){
			var jobName = this.model.get('JobName');
			console.log(jobName);
			this.$('.job .job-name').text(jobName);
		}
	});
	
	AppView = Backbone.View.extend({
		el: $('.jobs'),
		initialize: function(){
			var thisView = this;
			job_lists.fetch({
				success: function(jobs, resp){
					jobs.each(function(job){
						var jobView = new JobView({model: job});
						var html = jobView.render();
						thisView.$el.append(html);
					});
				}
			});

		}
	});
	var appView = new AppView;
});