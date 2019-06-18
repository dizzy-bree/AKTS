<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="icon" href="https://reviewswithsam.com/wp-content/uploads/2019/04/cropped-jnsdg-32x32.jpg" sizes="32x32">
    <title>Test System(Teacher)</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

    <script src="../assets/teacher_dashboard.js"></script>
    <link rel="icon" href="https://reviewswithsam.com/wp-content/uploads/2019/04/cropped-jnsdg-32x32.jpg" sizes="32x32">
    <link rel="stylesheet" type="text/css" href="../assets/css/share.css">
</head>

<body id="content">
	<div>
		<div class="row">
	        <nav class="navbar navbar-inverse">
	          <div class="container-fluid">
	          	<div class="col-md-1"></div>
	            <div class="navbar-header col-md-2">
					<div class="navbar-brand" style="float:initial; padding: 0px; color: lightyellow;">
						<h3>Test System (Teacher)</h3>
					</div>
	            </div>

	            <div class="collapse navbar-collapse col-md-2" id="myNavbar" style="float: right;">
	              <ul class="nav navbar-nav navbar-right">
	                <li>
	                	<a href="javascript:void(0);" class="login-window">
		                	<span class="glyphicon glyphicon-user">
		                		Hi, <?php echo $this->session->userdata('username') ?>
		                	</span>
	                	</a>
	                </li>
	                <li><a href="<?php echo base_url();?>" class="login-window"><span class="glyphicon glyphicon-log-in"></span> Log out</a></li>
	              </ul>
	            </div>

	            <div class="col-md-1"></div>
	          </div>
	        </nav>
    	</div>

	    <div class="row second-row">
	    	<span><b>Dashboard</b></span>
	    	<span id = "nav-home" class="nav-list">Home</span>
	    	<span id = "nav-quiz" class="nav-list">Question</span>
	    	<span id = "nav-test" class="nav-list">Create a Test</span>
	    	<span id = "nav-category" class="nav-list">Category</span>
	    	<span id = "nav-group" class="nav-list">Group</span>
	    </div>

	    <div class="row main-panel">
	    </div>
	</div>

</body>
</html>