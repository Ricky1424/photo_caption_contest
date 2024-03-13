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
    await queryInterface.bulkInsert('users',[
      {
        username: 'username1',
        email: 'user1@useremail.com',
        password: 'totallysecurepassword1',
        createdAt: date,
        updatedAt: date
      },
      {
        username: 'username2',
        email: 'user2@useremail.com',
        password: 'totallysecurepassword2',
        createdAt: date,
        updatedAt: date
      },
      {
        username: 'username3',
        email: 'user3@useremail.com',
        password: 'totallysecurepassword3',
        createdAt: date,
        updatedAt: date
      }  
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
