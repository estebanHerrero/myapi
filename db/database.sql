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