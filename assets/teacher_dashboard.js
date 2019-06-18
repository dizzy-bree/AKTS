var attach_image_url = "";

var Create_quiz_str2_1 = "";
Create_quiz_str2_1 += '<div class="col-md-10 col-md-offset-1">';
Create_quiz_str2_1 += '<div class="row cust-row">';
Create_quiz_str2_1 += '<span class="col-md-1">Option1</span>';
Create_quiz_str2_1 += '<input type="text" class="col-md-2"/>';
Create_quiz_str2_1 += '<input type="checkbox" class="col-md-1" name="">';
Create_quiz_str2_1 += '</div>';

Create_quiz_str2_1 += '<div class="row cust-row">';
Create_quiz_str2_1 += '<span class="col-md-1">Option2</span>';
Create_quiz_str2_1 += '<input type="text" class="col-md-2"/>';
Create_quiz_str2_1 += '<input type="checkbox" class="col-md-1" name="">';
Create_quiz_str2_1 += '</div>';

Create_quiz_str2_1 += '<div class="row cust-row">';
Create_quiz_str2_1 += '<span class="col-md-1">Option3</span>';
Create_quiz_str2_1 += '<input type="text" class="col-md-2"/>';
Create_quiz_str2_1 += '<input type="checkbox" class="col-md-1" name="">';
Create_quiz_str2_1 += '</div>';
Create_quiz_str2_1 += '<div class="row cust-row">';
Create_quiz_str2_1 += '<span class="col-md-1">Option4</span>';
Create_quiz_str2_1 += '<input type="text" class="col-md-2"/>';
Create_quiz_str2_1 += '<input type="checkbox" class="col-md-1" name="">';
Create_quiz_str2_1 += '</div>';
Create_quiz_str2_1 += '<div class="row cust-row1">';
Create_quiz_str2_1 += '<div class="col-md-offset-2 col-md-1">';
Create_quiz_str2_1 += '<button id="btn_quiz_finish" type="button" class="btn btn-success" style="text-align: center;">Finish</button>';
Create_quiz_str2_1 += '</div>';
Create_quiz_str2_1 += '<div class="col-md-1">';
Create_quiz_str2_1 += '<button id="btn_quiz_cancel" type="button" class="btn btn-success" style="text-align: center;">Cancel</button>';
Create_quiz_str2_1 += '</div>';
Create_quiz_str2_1 += '</div>';
Create_quiz_str2_1 += '</div>';

var Create_quiz_str2_2 = "";
Create_quiz_str2_2 += '<div class="col-md-10 col-md-offset-1">';
Create_quiz_str2_2 += '<div class="row cust-row">';
Create_quiz_str2_2 += '<span class="col-md-1">Option1</span>';
Create_quiz_str2_2 += '<input type="text" class="col-md-2"/>';
Create_quiz_str2_2 += '<input type="radio" class="col-md-1" name="answer" checked/>';
Create_quiz_str2_2 += '</div>';
Create_quiz_str2_2 += '<div class="row cust-row">';
Create_quiz_str2_2 += '<span class="col-md-1">Option2</span>';
Create_quiz_str2_2 += '<input type="text" class="col-md-2"/>';
Create_quiz_str2_2 += '<input type="radio" class="col-md-1" name="answer" />';
Create_quiz_str2_2 += '</div>';
Create_quiz_str2_2 += '<div class="row cust-row1">';
Create_quiz_str2_2 += '<div class="col-md-offset-2 col-md-1">';
Create_quiz_str2_2 += '<button id="btn_quiz_finish" type="button" class="btn btn-success" style="text-align: center;">Submit</button>';
Create_quiz_str2_2 += '</div>';
Create_quiz_str2_2 += '<div class="col-md-1">';
Create_quiz_str2_2 += '<button id="btn_quiz_cancel" type="button" class="btn btn-success" style="text-align: center;">Cancel</button>';
Create_quiz_str2_2 += '</div>';
Create_quiz_str2_2 += '</div>';
Create_quiz_str2_2 += '</div>';


var Create_quiz_str2_3 = "";
Create_quiz_str2_3 += '<div class="col-md-10 col-md-offset-1">';
Create_quiz_str2_3 += '<div class="row cust-row">';
Create_quiz_str2_3 += '<span class="col-md-1">Answer</span>';
Create_quiz_str2_3 += '<input type="text" class="col-md-2"/>';
Create_quiz_str2_3 += '</div>';
Create_quiz_str2_3 += '<div class="row cust-row1">';
Create_quiz_str2_3 += '<div class="col-md-offset-2 col-md-1">';
Create_quiz_str2_3 += '<button id="btn_quiz_finish" type="button" class="btn btn-success" style="text-align: center;">Submit</button>';
Create_quiz_str2_3 += '</div>';
Create_quiz_str2_3 += '<div class="col-md-1">';
Create_quiz_str2_3 += '<button id="btn_quiz_cancel" type="button" class="btn btn-success" style="text-align: center;">Cancel</button>';
Create_quiz_str2_3 += '</div>';
Create_quiz_str2_3 += '</div>';
Create_quiz_str2_3 += '</div>';


var question_text;
var score;
var question_type;
var question_category;

var arr = [];
var correct_ans = "";
var flag = 0;
var count = 0;

$(document).ready(function(){
	display_homePage();
	$("#nav-home").addClass("active");
	
	$("#nav-home").click(function(){
		display_homePage();
		$(".nav-list").removeClass("active");
		$(this).addClass("active");
	});

	$("#nav-quiz").click(function(){
		$(".nav-list").removeClass("active");
		$(this).addClass("active");
    	var main_str = "";
		main_str += '<div class="col-md-10 col-md-offset-1">';
		main_str += '<table class="table table-bordered table-striped">';
		main_str += '<thead>';
		main_str += '<tr>';
		main_str += '<th><b>No</b><i class="fa fa-fw fa-sort"></i></th>';
		main_str += '<th><b>Question</b><i class="fa fa-fw fa-sort"></i></th>';
		main_str += '<th><b>Score</b><i class="fa fa-fw fa-sort"></i></th>';
		main_str += '<th><b>Type</b><i class="fa fa-fw fa-sort"></i></th>';
		main_str += '<th><b>Category</b><i class="fa fa-fw fa-sort"></i></th>';
		main_str += '</tr>';
		main_str += '</thead>';

		main_str += '<tbody id="stock_table_body">';
		$.ajax({
	        url: '../Question/getQuestion',
	        type: 'post',
	        data: {
	        },
	        success: function(res) {
	        	res = JSON.parse(res);
	        	for(var i = 0; i < res.length; i ++){
	        		main_str += '<tr class="body-row">';
					main_str += '<td><span>' + (i + 1) + '</span></td>';
					main_str += '<td><span>' + res[i].question_text + '</span></td>';
					main_str += '<td><span>' + res[i].question_correct_score + '</span></td>';
					main_str += '<td><span>' + res[i].question_type.toUpperCase() + '</span></td>';
					main_str += '<td><span>' + res[i].category_name + '</span></td>';
					main_str += '</tr>';
	        	}			
				main_str += '</tbody>';
				main_str += '</table>';
				main_str += '</div>';
				main_str += '<div class="row cust-row1">';
				main_str += '<div class="col-md-offset-2 col-md-3">';
				main_str += '<div class="col-md-offset-2 col-md-3">';
				main_str += '<button id="btn_new_quiz" type="button" class="btn btn-success" style="text-align: center;">Create New</button>';
				main_str += '</div>';
				main_str += '</div>';
				main_str += '</div>';
				$(".main-panel").html(main_str);

				$("#btn_new_quiz").click(function(){
					var Create_quiz_str1 = "";
					Create_quiz_str1 += '<div class="col-md-10 col-md-offset-1">';
					Create_quiz_str1 += '<div class="row">';
					Create_quiz_str1 += '<h1>Submit a new Question</h1>';
					Create_quiz_str1 += '</div>';

					Create_quiz_str1 += '<div class="row cust-row">';
					Create_quiz_str1 += '<span class="col-md-2">Question Test</span>';
					Create_quiz_str1 += '<input type="text" class="col-md-2" id="question_text"/>';
					Create_quiz_str1 += '</div>';

					Create_quiz_str1 += '<div class="row cust-row">';
					Create_quiz_str1 += '<span class="col-md-2">Score for correct answer</span>';
					Create_quiz_str1 += '<input type="number" min="1" max="5" class="col-md-2" id="score"/>';
					Create_quiz_str1 += '</div>';

					Create_quiz_str1 += '<div class="row cust-row">';
					Create_quiz_str1 += '<span class="col-md-2">Question Type</span>';
					Create_quiz_str1 += '<select class="col-md-2" id="question_type" id="question_type">';
					Create_quiz_str1 += '<option value="multi">Multiple-choice question</option>';
					Create_quiz_str1 += '<option value="basic">Basic question</option>';
					Create_quiz_str1 += '<option value="open">Open question(Basic)</option>';
					Create_quiz_str1 += '</select>';
					Create_quiz_str1 += '</div>';


					$.ajax({
			            url: '../Question/getCategory',
			            type: 'post',
			            data: {
			            },
			            success: function(res) {
			            	res = JSON.parse(res);

							Create_quiz_str1 += '<div class="row cust-row">';
							Create_quiz_str1 += '<span class="col-md-2">Question Category</span>';
							Create_quiz_str1 += '<select class="col-md-2" id="question_category">';
							for(var i = 0; i < res.length; i ++){
								Create_quiz_str1 += '<option value="' + res[i].category_id + '">' + res[i].category_name + '</option>';
							}
							
							Create_quiz_str1 += '</select>';
							Create_quiz_str1 += '</div>';

							Create_quiz_str1 += '<div class="row cust-row">';
							Create_quiz_str1 += '<form id="upload_form" enctype="multipart/form-data">';
							Create_quiz_str1 += '<img id="preview" src="http://placehold.it/180" style="max-width: 200px;">';
							Create_quiz_str1 += '<input id="preview_input" type="file" name="profile_image" onchange="readURL(this);" style="display: none;"/>';
							Create_quiz_str1 += '</form>';
							Create_quiz_str1 += '</div>';

							Create_quiz_str1 += '<div class="row cust-row1">';
							Create_quiz_str1 += '<div class="col-md-offset-2 col-md-3">';
							Create_quiz_str1 += '<div class="col-md-offset-2 col-md-3">';
							Create_quiz_str1 += '<button id="btn_quiz_next" type="button" class="btn btn-success" style="text-align: center;">Next</button>';
							Create_quiz_str1 += '</div>';
							Create_quiz_str1 += '</div>';
							Create_quiz_str1 += '</div>';

							$(".main-panel").html(Create_quiz_str1);

							$("#preview").click(function(){
								$("#preview_input").click();
							});

							$("#btn_quiz_next").click(function(){
								question_text = $("#question_text").val();
								score = $("#score").val();
								question_type = $("#question_type").val();
								question_category = $("#question_category").val();

								var formData = new FormData($("#upload_form")[0]);
								formData.append('filename', question_text);

								if($("#question_type").val() == "multi"){
									$(".main-panel").html(Create_quiz_str2_1);
									count = 4;
								}
								else if($("#question_type").val() == "basic"){
									$(".main-panel").html(Create_quiz_str2_2);
									count = 2;
								}
								else{
									$(".main-panel").html(Create_quiz_str2_3);
									count = 0;
								}

								arr = [];
								correct_ans = "";
								flag = 0;

								$("#btn_quiz_finish").click(function(){
									$.ajax({
							            url: '../Upload_Controller/do_upload',
							            type: 'post',
							            data: formData,
							            processData: false,
							            contentType: false,
							            success: function(res) {
							            	attach_image_url = res.success;

							            	if(count == 0){
							            		$.ajax({
											        url: '../Question/createQuestion',
											        type: 'post',
											        data: {
											            'question_text' : question_text,
											            'score' : score,
											            'question_type' : question_type,
											            'question_category' : question_category,
											            'correct_ans' : $('.cust-row').children('input').val(),
											            'attach_image_url' : attach_image_url
											        },
											        success: function(res) {
											        	$("#nav-quiz").click();
											        }, 
											        failure: function(err) {
											            console.log(err);
											        }
											    });
											}
											else{
												$.each($(".cust-row"), function(index, value){
													if($(this).children("input:nth-child(3)").prop("checked") == true){
														correct_ans += (index + 1) + ",";
													}
													$.ajax({
											            url: '../Question/createAnswer',
											            type: 'post',
											            data: {
											                'answer' : $(this).children("input:nth-child(2)").val()
											            },
											            success: function(res) {
											            	flag ++;
											            	arr.push(res);

											                if(flag == count){
											                	func_create_quiz();
											                	$("#nav-quiz").click();
											                }
											            }, 
											            failure: function(err) {
											                console.log(err);
											            }
											        });
												});
											}
							            }, 
							            failure: function(err) {
							                console.log(err);
							            }
							        });
								});

								$("#btn_quiz_cancel").click(function(){
									$("#nav-quiz").click();
								});
							});
			            }, 
			            failure: function(err) {
			                console.log(err);
			            }
			        });
				});
	        }, 
	        failure: function(err) {
	            console.log(err);
	        }
	    });
		
	});

	$("#nav-quiz1").click(function(){
		
	});

	$("#nav-test").click(function(){
		$(".nav-list").removeClass("active");
		$(this).addClass("active");
		$.ajax({
            url: '../Question/getGroup',
            type: 'post',
            data: {
            },
            success: function(res) {
            	res = JSON.parse(res);
				var Create_Test = "";
				Create_Test += '<div class="col-md-11 col-md-offset-1">';
				Create_Test += '<div class="col-md-6">';
				Create_Test += '<div class="row">';
				Create_Test += '<h1>Submit a new Test</h1>';
				Create_Test += '</div>';

				Create_Test += '<div>';
				Create_Test += '<div class="col-md-12">';

				Create_Test += '<div class="row cust-row">';
				Create_Test += '<span class="col-md-6">Test name</span>';
				Create_Test += '<input type="text" class="col-md-4"/>';
				Create_Test += '</div>';

				Create_Test += '<div class="row cust-row">';
				Create_Test += '<span class="col-md-6">Select group for test</span>';
				Create_Test += '<select class="col-md-4">';

				for(var i = 0;i < res.length; i ++){
            		Create_Test += '<option value="' + res[i].group_id + '">' + res[i].group_name + '</option>';
            	}
            	
            	Create_Test += '</select>';
				Create_Test += '</div>';
				Create_Test += '<div class="row cust-row">';
				Create_Test += '<span class="col-md-6">Input duration</span>';
				Create_Test += '<input type="number" min="1" class="col-md-4" placeholder="minutes"/>';
				Create_Test += '</div>';

				Create_Test += '<div class="row cust-row">';
				Create_Test += '<span class="col-md-6">Number of basic questions</span>';
				Create_Test += '<input type="number" min="1" class="col-md-4"/>';
				Create_Test += '</div>';

				Create_Test += '<div class="row cust-row">';
				Create_Test += '<span class="col-md-6">Number of advanced questions</span>';
				Create_Test += '<input type="number" min="1" class="col-md-4"/>';
				Create_Test += '</div>';

				Create_Test += '<div class="row cust-row">';
				Create_Test += '<span class="col-md-6">Select date and time</span>';
				Create_Test += '<input type="date" class="col-md-4"/>';
				Create_Test += '</div>';
				Create_Test += '<div class="row cust-row1">';
				Create_Test += '<div class="col-md-offset-2 col-md-3">';
				Create_Test += '<button id="btn_test_finish" type="button" class="btn btn-success" style="text-align: center;">Submit</button>';
				Create_Test += '</div>';  			
				Create_Test += '</div>';
				Create_Test += '</div>';
				Create_Test += '</div>';
				Create_Test += '</div>';

				Create_Test += '<div class="col-md-5">';
				Create_Test += '<div class="row" style="margin-top: 10%;">';
				Create_Test += '<h3 class="col-md-offset-3 col-md-4">Category</h3>';
				Create_Test += '</div>';

				Create_Test += '<div class="row">';
				Create_Test += '<div class="col-md-4">';
				Create_Test += '<div class="panel panel-default" id="all_categories">';
				
				$.ajax({
		            url: '../Question/getCategory',
		            type: 'post',
		            data: {
		                'answer' : $(this).children("input:nth-child(2)").val()
		            },
		            success: function(res) {
		            	res = JSON.parse(res);

		            	for(var i = 0; i < res.length; i ++){
		            		Create_Test += '<div class="panel-body">' + res[i].category_name + '</div>';
		            	}
						
						Create_Test += '</div>';
						Create_Test += '</div>';
						
						Create_Test += '<div class="col-md-1">';
						Create_Test += '<i class="fa fa-angle-left"></i>';
						Create_Test += '<i class="fa fa-angle-right"></i>';
						Create_Test += '<i class="fa fa-angle-double-left"></i>';
						Create_Test += '<i class="fa fa-angle-double-right"></i>';				
						Create_Test += '</div>';

						Create_Test += '<div class="col-md-4">';
						Create_Test += '<div class="panel panel-default" id="sub_categories">';		
						Create_Test += '</div>';
						Create_Test += '</div>';
						Create_Test += '</div>';

						Create_Test += '</div>';
						Create_Test += '</div>';

						$(".main-panel").html(Create_Test);

						$(".panel-body").click(function(){
							$(".panel-body").removeClass("row-select");
							$(this).addClass("row-select");
						});

						$(".fa-angle-left").click(function(){
							var arr = $("#sub_categories").children("div");
							arr.each(function(){
								var temp = $(this).attr("class").split(" ");
								if(temp[1] == "row-select"){
									$("#all_categories").append(make_html($(this).html()));
									$(this).remove();

									$(".panel-body").click(function(){
										$(".panel-body").removeClass("row-select");
										$(this).addClass("row-select");
									});
								}
							});
						});

						$(".fa-angle-right").click(function(){
							var arr = $("#all_categories").children("div");
							arr.each(function(){
								var temp = $(this).attr("class").split(" ");
								if(temp[1] == "row-select"){
									$("#sub_categories").append(make_html($(this).html()));
									$(this).remove();

									$(".panel-body").click(function(){
										$(".panel-body").removeClass("row-select");
										$(this).addClass("row-select");
									});
								}
							});
						});

						$(".fa-angle-double-right").click(function(){
							$("#sub_categories").append($("#all_categories").html());
							$("#all_categories").html('');

							$(".panel-body").click(function(){
								$(".panel-body").removeClass("row-select");
								$(this).addClass("row-select");
							});
						});

						$(".fa-angle-double-left").click(function(){
							$("#all_categories").append($("#sub_categories").html());
							$("#sub_categories").html('');

							$(".panel-body").click(function(){
								$(".panel-body").removeClass("row-select");
								$(this).addClass("row-select");
							});
						});

						$("#btn_test_finish").click(function(){
							var test_ajaxVal1 = [];
							var test_ajaxVal2 = "";

							$.each($("#sub_categories").children('div'), function(){
								test_ajaxVal2 += $(this).html() + ",";
							});

							test_ajaxVal2 = test_ajaxVal2.substring(0, test_ajaxVal2.length - 1);

							$.each($(".cust-row"), function(index, value){
								test_ajaxVal1.push($(this).children().eq(1).val());
							});
							$.ajax({
					            url: '../Question/createTest',
					            type: 'post',
					            data: {
					                'data1' : test_ajaxVal1,
					                'data2' : test_ajaxVal2
					            },
					            success: function(res) {
					            	$("#nav-home").click();
					            }, 
					            failure: function(err) {
					                console.log(err);
					            }
					        });
						});
		            }, 
		            failure: function(err) {
		                console.log(err);
		            }
		        });	
            }, 
            failure: function(err) {
                console.log(err);
            }
        });
	});

	$("#nav-category").click(function(){
		$(".nav-list").removeClass("active");
		$(this).addClass("active");
		$.ajax({
            url: '../Question/getCategory',
            type: 'post',
            data: {
            },
            success: function(res) {
            	res = JSON.parse(res);
            	var CategoryStr = "";
				CategoryStr += '<div class="col-md-6 col-md-offset-3">';
				CategoryStr += '<table class="table table-bordered table-striped">';
				CategoryStr += '<thead>';
				CategoryStr += '<tr>';
				CategoryStr += '<th><b>No</b><i class="fa fa-fw fa-sort"></i></th>';
				CategoryStr += '<th><b>Category Name</b><i class="fa fa-fw fa-sort"></i></th>';
				CategoryStr += '<th><b>Description</b><i class="fa fa-fw fa-sort"></i></th>';
				CategoryStr += '</tr>';
				CategoryStr += '</thead>';

				CategoryStr += '<tbody id="category_table_body">';
				
            	for(var i = 0;i < res.length; i ++){
            		CategoryStr += '<tr>';
					CategoryStr += '<td><span>' + (i + 1) + '</span></td>';
					CategoryStr += '<td><span>' + res[i].category_name + '</span></td>';
					CategoryStr += '<td><span>' + res[i].category_description + '</span></td>';
					CategoryStr += '</tr>';
            	}
            	CategoryStr += '</tbody>';
				CategoryStr += '</table>';
				
				CategoryStr += '<div class="row cust-row" style="margin-left: 0px;">';
				CategoryStr += '<input type="text" placeholder="Category Name"/>';
				CategoryStr += '<input type="text" placeholder="Description" style="margin-left: 5%;"/>';
				CategoryStr += '<button id="btn_category_success" type="button" class="btn btn-success" style="text-align: center;margin-left: 5%;">Add</button>';
				CategoryStr += '</div>';

				CategoryStr += '</div>';

				$(".main-panel").html(CategoryStr);
				$("#btn_category_success").click(function(){
					
					$.ajax({
			            url: '../Question/createCategory',
			            type: 'post',
			            data: {
			                'category_name' : $(".cust-row").children().eq(0).val(),
			                'category_description' : $(".cust-row").children().eq(1).val()
			            },
			            success: function(res) {
			            	$("#nav-category").click();
			            }, 
			            failure: function(err) {
			                console.log(err);
			            }
			        });
				});
            }, 
            failure: function(err) {
                console.log(err);
            }
        });
	});

	$("#nav-group").click(function(){
		$(".nav-list").removeClass("active");
		$(this).addClass("active");
		$.ajax({
            url: '../Question/getGroup',
            type: 'post',
            data: {
            },
            success: function(res) {
            	res = JSON.parse(res);
            	var GroupStr = "";
				GroupStr += '<div class="col-md-6 col-md-offset-3">';
				GroupStr += '<table class="table table-bordered table-striped">';
				GroupStr += '<thead>';
				GroupStr += '<tr>';
				GroupStr += '<th><b>No</b><i class="fa fa-fw fa-sort"></i></th>';
				GroupStr += '<th><b>Group Name</b><i class="fa fa-fw fa-sort"></i></th>';
				GroupStr += '<th><b>Group Description</b><i class="fa fa-fw fa-sort"></i></th>';
				GroupStr += '</tr>';
				GroupStr += '</thead>';

				GroupStr += '<tbody id="category_table_body">';
				
            	for(var i = 0;i < res.length; i ++){
            		GroupStr += '<tr>';
					GroupStr += '<td><span>' + (i + 1) + '</span></td>';
					GroupStr += '<td><span>' + res[i].group_name + '</span></td>';
					GroupStr += '<td><span>' + res[i].group_description + '</span></td>';
					GroupStr += '</tr>';
            	}
            	GroupStr += '</tbody>';
				GroupStr += '</table>';
				
				GroupStr += '<div class="row cust-row" style="margin-left: 0px;">';
				GroupStr += '<input type="text" placeholder="Group Name"/>';
				GroupStr += '<input type="text" placeholder="Group Description" style="margin-left: 2%;"/>';
				GroupStr += '<button id="btn_group_success" type="button" class="btn btn-success" style="text-align: center;margin-left: 5%;">Add</button>';
				GroupStr += '</div>';

				GroupStr += '</div>';

				$(".main-panel").html(GroupStr);
				$("#btn_group_success").click(function(){
					$.ajax({
			            url: '../Question/createGroup',
			            type: 'post',
			            data: {
			                'group_name' : $(".cust-row").children().eq(0).val(),
			                'group_description' : $(".cust-row").children().eq(1).val()
			            },
			            success: function(res) {
			            	$("#nav-group").click();
			            }, 
			            failure: function(err) {
			                console.log(err);
			            }
			        });
				});
            }, 
            failure: function(err) {
                console.log(err);
            }
        });
	});
});

function func_create_quiz(){
	var question_id = 0;
	correct_ans = correct_ans.substring(0, correct_ans.length - 1);
	$.ajax({
        url: '../Question/createQuestion',
        type: 'post',
        data: {
            'question_text' : question_text,
            'score' : score,
            'question_type' : question_type,
            'question_category' : question_category,
            'correct_ans' : correct_ans,
            'attach_image_url' : attach_image_url
        },
        success: function(res) {
            question_id = res;

            $.ajax({
		        url: '../Question/createRel',
		        type: 'post',
		        data: {
		            'question_id' : question_id,
		            'answer_id' : arr
		        },
		        success: function(res) {
		        }, 
		        failure: function(err) {
		            console.log(err);
		        }
		    });

        }, 
        failure: function(err) {
            console.log(err);
        }
    });
}

function display_homePage(){
	var main_str = "";
	main_str += '<div class="col-md-10 col-md-offset-1">';
	main_str += '<table class="table table-bordered table-striped">';
	main_str += '<thead>';
	main_str += '<tr>';
	main_str += '<th><b>No</b><i class="fa fa-fw fa-sort"></i></th>';
	main_str += '<th><b>Test Name</b><i class="fa fa-fw fa-sort"></i></th>';
	main_str += '<th><b>Duration</b><i class="fa fa-fw fa-sort"></i></th>';
	main_str += '<th><b>Number of Advanced</b><i class="fa fa-fw fa-sort"></i></th>';
	main_str += '<th><b>Number of Basic</b><i class="fa fa-fw fa-sort"></i></th>';
	main_str += '<th><b>Group Name</b><i class="fa fa-fw fa-sort"></i></th>';
	// main_str += '<th><b>Categories</b><i class="fa fa-fw fa-sort"></i></th>';
	main_str += '</tr>';
	main_str += '</thead>';

	main_str += '<tbody id="stock_table_body">';
	$.ajax({
        url: '../Question/getTest',
        type: 'post',
        data: {
        },
        success: function(res) {
        	res = JSON.parse(res);
        	for(var i = 0; i < res.length; i ++){
        		main_str += '<tr class="body-row">';
				main_str += '<td><span>' + (i + 1) + '</span></td>';
				main_str += '<td><span>' + res[i].test_name + '</span></td>';
				main_str += '<td><span>' + res[i].test_duration + '</span></td>';
				main_str += '<td><span>' + res[i].test_numberA + '</span></td>';
				main_str += '<td><span>' + res[i].test_numberB + '</span></td>';
				main_str += '<td><span>' + res[i].group_name + '</span></td>';
				// main_str += '<td><span>' + res[i].categories + '</span></td>';
				main_str += '</tr>';
        	}			
			main_str += '</tbody>';
			main_str += '</table>';
			main_str += '</div>';
			
			$(".main-panel").html(main_str);	
        }, 
        failure: function(err) {
            console.log(err);
        }
    });
}

function make_html(html){
	var htm = "";
	htm += '<div class="panel-body">';
	htm += html;
	htm += '</div>';
	return htm;
}

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        

        reader.onload = function (e) {
            $('#preview').attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}