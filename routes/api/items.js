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

// @route  PATCH api/items/:id
// @desc   Update an item
// @access Private
router.patch('/api/items/:id', auth, async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['title', 'text', 'date']
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!'})
  }

  try {
    const item = await Item.findOne({ _id: req.params.id, owner: req.user._id });

    if (!item) {
      return res.status(404).send()
    }

    updates.forEach((update) => item[update] = req.body[update])
    await item.save()

    res.send(item)
  } catch (e) {
    if (e.name == 'ValidationError') {
      res.status(400).send(e)
    } else {
      res.status(500).send(e)
    }
  }
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