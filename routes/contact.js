const express = require('express');
const router = express.Router();

const contact = require('../controller/contactus')

router.get('/contactus',contact.contactUs)
router.post('/success',contact.sucPage)
module.exports = router;