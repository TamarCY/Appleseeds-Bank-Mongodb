const express = require("express");
const User = require("../models/User");


const getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).send(users);
    } catch (e){
        res.status(400).send({error: e.message})
    }

}

// const getUsers = (req, res) => {
//     try {
//       res.status(200).send(loadUsers());
//     } catch (e) {
//       res.status(400).send("Error");
//     }
//   };


module.exports = {getUsers}