DROP TABLE IF EXISTS `province`;

CREATE TABLE `province` (
  `code` varchar(16) NOT NULL COMMENT '省份 code',
  `name` varchar(16) NOT NULL COMMENT '省份',
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `province` WRITE;

INSERT INTO `province` (`code`, `name`)
VALUES ('65','新疆维吾尔自治区');

UNLOCK TABLES;
