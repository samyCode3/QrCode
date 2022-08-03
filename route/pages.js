const express = require("express")
const router = express()
const QrCode = require("qrcode")

router.get("/", (req, res, next) => {
    res.render("index")
})
router.post("/scan", (req, res, next) => {
   const text = req.body.text
   QrCode.toDataURL(text, (err, src) => {
    res.render("scan", {
        qr_code : src
    })
   })
})

module.exports = router;
