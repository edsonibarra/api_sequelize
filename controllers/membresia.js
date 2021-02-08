const {membresia} = require("../models");


const agregarMembresia = async(req,res) => {
    const datos = req.body;
    try {
        await membresia.create(datos);
        res.json("membresia agregada");
    } catch (error) {
        console.log(error);
    }
}

const obtenerMembresia = async(req,res) => {
    try {
        const results = await membresia.findAll();
        res.json(results);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {agregarMembresia, obtenerMembresia};