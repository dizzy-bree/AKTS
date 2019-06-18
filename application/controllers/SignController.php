<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class SignController extends CI_Controller {
	public function Index()
	{
		//$this->load->view('Landing/index');
		parent::__construct();
        $this->load->library('session');
	}

	public function register(){
		$arr = array(
			"username" => $this->input->post('username'),
			"password" => $this->input->post('password'),
			"usertype" => $this->input->post('usertype')
        );
        
		$this->load->model('SignModel');
		$result = $this->SignModel->register($arr);
		echo $result;
	}

	public function registerStudent(){
		$arr = array(
			"username" => $this->input->post('username'),
			"password" => $this->input->post('password'),
			"usertype" => $this->input->post('usertype'),
			"group" => $this->input->post('group')
        );
        
		$this->load->model('SignModel');
		$result = $this->SignModel->registerStudent($arr);
		echo $result;
	}

	public function checkuser(){
		$arr = array(
			"username" => $this->input->post('username'),
			"password" => $this->input->post('password'),
        );
        $this->load->model('SignModel');
        $result = $this->SignModel->checkuser($arr);
        
        // if($result != 0){
        // 	// $_SESSION['username'] = $arr['username'];
        // 	// $_SESSION['usertype'] = $result;
        // 	// $this->session->set_userdata('username', $arr['username']);
        // }
        $this->session->set_userdata('username', $arr['username']);
        $this->session->set_userdata('password', $arr['password']);
        $this->session->set_userdata('usertype', $result[0]);
        $this->session->set_userdata('group', $result[1]);

        echo $result[0];
	}
}
?>