'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Caption}) {
      // define association here
      this.hasMany(Caption, {
        foreignKey: 'user_id',
        as: 'captions'
      })
    }
  }
  Users.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      isUnique: true,
      isEmail: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true
    },
  }, {
    sequelize,
    tableName: 'users',
    modelName: 'Users',
  });
  return Users;
};