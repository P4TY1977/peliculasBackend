CREATE TABLE `peliculas` (
  `id` int NOT NULL,
  `nombre` varchar(200) DEFAULT NULL,
  `genero` varchar(100) DEFAULT NULL,
  `clasificacion` varchar(5) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4