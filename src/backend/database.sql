-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)
--
-- Host: localhost    Database: defaultDatabase
-- ------------------------------------------------------
-- Server version	8.0.29-0ubuntu0.20.04.3

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
-- Table structure for table `Functions`
--

DROP TABLE IF EXISTS `Functions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Functions` (
  `id` int NOT NULL,
  `equation` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Functions`
--

LOCK TABLES `Functions` WRITE;
/*!40000 ALTER TABLE `Functions` DISABLE KEYS */;
INSERT INTO `Functions` VALUES (1,'x'),(2,'x^2'),(3,'1/x');
/*!40000 ALTER TABLE `Functions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Variables`
--

DROP TABLE IF EXISTS `Variables`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Variables` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `date` datetime DEFAULT CURRENT_TIMESTAMP,
  `value` double DEFAULT '0',
  `entity` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Variables`
--

LOCK TABLES `Variables` WRITE;
/*!40000 ALTER TABLE `Variables` DISABLE KEYS */;
INSERT INTO `Variables` VALUES (2,'Precipitação','2022-06-29 00:00:00',0.61,'IPMA'),(3,'Precipitação','2022-06-30 00:00:00',0.2,'IPMA'),(4,'Precipitação','2022-07-02 00:00:00',0.01,'IPMA'),(5,'Precipitação','2022-07-03 00:00:00',0.01,'IPMA'),(7,'Precipitação','2022-07-04 00:00:00',0.02,'IPMA'),(8,'Precipitação','2022-07-05 00:00:00',0.1,'IPMA'),(9,'Precipitação','2022-07-06 00:00:00',0.2,'IPMA'),(10,'Precipitação','2022-07-07 00:00:00',0.22,'IPMA'),(11,'VentoMax','2022-06-28 00:00:00',23,'IPMA'),(12,'VentoMax','2022-06-29 00:00:00',28,'IPMA'),(13,'VentoMax','2022-06-30 00:00:00',34,'IPMA'),(14,'VentoMax','2022-07-01 00:00:00',38,'IPMA'),(15,'VentoMax','2022-07-02 00:00:00',27,'IPMA'),(16,'VentoMax','2022-07-03 00:00:00',30,'IPMA'),(17,'VentoMax','2022-07-04 00:00:00',31,'IPMA'),(18,'VentoMax','2022-07-05 00:00:00',13,'IPMA'),(19,'VentoMax','2022-07-06 00:00:00',13,'IPMA'),(20,'VentoMax','2022-07-07 00:00:00',13,'IPMA'),(21,'TemperaturaMax','2022-06-28 00:00:00',19,'IPMA'),(22,'TemperaturaMax','2022-06-29 00:00:00',18,'IPMA'),(23,'TemperaturaMax','2022-06-30 00:00:00',17,'IPMA'),(24,'TemperaturaMax','2022-07-01 00:00:00',19,'IPMA'),(25,'TemperaturaMax','2022-07-02 00:00:00',23,'IPMA'),(26,'TemperaturaMax','2022-07-03 00:00:00',28,'IPMA'),(27,'TemperaturaMax','2022-07-04 00:00:00',25,'IPMA'),(28,'TemperaturaMax','2022-07-05 00:00:00',21,'IPMA'),(29,'TemperaturaMax','2022-07-06 00:00:00',20,'IPMA'),(30,'TemperaturaMax','2022-07-07 00:00:00',20,'IPMA'),(31,'Precipitação','2022-07-08 00:00:00',0.6,'IPMA'),(32,'Precipitação','2022-07-09 00:00:00',0.41,'IPMA'),(33,'Precipitação','2022-07-10 00:00:00',0.34,'IPMA'),(34,'Precipitação','2022-07-11 00:00:00',0.61,'IPMA'),(35,'VentoMax','2022-07-08 00:00:00',21,'IPMA'),(36,'VentoMax','2022-07-09 00:00:00',20,'IPMA'),(37,'VentoMax','2022-07-10 00:00:00',25,'IPMA'),(38,'VentoMax','2022-07-11 00:00:00',14,'IPMA'),(39,'TemperaturaMax','2022-07-08 00:00:00',21,'IPMA'),(40,'TemperaturaMax','2022-07-09 00:00:00',18,'IPMA'),(41,'TemperaturaMax','2022-07-10 00:00:00',17,'IPMA'),(42,'TemperaturaMax','2022-07-11 00:00:00',28,'IPMA');
/*!40000 ALTER TABLE `Variables` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-11 20:23:31
