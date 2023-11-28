-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 30, 2023 at 02:07 PM
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
(19, 'ahmad', '0000-00-00', 'dfb', 'dbf', 'dfb@gmail.com', 'dfb', '0000-00-00', 'dfb'),
(20, 'fdb', '0000-00-00', 'dfb', 'dfb', 'fdb', 'fbd', '0000-00-00', 'bf'),
(21, 'dfb', '0000-00-00', 'bfd', 'bf', 'b', 'bds', '0000-00-00', 'b'),
(22, 'j', '0000-00-00', 'klkl', 'nlk', 'nl', 'nkl', '0000-00-00', 'nkln'),
(23, 'Ali', '0000-00-00', 'nkln', 'lkn', 'kln', 'lknkl', '0000-00-00', 'nl'),
(27, 'a', '0000-00-00', '11', '11', '11', '11', '0000-00-00', '11'),
(28, 'dfv', '0000-00-00', 'gfn', 'gfn', 'fgn', 'gfn', '0000-00-00', 'fgn'),
(29, '1', '0000-00-00', '1', '1', '1', '1', '0000-00-00', '1'),
(30, 'kjinji', '0000-00-00', 'mkomlp', 'mujnuj n', ' j kj kj ', 'kjmniomk', '0000-00-00', 'imnjmnki'),
(31, 'kjinji', '0000-00-00', 'mkomlp', 'mujnuj n', ' j kj kj ', 'kjmniomk', '0000-00-00', 'imnjmnki'),
(32, 'kjinji', '0000-00-00', 'mkomlp', 'mujnuj n', ' j kj kj ', 'kjmniomk', '0000-00-00', 'imnjmnki'),
(33, 'kjinji', '0000-00-00', 'mkomlp', 'mujnuj n', ' j kj kj ', 'kjmniomk', '0000-00-00', 'imnjmnki');

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
(35, 'fgnfn'),
(36, 'gfnfn'),
(37, 'gfnfng'),
(38, 'xsedfb'),
(39, '45845'),
(40, 'helo'),
(41, 'helo'),
(42, '341631565163451563201212');

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
(24, 'jk.j.', 'jk.j.'),
(25, 'jk.kj.', 'kj.j.'),
(26, 'k.j.', 'jk.j.'),
(27, 'kj.j.', 'jk.j.'),
(28, 'kj.j.', 'jk.j.'),
(29, 'jk..', 'jk.j.');

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
(1, 'ahmad', 'dfb@gmail.com', 'fgnfn', 'jk.j.', '12:00 AM', '12:15 AM', 1, '2023-05-02'),
(2, 'ahmad', 'dfb@gmail.com', 'gfnfn', 'jk.j.', '12:00 AM', '12:30 AM', 1, '2023-05-01'),
(3, 'ahmad', 'dfb@gmail.com', 'fgnfn', 'jk.j.', '2:45 AM', '3:45 AM', 1, '2023-05-30'),
(4, 'ahmad', 'dfb@gmail.com', 'fgnfn', 'jk.j.', '1:15 AM', '2:30 AM', 1, '2023-05-30'),
(5, 'ahmad', 'dfb@gmail.com', 'fgnfn', 'jk.j.', '1:45 AM', '2:00 AM', 5, '2023-05-30'),
(6, 'ahmad', 'dfb@gmail.com', 'fgnfn', 'jk.j.', '1:00 AM', '2:30 AM', 5, '2023-05-05'),
(7, 'ahmad', 'dfb@gmail.com', 'fgnfn', 'jk.j.', '1:45 AM', '2:45 AM', 5, '2023-05-02T19:00:00.000Z');

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
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `guard_list`
--
ALTER TABLE `guard_list`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `job_type`
--
ALTER TABLE `job_type`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `location`
--
ALTER TABLE `location`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `schedule`
--
ALTER TABLE `schedule`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
