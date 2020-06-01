DROP TABLE IF EXISTS `district`;

CREATE TABLE `district` (
  `code` varchar(16) NOT NULL COMMENT '区县 code',
  `province_code` varchar(16) NOT NULL COMMENT '所属省份',
  `city_code` varchar(16) NOT NULL COMMENT '所属城市',
  `name` varchar(255) NOT NULL COMMENT '区县',
  PRIMARY KEY (`code`),
  KEY `province_code` (`province_code`),
  KEY `city_code` (`city_code`),
  CONSTRAINT `district_ibfk_1` FOREIGN KEY (`province_code`) REFERENCES `province` (`code`) ON UPDATE CASCADE,
  CONSTRAINT `district_ibfk_2` FOREIGN KEY (`city_code`) REFERENCES `city` (`code`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `district` WRITE;

INSERT INTO `district` (`code`, `province_code`, `city_code`, `name`)
VALUES ('110101','11','1101','东城区');

UNLOCK TABLES;
