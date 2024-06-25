CREATE DATABASE IF NOT EXISTS alojadb;

USE alojadb;

CREATE TABLE alojamientos (
    id INT (11) NOT NULL AUTO_INCREMENT,
    alojamiento VARCHAR(45) DEFAULT NULL,
    tipo VARCHAR(20) DEFAULT NULL,
    descripcion VARCHAR(150) DEFAULT NULL,
    cdormitorios VARCHAR(5) DEFAULT NULL,
    cbaños VARCHAR(5) DEFAULT NULL,
    ppdia INT(8) DEFAULT NULL,
    valoracion INT(4) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE alojamientos;

INSERT INTO alojamientos VALUES 
    (1, 'Kimpton Fitroy', 'Hotel', 'Atracciones cerca, buen desayuno', 2, 1, 180, 9.1),
    (2, 'nHow', 'Hotel', 'Staff amigable', 2, 1, 280, 8.1),
    (3, 'Kip', 'Hotel', 'Atracciones cerca, opcion de catering', 3, 1, 80, 7.1);

CREATE TABLE TiposdeAlojamiento (
    idTipoAlojamiento INT (11) NOT NULL AUTO_INCREMENT,
    descripcion VARCHAR(250) DEFAULT NULL,
    PRIMARY KEY (idTipoAlojamiento)
);

INSERT INTO TiposdeAlojamiento VALUES 
    (1, 'Amplio apartamento de 3 dormitorios con terraza privada, ideal para familias. Ubicado a solo pasos de la playa, con piscina ywifi.'),
    (2, 'Acogedora cabaña de madera para 2 personas, perfecta para una escapada romántica. Ubicada en un entorno tranquilo con vistas impresionantes.'),
    (3, 'Hostal limpio y seguro con habitaciones compartidas y privadas. Ubicado en el corazón de la ciudad, cerca de las principales atracciones turísticas.');

CREATE TABLE Servicios (
    idServicio INT (11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(45) DEFAULT NULL,
    PRIMARY KEY (idServicio)
);

INSERT INTO Servicios VALUES 
    (1, 'WIFI, piscina, desayuno incluido.'),
    (2, 'WIFI, luces audioritmicas, hidromasaje.'),
    (3, 'WIFI, incluye tours.');

CREATE TABLE AlojamientoServicio (
    idAlojamientoServicio INT (11) NOT NULL AUTO_INCREMENT,
    id INT (11) NOT NULL,
    idServicio INT (11) NOT NULL,
    PRIMARY KEY (idAlojamientoServicio)
);