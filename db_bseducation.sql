-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 30, 2019 at 07:40 PM
-- Server version: 10.1.29-MariaDB
-- PHP Version: 7.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_bseducation`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_answer`
--

CREATE TABLE `tbl_answer` (
  `answer_id` int(100) NOT NULL,
  `answer_test` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_answer`
--

INSERT INTO `tbl_answer` (`answer_id`, `answer_test`) VALUES
(1, 'Dynamic Script for Frontend'),
(2, 'Static Script for Frontend'),
(3, 'span'),
(4, 'div'),
(5, 'text'),
(6, 'p'),
(7, 'array is first argument'),
(8, 'val1 is array and val2 is value'),
(9, 'val1 is value and val2 is value'),
(10, 'val1 is value and val2 is array'),
(11, 'Desktop programming language'),
(12, 'Hyper Text Markup Language'),
(13, 'back:red'),
(14, 'back-color:red'),
(15, 'color:red'),
(16, 'background:red'),
(17, 'no'),
(18, 'yes'),
(19, 'yes'),
(20, 'no'),
(21, 'MMV'),
(22, 'MVC'),
(23, 'MVP'),
(24, 'MC'),
(25, 'cd'),
(26, 'ab'),
(27, 'aa'),
(28, 'bb'),
(29, 'cc'),
(30, 'dd'),
(31, 'aaa'),
(32, 'bbbb');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_category`
--

CREATE TABLE `tbl_category` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(100) NOT NULL,
  `category_description` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_category`
--

INSERT INTO `tbl_category` (`category_id`, `category_name`, `category_description`) VALUES
(1, 'category1', 'HTML Category'),
(2, 'category2', 'Javscript Category'),
(3, 'category3', 'PHP Category');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_group`
--

CREATE TABLE `tbl_group` (
  `group_id` int(11) NOT NULL,
  `group_name` varchar(100) NOT NULL,
  `group_description` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_group`
--

INSERT INTO `tbl_group` (`group_id`, `group_name`, `group_description`) VALUES
(6, 'group1', 'This group for class1.'),
(7, 'group2', 'This group for class2.');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_question`
--

CREATE TABLE `tbl_question` (
  `question_id` int(11) NOT NULL,
  `question_text` varchar(250) DEFAULT NULL,
  `question_correct_score` float NOT NULL,
  `question_type` varchar(20) NOT NULL,
  `question_category_id` int(11) NOT NULL,
  `question_correct_answerid` varchar(20) NOT NULL,
  `attach_image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_question`
--

INSERT INTO `tbl_question` (`question_id`, `question_text`, `question_correct_score`, `question_type`, `question_category_id`, `question_correct_answerid`, `attach_image`) VALUES
(1, 'What is javascript?', 5, 'basic', 2, '1', ''),
(2, '_ tag is for text', 5, 'multi', 1, '2,4', ''),
(3, 'array_push(val1, val2)', 5, 'multi', 3, '1,4', ''),
(4, 'What is HTML?', 5, 'basic', 1, '1', ''),
(5, 'how to set background color as red', 5, 'multi', 2, '3', ''),
(6, 'Look handsome?', 5, 'basic', 2, '1', ''),
(7, 'The dog is animal', 3, 'basic', 2, '1', ''),
(8, 'CI is base on _', 5, 'multi', 1, '2', ''),
(9, 'aaa', 4, 'basic', 1, '1', '1555470524Ene.png'),
(10, 'new question', 4, 'open', 2, 'my answer', '1555509151images_(3).jpg'),
(11, 'quiz1', 5, 'multi', 2, '2,3', '15556062351.png'),
(12, 'new question', 4, 'open', 2, 'my answer', '1555509151images_(3).jpg'),
(13, 'quiz2', 5, 'open', 2, 'my answer1', '15556062351.png'),
(14, 'aaabbbb', 10, 'basic', 2, '2', '1556216101images_(1).jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_rel_question_answer`
--

CREATE TABLE `tbl_rel_question_answer` (
  `qid` int(100) DEFAULT NULL,
  `ansid` int(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_rel_question_answer`
--

INSERT INTO `tbl_rel_question_answer` (`qid`, `ansid`) VALUES
(1, 1),
(1, 2),
(2, 3),
(2, 4),
(2, 5),
(2, 6),
(3, 7),
(3, 8),
(3, 9),
(3, 10),
(4, 11),
(4, 12),
(5, 13),
(5, 14),
(5, 15),
(5, 16),
(6, 17),
(6, 18),
(7, 19),
(7, 20),
(8, 21),
(8, 22),
(8, 23),
(8, 24),
(9, 25),
(9, 26),
(11, 27),
(11, 28),
(11, 29),
(11, 30),
(14, 31),
(14, 32);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_test`
--

CREATE TABLE `tbl_test` (
  `id` int(11) NOT NULL,
  `test_name` varchar(100) NOT NULL,
  `test_group` varchar(100) NOT NULL,
  `test_duration` varchar(100) NOT NULL,
  `test_numberB` int(11) NOT NULL,
  `test_numberA` int(11) NOT NULL,
  `test_createTime` varchar(100) NOT NULL,
  `categories` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_test`
--

INSERT INTO `tbl_test` (`id`, `test_name`, `test_group`, `test_duration`, `test_numberB`, `test_numberA`, `test_createTime`, `categories`) VALUES
(3, 'Test1', '6', '1min', 1, 0, '2019-04-23', '2,3'),
(4, 'Test2', '7', '1.5min', 1, 1, '2019-04-06', '3,1'),
(5, 'Advanced test1', '7', '1.5min', 2, 2, '2019-04-06', '1,2'),
(6, 'Test5', '6', '2min', 4, 3, '2019-04-03', '2'),
(7, 'Advanced test2', '7', '1min', 2, 3, '2019-04-06', '1,2');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `id` int(11) NOT NULL,
  `username` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `user_type` varchar(100) DEFAULT NULL,
  `user_group` int(11) DEFAULT '0',
  `applied_tests` varchar(250) DEFAULT NULL,
  `marks` varchar(250) DEFAULT NULL,
  `taken_time` varchar(250) DEFAULT NULL,
  `upload_image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`id`, `username`, `password`, `user_type`, `user_group`, `applied_tests`, `marks`, `taken_time`, `upload_image`) VALUES
(5, 'Bogdan', '123', 'Student', 7, 'Advanced test1,Test2,Advanced test2', '1,3,7', '1,2,3', ''),
(13, 'Teacher1', 'teacher1', 'Teacher', 0, '', '', '', ''),
(14, 'Teacher2', 'teacher2', 'Teacher', 0, '', '', '', ''),
(15, 'lion', '123', 'Student', 7, 'Advanced test1,Advanced test2,Test2', '4,8,3', '', ''),
(17, 'ddd', '123', 'Student', 7, 'Test2,Advanced test2,Advanced test1', '1,5,10', '1,2,0min', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_answer`
--
ALTER TABLE `tbl_answer`
  ADD PRIMARY KEY (`answer_id`);

--
-- Indexes for table `tbl_category`
--
ALTER TABLE `tbl_category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `tbl_group`
--
ALTER TABLE `tbl_group`
  ADD PRIMARY KEY (`group_id`);

--
-- Indexes for table `tbl_question`
--
ALTER TABLE `tbl_question`
  ADD PRIMARY KEY (`question_id`);

--
-- Indexes for table `tbl_test`
--
ALTER TABLE `tbl_test`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_answer`
--
ALTER TABLE `tbl_answer`
  MODIFY `answer_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `tbl_category`
--
ALTER TABLE `tbl_category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_group`
--
ALTER TABLE `tbl_group`
  MODIFY `group_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tbl_question`
--
ALTER TABLE `tbl_question`
  MODIFY `question_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `tbl_test`
--
ALTER TABLE `tbl_test`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
