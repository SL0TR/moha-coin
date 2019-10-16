const router = require("express").Router();

router.use("/blockchain", require("./blockchain/route"));

module.exports = router;