const { now } = require("lodash");
const { NOW } = require("sequelize");
const { date } = require("yup");

module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Events', [
        {
          eventOwner: '3',
          eventInfo: 'Test event',
          eventDateOfNotification: new Date(),
          eventDeadline: new Date(),
          eventDate: new Date(),
          createdAt: new Date(),
        },
      ], {});
    },
  };
