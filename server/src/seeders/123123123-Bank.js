module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Banks', [

      {
        cardNumber: '5168752010930702',
        name: 'Nikita',
        expiry: '08/24',
        cvc: '123',
        balance: 0,
      }
    ], {});
  },

};
