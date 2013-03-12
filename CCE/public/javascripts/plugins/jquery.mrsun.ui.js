/*!
 * jQuery tiles plugins - v1.0 - 2012 June
 * http://mister-sun.net/
 * 
 * Copyright (c) 2012 Mister Sun Studio
 */
(function ($) {
	/** 
	 ** hint
	**/
    $.fn.hint = function (options) {
		var defaultVal = {};
		var obj = $.extend(defaultVal, options);
		var labelClass = 'mrsunstudio-hint-class';
		$('.'+labelClass).remove();
		this.each(function (i) {
			var control = $(this);
			var controlIndex = i;
			var hintText = control.attr("hint");
			var controlHeight = control.height();
			var controlWidth = control.width();
			var controlTop = control.offset().top;
			var controlLeft = control.offset().left;
			var fontSize = control.css("fontSize");
			var fontFamily = control.css("fontFamily");
			var color = control.css("borderColor");
			color = "#cccccc";

			var labelID = "control-"+controlIndex+"-hint-holder-at-"+controlTop+"-"+controlLeft;
			var labelHtml = "<div id='"+labelID+"' class='"+labelClass+"' style='font-size:"+fontSize+
			";width:auto;height:"+controlHeight+"px;color:"+color+
			";position:absolute;top:"+controlTop+"px;left:"+controlLeft+"px;padding:3px;z-index:2;'></div>";
			var smallLabelHtml = "<div id='"+labelID+"-small' class='"+labelClass+"' style='font-size:10px;"+
			"width:auto;height:auto;color:"+color+
			";position:absolute;top:"+controlTop+"px;left:"+controlLeft+"px;padding:3px;z-index:2;'></div>";
			var showHint = function(){
				if(control.val()==""){
					$('#'+labelID).html(hintText);
				}else{
					$('#'+labelID+"-small").html(hintText);
					setCss();
				}
			}
			var hideHint = function(){
				if(control.val()=="") {
					$('#'+labelID).html("");
				}else{
					$('#'+labelID+"-small").html("");
				}
			}
			var setCss = function(){
				var smallLabelWidth = $('#'+labelID+"-small").width();
				var smallLabelHeight = $('#'+labelID+"-small").height();
				$('#'+labelID+"-small").css({
					left:controlLeft+(controlWidth-smallLabelWidth),
					top:controlTop+(controlHeight-smallLabelHeight)
				});
			}
			control.parent().append(labelHtml+smallLabelHtml);
			control.attr("title",hintText);
			control.on({
				focus:function(){
					hideHint();
				},
				blur:function(){
					showHint();
				}
			});
			$('#'+labelID).on({
				click:function(){
					control.focus();
				}
			})
			showHint();
		});
	}
})(jQuery);
