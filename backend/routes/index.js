const express = require('express');
const router = express.Router();


module.exports = function(){

router.get('/ping', (req, res) => {
    res.json({ message: 'Pong 🏓' });
  });

return router
}