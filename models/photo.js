'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Photo.hasMany(models.Caption, {
        foreignKey: 'photo_id',
        as: 'captions'
      })
    }
  }
  Photo.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true
    },
  }, {
    sequelize,
    tableName: 'photo',
    modelName: 'Photo',
  });
  return Photo;
};