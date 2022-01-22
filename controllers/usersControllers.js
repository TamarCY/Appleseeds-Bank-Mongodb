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

const getUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findOne({_id:userId});
        res.status(200).send(user);
    } catch(e) {

        res.status(400).send({error: e.message})
    }
}

const postUser = async (req, res) => {
    try {
       const user = new User ({
           id: req.body.id,
           credit: req.body.credit,
           cash: req.body.cash,
           isActive: req.body.isActive
       })
       await user.save()
       res.status(201).send(user)
    } catch (e) {
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


module.exports = {getUsers, getUser, postUser}