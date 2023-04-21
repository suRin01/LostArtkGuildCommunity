-- CreateTable
CREATE TABLE `role` (
    `role_idx` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `upper_role_idx` INTEGER NOT NULL,

    PRIMARY KEY (`role_idx`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `role_relation` (
    `role_relation_idx` INTEGER NOT NULL AUTO_INCREMENT,
    `user_idx` INTEGER NOT NULL,
    `role_idx` INTEGER NOT NULL,

    INDEX `FK_role_TO_role_relation_1`(`role_idx`),
    INDEX `FK_user_TO_role_relation_1`(`user_idx`),
    PRIMARY KEY (`role_relation_idx`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `user_idx` INTEGER NOT NULL AUTO_INCREMENT,
    `user_name` VARCHAR(50) NULL,
    `name` VARCHAR(100) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `sex_dstn_code` VARCHAR(1) NULL,
    `mobile_phone` VARCHAR(50) NULL,

    PRIMARY KEY (`user_idx`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `character` (
    `character_idx` INTEGER NOT NULL AUTO_INCREMENT,
    `user_idx` INTEGER NOT NULL,
    `guild_idx` INTEGER NOT NULL,
    `name` VARCHAR(50) NULL,
    `is_main_character` VARCHAR(1) NULL,

    INDEX `FK_guild_TO_character_1`(`guild_idx`),
    INDEX `FK_user_TO_character_1`(`user_idx`),
    PRIMARY KEY (`character_idx`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `common_bbs` (
    `bbs_idx` INTEGER NOT NULL AUTO_INCREMENT,
    `bbs_name` VARCHAR(100) NULL,
    `bbs_detail_code` VARCHAR(30) NULL,
    `bbs_own_guild` INTEGER NULL,
    `input_id` VARCHAR(50) NULL,
    `input_dt` DATE NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_id` VARCHAR(50) NULL,
    `update_dt` DATE NULL,
    `is_deleted` VARCHAR(1) NULL,
    `delete_dt` DATE NULL,

    PRIMARY KEY (`bbs_idx`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `common_bbs_article` (
    `article_idx` INTEGER NOT NULL AUTO_INCREMENT,
    `bbs_idx` INTEGER NOT NULL,
    `article_code` VARCHAR(30) NULL,
    `title` VARCHAR(30) NULL,
    `content` VARCHAR(2000) NULL,
    `file_id` INTEGER NULL,
    `input_id` VARCHAR(50) NULL,
    `input_dt` DATE NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_id` VARCHAR(50) NULL,
    `update_dt` DATE NULL,
    `is_deleted` VARCHAR(1) NULL,
    `delete_dt` DATE NULL,

    INDEX `FK_common_bbs_TO_common_bbs_article_1`(`bbs_idx`),
    PRIMARY KEY (`article_idx`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `common_bbs_reply` (
    `reply_idx` INTEGER NOT NULL AUTO_INCREMENT,
    `article_idx` INTEGER NOT NULL,
    `content` VARCHAR(2000) NULL,
    `input_id` VARCHAR(50) NULL,
    `input_dt` DATE NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_id` VARCHAR(50) NULL,
    `update_dt` DATE NULL,
    `is_deleted` VARCHAR(1) NULL,
    `delete_dt` DATE NULL,

    INDEX `FK_common_bbs_article_TO_common_bbs_reply_1`(`article_idx`),
    PRIMARY KEY (`reply_idx`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `common_code` (
    `detail_code_idx` INTEGER NOT NULL AUTO_INCREMENT,
    `code_group_idx` INTEGER NOT NULL,
    `detail_code` VARCHAR(30) NULL,
    `code_value` VARCHAR(30) NULL,
    `input_id` VARCHAR(50) NULL,
    `input_dt` DATE NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_id` VARCHAR(50) NULL,
    `update_dt` DATE NULL,
    `is_used` VARCHAR(1) NULL,

    INDEX `FK_common_code_group_TO_common_code_1`(`code_group_idx`),
    PRIMARY KEY (`detail_code_idx`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `common_code_group` (
    `code_group_idx` INTEGER NOT NULL AUTO_INCREMENT,
    `code_group_name` VARCHAR(50) NULL,
    `input_id` VARCHAR(50) NULL,
    `input_dt` DATE NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_id` VARCHAR(50) NULL,
    `update_dt` DATE NULL,
    `is_used` VARCHAR(1) NULL,

    PRIMARY KEY (`code_group_idx`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `crawled_character` (
    `crawled_idx` INTEGER NOT NULL AUTO_INCREMENT,
    `character_idx` INTEGER NOT NULL,
    `name` VARCHAR(50) NULL,
    `server_code` VARCHAR(30) NULL,
    `splty_code` VARCHAR(30) NULL,
    `level` INTEGER NULL,

    INDEX `FK_character_TO_crawled_character_1`(`character_idx`),
    PRIMARY KEY (`crawled_idx`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `file` (
    `file_idx` INTEGER NOT NULL AUTO_INCREMENT,
    `file_name` VARCHAR(500) NULL,
    `file_extension` VARCHAR(50) NULL,
    `file_path` VARCHAR(2000) NULL,
    `input_id` VARCHAR(50) NULL,
    `input_dt` DATE NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_id` VARCHAR(50) NULL,
    `update_dt` DATE NULL,

    PRIMARY KEY (`file_idx`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `guild` (
    `guild_idx` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `guild_introduce` VARCHAR(500) NULL,
    `guild_level` INTEGER NULL,
    `guild_icon` INTEGER NULL,

    PRIMARY KEY (`guild_idx`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `raid` (
    `raid_idx` INTEGER NOT NULL AUTO_INCREMENT,
    `guild_idx` INTEGER NOT NULL,
    `raid_dt` DATE NULL,
    `is_out_guild` VARCHAR(1) NULL,
    `raid_introduce` VARCHAR(2000) NULL,
    `input_id` VARCHAR(50) NULL,
    `input_dt` DATE NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_id` VARCHAR(50) NULL,
    `update_dt` DATE NULL,

    INDEX `FK_guild_TO_raid_1`(`guild_idx`),
    PRIMARY KEY (`raid_idx`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `raid_apply` (
    `raid_apply_idx` INTEGER NOT NULL AUTO_INCREMENT,
    `character_idx` INTEGER NOT NULL,
    `raid_idx` INTEGER NOT NULL,
    `input_id` VARCHAR(50) NULL,
    `input_dt` DATE NULL,
    `upate_id` VARCHAR(50) NULL,
    `update_dt` DATE NULL,
    `delete_id` VARCHAR(50) NULL,
    `delete_dt` DATE NULL,
    `delete_claue` VARCHAR(50) NULL,

    INDEX `FK_character_TO_raid_apply_1`(`character_idx`),
    INDEX `FK_raid_TO_raid_apply_1`(`raid_idx`),
    PRIMARY KEY (`raid_apply_idx`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `raid_target` (
    `raid_target_idx` INTEGER NOT NULL AUTO_INCREMENT,
    `raid_idx` INTEGER NOT NULL,
    `ligion_code` VARCHAR(30) NULL,
    `input_id` VARCHAR(50) NULL,
    `input_dt` DATE NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_id` VARCHAR(50) NULL,
    `update_dt` DATE NULL,

    INDEX `FK_raid_TO_raid_target_1`(`raid_idx`),
    PRIMARY KEY (`raid_target_idx`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `temp` (
    `raid_target_idx` INTEGER NOT NULL AUTO_INCREMENT,
    `input_id` VARCHAR(50) NULL,
    `input_dt` DATE NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_id` VARCHAR(50) NULL,
    `update_dt` DATE NULL,

    PRIMARY KEY (`raid_target_idx`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `role_relation` ADD CONSTRAINT `FK_role_TO_role_relation_1` FOREIGN KEY (`role_idx`) REFERENCES `role`(`role_idx`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `role_relation` ADD CONSTRAINT `FK_user_TO_role_relation_1` FOREIGN KEY (`user_idx`) REFERENCES `user`(`user_idx`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `character` ADD CONSTRAINT `FK_guild_TO_character_1` FOREIGN KEY (`guild_idx`) REFERENCES `guild`(`guild_idx`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `character` ADD CONSTRAINT `FK_user_TO_character_1` FOREIGN KEY (`user_idx`) REFERENCES `user`(`user_idx`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `common_bbs_article` ADD CONSTRAINT `FK_common_bbs_TO_common_bbs_article_1` FOREIGN KEY (`bbs_idx`) REFERENCES `common_bbs`(`bbs_idx`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `common_bbs_reply` ADD CONSTRAINT `FK_common_bbs_article_TO_common_bbs_reply_1` FOREIGN KEY (`article_idx`) REFERENCES `common_bbs_article`(`article_idx`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `common_code` ADD CONSTRAINT `FK_common_code_group_TO_common_code_1` FOREIGN KEY (`code_group_idx`) REFERENCES `common_code_group`(`code_group_idx`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `crawled_character` ADD CONSTRAINT `FK_character_TO_crawled_character_1` FOREIGN KEY (`character_idx`) REFERENCES `character`(`character_idx`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `raid` ADD CONSTRAINT `FK_guild_TO_raid_1` FOREIGN KEY (`guild_idx`) REFERENCES `guild`(`guild_idx`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `raid_apply` ADD CONSTRAINT `FK_character_TO_raid_apply_1` FOREIGN KEY (`character_idx`) REFERENCES `character`(`character_idx`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `raid_apply` ADD CONSTRAINT `FK_raid_TO_raid_apply_1` FOREIGN KEY (`raid_idx`) REFERENCES `raid`(`raid_idx`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `raid_target` ADD CONSTRAINT `FK_raid_TO_raid_target_1` FOREIGN KEY (`raid_idx`) REFERENCES `raid`(`raid_idx`) ON DELETE RESTRICT ON UPDATE RESTRICT;
