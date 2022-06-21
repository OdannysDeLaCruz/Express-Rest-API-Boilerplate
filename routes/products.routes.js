const { Router } = require('express')
const router = Router()

router.get('/', ( req, res ) => {
    res.json({
        "data": "Get products"
    })
})

module.exports = router