
### Schema
# ------------------------------------------------------------

DROP TABLE IF EXISTS `burgers`;

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE `burgers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `burger_name` varchar(100) NOT NULL,
  `devoured` BOOLEAN DEFAULT false,
  PRIMARY KEY (`id`)
)

