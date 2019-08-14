const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Item Model
const Item = require('../../models/Item');

// @route  GET api/items
// @desc   Get all items
// @access Public
router.get('/api/items', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.send(items))
});

// @route  POST api/items
// @desc   Create an item
// @access Private
router.post('/api/items', auth, (req, res) => {
  const { title, text } = req.body;
  const newItem = new Item({
    title,
    text
  });

  newItem.save().then(item => res.send(item));
});

// @route  DELETE api/items/:id
// @desc   Delete an item
// @access Private
router.delete('/api/items/:id', auth, (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.send(item)))
    .catch(err => res.status(404).send())
});

module.exports = router;