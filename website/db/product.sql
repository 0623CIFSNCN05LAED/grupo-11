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

insert into `products` values (1, 20000, 15, 'Buzo Oversize', 'buzo.jpg', null, null), (2, 27000, 10, 'Campera de Jean', 'campera-jean.jpg', null, null), (3, 12000, 5, 'Jogger', 'jogger.jpg', null, null), (4, 10000, 5, 'Remera Oversize', 'remera-oversize.jpg', null, null), (5, 25000, 5, 'Short Mom LightBlue', 'Short-Mom-Light-Blue.jpg', null, null), (6, 35000, 7, 'Jeans Straight Blue', 'Jeans-Straight-Blue.jpg', null, null), (7, 15000, 10, 'ribbed-neck-midi-manga-larga', 'ribbed-neck-midi-manga-larga.png', null, null), (8, 15000, 2, 'Short de Baño', 'short-de-baño.jpg', null, null), (9, 10000, 5, 'Top Ribb', 'top-ribb.png', null, null), (10, 12000, 5, 'Remera Oversize Crop', 'remera-oversize-crop_1.png', null, null), (11, 13000, 15, 'Remera Manga Larga Oversize', 'remera-manga-larga-oversize_1.png', null, null), (12, 35000, 10, 'Jeans Relaxed Hombre Camel Black', 'Jeans-Relaxed-Hombre-Camel-Black.png', null, null), (13, 25000, 15, 'Hoddie Wide Cut Frisado', 'hoddie-wide-cut-frisado.jpg', null, null);

create table `size` (
	`id` smallint(6) unsigned NOT NULL AUTO_INCREMENT,
 	`size_name` varchar(95) not null,
 	primary key (`id`)
);

insert into `size` values (1, 'XXS'),(2, 'XS'),(3, 'S'),(4,'M'),(5,'L'),(6,'XL'),(7,'XXL');

create table `users` (
	`id` varchar(96) NOT NULL,
	`name` varchar(96) not null,
	`last_name` varchar(96) not null,
	`email` varchar(96) not null,
	`password` varchar(96) not null,
	`profile_picture` varchar(96) not null,
	`rank` varchar(96) not null,
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
	`size` varchar(96) not null,
	`total` int(9) not null,
	`id_users` varchar(96) not null,
	`created_at` timestamp NOT NULL DEFAULT now(),
	`updated_at` timestamp NOT NULL DEFAULT now(),
	primary key (`id`),
	key `shopping_cart_FK` (`id_users`),
	CONSTRAINT `shopping_cart_FK` FOREIGN KEY (`id_users`) REFERENCES `users`(`id`)
);

create table `products_shopping_cart` (
	`id` smallint(6) unsigned NOT NULL AUTO_INCREMENT,
	`id_product` smallint(9) unsigned not null,
	`id_shopping_cart` smallint(9) unsigned not null,
	primary key (`id`),
	key `products_shopping_cart_FK` (`id_product`),
	key `products_shopping_cart_FK_1` (`id_shopping_cart`),
	CONSTRAINT `products_shopping_cart_FK` FOREIGN KEY (`id_product`) REFERENCES `products`(`id`),
	CONSTRAINT `products_shopping_cart_FK_1` FOREIGN KEY (`id_shopping_cart`) REFERENCES `shopping_cart`(`id`)
);

create table `products_size` (
	`id` smallint(6) unsigned NOT NULL auto_increment,
	`id_product` smallint(6) unsigned not null,
	`id_size` smallint(6) unsigned not null,
	primary key (`id`),
	key `products_size_FK` (`id_product`),
	key `products_size_FK_1` (`id_size`),
	CONSTRAINT `products_size_FK` FOREIGN KEY (`id_product`) REFERENCES `products`(`id`),
	CONSTRAINT `products_size_FK_1` FOREIGN KEY (`id_size`) REFERENCES `size`(`id`)
);