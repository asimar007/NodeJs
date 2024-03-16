const { short } = require('short id')

const URL = require('../models/url')

async function handleGenerateShortURL(req, res) {
    const body = req.body;
    if (!body.url) {
        return res.status(400).json({ error: "url is require" })
    }
    const shortID = shortid(10);
    await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: [],
    })
    return res.json({ id: shortID })
}

module.exports = {
    handleGenerateShortURL
}