DROP TABLE IF EXISTS `street`;

CREATE TABLE `street` (
  `code` varchar(16) NOT NULL COMMENT '街道 code',
  `province_code` varchar(16) NOT NULL COMMENT '所属省份',
  `city_code` varchar(16) NOT NULL COMMENT '所属城市',
  `district_code` varchar(16) NOT NULL COMMENT '所属区县',
  `name` varchar(255) NOT NULL COMMENT '街道',
  PRIMARY KEY (`code`),
  KEY `province_code` (`province_code`),
  KEY `city_code` (`city_code`),
  KEY `district_code` (`district_code`),
  CONSTRAINT `street_ibfk_1` FOREIGN KEY (`province_code`) REFERENCES `province` (`code`) ON UPDATE CASCADE,
  CONSTRAINT `street_ibfk_2` FOREIGN KEY (`city_code`) REFERENCES `city` (`code`) ON UPDATE CASCADE,
  CONSTRAINT `street_ibfk_3` FOREIGN KEY (`district_code`) REFERENCES `district` (`code`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `street` WRITE;

INSERT INTO `street` (`code`, `province_code`, `city_code`, `district_code`, `name`)
VALUES ('110101001','11','1101','110101','东华门街道');

UNLOCK TABLES;