const identity = require("../models").userModel;
const { Sequelize } = require("sequelize");

module.exports = {
  async createIdentity(data) {
    return await identity.create(data);
  },

  async getIdentityByEmail(email) {
    return await identity.findAll({
      where: {
            email: email,          
      },
    });
  },
  async getIdentityByPhoneNumber(phoneNumber) {
    return await identity.findAll({
      where: {
            phoneNumber: phoneNumber,
          
      },
    });
  },
};
