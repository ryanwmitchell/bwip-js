const functions = require('firebase-functions');
const bwipjs = require('./gcp-bwipjs');	// ./ required for local use

exports.bwipjs = functions.https.onRequest((req, res) => {
    let secret = req.headers.authorization
    // TODO: Grab key from secure store
    if (!(secret === "SavannaIsCool!987")) {
        res.status(401).send({ message: "Authorization failure" })
        return
    }
    // Do not allow images to grow too large
    bwipjs(req, res, { sizelimit:2048*2048 });
});
