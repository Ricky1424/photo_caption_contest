'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('captions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      photo_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        required: true
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        required: true
      },
      caption: {
        type: Sequelize.STRING,
        allowNull: false,
        required: true
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('captions');
  }
};