'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Photos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Caption}) {
      // define association here
      this.hasMany(Caption, {
        foreignKey: 'photo_id',
        as: 'captions'
      })
    }
  }
  Photos.init({
    photo: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true
    },
  }, {
    sequelize,
    tableName: 'photos',
    modelName: 'Photos',
  });
  return Photos;
};