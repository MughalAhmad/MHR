-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 29, 2023 at 02:40 PM
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
  `break` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `schedule`
--

INSERT INTO `schedule` (`id`, `gName`, `g_Email`, `jName`, `lName`, `sTime`, `eTime`, `break`) VALUES
(1, 'ahmad', 'dfb@gmail.com', 'fgnfn', 'jk.kj.', '12:30 AM', '12:30 AM', 4523),
(2, 'ahmad', 'dfb@gmail.com', 'fgnfn', 'jk.kj.', '12:30 AM', '12:30 AM', 4523),
(3, 'ahmad', 'dfb@gmail.com', 'fgnfn', 'jk.kj.', '12:15 AM', '12:15 AM', 45324),
(4, 'ahmad', 'dfb@gmail.com', 'fgnfn', 'jk.j.', '12:15 AM', '12:15 AM', 5),
(5, 'ahmad', 'dfb@gmail.com', 'fgnfn', 'jk.j.', '12:15 AM', '12:00 AM', 0),
(6, 'ahmad', 'dfb@gmail.com', 'fgnfn', 'kj.j.', '12:00 AM', '12:30 AM', 5674),
(7, 'ahmad', 'dfb@gmail.com', 'fgnfn', 'jk.j.', '12:30 AM', '12:45 AM', 6457);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
