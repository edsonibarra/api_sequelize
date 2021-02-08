const {cliente} = require("../models");


const agregarCliente = async(req,res) => {
    const datos = req.body;
    try {
        await cliente.create(datos);
        res.json("cliente agregado");
    } catch (error) {
        console.log(error);
    }
}

// const obtenerMembresia = async(req,res) => {
//     try {
//         const results = await membresia.findAll();
//         res.json(results);
//     } catch (error) {
//         console.log(error);
//     }
// }

module.exports = {agregarCliente};