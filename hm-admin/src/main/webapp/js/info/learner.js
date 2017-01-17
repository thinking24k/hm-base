require(["jquery", "utils", "pagination", "jq-validation", "datepicker"], function($, utils){
	$(function(){
		/**教育经历编辑表单***/
		var $eduForm = $("#educationalForm");
		$eduForm.find("input.datePicker").datepicker({
			format: "yyyy-MM-dd"
		});
	});
});