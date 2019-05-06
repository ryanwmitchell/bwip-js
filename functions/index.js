const functions = require('firebase-functions');
const bwipjs = require('./gcp-bwipjs');	// ./ required for local use

exports.bwipjs = functions.https.onRequest((req, res) => {
    // Do not allow images to grow too large
    bwipjs(req, res, { sizelimit:2048*2048 });
});
