-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 01, 2023 at 02:12 PM
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
(1, 'ahmad', 'dfb@gmail.com', 'fgnfn', 'jk.j.', '3:00 AM', '3:00 AM', 123, 'Thu Jun 01 2023'),
(2, 'ahmad', 'dfb@gmail.com', 'fgnfn', 'jk.j.', '3:00 AM', '3:30 AM', 768, 'Thu Jun 01 2023'),
(3, 'ahmad', 'dfb@gmail.com', 'fgnfn', 'jk.j.', '2:45 AM', '2:45 AM', 4325, 'Thu Jun 01 2023'),
(4, 'ahmad', 'dfb@gmail.com', 'gfnfn', 'jk.kj.', '3:15 AM', '2:30 AM', 65, 'Thu Jun 01 2023'),
(5, 'ahmad', 'dfb@gmail.com', 'fgnfn', 'jk.j.', '12:15 AM', '12:15 AM', 123, 'Fri Jun 02 2023'),
(6, 'Ali', 'kln', 'fgnfn', 'jk.kj.', '12:00 AM', '12:15 AM', 3243, 'Tue Jun 20 2023'),
(7, 'dfb', 'b', 'gfnfn', 'k.j.', '2:45 AM', '3:15 AM', 43, 'Thu Jun 01 2023'),
(8, 'dfb', 'b', 'gfnfn', 'k.j.', '2:45 AM', '3:15 AM', 43, 'Thu Jun 01 2023'),
(9, 'Ali', 'kln', 'gfnfng', 'k.j.', '3:00 AM', '3:00 AM', 67, 'Thu Jun 01 2023'),
(10, 'ahmad', 'dfb@gmail.com', 'gfnfng', 'k.j.', '3:00 AM', '2:45 AM', 34, 'Fri Jun 02 2023'),
(11, 'j', 'nl', 'fgnfn', 'k.j.', '1:45 AM', '1:30 AM', 34, 'Fri Jun 02 2023');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `schedule`
--
ALTER TABLE `schedule`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `schedule`
--
ALTER TABLE `schedule`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
