const express = require("express");

const setupRouter = () => {
  const routers = express.Router();

  routers.get("/users", (req, res) => {
    res.json({name: "skh"})
  });

  return routers;
};

module.exports = setupRouter;