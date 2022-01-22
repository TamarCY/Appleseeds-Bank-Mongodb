const express = require("express");
const {getUser, getUsers, putUsers, postUser, deleteUser} = require("../controllers/usersControllers.js")

const usersRouter = express.Router();

usersRouter.get("/users",getUsers);
usersRouter.get("/users/:id", getUser);
// usersRouter.put("/:id",putUsers);
usersRouter.post("/users",postUser);
// usersRouter.delete("/",deleteUser);

module.exports = usersRouter