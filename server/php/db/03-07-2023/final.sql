-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 03, 2023 at 08:50 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `final`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` varchar(100) NOT NULL DEFAULT 'admin'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `username`, `email`, `password`, `role`) VALUES
(1, 'admin', 'admin@gmail.com', 'admin123', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `guard_list`
--

CREATE TABLE `guard_list` (
  `id` int(255) NOT NULL,
  `guard_name` varchar(255) NOT NULL,
  `guard_dob` date NOT NULL,
  `guard_phone` text NOT NULL,
  `guard_SIALicense` text NOT NULL,
  `guard_email` varchar(255) NOT NULL,
  `guardEmergenceNo` text NOT NULL,
  `guardSIAExpire` date NOT NULL,
  `guard_adress` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `guard_list`
--

INSERT INTO `guard_list` (`id`, `guard_name`, `guard_dob`, `guard_phone`, `guard_SIALicense`, `guard_email`, `guardEmergenceNo`, `guardSIAExpire`, `guard_adress`) VALUES
(36, 'Ali', '2002-09-05', '03313322996', '12345-1234567-1', 'ali@gmail.com', '0311484804043', '2002-09-23', 'pakistan lahore, Lahore'),
(37, 'Zain', '1999-12-01', '03114608087', '1999-12-1', 'Zain@gmail.com', '03114608086', '1999-12-01', 'pakistan lahore, Lahore'),
(38, 'Yousafs', '1999-11-01', '03114609093', '12345-1234567-1', 'Yousaf@gmail.com', '03114609093', '1999-11-01', 'pakistan lahore, Lahore');

-- --------------------------------------------------------

--
-- Table structure for table `job_type`
--

CREATE TABLE `job_type` (
  `id` int(255) NOT NULL,
  `job` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `job_type`
--

INSERT INTO `job_type` (`id`, `job`) VALUES
(43, 'main Gate'),
(44, 'first floor'),
(45, 'second floor'),
(46, 'helo'),
(47, 'helo'),
(50, 'main street');

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE `location` (
  `id` int(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `zone` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `location`
--

INSERT INTO `location` (`id`, `location`, `zone`) VALUES
(32, 'abc1', '100'),
(33, 'abc2', '200'),
(34, 'abc3', '700'),
(36, 'abc4', '234');

-- --------------------------------------------------------

--
-- Table structure for table `schedule`
--

CREATE TABLE `schedule` (
  `id` int(11) NOT NULL,
  `gName` varchar(255) NOT NULL,
  `g_Email` varchar(255) NOT NULL,
  `jName` varchar(255) NOT NULL,
  `lName` varchar(255) NOT NULL,
  `sTime` varchar(255) NOT NULL,
  `eTime` varchar(255) NOT NULL,
  `break` int(255) NOT NULL,
  `dates` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `schedule`
--

INSERT INTO `schedule` (`id`, `gName`, `g_Email`, `jName`, `lName`, `sTime`, `eTime`, `break`, `dates`) VALUES
(2, 'Ali', 'ali@gmail.com', 'main Gate', 'abc1', '1:45 AM', '1:15 AM', 123, 'Thu Jun 01 2023'),
(3, 'Ahad', 'ahad@gmail.com', 'first floor', 'abc3', '12:00 AM', '8:30 AM', 123, 'Thu Jun 01 2023'),
(4, 'Zain', 'Zain@gmail.com', 'first floor', 'abc2', '1:30 AM', '2:00 AM', 4356, 'Thu Jun 01 2023'),
(5, 'Ahmad', 'ahmad@gmail.com', 'first floor', 'abc1', '2:45 AM', '3:00 AM', 6457, 'Fri Jun 02 2023'),
(6, 'Ahad', 'ahad@gmail.com', 'first floor', 'abc2', '2:30 AM', '3:00 AM', 1, 'Sat Jun 03 2023'),
(7, 'Ali', 'ali@gmail.com', 'main Gate', 'abc1', '2:45 AM', '3:30 AM', 65, 'Wed Jun 07 2023'),
(8, 'Yousaf', 'Yousaf@gmail.com', 'main Gate', 'abc3', '12:30 AM', '2:00 AM', 65, 'Wed Jun 07 2023'),
(9, 'ahad ', 'zahidbilal121@gmail.com', 'second floor', 'abc1', '3:15 AM', '3:45 AM', 23, 'Sun Jun 04 2023'),
(11, 'Zain', 'Zain@gmail.com', 'second floor', 'abc4', '2:30 AM', '2:30 AM', 1, 'Wed Jun 07 2023');

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
  `image` varchar(100) NOT NULL,
  `role` varchar(100) NOT NULL DEFAULT 'subadmin'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sub`
--

INSERT INTO `sub` (`id`, `username`, `email`, `password`, `job`, `contact`, `image`, `role`) VALUES
(1, 'a', 'f', 'g', 's', 'd', '', 'subadmin'),
(2, 'a', 'f', 'w', 's', 'd', '', 'subadmin'),
(3, 'dbf', 'j,mbjn,mbn7686', 'gjhkm6879', 'dfb', '.678678', '', 'subadmin'),
(4, 'dsxv', 're', '4563', 'sdf', '43', '', 'subadmin');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subadmin`
--

INSERT INTO `subadmin` (`id`, `username`, `email`, `password`, `role`) VALUES
(1, 'subadmin', 'sub@gmail.com', 'sub123', 'subadmin');

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
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `guard_list`
--
ALTER TABLE `guard_list`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `job_type`
--
ALTER TABLE `job_type`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `location`
--
ALTER TABLE `location`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `schedule`
--
ALTER TABLE `schedule`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `sub`
--
ALTER TABLE `sub`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
