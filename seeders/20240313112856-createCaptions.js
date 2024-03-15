// 'use strict';

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up (queryInterface, Sequelize) {
//     /**
//      * Add seed commands here.
//      *
//      * Example:
//      * await queryInterface.bulkInsert('People', [{
//      *   name: 'John Doe',
//      *   isBetaMember: false
//      * }], {});
//     */
//     let date = new Date();
//     await queryInterface.bulkInsert('captions',[
//       {
//         photo_id: 1,
//         user_id: 1,
//         caption: "User 1 comment on photo 1",
//         createdAt: date,
//         updatedAt: date
//       },
//       {
//         photo_id: 2,
//         user_id: 1,
//         caption: "User 1 comment on photo 2",
//         createdAt: date,
//         updatedAt: date
//       },
//       {
//         photo_id: 1,
//         user_id: 2,
//         caption: "User 2 comment on photo 1",
//         createdAt: date,
//         updatedAt: date
//       },
//   ], {});
//   },

//   async down (queryInterface, Sequelize) {
//     /**
//      * Add commands to revert seed here.
//      *
//      * Example:
//      * await queryInterface.bulkDelete('People', null, {});
//      */
//   }
// };
