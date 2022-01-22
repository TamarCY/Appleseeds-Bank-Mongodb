const express = require("express");
const User = require("../models/User");

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

const getUser = async (req, res) => {
  try {
    const userId = req.params.id;
    // TODO: check if there is a user with this id and if not throw error
    // TODO: take out to "find user" util function
    const user = await User.findOne({ _id: userId });
    res.status(200).send(user);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

const postUser = async (req, res) => {
  try {
    const user = new User({
      id: req.body.id,
      credit: req.body.credit,
      cash: req.body.cash,
      isActive: req.body.isActive
    });
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

const depositToUser = async (req, res) => {
  try {
    res.status(200).send(req.body);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

module.exports = { getUsers, getUser, postUser, depositToUser };
