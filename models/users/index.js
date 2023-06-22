const {DataTypes} = require('sequelize');

module.exports = (db_config) => {
    const user = db_config.define(
        'user',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            phoneNumber: {
                type: DataTypes.STRING,
                allowNull: true,
                // unique: {
                //     args: true,
                //     msg: 'Mobile number already in use!',
                // }
            },
            email: {
                type: DataTypes.STRING,
                allowNull: true,
                default:null,
                // unique: {
                //     args: true,
                //     msg: 'Email address already in use!',
                // },

            },
            linkedId: {
                type: DataTypes.INTEGER,
                defaultValue: null,  
            },
            linkPrecedence:{
                type: DataTypes.STRING,
                defaultValue:"primary"
            },
            created_at: {
                type: DataTypes.DATE,
                default: DataTypes.NOW
            },
            updated_at: {
                type: DataTypes.DATE,
                default: null
            },
            deleted_at: {
                type: DataTypes.DATE,
                defaultValue: null
            },
        },
        {
            createdAt: 'created_at',
            updatedAt: "updated_at",       
        }
    );
    return user;
}