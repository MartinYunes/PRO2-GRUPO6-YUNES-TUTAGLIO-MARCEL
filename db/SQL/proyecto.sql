create schema integrador;

use integrador ;

create table  usuarios (
 /* 	nombreColumna 		tipoDato 		Restricciones */
		id 					INT            	UNSIGNED PRIMARY KEY AUTO_INCREMENT,
        email 				VARCHAR(250)	NOT NULL,
        contrasenia			VARCHAR(250)	NOT NULL,
        fecha				DATE			NOT NULL,
        dni 				INT 			NOT NULL,
        fotoPerfil			VARCHAR(250)	NOT NULL,
        createdAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ,
		updatedAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        deletedAt			TIMESTAMP		DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        usuarios            VARCHAR(250)    NOT NULL,
				
);  

INSERT INTO usuarios (id, email, contrasenia, fecha, dni, fotoPerfil, createdAt, updatedAt, deletedAt, usuarios) 
VALUES (DEFAULT, "marcelogallardo@gmail.com", "912", "1999-12-22", 24532467, "gallardo.webp", DEFAULT, DEFAULT, DEFAULT, muñeco912);


INSERT  INTO usuarios (id,email,contrasenia,fecha,dni,fotoPerfil,createdAt,updatedAt,deletedAt, usuarios) 
VALUES (DEFAULT,"borja@gmail.com","colombia123","1988-9-30",453442251,"borja.png",DEFAULT,DEFAULT,DEFAULT, borja m.a);


INSERT  INTO usuarios (id,email,contrasenia,fecha,dni,fotoPerfil,createdAt,updatedAt,deletedAt, usuarios) 
VALUES (DEFAULT,"enzo@gmail.com","rivercarpr32","2002-11-11",37653341,"enzodiaz.png",DEFAULT,DEFAULT,DEFAULT, enzo.diazzz);


INSERT  INTO usuarios (id,email,contrasenia,fecha,dni,fotoPerfil,createdAt,updatedAt,deletedAt, usuarios) 
VALUES (DEFAULT,"facucolidio@gmail.com","facundo123","2001-10-11",40931125,"colidio.png",DEFAULT,DEFAULT,DEFAULT, nachoman);


INSERT  INTO usuarios (id,email,contrasenia,fecha,dni,fotoPerfil,createdAt,updatedAt,deletedAt, usuarios) 
VALUES (DEFAULT,"nacho@gmail.com","nachito","1989-3-21",30824453,"nacho.png",DEFAULT,DEFAULT,DEFAULT, facucolidio);


create table productos (
/*	nombreColumna 		tipoDato 		Restricciones */
	id 					INT				UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    idUsuario			INT				UNSIGNED,
    nombreProducto		VARCHAR(250)	NOT NULL,
    descripcion			VARCHAR(250)	NOT NULL,
    imagen				VARCHAR(250)	NOT NULL,
	createdAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ,
	updatedAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt			TIMESTAMP		DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    foreign key (idUsuario) references usuarios(id)
);

INSERT  INTO productos (id,idUsuario,nombreProducto,descripcion,imagen,createdAt,updatedAt,deletedAt) 
VALUES (DEFAULT,1,"Volkswagen Golf GTI","Volkswagen Golf GTI 30.000km","Golf_GTI.jpeg",DEFAULT,DEFAULT,DEFAULT);

INSERT  INTO productos (id,idUsuario,nombreProducto,descripcion,imagen,createdAt,updatedAt,deletedAt) 
VALUES (DEFAULT,1,"Porsche 911","911 Carrera S 2022 10.000km","porsche911.webp",DEFAULT,DEFAULT,DEFAULT);

INSERT  INTO productos (id,idUsuario,nombreProducto,descripcion,imagen,createdAt,updatedAt,deletedAt) 
VALUES (DEFAULT,1,"Ford Mustang GT","Mustang GT 2023 20.000km","mustagng_gt.jpeg",DEFAULT,DEFAULT,DEFAULT);

INSERT  INTO productos (id,idUsuario,nombreProducto,descripcion,imagen,createdAt,updatedAt,deletedAt) 
VALUES (DEFAULT,2,"Chevrolet Camaro SS","Camaro SS 2022 15.000km","camaro_ss.jpeg",DEFAULT,DEFAULT,DEFAULT);

INSERT  INTO productos (id,idUsuario,nombreProducto,descripcion,imagen,createdAt,updatedAt,deletedAt) 
VALUES (DEFAULT,2,"BMW M3","M3 Competition 2021 12.000km","bmw.webp",DEFAULT,DEFAULT,DEFAULT);

INSERT  INTO productos (id,idUsuario,nombreProducto,descripcion,imagen,createdAt,updatedAt,deletedAt) 
VALUES (DEFAULT,3,"Audi R8","R8 V10 Plus 2022 8.000km","audi_r8.jpg",DEFAULT,DEFAULT,DEFAULT);

INSERT  INTO productos (id,idUsuario,nombreProducto,descripcion,imagen,createdAt,updatedAt,deletedAt) 
VALUES (DEFAULT,3,"Mercedes-AMG GT","AMG GT R 2023 18.000km","mercedes_gt.jpeg",DEFAULT,DEFAULT,DEFAULT);

INSERT  INTO productos (id,idUsuario,nombreProducto,descripcion,imagen,createdAt,updatedAt,deletedAt) 
VALUES (DEFAULT,4,"Ferrari 488 GTB","488 GTB 2022 5.000km","ferrari.jpeg",DEFAULT,DEFAULT,DEFAULT);

INSERT  INTO productos (id,idUsuario,nombreProducto,descripcion,imagen,createdAt,updatedAt,deletedAt) 
VALUES (DEFAULT,4,"Lamborghini Huracan","Huracan EVO 2023 7.000km","lambo.jpeg",DEFAULT,DEFAULT,DEFAULT);

INSERT  INTO productos (id,idUsuario,nombreProducto,descripcion,imagen,createdAt,updatedAt,deletedAt) 
VALUES (DEFAULT,5,"McLaren 720S","720S Spider 2022 3.000km","mclaren.jpeg",DEFAULT,DEFAULT,DEFAULT);


create table  comentarios (
 /* 	nombreColumna 		tipoDato 		Restricciones */
		id					INT             UNSIGNED PRIMARY KEY AUTO_INCREMENT,
        idProducto			INT             UNSIGNED,
        idAutor				INT				UNSIGNED,
        comentario			VARCHAR(250)	NOT NULL,
        createdAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ,
		updatedAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
		deletedAt			TIMESTAMP		DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
		foreign key (idProducto) references productos(id),
        foreign key (idAutor) references usuarios(id)
 );
 
 INSERT INTO comentarios (id,idProducto,idAutor	,comentario,createdAt ,updatedAt,deletedAt)VALUES (DEFAULT,1,2,"Muy malo",DEFAULT,DEFAULT,DEFAULT);
 
 INSERT INTO comentarios (id,idProducto,idAutor	,comentario,createdAt ,updatedAt,deletedAt)VALUES (DEFAULT,1,3,"Muy bueno",DEFAULT,DEFAULT,DEFAULT);
 
 INSERT INTO comentarios (id,idProducto,idAutor	,comentario,createdAt ,updatedAt,deletedAt)VALUES (DEFAULT,1,4,"Alto auto",DEFAULT,DEFAULT,DEFAULT);
 
 INSERT INTO comentarios (id,idProducto,idAutor	,comentario,createdAt ,updatedAt,deletedAt)VALUES (DEFAULT,2,2,"Una belleza",DEFAULT,DEFAULT,DEFAULT);

 INSERT INTO comentarios (id,idProducto,idAutor	,comentario,createdAt ,updatedAt,deletedAt)VALUES (DEFAULT,2,3,"Me encanta este auto",DEFAULT,DEFAULT,DEFAULT);
 
 INSERT INTO comentarios (id,idProducto,idAutor	,comentario,createdAt ,updatedAt,deletedAt)VALUES (DEFAULT,2,4,"Excelente elección",DEFAULT,DEFAULT,DEFAULT);
 
 INSERT INTO comentarios (id,idProducto,idAutor	,comentario,createdAt ,updatedAt,deletedAt)VALUES (DEFAULT,2,5,"Una belleza",DEFAULT,DEFAULT,DEFAULT);
 
 INSERT INTO comentarios (id,idProducto,idAutor	,comentario,createdAt ,updatedAt,deletedAt)VALUES (DEFAULT,3,2,"tremendo",DEFAULT,DEFAULT,DEFAULT);
  
 INSERT INTO comentarios (id,idProducto,idAutor	,comentario,createdAt ,updatedAt,deletedAt)VALUES (DEFAULT,3,3,"Potencia",DEFAULT,DEFAULT,DEFAULT);
 
 INSERT INTO comentarios (id,idProducto,idAutor	,comentario,createdAt ,updatedAt,deletedAt)VALUES (DEFAULT,3,4,"Un sueño",DEFAULT,DEFAULT,DEFAULT);
 
 INSERT INTO comentarios (id,idProducto,idAutor	,comentario,createdAt ,updatedAt,deletedAt)VALUES (DEFAULT,4,2,"Clásico",DEFAULT,DEFAULT,DEFAULT);
 
 INSERT INTO comentarios (id,idProducto,idAutor	,comentario,createdAt ,updatedAt,deletedAt)VALUES (DEFAULT,4,3,"impresionante",DEFAULT,DEFAULT,DEFAULT);
 
 INSERT INTO comentarios (id,idProducto,idAutor	,comentario,createdAt ,updatedAt,deletedAt)VALUES (DEFAULT,4,4,"Máquina",DEFAULT,DEFAULT,DEFAULT);
 
INSERT INTO comentarios (id,idProducto,idAutor	,comentario,createdAt ,updatedAt,deletedAt)VALUES (DEFAULT,5,2,"BMW siempre",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO comentarios (id,idProducto,idAutor	,comentario,createdAt ,updatedAt,deletedAt)VALUES (DEFAULT,5,3,"Eleganciaa",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO comentarios (id,idProducto,idAutor	,comentario,createdAt ,updatedAt,deletedAt)VALUES (DEFAULT,5,4,"Una bestia",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO comentarios (id,idProducto,idAutor	,comentario,createdAt ,updatedAt,deletedAt)VALUES (DEFAULT,6,2,"Mucho rendimiento",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO comentarios (id,idProducto,idAutor	,comentario,createdAt ,updatedAt,deletedAt)VALUES (DEFAULT,6,3,"Futurista",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO comentarios (id,idProducto,idAutor	,comentario,createdAt ,updatedAt,deletedAt)VALUES (DEFAULT,6,4,"Tremendo sonido de escape",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO comentarios (id,idProducto,idAutor	,comentario,createdAt ,updatedAt,deletedAt)VALUES (DEFAULT,7,2,"Mercedes simplemente",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO comentarios (id,idProducto,idAutor	,comentario,createdAt ,updatedAt,deletedAt)VALUES (DEFAULT,7,3,"Puro poder",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO comentarios (id,idProducto,idAutor	,comentario,createdAt ,updatedAt,deletedAt)VALUES (DEFAULT,7,4,"Flojo de arranque",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO comentarios (id,idProducto,idAutor	,comentario,createdAt ,updatedAt,deletedAt)VALUES (DEFAULT,8,2,"Lento en curvas",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO comentarios (id,idProducto,idAutor	,comentario,createdAt ,updatedAt,deletedAt)VALUES (DEFAULT,8,3,"El sueño italiano",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO comentarios (id,idProducto,idAutor	,comentario,createdAt ,updatedAt,deletedAt)VALUES (DEFAULT,8,4,"Mal diseño",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO comentarios (id,idProducto,idAutor	,comentario,createdAt ,updatedAt,deletedAt)VALUES (DEFAULT,9,2,"Lamborghini es arteo",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO comentarios (id,idProducto,idAutor	,comentario,createdAt ,updatedAt,deletedAt)VALUES (DEFAULT,9,3,"Puro poder",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO comentarios (id,idProducto,idAutor	,comentario,createdAt ,updatedAt,deletedAt)VALUES (DEFAULT,9,4,"Emocionante",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO comentarios (id,idProducto,idAutor	,comentario,createdAt ,updatedAt,deletedAt)VALUES (DEFAULT,10,2,"Rendimiento",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO comentarios (id,idProducto,idAutor	,comentario,createdAt ,updatedAt,deletedAt)VALUES (DEFAULT,10,3,"Flojo de papeles",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO comentarios (id,idProducto,idAutor	,comentario,createdAt ,updatedAt,deletedAt)VALUES (DEFAULT,10,4,"Facil de manejar",DEFAULT,DEFAULT,DEFAULT);

















  
 
 
 
 
 
 