var express = require('express');
var router = express.Router();
const { addListItem, getAllLists, deleteListItems } = require('../controllers/list.controller');

router.get('/', getAllLists);
router.post("/", addListItem);
router.delete("/", deleteListItems);

module.exports = router;
