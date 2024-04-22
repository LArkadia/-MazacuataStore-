CREATE TABLE venta (
    id_venta INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    isbn VARCHAR(100),
    fecha_venta DATE NOT NULL,
    cantidad_vendida INT NOT NULL,
    precio_venta DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id),
    FOREIGN KEY (isbn) REFERENCES libro(isbn),
    CONSTRAINT fk_tipo_usuario
        FOREIGN KEY (id_usuario)
        REFERENCES usuario(id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE
);

CREATE TABLE compra (
    ID_compra INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    isbn VARCHAR(100),
    fecha_compra DATE NOT NULL,
    cantidad INT NOT NULL,
    precio_total DECIMAL(10, 2) NOT NULL,
    estado_compra ENUM('pendiente', 'completada', 'cancelada') NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id),
    FOREIGN KEY (isbn) REFERENCES libro(isbn),
    CONSTRAINT fk_usuario_compra
        FOREIGN KEY (id_usuario)
        REFERENCES usuario(id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE
);

CREATE TABLE ticket (
    id_ticket INT AUTO_INCREMENT PRIMARY KEY,
    id_compra INT,
    isbn VARCHAR(100),
    cantidad INT NOT NULL,
    precio_venta DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (id_compra) REFERENCES compra(ID_compra),
    FOREIGN KEY (isbn) REFERENCES libro(isbn)
);
ALTER TABLE usuario ADD COLUMN password VARCHAR(255) NOT NULL;
ALTER TABLE usuario
MODIFY COLUMN password VARCHAR(255) NOT NULL AFTER email;
ALTER TABLE usuario
ADD COLUMN direccion VARCHAR(255) AFTER tipo_usuario;

-- dummy data: tabla usuario
INSERT INTO usuario (nombre, apellidos, email, password, tipo_usuario, direccion, rfc, created_at, updated_at)
VALUES 
    ('Juan', 'Perez', 'juan@example.com', 'password123', 'vendendor', 'Calle 123', 'ABCD123456', NOW(), NOW()),
    ('Maria', 'Gomez', 'maria@example.com', 'password456', 'usuario_online', 'Avenida 456', NULL, NOW(), NOW()),
    ('Carlos', 'Lopez', 'carlos@example.com', 'password789', 'admin', 'Plaza 789', 'EFGH987654', NOW(), NOW());

INSERT INTO libro (isbn, titulo, autor, editorial, edición, precio, calificacion, portada, unidades_disponibles, ubicacion, genero)
VALUES 
    ('9788498389085', 'Cien años de soledad', 'Gabriel García Márquez', 'Editorial Sudamericana', '1', '20.00', '4.5', 'https://example.com/portada1.jpg', 10, 'Sección A', 'Ficción'),
    ('9788437610786', 'El principito', 'Antoine de Saint-Exupéry', 'Salamandra', '1', '15.00', '4.7', 'https://example.com/portada2.jpg', 15, 'Sección B', 'Infantil'),
    ('9788408105474', 'El código Da Vinci', 'Dan Brown', 'Planeta', '1', '25.00', '4.2', 'https://example.com/portada3.jpg', 20, 'Sección C', 'Misterio');
    
INSERT INTO compra (id_usuario, isbn, fecha_compra, cantidad, precio_total, estado_compra)
VALUES 
    (1, '9788498389085', '2024-04-21', 2, 40.00, 'completada'),
    (2, '9788437610786', '2024-04-20', 1, 15.00, 'completada'),
    (3, '9788408105474', '2024-04-19', 3, 75.00, 'pendiente');
    
INSERT INTO ticket (id_compra, isbn, cantidad, precio_venta)
VALUES 
    (13, '9788498389085', 2, 40.00),
    (14, '9788437610786', 1, 15.00),
    (15, '9788408105474', 3, 75.00);
    
select * from compra;
    
