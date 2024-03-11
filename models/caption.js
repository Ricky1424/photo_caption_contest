'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Caption extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Caption.belongsTo(models.Photo, {
        foreignKey: 'photo_id',
        as: 'photo'
      }),
      Caption.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user'
      })
    }
  }
  Caption.init({
    photo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      required: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      required: true
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true
    },
  }, {
    sequelize,
    tableName: 'caption',
    modelName: 'Caption',
  });
  return Caption;
};