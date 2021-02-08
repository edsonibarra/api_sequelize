'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class membresia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.cliente);
    }
  };
  membresia.init({
    nombre: DataTypes.STRING,
    precio: DataTypes.INTEGER,
    duracion: DataTypes.INTEGER,
    activo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'membresia',
  });
  return membresia;
};