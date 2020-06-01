DROP TABLE IF EXISTS `village`;

CREATE TABLE `village` (
  `code` varchar(16) NOT NULL COMMENT '村、小区 code',
  `province_code` varchar(16) NOT NULL COMMENT '所属省份',
  `city_code` varchar(16) NOT NULL COMMENT '所属城市',
  `district_code` varchar(16) NOT NULL COMMENT '所属区县',
  `street_code` varchar(16) NOT NULL COMMENT '所属街道',
  `name` varchar(255) NOT NULL COMMENT '村、小区',
  PRIMARY KEY (`code`),
  KEY `province_code` (`province_code`),
  KEY `city_code` (`city_code`),
  KEY `district_code` (`district_code`),
  KEY `street_code` (`street_code`),
  CONSTRAINT `village_ibfk_1` FOREIGN KEY (`province_code`) REFERENCES `province` (`code`) ON UPDATE CASCADE,
  CONSTRAINT `village_ibfk_2` FOREIGN KEY (`city_code`) REFERENCES `city` (`code`) ON UPDATE CASCADE,
  CONSTRAINT `village_ibfk_3` FOREIGN KEY (`district_code`) REFERENCES `district` (`code`) ON UPDATE CASCADE,
  CONSTRAINT `village_ibfk_4` FOREIGN KEY (`street_code`) REFERENCES `street` (`code`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
