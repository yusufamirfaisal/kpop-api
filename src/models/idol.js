'use strict';
const {
    Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Idol extends Model {
        static associate(models) {

        }
    }
    Idol.init({
        id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4
        },
        birth_name: {
            allowNull: false,
            type: Sequelize.STRING
        },
        stage_name: {
            allowNull: false,
            type: Sequelize.STRING
        },
        birthday: {
            allowNull: false,
            type: Sequelize.DATEONLY
        }
    }, {
        sequelize,
        tableName: 'm_idols',
    });
    return Idol;
};