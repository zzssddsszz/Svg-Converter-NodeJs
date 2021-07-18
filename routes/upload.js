const express = require('express');
const router = express.Router();
const potrace = require('potrace');
const fs = require('fs');
const multer = require('multer');

const upload = multer({dest: 'images/'})

/* GET home page. */
router.post('/', upload.single('img'),(req,res) => {
  potrace.trace('images/'+req.file.filename,(err, svg) => {
    if (err) throw err;
    res.send(svg);
  })
});

module.exports = router;
