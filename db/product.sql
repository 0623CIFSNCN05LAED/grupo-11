DROP DATABASE IF EXISTS `product`;
CREATE DATABASE `product`;
USE `product`;

CREATE TABLE `products` (
    `id` smallint(6) unsigned NOT NULL AUTO_INCREMENT,
    `price` int(50) NOT NULL,
    `discount` smallint(6) default null,
    `product_name` varchar(95) not null,
    `image` varchar(95) not null,
    `created_at` timestamp NOT NULL DEFAULT now(),
    `updated_at` timestamp NOT NULL DEFAULT now(),
    PRIMARY KEY (`id`)
);

create table `size` (
	`id` smallint(6) unsigned NOT NULL AUTO_INCREMENT,
	`size_name` varchar(95) not null,
	primary key (`id`)
);

create table `users` (
	`id` smallint(6) unsigned NOT NULL AUTO_INCREMENT,
	`name` varchar(96) not null,
	`last_name` varchar(96) not null,
	`email` varchar(96) not null,
	`password` varchar(96) not null,
	`profile_picture` varchar(96) not null,
	`created_at` timestamp NOT NULL DEFAULT now(),
	`updated_at` timestamp NOT NULL DEFAULT now(),
	primary key (`id`)
);

create table `shopping_cart` ( 
	`id` smallint(6) unsigned NOT NULL AUTO_INCREMENT,
	`image` varchar(95) not null,
	`product_name` varchar(95) not null,
	`id_product` smallint(9) not null,
	`quantity` smallint(9) not null,
	`subtotal` smallint(9) not null,
	`shipment_cost` smallint(9) not null,
	`total` smallint(9) not null,
	`id_users` smallint(9) default null,
	`created_at` timestamp NOT NULL DEFAULT now(),
	`updated_at` timestamp NOT NULL DEFAULT now(),
	primary key (`id`),
	key `shopping_cart_FK` (`id_users`),
	CONSTRAINT `shopping_cart_FK` FOREIGN KEY (`id_users`) REFERENCES `users`(`id`)
);

create table `products_shopping_cart` (
	`id` smallint(6) unsigned NOT NULL AUTO_INCREMENT,
	`id_product` smallint(9) not null,
	`id_shopping_cart` smallint(9) not null,
	primary key (`id`),
	key `products_shopping_cart_FK` (`id_product`),
	key `products_shopping_cart_FK_1` (`id_shopping_cart`),
	CONSTRAINT `products_shopping_cart_FK` FOREIGN KEY (`id_product`) REFERENCES `products`(`id`),
	CONSTRAINT `products_shopping_cart_FK_1` FOREIGN KEY (`id_shopping_cart`) REFERENCES `shopping_cart`(`id`)
);

create table `products_size` (
	`id` smallint(6) unsigned NOT NULL auto_increment,
	`id_product` smallint(6) not null,
	`id_size` smallint(6) not null,
	primary key (`id`),
	key `products_size_FK` (`id_product`),
	key `products_size_FK_1` (`id_size`),
	CONSTRAINT `products_size_FK` FOREIGN KEY (`id_product`) REFERENCES `products`(`id`),
	CONSTRAINT `products_size_FK_1` FOREIGN KEY (`id_size`) REFERENCES `size`(`id`)
);