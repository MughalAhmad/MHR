-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 10, 2023 at 03:39 AM
-- Server version: 5.7.44-cll-lve
-- PHP Version: 8.1.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mhrguard_final`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(100) NOT NULL,
  `userId` int(100) NOT NULL DEFAULT '0',
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` varchar(100) NOT NULL DEFAULT 'admin'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `userId`, `username`, `email`, `password`, `role`) VALUES
(1, 0, 'admin', 'admin@gmail.com', 'admin123', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `admin_img`
--

CREATE TABLE `admin_img` (
  `id` int(100) NOT NULL,
  `userId` int(100) NOT NULL,
  `newImg` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin_img`
--

INSERT INTO `admin_img` (`id`, `userId`, `newImg`) VALUES
(0, 1, '1695033521fdc40f89-8781-48cd-a32e-42e3179377fc.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `guard_list`
--

CREATE TABLE `guard_list` (
  `id` int(255) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `guard_name` varchar(255) NOT NULL,
  `guard_dob` date NOT NULL,
  `guard_phone` text NOT NULL,
  `guard_SIALicense` text NOT NULL,
  `guard_email` varchar(255) NOT NULL,
  `guard_password` varchar(255) NOT NULL,
  `guardEmergenceNo` text NOT NULL,
  `guardSIAExpire` date NOT NULL,
  `guard_adress` varchar(255) NOT NULL,
  `guard_subadmin` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `guard_list`
--

INSERT INTO `guard_list` (`id`, `userId`, `guard_name`, `guard_dob`, `guard_phone`, `guard_SIALicense`, `guard_email`, `guard_password`, `guardEmergenceNo`, `guardSIAExpire`, `guard_adress`, `guard_subadmin`) VALUES
(50, 2, 'z', '0000-00-00', 'z', 'z', 'z', '', 'z', '0000-00-00', 'z', ''),
(63, 1, 'ahmad', '2023-09-11', '12345678', '12345678', 'ahmadkhurshed311@gmail.com', 'ahmad123', '12345678', '2023-12-30', 'gfhgjhfghfgh', ''),
(64, 1, 'ahad dash', '0000-00-00', '123456789', '123456789', 'ahadazam93@gmail.com', 'ahad123', '123456789', '0000-00-00', 'xyz', ''),
(73, 4, 'ghf', '0000-00-00', 'fhgh', 'gf', 'gfh', '', 'gfhg', '0000-00-00', 'fh', ''),
(74, 5, 'jhkh', '0000-00-00', 'jhk', 'hjkhgkgjhk', 'jhk', 'jhghkghkfk', 'hjk', '0000-00-00', 'hjk', ''),
(76, 5, 'fgh', '0000-00-00', 'gfh', 'dgfhgfh', 'jhks', 'chrytu56u5tyj', 'rtttng', '0000-00-00', 'trhrf', '');

-- --------------------------------------------------------

--
-- Table structure for table `job_type`
--

CREATE TABLE `job_type` (
  `id` int(255) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `job` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `job_type`
--

INSERT INTO `job_type` (`id`, `userId`, `job`) VALUES
(53, 3, 'FIRE MARSHAL'),
(54, 3, 'RECEPTION SECURITY'),
(65, 1, 'main gate'),
(66, 3, 'MOBILE PATROL'),
(68, 3, 'DOG HANDLER'),
(69, 3, 'EVENT SECURITY'),
(70, 3, 'EVENT STEWARDS'),
(71, 4, 'SECURITY GUARD'),
(72, 4, 'DOG HANDLER'),
(73, 4, 'DOOR SUPERVIDIOR'),
(74, 4, 'FIRE MARSHAL'),
(75, 4, 'FIRE WARDEN'),
(76, 4, 'CONCIERGE'),
(77, 4, 'MOBILE PATROL'),
(78, 4, 'KEY HOLDING'),
(80, 5, 'hgjghj');

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE `location` (
  `id` int(255) NOT NULL,
  `userId` int(11) NOT NULL,
  `longitude` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `zone` varchar(255) NOT NULL,
  `latitude` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `location`
--

INSERT INTO `location` (`id`, `userId`, `longitude`, `location`, `zone`, `latitude`) VALUES
(39, 2, '74.3046', 'Minar-e-Pakistan', 'Lahore', '31.5925'),
(40, 2, '0.0000', 'aaaa', '1111', '0.0000'),
(45, 3, '-1.8608', '12 aRMOURY ROAD BIRMINGHAM B11 2PP', '', '52.4628'),
(46, 3, '-2.0854', 'AARTEE BRIGHT BAR DY2 0QS', '', '52.5915'),
(47, 3, '-0.1233', 'waterloo London ', '', '51.5034'),
(48, 3, '-0.0834', 'worship square London ', '', '51.5223'),
(49, 3, '-0.0834', 'PIONEER DBJ WARWICK', '', '51.5223'),
(51, 0, '74.3080', 'National History Museum', '', '31.5938'),
(52, 0, '74.3080', 'Test Lata and Lang', '', '31.5938'),
(54, 4, '0.0000', '12 ARMOURY ROAD BIRMINGHAM B11 2PP', '', '0.0000'),
(56, 3, '0.0000', 'Luton', '', '0.0000'),
(57, 1, '-1.6642663', 'Sheffield', '', '53.3958079'),
(61, 1, '-2.388273', 'Manchester', '', '53.4723364'),
(62, 1, '-3.0808689', 'Liverpool', '', '53.4122686'),
(63, 1, '-3.1066036', 'Blackpool', '', '53.8254819'),
(64, 123, '3.4360', 'Lal Kothi', '', '55.3781'),
(65, 5, '6475847658647', 'gvnhfg', '', '6586758'),
(66, 1, '-3.0025796', 'Royal Albert Dock Liverpool', '', '53.4058128'),
(67, 3, '67.0695', 'Lal Kothi', '', '24.8612'),
(68, 3, '-1.6642632', 'Sheffield', '', '53.3958079'),
(69, 1, '-1.5038122', 'Northern General Hospital', '', '53.4009037'),
(93, 1, '', 'London', '', ''),
(94, 1, '', 'Lahore', '', ''),
(95, 1, '', 'London', '', ''),
(96, 1, '', 'canada', '', ''),
(97, 1, '', 'Lahore', '', ''),
(98, 1, '', 'lahore', '', ''),
(99, 1, '', 'london', '', ''),
(100, 1, '', 'pakistan mint lahore', '', ''),
(101, 1, '', 'london', '', ''),
(102, 1, '', 'london', '', ''),
(103, 1, '', 'lahore', '', ''),
(104, 1, '', 'lahore', '', ''),
(105, 1, '', 'lahore', '', ''),
(106, 1, '', 'lahore', '', ''),
(107, 1, '', 'lahore', '', ''),
(108, 3, '', 'Lahore', '', ''),
(109, 1, '', 'Lahore', '', ''),
(110, 1, '', 'Lahore', '', ''),
(112, 1, '', 'lahore', '', ''),
(113, 1, '', 'llb', '', ''),
(114, 1, '', 'newyork', '', ''),
(115, 1, '', 'lahore', '', ''),
(116, 1, '', 'ytfytfytfkutku', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `schedule`
--

CREATE TABLE `schedule` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `gName` varchar(255) NOT NULL,
  `g_Email` varchar(255) NOT NULL,
  `jName` varchar(255) NOT NULL,
  `lName` varchar(255) NOT NULL,
  `sTime` varchar(255) NOT NULL,
  `eTime` varchar(255) NOT NULL,
  `break` int(255) DEFAULT NULL,
  `notes` text,
  `dates` text NOT NULL,
  `date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `schedule`
--

INSERT INTO `schedule` (`id`, `userId`, `gName`, `g_Email`, `jName`, `lName`, `sTime`, `eTime`, `break`, `notes`, `dates`, `date`) VALUES
(10, 2, 'z', '50', 'xv bc', 'D100167', '12:15 AM', '2:00 AM', 43, NULL, 'Sat Jul 01 2023', NULL),
(72, 4, 'ghf', '73', 'DOG HANDLER', '12 ARMOURY ROAD BIRMINGHAM B11 2PP', '3:30', '3:45', 0, '', 'Mon May 01 2023', NULL),
(73, 4, 'ghf', '73', 'SECURITY GUARD', '12 ARMOURY ROAD BIRMINGHAM B11 2PP', '00:00', '00:30', 0, '', 'Fri Sep 01 2023', NULL),
(77, 1, 'ahad dash', '64', 'main gate', 'Sheffield', '3:00', '3:00', 0, '', 'Fri Sep 01 2023', '2023-09-01'),
(78, 1, 'ahmad', '63', 'main gate', 'Sheffield', '3:15', '1:15', 0, '', 'Fri Sep 01 2023', '2023-09-01'),
(80, 1, 'ahad dash', '64', 'main gate', 'Manchester', '2:45', '3:00', 0, '', 'Thu Sep 07 2023', '2023-09-07'),
(81, 1, 'ahmad', '63', 'main gate', 'Manchester', '2:15', '3:45', 0, '', 'Sun Sep 17 2023', '2023-09-17'),
(82, 1, 'ahad dash', '64', 'main gate', 'Manchester', '2:45', '3:00', 0, '', 'Sun Sep 17 2023', '2023-09-17'),
(83, 1, 'ahmad', '63', 'main gate', 'Sheffield', '3:45', '3:15', 0, '', 'Mon Sep 18 2023', '2023-09-18'),
(84, 1, 'ahad dash', '64', 'main gate', 'Sheffield', '3:00', '3:00', 0, '', 'Mon Sep 18 2023', '2023-09-18'),
(85, 1, 'ahad dash', '64', 'main gate', 'Liverpool', '2:45', '3:15', 0, '', 'Thu Sep 21 2023', '2023-09-21'),
(86, 1, 'ahad dash', '64', 'main gate', 'Manchester', '3:00', '2:15', 0, '', 'Sat Sep 23 2023', '2023-09-23'),
(88, 1, 'ahmad', '63', 'main gate', 'Manchester', '2:45', '2:45', 0, '', 'Tue Sep 26 2023', '2023-09-26'),
(89, 1, 'ahad dash', '64', 'main gate', 'Manchester', '3:30', '3:15', 0, '', 'Thu Sep 28 2023', '2023-09-28'),
(90, 1, 'ahmad', '63', 'main gate', 'Sheffield', '3:00', '3:30', 0, '', 'Sun Oct 01 2023', '2023-10-01'),
(91, 1, 'ahad dash', '64', 'main gate', 'Manchester', '3:15', '3:30', 0, '', 'Mon Oct 02 2023', '2023-10-02'),
(92, 1, 'ahad dash', '64', 'main gate', 'Sheffield', '2:45', '4:00', 0, '', 'Sat Aug 26 2023', '2023-08-26'),
(93, 1, 'ahmad', '63', 'main gate', 'Sheffield', '3:15', '3:30', 0, '', 'Mon Aug 28 2023', '2023-08-28'),
(94, 1, 'ahmad', '63', 'main gate', 'Manchester', '1:45', '1:30', 0, '', 'Thu Sep 07 2023', '2023-09-07'),
(95, 5, 'jhkh', '74', 'hgjghj', 'gvnhfg', '00:30', '00:45', 0, '', 'Fri Sep 01 2023', '2023-09-01'),
(96, 1, 'ahmad', '63', 'main gate', 'london', '3:15', '2:00', 0, '', 'Wed Oct 04 2023', '2023-10-04'),
(97, 1, 'ahmad', '63', 'main gate', 'london', '3:00', '3:00', 0, '', 'Sun Oct 08 2023', '2023-10-08'),
(98, 1, 'ahad dash', '64', 'main gate', 'london', '3:00', '3:00', 0, '', 'Mon Oct 09 2023', '2023-10-09'),
(99, 1, 'ahad dash', '64', 'main gate', 'london', '4:00', '3:45', 0, '', 'Tue Oct 10 2023', '2023-10-10'),
(100, 1, 'ahad dash', '64', 'main gate', 'canada', '1:15', '4:00', 0, '', 'Wed Oct 11 2023', '2023-10-11'),
(101, 1, 'ahmad', '63', 'main gate', 'Lahore', '1:00', '5:00', 0, '', 'Fri Oct 06 2023', '2023-10-06');

-- --------------------------------------------------------

--
-- Table structure for table `sub`
--

CREATE TABLE `sub` (
  `id` int(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `job` varchar(100) NOT NULL,
  `contact` varchar(100) NOT NULL,
  `newImg` varchar(100) NOT NULL,
  `role` varchar(100) NOT NULL DEFAULT 'subadmin',
  `sstatus` int(100) NOT NULL,
  `state` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sub`
--

INSERT INTO `sub` (`id`, `username`, `email`, `password`, `job`, `contact`, `newImg`, `role`, `sstatus`, `state`) VALUES
(1, 'Ahmad', 'ahmad@gmail.com', 'ahmad123', 'sub1', '03114608083566', '', 'subadmin', 1, 'Deactive'),
(2, 'Zahid', 'zahid@gmail.com', 'zahid123', 'Sub2', '0316428915600000', '', 'subadmin', 1, 'Active'),
(3, 'Ahad', 'ahad@gmail.com', 'ahad123', 'sub3', '1234567', '', 'subadmin', 1, 'Active'),
(4, 'MHR Support Ltd', 'control@mhrsupport.com', 'Control123', 'Control Room', '0208 0640 607', '', 'subadmin', 1, 'Active'),
(5, 'test@gmail.com', 'test123@gmail.com', '123', 'test123', '12345678', '', 'subadmin', 1, 'Deactive');

-- --------------------------------------------------------

--
-- Table structure for table `subadmin`
--

CREATE TABLE `subadmin` (
  `id` int(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` varchar(100) NOT NULL DEFAULT 'subadmin'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `subadmin`
--

INSERT INTO `subadmin` (`id`, `username`, `email`, `password`, `role`) VALUES
(1, 'subadmin', 'sub@gmail.com', 'sub123', 'subadmin');

-- --------------------------------------------------------

--
-- Table structure for table `sub_img`
--

CREATE TABLE `sub_img` (
  `id` int(100) NOT NULL,
  `userId` int(100) NOT NULL,
  `newImg` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sub_img`
--

INSERT INTO `sub_img` (`id`, `userId`, `newImg`) VALUES
(60, 2, '1693908759aeb9808f-ce62-4bb9-bdc3-9c5c8e29cf2c.jpg'),
(73, 1, '1694075328Screenshot (10).png'),
(75, 4, '1694079991'),
(103, 5, '1695030183aeb9808f-ce62-4bb9-bdc3-9c5c8e29cf2c.jpg'),
(123, 3, '1695033097aeb9808f-ce62-4bb9-bdc3-9c5c8e29cf2c.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `guard_list`
--
ALTER TABLE `guard_list`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `job_type`
--
ALTER TABLE `job_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `schedule`
--
ALTER TABLE `schedule`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sub`
--
ALTER TABLE `sub`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sub_img`
--
ALTER TABLE `sub_img`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `guard_list`
--
ALTER TABLE `guard_list`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;

--
-- AUTO_INCREMENT for table `job_type`
--
ALTER TABLE `job_type`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT for table `location`
--
ALTER TABLE `location`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=117;

--
-- AUTO_INCREMENT for table `schedule`
--
ALTER TABLE `schedule`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- AUTO_INCREMENT for table `sub`
--
ALTER TABLE `sub`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `sub_img`
--
ALTER TABLE `sub_img`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=124;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
