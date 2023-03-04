const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    console.log(`Time: ${new Date(Date.now()).toLocaleString('en-AU', { timeZone: 'Australia/Melbourne'})} AEST`.toUpperCase());
    next()
})

router.get('/:statusCode', clientErrorRequest)

/**
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
function clientErrorRequest (req, res) {
    let status = Number(req.params.statusCode);
    if (status < 400 || status > 499) {
        res.status(400).json({ "status": 400, message: "success status code out of range." });
        return;
    }
    res.status(status).json({ "status": status, message: "This is a successful bad request!"});
}

module.exports = router