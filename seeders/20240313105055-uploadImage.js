'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    let date = new Date();
    await queryInterface.bulkInsert('photos',[
      {
        photo: 'https://i.ebayimg.com/images/g/yd0AAOSwXrleHDp3/s-l1200.webp',
        createdAt: date,
        updatedAt: date
      },
      {
        photo: 'https://www.lego.com/cdn/cs/set/assets/blt6c65eb54dc9fb50e/DC_-_Character_-_Details_-_Sidekick-Standard_-_Superman.jpg?fit=crop&format=jpg&quality=80&width=800&height=426&dpr=1',
        createdAt: date,
        updatedAt: date
      },
      {
        photo: 'https://i.ebayimg.com/images/g/yd0AAOSwXrleHDp3/s-l1200.webp',
        createdAt: date,
        updatedAt: date
      },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
