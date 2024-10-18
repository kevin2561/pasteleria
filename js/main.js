const express = require("express");
const app = express();
const path = require("path");
const puerto = process.env.PORT || 4500;


// Configurar las rutas para servir archivos estáticos
app.use(express.static(path.join(__dirname, '../')));

// Manejar la ruta principal para el index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

// Manejar las rutas de las páginas
const paginas = ["tienda", "nosotros", "blog", "contacto", "cuenta"];
paginas.forEach((pagina) => {
    app.get(`/${pagina}`, (req, res) => {
        res.sendFile(path.join(__dirname, '../index.html'));
    });
});

// Manejar cualquier otra ruta para redirigir al index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

// Iniciar el servidor
app.listen(puerto, () => {
    console.log(`Servidor corriendo en http://localhost:${puerto}`);
});
