const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    console.log(`Time: ${new Date(Date.now()).toLocaleString('en-AU', { timeZone: 'Australia/Melbourne'})} AEST`.toUpperCase());
    next()
})

router.get('/:statusCode', (req, res) => {
    let status = Number(req.params.statusCode);
    if (status < 200 || status > 299) {
        res.status(400).json({ "status": 400, message: "success status code out of range." });
        return;
    }
    res.status(status).json({ "status": status, message: "This is a successful request!"});
})

module.exports = router