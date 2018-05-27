const express = require('express');

const router = express.Router();


/* GET enviroments widget data. */
router.get('/enviroments', async (req, res, next) => {
	const db = require("../db").getDB();
	const data = await db.collection('data').findOne({}, { projection: { _id: 0 }} );
	res.json(data);
});

module.exports = router;