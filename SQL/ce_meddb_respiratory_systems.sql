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
-- Table structure for table `respiratory_systems`
--

DROP TABLE IF EXISTS `respiratory_systems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `respiratory_systems` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Respiratory_Arrest_within_24hours` smallint DEFAULT NULL,
  `Mechanically_Ventilated_with_FiO2_gt_6per` smallint DEFAULT NULL,
  `Mechanically_Ventilated` smallint DEFAULT NULL,
  `Noninvasive_Positive_Pressure_Ventilation` smallint DEFAULT NULL,
  `Extubation_lt_24hrs` smallint DEFAULT NULL,
  `Intubated_NonVentilated` smallint DEFAULT NULL,
  `Oxygen_O2_gt_40Perc` smallint DEFAULT NULL,
  `High_Flow_Nasal_Cannula` smallint DEFAULT NULL,
  `Saturation_lt_90per_O2_gt_40Perc` smallint DEFAULT NULL,
  `Respiratory_Acidosis` smallint DEFAULT NULL,
  `Respiratory_Alkalosis` smallint DEFAULT NULL,
  `Respiratory_Rate_gt_30pmin` smallint DEFAULT NULL,
  `Hypoventilation_lt_10pmin` smallint DEFAULT NULL,
  `Bronchospasm_Stridor` smallint DEFAULT NULL,
  `lt_2_Hourly_Nebulisation` smallint DEFAULT NULL,
  `lt_2_Hourly_Suctioning` smallint DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `CaseId` int(4) unsigned zerofill NOT NULL,
  PRIMARY KEY (`id`),
  KEY `CaseId` (`CaseId`),
  CONSTRAINT `respiratory_systems_ibfk_1` FOREIGN KEY (`CaseId`) REFERENCES `cases` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `respiratory_systems`
--

LOCK TABLES `respiratory_systems` WRITE;
/*!40000 ALTER TABLE `respiratory_systems` DISABLE KEYS */;
/*!40000 ALTER TABLE `respiratory_systems` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-02 18:33:00
