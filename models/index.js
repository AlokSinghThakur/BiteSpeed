const { Sequelize } = require('sequelize');

const userModel = require('./users');

exports.db_config = new Sequelize(

    'wysa_db',
    'admin',
    'Alok12345',
      
        // 'wysa',
        // 'dummy',
        // 'root',
        // 'root',
        // 'password',
        // 'password',
        {
          host:  'sql12.freemysqlhosting.net',
          // host :'localhost',
          dialect: 'mysql',
          operatorsAliases: 0,
          pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
          },
          timezone: '+05:30',
          logging: false,
        }
      );

  exports.userModel = userModel(exports.db_config);
  
