DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
	`user_idx`	INT	NOT NULL PRIMARY KEY AUTO_INCREMENT,
	`user_name`	VARCHAR(50)	NULL,
	`name`	VARCHAR(100)	NOT NULL,
	`password`	VARCHAR(100)	NOT NULL,
	`sex_dstn_code`	VARCHAR(1)	NULL,
	`mobile_phone`	VARCHAR(50)	NULL
);

DROP TABLE IF EXISTS `guild`;

CREATE TABLE `guild` (
	`guild_idx`	INT	NOT NULL PRIMARY KEY AUTO_INCREMENT,
	`name`	VARCHAR(50)	NOT NULL,
	`guild_introduce`	VARCHAR(500)	NULL,
	`guild_level`	INT	NULL,
	`guild_icon`	INT	NULL
);

DROP TABLE IF EXISTS `character`;

CREATE TABLE `character` (
	`character_idx`	INT	NOT NULL PRIMARY KEY AUTO_INCREMENT,
	`user_idx`	INT	NOT NULL,
	`guild_idx`	INT	NOT NULL,
	`name`	VARCHAR(50)	NULL,
	`is_main_character`	VARCHAR(1)	NULL
);

DROP TABLE IF EXISTS `common_code`;

CREATE TABLE `common_code` (
	`detail_code_idx`	INT	NOT NULL PRIMARY KEY AUTO_INCREMENT,
	`code_group_idx`	INT	NOT NULL,
	`detail_code`	VARCHAR(30)	NULL,
	`code_value`	VARCHAR(30)	NULL,
	`input_id`	VARCHAR(50)	NULL,
	`input_dt`	DATE	NULL	DEFAULT CURRENT_TIMESTAMP,
	`update_id`	VARCHAR(50)	NULL,
	`update_dt`	DATE	NULL,
	`is_used`	VARCHAR(1)	NULL
);

DROP TABLE IF EXISTS `raid`;

CREATE TABLE `raid` (
	`raid_idx`	INT	NOT NULL PRIMARY KEY AUTO_INCREMENT,
	`guild_idx`	INT	NOT NULL,
	`raid_dt`	DATE	NULL,
	`is_out_guild`	VARCHAR(1)	NULL,
	`raid_introduce`	VARCHAR(2000)	NULL,
	`input_id`	VARCHAR(50)	NULL,
	`input_dt`	DATE	NULL	DEFAULT CURRENT_TIMESTAMP,
	`update_id`	VARCHAR(50)	NULL,
	`update_dt`	DATE	NULL
);

DROP TABLE IF EXISTS `raid_apply`;

CREATE TABLE `raid_apply` (
	`raid_apply_idx`	INT	NOT NULL PRIMARY KEY AUTO_INCREMENT,
	`character_idx`	INT	NOT NULL,
	`raid_idx`	INT	NOT NULL,
	`input_id`	VARCHAR(50)	NULL,
	`input_dt`	DATE	NULL,
	`upate_id`	VARCHAR(50)	NULL,
	`update_dt`	DATE	NULL,
	`delete_id`	VARCHAR(50)	NULL,
	`delete_dt`	DATE	NULL,
	`delete_claue`	VARCHAR(50)	NULL
);

DROP TABLE IF EXISTS `common_bbs`;

CREATE TABLE `common_bbs` (
	`bbs_idx`	INT	NOT NULL PRIMARY KEY AUTO_INCREMENT,
	`bbs_name`	VARCHAR(100)	NULL,
	`bbs_detail_code`	VARCHAR(30)	NULL,
	`bbs_own_guild`	INT	NULL,
	`input_id`	VARCHAR(50)	NULL,
	`input_dt`	DATE	NULL	DEFAULT CURRENT_TIMESTAMP,
	`update_id`	VARCHAR(50)	NULL,
	`update_dt`	DATE	NULL,
	`is_deleted`	VARCHAR(1)	NULL,
	`delete_dt`	DATE	NULL
);

DROP TABLE IF EXISTS `common_bbs_article`;

CREATE TABLE `common_bbs_article` (
	`article_idx`	INT	NOT NULL PRIMARY KEY AUTO_INCREMENT,
	`bbs_idx`	INT	NOT NULL,
	`article_code`	VARCHAR(30)	NULL,
	`title`	VARCHAR(30)	NULL,
	`content`	VARCHAR(2000)	NULL,
	`file_id`	INT	NULL,
	`input_id`	VARCHAR(50)	NULL,
	`input_dt`	DATE	NULL	DEFAULT CURRENT_TIMESTAMP,
	`update_id`	VARCHAR(50)	NULL,
	`update_dt`	DATE	NULL,
	`is_deleted`	VARCHAR(1)	NULL,
	`delete_dt`	DATE	NULL
);

DROP TABLE IF EXISTS `role_relation`;

CREATE TABLE `role_relation` (
	`role_relation_idx`	INT	NOT NULL PRIMARY KEY AUTO_INCREMENT,
	`user_idx`	INT	NOT NULL,
	`role_idx`	INT	NOT NULL
);

DROP TABLE IF EXISTS `role`;

CREATE TABLE `role` (
	`role_idx`	INT	NOT NULL PRIMARY KEY AUTO_INCREMENT,
	`name`	VARCHAR(100)	NOT NULL,
	`upper_role_idx`	INT	NOT NULL
);

DROP TABLE IF EXISTS `common_bbs_reply`;

CREATE TABLE `common_bbs_reply` (
	`reply_idx`	INT	NOT NULL PRIMARY KEY AUTO_INCREMENT,
	`article_idx`	INT	NOT NULL,
	`content`	VARCHAR(2000)	NULL,
	`input_id`	VARCHAR(50)	NULL,
	`input_dt`	DATE	NULL	DEFAULT CURRENT_TIMESTAMP,
	`update_id`	VARCHAR(50)	NULL,
	`update_dt`	DATE	NULL,
	`is_deleted`	VARCHAR(1)	NULL,
	`delete_dt`	DATE	NULL
);

DROP TABLE IF EXISTS `common_code_group`;

CREATE TABLE `common_code_group` (
	`code_group_idx`	INT	NOT NULL PRIMARY KEY AUTO_INCREMENT,
	`code_group_name`	VARCHAR(50)	NULL,
	`input_id`	VARCHAR(50)	NULL,
	`input_dt`	DATE	NULL	DEFAULT CURRENT_TIMESTAMP,
	`update_id`	VARCHAR(50)	NULL,
	`update_dt`	DATE	NULL,
	`is_used`	VARCHAR(1)	NULL
);

DROP TABLE IF EXISTS `crawled_character`;

CREATE TABLE `crawled_character` (
	`crawled_idx`	INT	NOT NULL PRIMARY KEY AUTO_INCREMENT,
	`character_idx`	INT	NOT NULL,
	`name`	VARCHAR(50)	NULL,
	`server_code`	VARCHAR(30)	NULL,
	`splty_code`	VARCHAR(30)	NULL,
	`level`	INT	NULL
);

DROP TABLE IF EXISTS `raid_target`;

CREATE TABLE `raid_target` (
	`raid_target_idx`	INT	NOT NULL PRIMARY KEY AUTO_INCREMENT,
	`raid_idx`	INT	NOT NULL,
	`ligion_code`	VARCHAR(30)	NULL,
	`input_id`	VARCHAR(50)	NULL,
	`input_dt`	DATE	NULL	DEFAULT CURRENT_TIMESTAMP,
	`update_id`	VARCHAR(50)	NULL,
	`update_dt`	DATE	NULL
);

DROP TABLE IF EXISTS `temp`;

CREATE TABLE `temp` (
	`raid_target_idx`	INT	NOT NULL PRIMARY KEY AUTO_INCREMENT,
	`input_id`	VARCHAR(50)	NULL,
	`input_dt`	DATE	NULL	DEFAULT CURRENT_TIMESTAMP,
	`update_id`	VARCHAR(50)	NULL,
	`update_dt`	DATE	NULL
);

DROP TABLE IF EXISTS `file`;

CREATE TABLE `file` (
	`file_idx`	INT	NOT NULL PRIMARY KEY AUTO_INCREMENT,
	`file_name`	VARCHAR(500)	NULL,
	`file_extension`	VARCHAR(50)	NULL,
	`file_path`	VARCHAR(2000)	NULL,
	`input_id`	VARCHAR(50)	NULL,
	`input_dt`	DATE	NULL	DEFAULT CURRENT_TIMESTAMP,
	`update_id`	VARCHAR(50)	NULL,
	`update_dt`	DATE	NULL
);


ALTER TABLE `character` ADD CONSTRAINT `FK_user_TO_character_1` FOREIGN KEY (
	`user_idx`
)
REFERENCES `user` (
	`user_idx`
);

ALTER TABLE `character` ADD CONSTRAINT `FK_guild_TO_character_1` FOREIGN KEY (
	`guild_idx`
)
REFERENCES `guild` (
	`guild_idx`
);

ALTER TABLE `common_code` ADD CONSTRAINT `FK_common_code_group_TO_common_code_1` FOREIGN KEY (
	`code_group_idx`
)
REFERENCES `common_code_group` (
	`code_group_idx`
);

ALTER TABLE `raid` ADD CONSTRAINT `FK_guild_TO_raid_1` FOREIGN KEY (
	`guild_idx`
)
REFERENCES `guild` (
	`guild_idx`
);

ALTER TABLE `raid_apply` ADD CONSTRAINT `FK_character_TO_raid_apply_1` FOREIGN KEY (
	`character_idx`
)
REFERENCES `character` (
	`character_idx`
);

ALTER TABLE `raid_apply` ADD CONSTRAINT `FK_raid_TO_raid_apply_1` FOREIGN KEY (
	`raid_idx`
)
REFERENCES `raid` (
	`raid_idx`
);

ALTER TABLE `common_bbs_article` ADD CONSTRAINT `FK_common_bbs_TO_common_bbs_article_1` FOREIGN KEY (
	`bbs_idx`
)
REFERENCES `common_bbs` (
	`bbs_idx`
);

ALTER TABLE `role_relation` ADD CONSTRAINT `FK_user_TO_role_relation_1` FOREIGN KEY (
	`user_idx`
)
REFERENCES `user` (
	`user_idx`
);

ALTER TABLE `role_relation` ADD CONSTRAINT `FK_role_TO_role_relation_1` FOREIGN KEY (
	`role_idx`
)
REFERENCES `role` (
	`role_idx`
);

ALTER TABLE `common_bbs_reply` ADD CONSTRAINT `FK_common_bbs_article_TO_common_bbs_reply_1` FOREIGN KEY (
	`article_idx`
)
REFERENCES `common_bbs_article` (
	`article_idx`
);

ALTER TABLE `crawled_character` ADD CONSTRAINT `FK_character_TO_crawled_character_1` FOREIGN KEY (
	`character_idx`
)
REFERENCES `character` (
	`character_idx`
);

ALTER TABLE `raid_target` ADD CONSTRAINT `FK_raid_TO_raid_target_1` FOREIGN KEY (
	`raid_idx`
)
REFERENCES `raid` (
	`raid_idx`
);

