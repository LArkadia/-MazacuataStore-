CREATE DATABASE  IF NOT EXISTS `mazacuatastore` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `mazacuatastore`;
-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: mazacuatastore
-- ------------------------------------------------------
-- Server version	8.0.27

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
-- Table structure for table `auth`
--

DROP TABLE IF EXISTS `auth`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth` (
  `id` int NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth`
--

LOCK TABLES `auth` WRITE;
/*!40000 ALTER TABLE `auth` DISABLE KEYS */;
INSERT INTO `auth` VALUES (9,'ilovepaper89@example.com','$2b$05$WCUXLhGwzEvLb/H1nf.tk.ft6YRtV7sdhXDo/WKj3OjXTEJTdPB3u'),(70,'ilovepaper@example.com','admin'),(71,'ilovepaper2@example.com','$2b$05$DtV7lU3e6ziypxx1.Lf1n.H4A9YiyI1WDQyLazvCMSo7UNQNUAg9W'),(72,'ilovepaper3@example.com','$2b$05$/igoF6vM9zJ5LwvEWvPyjOnD8RVwUddZsvNqiNPRzBFCM/QFuVI4e'),(73,'ilovepaper4@example.com','$2b$05$9hVBBIUEf.75kkmABtdqiewWERNluZkehK9/Za62nUXnCTCSZwtda'),(74,'ilovepaper5@example.com','$2b$05$qerMqNeiueDzi3nDVpwDyuaI.BswrVqMkLenTMGOMUMa/qGvXf3fW'),(75,'ilovepaper5@example.com','$2b$05$NBQeCybWoEue4ddEvCgdqewuCY5tWbCYNNCtYUlr.dPCUGcnZ.mDO'),(76,'ilovepaper6@example.com','$2b$05$nb/mXCvkFeH.u.6qwnV4ouehweUEGQk8yqXBPIyK/lsjempgV./Mq');
/*!40000 ALTER TABLE `auth` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cliente` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `apellidos` varchar(100) NOT NULL,
  `tipo_usuario` enum('activo','inactivo') NOT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `rfc` varchar(13) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` VALUES (4,'Juan','Pérez Gómez','activo','Calle Principal #123','ABCD123456XYZ','2024-06-11 23:39:55','2024-06-11 23:39:55'),(5,'María','García López','inactivo','Avenida Central #456','EFGH789012ABC','2024-06-11 23:39:55','2024-06-11 23:39:55'),(6,'Carlos','Martínez Rodríguez','activo','Plaza Mayor #789','IJKL345678DEF','2024-06-11 23:39:55','2024-06-11 23:39:55'),(8,'Michael','Scott','activo','Av Siempre Viva 45','RFC14763355','2024-06-14 03:50:34','2024-06-14 03:50:34'),(9,'Jan','Levinson','activo','Av Siempre Viva 45','RFC14763355','2024-06-20 02:58:39','2024-06-20 02:58:39');
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `compra`
--

DROP TABLE IF EXISTS `compra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `compra` (
  `ID_compra` int NOT NULL AUTO_INCREMENT,
  `id_usuario` int DEFAULT NULL,
  `isbn` varchar(100) DEFAULT NULL,
  `fecha_compra` date NOT NULL,
  `cantidad` int NOT NULL,
  `precio_total` decimal(10,2) NOT NULL,
  `estado_compra` enum('pendiente','completada','cancelada') NOT NULL,
  PRIMARY KEY (`ID_compra`),
  KEY `isbn` (`isbn`),
  KEY `fk_usuario_compra` (`id_usuario`),
  CONSTRAINT `compra_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`),
  CONSTRAINT `compra_ibfk_2` FOREIGN KEY (`isbn`) REFERENCES `libro` (`isbn`),
  CONSTRAINT `fk_usuario_compra` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compra`
--

LOCK TABLES `compra` WRITE;
/*!40000 ALTER TABLE `compra` DISABLE KEYS */;
/*!40000 ALTER TABLE `compra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `libro`
--

DROP TABLE IF EXISTS `libro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `libro` (
  `isbn` varchar(100) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `autor` varchar(255) NOT NULL,
  `editorial` varchar(255) NOT NULL,
  `edición` varchar(255) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `precio` float NOT NULL,
  `calificacion` float DEFAULT NULL,
  `portada` varchar(255) DEFAULT NULL,
  `unidades_disponibles` int NOT NULL,
  `ubicacion` varchar(255) DEFAULT NULL,
  `genero` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`isbn`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `libro`
--

LOCK TABLES `libro` WRITE;
/*!40000 ALTER TABLE `libro` DISABLE KEYS */;
INSERT INTO `libro` VALUES 
  ('01','Harry Potter y las tetas de fuego 2','MARCELUS WALLACE','Kanye Producciones','3rd','NULL',16.99,4.67,'https://imagessl5.casadellibro.com/a/l/s5/25/9788498386325.webp',48,NULL,NULL),
  ('02','Harry, El Sucio Potter','El Bananero','Kanye Producciones','2nd','NULL',18.99,4.67,'https://imagessl0.casadellibro.com/a/l/s5/10/9788418173110.webp',48,NULL,NULL),
  ('03','El Diario de Greg','Jeff Kimmey','Molino','2nd','NULL',18.99,4.67,'https://imagessl0.casadellibro.com/a/l/s5/20/9788498672220.webp',48,NULL,NULL),
  ('04','Harry Potter y la piedra filosofal','J.K. Rowling','Salamandra','1st','NULL',15.99,4.5,'https://imagessl2.casadellibro.com/a/l/s5/62/9788498382662.webp',50,'Estante 1','Fantasía'),
  ('05','Harry Potter y el prisionero de Azkaban','J.K. Rowling','Salamandra','1st','NULL',17.99,4.7,'https://imagessl8.casadellibro.com/a/l/s5/28/9788418173028.webp',40,'Estante 3','Fantasía'),
  ('06','Quiúbole con...','Yordi Rosado','Aguilar','2st','Una guía para adolescentes que aborda cambios físicos y emocionales. Ofrece consejos sobre relaciones, sexualidad, drogas, alcohol, comunicación con los padres, internet y redes sociales. Busca ayudar a los jóvenes a tomar mejores decisiones.',299.00,4.7,'https://imagessl8.casadellibro.com/a/l/s5/78/9786073148078.webp',69,'Estante 2','Educación'),
  ('07','MANUAL DE REDSTONE (MINECRAFT)','MOJANG AB','HarperKids','1st','Lleva tu creatividad al máximo con el Manual de redstone de Minecraft. Aprende a construir circuitos transformadores, desde sistemas de seguridad hasta dispositivos ingeniosos que mejorarán tu experiencia de juego.',329.00,5,'https://imagessl0.casadellibro.com/a/l/s5/30/9788418774430.webp',80,'Estante 2','Educación'),
  ('08','Operating System Concepts','Abraham Silberschatz','John Wiley & Sons Inc','7th','Aborda los sistemas más recientes y los conceptos fundamentales que han perdurado en la evolución de los sistemas operativos, proporcionando una base sólida para entender los detalles de sistemas específicos.',564.02,4.4,'https://m.media-amazon.com/images/I/61XVj8lP3jL._SY342_.jpg',80,'Estante 2','Educación'),
  ('09','Yo nunca vi televisión','31 minutos','Planeta Infantil México','1st','"31 Minutos: ¡Tulio, estamos al aire!" sigue a Tulio Triviño y su equipo mientras enfrentan la presión de anunciar una noticia importante. Basado en el show "Yo nunca vi televisión porque es muy fome".',148.00,4.4,'https://imagessl7.casadellibro.com/a/l/s5/37/9786073916837.webp',32,'Estante 3','Infantil'),
  ('10','Cañitas','Carlos Trejo','Planeta','1st','Relata los eventos paranormales que atormentan a la familia de Carlos Trejo desde 1982. Describe la leyenda de la casa embrujada en la calle Cañitas, donde una sesión de ouija abrió la puerta a fenómenos sobrenaturales.',200.00,2.3,'https://m.media-amazon.com/images/I/71oGa5jc5WL._SY342_.jpg',666,'Estante 4','Terror'),
  ('11','Robot Dreams','Sara Varon','NORMA EDITORIAL, S.A.','1st','Cuenta la historia de amistad entre Perro y Robot, interrumpida cuando Robot se oxida en la playa y Perro lo abandona. Ambos buscan nuevas compañías mientras sueñan con un futuro mejor, en una historia sobre amistad, pérdida y perdón.',300.00,4.6,'https://imagessl5.casadellibro.com/a/l/s5/25/9788467951325.webp',4,'Estante 3','Infantil'),
  ('12','La rata con Thinner y otras anécdotas cotidianas de la sociedad latinoamericana actual','Omar Ramírez','Compiladores','1st','Anécdotas de la sociedad latinoamericana es una compilación de Omar Ramírez que muestra el lado más retorcido de la sociedad. Incluye cuentos asquerosos y cuestionables, como la historia de una rata muerta en el ano de alguien y un amor transexual.',10.00,2.9,'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1655002861i/61269938.jpg',20,'Estante 6', 'Entretenimiento'),
  ('13','Dune','FRANK HERBERT','DEBOLSILLO','2019','En el planeta Arrakis, fuente de la especia melange, el duque Leto Atreides y su familia son traicionados. Su hijo Paul enfrenta a los Fremen y gusanos de arena gigantes. "Dune" combina aventura, misticismo, política y ecologismo.',300.00,4.6,'https://imagessl7.casadellibro.com/a/l/s5/67/9788466342667.webp',100,'Estante 2','Ficción'),
  ('14','Pedro Paramo','Juan Rulfo','RM Verlag, S.L','3rd','Por el 50 aniversario, la Fundación Juan Rulfo autorizó una versión original de esta novela. Esta edición garantiza la fidelidad de la obra que revolucionó la literatura con su estilo fragmentado y representación de la idiosincrasia mexicana.',300.00,4.6,'https://imagessl6.casadellibro.com/a/l/s5/06/9788493442606.webp',249.90,'Estante 1','Novelas'),
  ('15','Las batallas en el desierto','José Emilio Pacheco','Ediciones Era','3rd','Es una novela breve que explora la corrupción social y política, la transformación de México y la memoria colectiva de una ciudad amada y criticada. Su estructura permite múltiples interpretaciones y crea una conexión duradera con el lector.',159.90,4.7,'https://m.media-amazon.com/images/I/71f+UzEuVJL._SY342_.jpg',72,'Estante 1','Novelas');
/*!40000 ALTER TABLE `libro` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ticket`
--

DROP TABLE IF EXISTS `ticket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ticket` (
  `id_ticket` int NOT NULL AUTO_INCREMENT,
  `id_compra` int DEFAULT NULL,
  `isbn` varchar(100) DEFAULT NULL,
  `cantidad` int NOT NULL,
  `precio_venta` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_ticket`),
  KEY `id_compra` (`id_compra`),
  KEY `isbn` (`isbn`),
  CONSTRAINT `ticket_ibfk_1` FOREIGN KEY (`id_compra`) REFERENCES `compra` (`ID_compra`),
  CONSTRAINT `ticket_ibfk_2` FOREIGN KEY (`isbn`) REFERENCES `libro` (`isbn`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticket`
--

LOCK TABLES `ticket` WRITE;
/*!40000 ALTER TABLE `ticket` DISABLE KEYS */;
/*!40000 ALTER TABLE `ticket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `apellidos` varchar(100) NOT NULL,
  `tipo_usuario` enum('admin','vendedor') NOT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `rfc` varchar(13) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (7,'Juan','Doe','vendedor','Elm Street 3','RFC15663355','2024-06-11 23:49:14','2024-06-11 23:49:14'),(8,'Michael','Scott','vendedor','Av Siempre Viva 45','RFC14763355','2024-06-11 23:50:26','2024-06-11 23:50:26'),(12,'Lucía','Rodríguez','admin','Plaza de la Constitución 303','RFC4455667788','2024-06-11 01:42:56','2024-06-11 01:42:56'),(69,'Jim','Halpert','admin','Atlanta, Georgia 2613','RFC1222333355','2024-06-11 22:07:27','2024-06-11 23:44:44'),(70,'Michael','Scott','admin','Av Siempre Viva 45','RFC14763355','2024-06-14 04:34:24','2024-06-14 04:34:24'),(71,'OutKast','Nimbus','admin','Av Siempre Viva 45','RFC14653355','2024-06-14 04:49:22','2024-06-14 04:49:22'),(72,'Andre','Nimbus','admin','Av Siempre Viva 45','RFC14653355','2024-06-14 04:49:54','2024-06-14 04:49:54'),(73,'Ricky','Martin','admin','Av Siempre Viva 45','RFC14653355','2024-06-14 05:08:45','2024-06-14 05:08:45'),(74,'Ricky','Martin','admin','Av Siempre Viva 45','RFC14653355','2024-06-14 07:04:33','2024-06-14 07:04:33'),(75,'Ricky','Martin','admin','Av Siempre Viva 45','RFC14653355','2024-06-19 00:05:00','2024-06-19 00:05:00'),(76,'Alvin','Yakitori','admin','Av Siempre Viva 45','RFC14653355','2024-06-19 01:55:38','2024-06-19 01:55:38');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `venta`
--

DROP TABLE IF EXISTS `venta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `venta` (
  `id_venta` int NOT NULL AUTO_INCREMENT,
  `id_usuario` int DEFAULT NULL,
  `isbn` varchar(100) DEFAULT NULL,
  `fecha_venta` date NOT NULL,
  `cantidad_vendida` int NOT NULL,
  `precio_venta` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_venta`),
  KEY `isbn` (`isbn`),
  KEY `fk_tipo_usuario` (`id_usuario`),
  CONSTRAINT `fk_tipo_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `venta_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`),
  CONSTRAINT `venta_ibfk_2` FOREIGN KEY (`isbn`) REFERENCES `libro` (`isbn`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `venta`
--

LOCK TABLES `venta` WRITE;
/*!40000 ALTER TABLE `venta` DISABLE KEYS */;
/*!40000 ALTER TABLE `venta` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-19 20:59:43
