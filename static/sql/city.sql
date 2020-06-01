DROP TABLE IF EXISTS `city`;

CREATE TABLE `city` (
  `code` varchar(16) NOT NULL COMMENT '城市 code',
  `province_code` varchar(16) NOT NULL COMMENT '所属省份',
  `name` varchar(20) NOT NULL COMMENT '城市',
  PRIMARY KEY (`code`),
  KEY `province_code` (`province_code`),
  CONSTRAINT `city_ibfk_1` FOREIGN KEY (`province_code`) REFERENCES `province` (`code`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `city` WRITE;

INSERT INTO `city` (`code`, `province_code`, `name`)
VALUES ('1306','13','保定市');

UNLOCK TABLES;
