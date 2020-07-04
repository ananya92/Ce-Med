-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: ce_meddb
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `patientdetails_hospitalinformations`
--

DROP TABLE IF EXISTS `patientdetails_hospitalinformations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patientdetails_hospitalinformations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `doctor` varchar(255) DEFAULT NULL,
  `surgeryBookedTime` datetime DEFAULT NULL,
  `timeOfArrival` datetime DEFAULT NULL,
  `wardDetails` varchar(255) DEFAULT NULL,
  `bedDetails` varchar(255) DEFAULT NULL,
  `preAdmissionNumber` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `CaseId` int(4) unsigned zerofill NOT NULL,
  PRIMARY KEY (`id`),
  KEY `CaseId` (`CaseId`),
  CONSTRAINT `patientdetails_hospitalinformations_ibfk_1` FOREIGN KEY (`CaseId`) REFERENCES `cases` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patientdetails_hospitalinformations`
--

LOCK TABLES `patientdetails_hospitalinformations` WRITE;
/*!40000 ALTER TABLE `patientdetails_hospitalinformations` DISABLE KEYS */;
INSERT INTO `patientdetails_hospitalinformations` VALUES (1,'Dr John Doe','2020-06-17 16:40:00','2020-06-10 16:38:00','78F','23','19982325','2020-06-24 15:23:24','2020-06-26 01:15:35',0001),(2,'Doctor John Doe 2','2020-06-18 17:30:00','2020-06-28 01:30:00','2F2','11','2523','2020-06-26 01:32:39','2020-06-26 01:32:39',0002),(3,'Dr John 3','2020-06-17 01:39:00','2020-06-27 01:39:00','23B','12','123567','2020-06-26 01:40:30','2020-06-26 01:40:30',0003);
/*!40000 ALTER TABLE `patientdetails_hospitalinformations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-02 18:33:01
