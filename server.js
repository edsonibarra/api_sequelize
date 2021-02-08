// Dependencias.
const express = require("express"); // Express para crear el servidor.
const morgan  = require("morgan");  // Morgan para los detalles de las peticiones. 
const agregarMembresia = require("./routes/membresia");
const agregarCliente = require("./routes/cliente");

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.get("/", (req,res) => {
    res.send('<h1>Server Created</h1>');
});

app.use(agregarMembresia);
app.use(agregarCliente);

app.listen(8000, () => {
    console.log("Server Created");
});