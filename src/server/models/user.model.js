"use strict"

const user = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    id: {
      type: DataTypes.STRING,
      unique: true,
      primaryKey: true
    },
    password: {
      type: DataTypes.STRING,
      unique: true,
    }
  });

  User.findByLogin = async login => {
    let user = await User.findOne({
      where: { id: login },
    });

    if (!user) {
      user = await User.findOne({
        where: { email: login },
      });
    }

    return user;
  };

  return User;
};

module.exports = {
  default: user
};