$(document).ready(function(){
    var base_url = window.location.origin;
    $.ajax({
        url: base_url + '/testsystem/Question/getGroup',
        type: 'post',
        data: {
        },
        success: function(res) {
            res = JSON.parse(res);
            var str = "";
            for(var i = 0;i < res.length; i ++){
                str += '<option value="' + res[i].group_id + '">' + res[i].group_name + '</option>';
            }

            $("#up-group").html(str);                
        }, 
        failure: function(err) {
            console.log(err);
        }
    });

    $("#btn_login").click(function(){
        $.ajax({
            url: 'SignController/checkuser',
            type: 'post',
            data: {
                'type': 'signin',
                'username': $("#username").val(),
                'password': $("#password").val()
            },
            success: function(res) {
                if(res == 0){
                    alert("something went wrong!!!");
                }
                else{
                    if(res == "Teacher"){
                        location.href = "./Dashboard/teacher";
                    }
                    else{
                        location.href = "./Dashboard/student";
                    }
                }
            }, 
            failure: function(err) {
                console.log(err);
            }
        });
        // location.href = "Dashboard/teacher"
    });

    $("#btn_register").click(function(evt){
        
        if($("#up-usertype").val() == "Teacher"){
            $.ajax({
                url: '../SignController/register',
                type: 'post',
                data: {
                    'type': 'signup',
                    'username': $("#up-username").val(),
                    'password': $("#up-password").val(),
                    'usertype': $("#up-usertype").val()
                },
                success: function(res) {
                    console.log(res);
                    if(res == 1){
                        alert("Welcome to be member!");
                        location.href = base_url + "/testsystem";
                    }
                    else{
                        alert("Something went wrong!");
                    }
                }, 
                failure: function(err) {
                    console.log(err);
                }
            });
        }
        else{
            $.ajax({
                url: '../SignController/registerStudent',
                type: 'post',
                data: {
                    'type': 'signup',
                    'username': $("#up-username").val(),
                    'password': $("#up-password").val(),
                    'usertype': $("#up-usertype").val(),
                    'group': $("#up-usertype").val()
                },
                success: function(res) {
                    console.log(res);
                    if(res == 1){
                        alert("Welcome to be member!");
                        location.href = base_url + "/testsystem";
                    }
                    else{
                        alert("Something went wrong!");
                    }
                }, 
                failure: function(err) {
                    console.log(err);
                }
            });
        }
        
    });

    $("#up-usertype").change(function(){
        if($(this).val() == 'Student'){
            $("#group").css("display", "block");
        }
        else{
            $("#group").css("display", "none");
        }
    });
});