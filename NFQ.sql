-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:8889
-- Generation Time: Jul 06, 2016 at 05:55 PM
-- Server version: 5.5.42
-- PHP Version: 7.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `NFQ`
--

-- --------------------------------------------------------

--
-- Table structure for table `Groups`
--

CREATE TABLE `Groups` (
  `Id` int(11) NOT NULL,
  `Title` varchar(30) NOT NULL,
  `Picture` varchar(30) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Groups`
--

INSERT INTO `Groups` (`Id`, `Title`, `Picture`) VALUES
(1, 'Electronic Music', '/static/groups/1.jpg'),
(2, 'Data Science', '/static/groups/2.jpg'),
(3, 'Literature', '/static/groups/3.jpg'),
(4, 'Front-end', '/static/groups/4.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `Id` int(11) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Surname` varchar(30) NOT NULL,
  `Position` varchar(30) NOT NULL,
  `Image` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`Id`, `Name`, `Surname`, `Position`, `Image`) VALUES
(1, 'Mindaugas', 'Kunevičius', 'Front-end Developer', '/static/users/mindaugas.jpg'),
(2, 'Rytis', 'Zemkauskas', 'Journalist', '/static/users/rytis.jpg'),
(3, 'Albert', 'Camus', 'Writer', '/static/users/albert.jpg'),
(4, 'Stephen', 'Hawking', 'Theorethical Physicist', '/static/users/stephen.jpg'),
(5, 'Thom', 'Yorke', 'Musician', '/static/users/thom.jpg'),
(6, 'Woody', 'Allen', 'Actor / Director', '/static/users/woody.jpg'),
(7, 'Winston', 'Churchill', 'Politician', '/static/users/winston.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `UsersToGroups`
--

CREATE TABLE `UsersToGroups` (
  `Id` int(11) NOT NULL,
  `UserId` int(11) NOT NULL,
  `GroupId` int(11) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `UsersToGroups`
--

INSERT INTO `UsersToGroups` (`Id`, `UserId`, `GroupId`) VALUES
(1, 1, 1),
(2, 2, 3),
(3, 3, 3),
(5, 5, 1),
(6, 1, 2),
(8, 7, 1),
(9, 4, 2),
(10, 1, 4),
(11, 6, 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Groups`
--
ALTER TABLE `Groups`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `UsersToGroups`
--
ALTER TABLE `UsersToGroups`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Groups`
--
ALTER TABLE `Groups`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=28;
--
-- AUTO_INCREMENT for table `UsersToGroups`
--
ALTER TABLE `UsersToGroups`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=28;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
