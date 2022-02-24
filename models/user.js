'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Profile, { foreignKey: "UserId" })
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: `Email is require`
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty:{
          msg: `Password is require`
        }
      }
    },
    roles: {
      type: DataTypes.STRING,
      validate: {
        notEmpty:{
          msg: `Roles is require`
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};