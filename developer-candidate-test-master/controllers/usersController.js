const UsersDB = require('../models/db');

// Get all users details
const getEveryone = (req, res, next) => {
  UsersDB.find({}, {}, (err, users) => {
    res.status(200).json(users);;
  });
};

// Get Male users
const getMale = (req, res, next) => {
  UsersDB.find({
    gender: 'male'
  }, {}, (err, users) => {
    res.status(200).json(users);;
  });
};

// Get Female users
const getFemale = (req, res, next) => {
  UsersDB.find({
    gender: 'female'
  }, {}, (err, users) => {
    res.status(200).json(users);;
  });
};

// Get Under 30 users
const getUnder30 = (req, res, next) => {
  UsersDB.find({
    age: {
      $lt: 30
    }
  }, {}, (err, users) => {
    res.status(200).json(users);;
  });
};

// Get Over 30 users
const getOver30 = (req, res, next) => {
  UsersDB.find({
    age: {
      $gte: 30
    }
  }, {}, (err, users) => {
    res.status(200).json(users);;
  });
};

module.exports = {
  getEveryone,
  getMale,
  getFemale,
  getUnder30,
  getOver30
};
