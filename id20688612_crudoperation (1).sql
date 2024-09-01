-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 02, 2023 at 10:04 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `id20688612_crudoperation`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(20) NOT NULL,
  `contact` bigint(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `name`, `email`, `password`, `contact`) VALUES
(2, 'Admin', 'admin@gmail.com', '123', 9016395600);

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

CREATE TABLE `articles` (
  `img` text NOT NULL,
  `date` varchar(30) NOT NULL,
  `intro` varchar(2000) NOT NULL,
  `id` int(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`img`, `date`, `intro`, `id`) VALUES
('http://127.0.0.1/ADMIN/upload/blog-1.jpg', '01 july 2003', 'REBUM DIAM CLITA LOREM ERAT MAGNA EST ERAT', 2),
('http://127.0.0.1/ADMIN/upload/blog-2.jpg', '18 june 2003', 'REBUM DIAM CLITA LOREM ERAT MAGNA EST ERAT', 3),
('http://127.0.0.1/ADMIN/upload/blog-3.jpg', '02 june 2003', 'REBUM DIAM CLITA LOREM ERAT MAGNA EST ERAT', 4);

-- --------------------------------------------------------

--
-- Table structure for table `dream_project`
--

CREATE TABLE `dream_project` (
  `img` text NOT NULL,
  `name` varchar(60) NOT NULL,
  `address` varchar(90) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dream_project`
--

INSERT INTO `dream_project` (`img`, `name`, `address`) VALUES
('http://127.0.0.1/ADMIN/upload/portfolio-2.jpg', 'PROJECT B', '123 Street, New York, AUSTRALIYA'),
('http://127.0.0.1/ADMIN/upload/portfolio-3.jpg', 'PROJECT C', '123 Street, New York, AUSTRALIYA'),
('http://127.0.0.1/ADMIN/upload/portfolio-4.jpg', 'PROJECT D', '123 Street, New York, USA'),
('http://127.0.0.1/ADMIN/upload/portfolio-5.jpg', 'PROJECT E', '123 Street, New York, USA'),
('http://127.0.0.1/ADMIN/upload/service-6.jpg', 'PROJECT F', '123 Street, New York, USA'),
('http://127.0.0.1/ADMIN/upload/portfolio-1.jpg', 'PROJECT NAME', '123 Street, New York, USA');

-- --------------------------------------------------------

--
-- Table structure for table `expertworkers`
--

CREATE TABLE `expertworkers` (
  `img` text NOT NULL,
  `name` varchar(60) NOT NULL,
  `profession` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `expertworkers`
--

INSERT INTO `expertworkers` (`img`, `name`, `profession`) VALUES
('http://127.0.0.1/ADMIN/upload/team-1.jpg', 'ADAM PHILLIPS', 'CEO & FOUNDER'),
('http://127.0.0.1/ADMIN/upload/team2.jpg', 'DYLAN ADAMS', 'Civil Engineer'),
('http://127.0.0.1/ADMIN/upload/team3.jpg', 'JHON DOE', 'Interior Designer'),
('http://127.0.0.1/ADMIN/upload/team4.jpg', 'JOSH DUNN', 'painter');

-- --------------------------------------------------------

--
-- Table structure for table `homeconstruction`
--

CREATE TABLE `homeconstruction` (
  `img` text NOT NULL,
  `name` varchar(30) NOT NULL,
  `detail` varchar(60) NOT NULL,
  `more` varchar(60) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `homeconstruction`
--

INSERT INTO `homeconstruction` (`img`, `name`, `detail`, `more`, `id`) VALUES
('http://127.0.0.1/ADMIN/upload/service-1.jpg', 'ARCHITECTURE DESIGN', 'Duo dolore et diam sed ipsum stet amet duo diam. ', 'read more', 1),
('http://127.0.0.1/ADMIN/upload/service-2.jpg', 'BUILDING CONSTRUCTION', 'Duo dolore et diam sed ipsum stet amet duo diam. ', 'read more', 2),
('http://127.0.0.1/ADMIN/upload/service-3.jpg', 'FIXING & SUPPORT', 'Duo dolore et diam sed ipsum stet amet duo diam. ', 'read more', 3),
('http://127.0.0.1/ADMIN/upload/service-4.jpg', 'HOUSE RENOVATION', 'Duo dolore et diam sed ipsum stet amet duo diam. ', 'read more', 4),
('http://127.0.0.1/ADMIN/upload/service-5.jpg', 'INTERIOR DESIGN', 'Duo dolore et diam sed ipsum stet amet duo diam. ', 'read more', 5),
('http://127.0.0.1/ADMIN/upload/service-6.jpg', 'PAINTING', 'Duo dolore et diam sed ipsum stet amet duo diam. ', 'read more', 6);

-- --------------------------------------------------------

--
-- Table structure for table `leavecomment`
--

CREATE TABLE `leavecomment` (
  `name` varchar(30) NOT NULL,
  `email` text NOT NULL,
  `website` varchar(30) NOT NULL,
  `comment` varchar(30) NOT NULL,
  `id` int(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `leavecomment`
--

INSERT INTO `leavecomment` (`name`, `email`, `website`, `comment`, `id`) VALUES
('', '', '', '', 1),
('$name', '$email', '$website', '$comment', 2),
('hemal', 'hem@lpatel4634', 'w3school', 'nothing', 3),
('hemal patel', 'hemalpatel4634@gmail.com', 'kk', 'klkk', 4);

-- --------------------------------------------------------

--
-- Table structure for table `newimages`
--

CREATE TABLE `newimages` (
  `id` int(11) NOT NULL,
  `img` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `newimages`
--

INSERT INTO `newimages` (`id`, `img`) VALUES
(1, 'https://hemupatelapp.000webhostapp.com/images/project%20images/portfolio-1.jpg'),
(2, 'https://hemupatelapp.000webhostapp.com/images/project%20images/portfolio-2.jpg'),
(3, 'https://hemupatelapp.000webhostapp.com/images/project%20images/portfolio-3.jpg'),
(4, 'https://hemupatelapp.000webhostapp.com/images/project%20images/portfolio-4.jpg'),
(5, 'https://hemupatelapp.000webhostapp.com/images/project%20images/portfolio-5.jpg'),
(6, 'https://hemupatelapp.000webhostapp.com/images/project%20images/portfolio-6.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `newslettername`
--

CREATE TABLE `newslettername` (
  `name` varchar(60) NOT NULL,
  `email` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `newslettername`
--

INSERT INTO `newslettername` (`name`, `email`) VALUES
('', ''),
('ashvin patel', 'kri@gmail.com'),
('bhargav patel', 'bhargav@gmial.com'),
('friyaaa', 'friyaa@gmail.com'),
('hemal', 'hemal@gmail.com'),
('hemal patel', 'hemalpatel@gmail.com'),
('heyyyy', 'heyyyy@gmail.com'),
('hwyyy', 'new@gmail.com'),
('kailash', 'lailasg@gmail.com'),
('keyaaa', 'keyaa@gmail.com'),
('kke;wqke', 'abc@gmail.com'),
('krina', 'kri@gmail.com'),
('meet patel', 'hemal@gmail.com'),
('neww', 'new@gmail.com'),
('newwq', 'new@gmail.com'),
('normal', 'normal@gmail.com'),
('norml', 'normal@gmail.com'),
('patel Hemal ashvinbhai', 'hemalpatel4634@gmail.com'),
('zoya', 'zoya@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `portfolio1`
--

CREATE TABLE `portfolio1` (
  `id` int(11) NOT NULL,
  `img` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `portfolio1`
--

INSERT INTO `portfolio1` (`id`, `img`) VALUES
(1, 'https://hemupatelapp.000webhostapp.com/images/project%20images/portfolio-2.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `portfolio2`
--

CREATE TABLE `portfolio2` (
  `id` int(11) NOT NULL,
  `img` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `portfolio2`
--

INSERT INTO `portfolio2` (`id`, `img`) VALUES
(1, 'https://hemupatelapp.000webhostapp.com/images/project%20images/portfolio-1.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `projectdata`
--

CREATE TABLE `projectdata` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` text NOT NULL,
  `city` varchar(30) NOT NULL,
  `address` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `projectdata`
--

INSERT INTO `projectdata` (`id`, `name`, `email`, `password`, `city`, `address`) VALUES
(2, 'patel Hemal ashvinbhai79', 'hemalpatel4634@gmail.com', 'hemal1111', 'vadodara', 'shreedarshan'),
(3, 'patel Hemal ashvinbhai', 'hemalpatel4634@gmail.com', '27349872140', 'surat', 'shopan sharan gota'),
(4, 'meet', 'meet@gmail.com', 'meet123', 'surat', 'surat123'),
(5, 'kailash', 'kailash@gmail.com', '7836493', 'vadodara', 'd-105 kaivana complex'),
(8, '', '', '', '', ''),
(9, 'bhargav', 'bhargav@gmiaol.com', 'i4our', 'fewf', 'efe'),
(10, 'hemal', 'h@gmail.com', '76192', 'qef', 'qdqe'),
(11, 'hemal', 'h@gmail.com', '76192', 'qef', 'qdqe'),
(12, 'hemal', 'h@gmail.com', '76192', 'qef', 'qdqe'),
(13, 'hemal patel', 'hemalpatel4634@gmail.com', 'ewfsdv', 'ch', '123'),
(14, 'hemal', 'hemal@gmail.com', 'sdjc dqh', 'suratttt', 'jndkjqnd');

-- --------------------------------------------------------

--
-- Table structure for table `showdatamakeyourdream`
--

CREATE TABLE `showdatamakeyourdream` (
  `img` text NOT NULL,
  `name` varchar(60) NOT NULL,
  `para` varchar(2000) NOT NULL,
  `id` int(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `showdatamakeyourdream`
--

INSERT INTO `showdatamakeyourdream` (`img`, `name`, `para`, `id`) VALUES
('http://127.0.0.1/ADMIN/upload/1.png', 'Architechtural plan design and build', 'A floor plan is a scaled diagram of a room or building viewed from above. The floor plan may depict an entire building, one floor of a building, or a single room. It may also include measurements, furniture, appliances, or anything else necessary to the purpose of the plan', 1),
('http://127.0.0.1/ADMIN/upload/mesege.png', 'BULDING CONSTRUCTION', 'Building structures are generally constructed on concrete foundations. Based on the soil type and water table level of the area, the foundation chosen can vary. If necessary, soil testing is performed to check the bearing capacity. Shallow foundations are required for low-rise building. For high-rise building, pile foundation is employed. ', 2),
('http://127.0.0.1/ADMIN/upload/fixing and support.jpg', 'Fixing Architecture', 'Our tips to help you improve your architectural glass fixing detail on a wall detailing.A end glazing fixings detail drawing is a technical illustration that shows the specific methods and materials used to secure the edges of a glass panel', 3),
('http://127.0.0.1/ADMIN/upload/Renovation.jpg', 'HOUSE RENOVATION', 'Home renovation is the process of improving and upgrading existing structures in your home to enhance aesthetics, increase functionality, or repair any damage. It can range from minor changes like painting and wallpapering to major alterations like kitchen remodeling, bathroom upgrades, or even adding new rooms.', 4),
('http://127.0.0.1/ADMIN/upload/interior design.jpg', 'INTERIOR DESIGN', ' An interior designer is someone who plans, researches, coordinates, and manages such enhancement projects. Interior design is a multifaceted profession that includes conceptual development, space planning, site inspections, programming, research, communicating with the stakeholders of a project, construction management, and execution of the design.', 5),
('http://127.0.0.1/ADMIN/upload/painting plans.jpeg', 'PAINTING PLANS', 'One of the most important elements is the desire to paint. You may have lots of ideas about what to paint and not enough time, or you may struggle to find inspiration. Wherever you are in the spectrum between lots of ideas and stuck with no creativity,', 6);

-- --------------------------------------------------------

--
-- Table structure for table `submitrequest`
--

CREATE TABLE `submitrequest` (
  `id` int(90) NOT NULL,
  `name` varchar(90) NOT NULL,
  `email` varchar(90) NOT NULL,
  `date` varchar(90) NOT NULL,
  `time` varchar(90) NOT NULL,
  `message` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `submitrequest`
--

INSERT INTO `submitrequest` (`id`, `name`, `email`, `date`, `time`, `message`) VALUES
(3, '', '', '', '', ''),
(4, '', '', '', '', ''),
(5, 'krina patel', 'kri@gmail.com', '29 july', '2:30 pm', 'hellowwww'),
(6, 'meet ', 'meet@gmail.com', '9 july', '1:00 pm', 'nothing right now\r\n'),
(10, 'ashvin ', 'ashvin@gmail.com', '18 june', '5:00 pm', 'nothing right now'),
(13, 'hemal', 'hemalpatel4634@gmail.com', '1 july', '2:00 pm', 'dq'),
(17, 'wfcwe', 'qe@gmail.com', '2 july', '2 pm', 'wdcwdc'),
(18, 'hemal', 'hemal@gmail.com', '1 july', '2 pm', 'wrv'),
(19, 'hemal', 'hemal@gmail.com', '2 july', '3 pm', 'heyy'),
(20, 'hemal', 'hemal@gmail.com', '2 july', '3 pm', 'heyy'),
(21, 'hemal', 'hemal@gmail.com', '3 july', '4 pm', 'helloo'),
(22, '$name', '$email', '$date', '$time', '$message'),
(23, 'patel Hemal ashvinbhai', 'hemalpatel4634@gmail.com', '1', '1', 'sas');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `dream_project`
--
ALTER TABLE `dream_project`
  ADD PRIMARY KEY (`name`);

--
-- Indexes for table `expertworkers`
--
ALTER TABLE `expertworkers`
  ADD PRIMARY KEY (`name`);

--
-- Indexes for table `homeconstruction`
--
ALTER TABLE `homeconstruction`
  ADD PRIMARY KEY (`name`),
  ADD KEY `name` (`name`),
  ADD KEY `name_2` (`name`);

--
-- Indexes for table `leavecomment`
--
ALTER TABLE `leavecomment`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `id` (`name`);

--
-- Indexes for table `newimages`
--
ALTER TABLE `newimages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `newslettername`
--
ALTER TABLE `newslettername`
  ADD PRIMARY KEY (`name`);

--
-- Indexes for table `portfolio1`
--
ALTER TABLE `portfolio1`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `portfolio2`
--
ALTER TABLE `portfolio2`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `projectdata`
--
ALTER TABLE `projectdata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `showdatamakeyourdream`
--
ALTER TABLE `showdatamakeyourdream`
  ADD PRIMARY KEY (`name`);

--
-- Indexes for table `submitrequest`
--
ALTER TABLE `submitrequest`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `newimages`
--
ALTER TABLE `newimages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `portfolio1`
--
ALTER TABLE `portfolio1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `portfolio2`
--
ALTER TABLE `portfolio2`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `projectdata`
--
ALTER TABLE `projectdata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `submitrequest`
--
ALTER TABLE `submitrequest`
  MODIFY `id` int(90) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
