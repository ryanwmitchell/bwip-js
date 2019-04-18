const functions = require('firebase-functions');
const bwipjs = require('./gcp-bwipjs');	// ./ required for local use

exports.bwipjs = functions.https.onRequest((req, res) => {
    // If the url does not begin /?bcid= then 404.  Otherwise, we end up
    // returning 400 on requests like favicon.ico.
    if (req.url.indexOf('/?bcid=') != 0) {
        res.status(404)
           .contentType('text/plain')
           .send('BWIP-JS: Unknown request format.');
    } else {
        // Do not allow images to grow too large
        bwipjs(req, res, { sizelimit:2048*2048 });
    }
});
