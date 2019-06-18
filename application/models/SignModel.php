<?php
class SignModel extends CI_Model{
	public function __construct() {
		parent::__construct();

		$this->db = $this->load->database('default',true);
	}
	
	public function index(){

	}
	public function register($arr){
		$sql = "SELECT * FROM tbl_user WHERE username='".$arr["username"]."' AND password='".$arr["password"]."'";
		$result = $this->db->query($sql);
		if($result->num_rows() > 0)
			return 0;
		$sql = "INSERT INTO tbl_user (username, user_type, password) VALUES ('".$arr["username"]."','".$arr["usertype"]."','".$arr["password"]."')";
		$result = $this->db->query($sql);
		return $result;
	}

	public function registerStudent($arr){
		$sql = "SELECT * FROM tbl_user WHERE username='".$arr["username"]."' AND password='".$arr["password"]."'";
		$result = $this->db->query($sql);
		if($result->num_rows() > 0)
			return 0;
		$sql = "INSERT INTO tbl_user (username, user_type, password, user_group) VALUES ('".$arr["username"]."','".$arr["usertype"]."','".$arr["password"]."','".$arr["group"]."')";
		$result = $this->db->query($sql);
		return $result;
	}

	public function checkuser($arr){
		$sql = "SELECT * FROM tbl_user WHERE username='".$arr["username"]."' AND password='".$arr["password"]."'";
		$result = $this->db->query($sql);
		if($result->num_rows() > 0){
			foreach ($result->result() as $row)
			{	
				$arr = [];
			    array_push($arr, $row->user_type);
			    array_push($arr, $row->user_group);
			    return $arr;
			}
		}
		else
			return 0;
	}
}