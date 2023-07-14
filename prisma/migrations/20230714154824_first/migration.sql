-- CreateTable
CREATE TABLE `requests` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `project_id` VARCHAR(255) NOT NULL,
    `request_type` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `account_name` VARCHAR(255) NOT NULL,
    `legacy_org` ENUM('CSC', 'ES') NOT NULL,
    `total_hours_spent` INTEGER NOT NULL,
    `status` VARCHAR(255) NOT NULL,
    `comment` TEXT NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `last_updated` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `wbs` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `eid` VARCHAR(255) NOT NULL,
    `legacy_org` VARCHAR(11) NOT NULL,
    `cost_center` VARCHAR(255) NULL,
    `profit_center` VARCHAR(255) NULL,
    `phone_number` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
