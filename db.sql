-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: assignment
-- ------------------------------------------------------
-- Server version	8.0.41

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
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `post_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` longtext NOT NULL,
  `tags` json NOT NULL,
  `views` int NOT NULL,
  `slug` varchar(255) NOT NULL,
  `created_date_time` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`post_id`),
  UNIQUE KEY `post_id_UNIQUE` (`post_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (2,'His mother had always taught him','His mother had always taught him not to ever think of himself as better than others. He\'d tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.','[\"history\", \"american\", \"crime\"]',675,'','2025-12-02 15:20:34'),(3,'His mother had always taught him','His mother had always taught him not to ever think of himself as better than others. He\'d tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.','[\"history\", \"american\", \"crime\"]',675,'','2025-12-02 15:20:34'),(4,'His mother had always taught him','His mother had always taught him not to ever think of himself as better than others. He\'d tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.','[\"history\", \"american\", \"crime\"]',675,'','2025-12-02 15:20:34'),(5,'His mother had always taught him','His mother had always taught him not to ever think of himself as better than others. He\'d tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.','[\"history\", \"american\", \"crime\"]',675,'','2025-12-02 15:20:34'),(6,'His mother had always taught him','His mother had always taught him not to ever think of himself as better than others. He\'d tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.','[\"history\", \"american\", \"crime\"]',675,'','2025-12-02 15:20:34'),(7,'He was an expert but not in a discipline','He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.','[\"french\", \"fiction\", \"english\"]',675,'','2025-12-02 15:20:34'),(8,'He was an expert but not in a discipline','He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.','[\"french\", \"fiction\", \"english\"]',675,'','2025-12-02 15:20:34'),(9,'He was an expert but not in a discipline','He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.','[\"french\", \"fiction\", \"english\"]',675,'he-was-an-expert-but-not-in-a-discipline','2025-12-02 15:20:34'),(10,'He was an expert but not in a discipline','He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.','[\"french\", \"fiction\", \"english\"]',675,'he-was-an-expert-but-not-in-a-discipline','2025-12-02 15:33:57'),(11,'He was an expert but not in a discipline','He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.','[\"french\", \"fiction\", \"english\"]',675,'he-was-an-expert-but-not-in-a-discipline-mUmNcJ','2025-12-02 16:00:12'),(12,'dscsdcsdc','<p>scscsdcscdscdsdcscsdcsdc</p>','[\"sdcsdcsdcs\", \"csdcsdcsd\", \"csdcsdcs\", \"dcsdcscsdcsdc\", \"sdcsdcsc\", \"scscdscdsd\", \"csdcsdcsdc\", \"sdcsdcscdsdcsd\", \"csdcsdcsdcsdc\"]',564,'dscsdcsdc-xj0Opb','2025-12-03 12:44:22'),(13,'referferferfhuefhufr','<ol>\n<li>dfhvbhbvhbvhdfvd<strong>fvdvfdfvdvf<em>dv<span style=\"text-decoration: underline;\">dvdfvdfvfdvdfvdvdfvd<a title=\"fvdvdfvdfv\" href=\"fvdfvdfvdfvd\">fvdfvdfvdfvd</a>fvdfvdfvdfvdfvdfvdfvdf</span></em></strong><em><span style=\"text-decoration: underline;\">vdfvdfvdfv</span></em><span style=\"text-decoration: underline;\">dfvdfvdf</span>vdfvdfvdvdfvd</li>\n</ol>','[\"ferfgebhhbdvhbdfhvbhdvb\", \"dfvbvjfbvhbvhdfv\"]',564,'referferferfhuefhufr-Sp0CnJ','2025-12-03 12:46:08');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(45) NOT NULL,
  `user_email` varchar(45) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_id_UNIQUE` (`user_id`),
  UNIQUE KEY `user_email_UNIQUE` (`user_email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'wobije1584@badfist.com','testing','$2b$10$n7uzObr9AfsUvoguQsZyLej4mFW0VOC9l43LagT.ToKHWp4YxUiW6'),(2,'testing','jovol73428@dwakm.com','$2b$10$n6dsoxHqg.ONZl8izS8sJ.WhHiLiIH/lJUu4AsumprdDpjHTDW2FW');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-12-03 17:31:28
