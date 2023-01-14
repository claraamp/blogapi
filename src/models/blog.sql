CREATE TABLE `blog` (
  `idpost` int NOT NULL AUTO_INCREMENT,
  `autor` varchar(45) COLLATE utf8mb3_bin DEFAULT NULL,
  `titulo` varchar(45) COLLATE utf8mb3_bin DEFAULT NULL,
  `datacriado` varchar(45) COLLATE utf8mb3_bin DEFAULT NULL,
  `textopost` varchar(10000) COLLATE utf8mb3_bin DEFAULT NULL,
  PRIMARY KEY (`idpost`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin