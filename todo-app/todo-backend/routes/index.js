const express = require('express');
const router = express.Router();

const configs = require('../util/config')
const { getAsync } = require("../redis/index");

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

router.get("/statistics", async (req, res) => {
  const currentCount = await getAsync("added_todos")
  res.send({ added_todos: Number(currentCount || 0) })
})

module.exports = router;
