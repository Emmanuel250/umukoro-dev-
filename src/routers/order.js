const express = require('express')
const Order = require('../models/order')
const router = new express.Router()

router.get('/almost', (req, res) => {
    res.render('almost')
})

router.post('/almost', async(req, res) => {

    const order = new Order({
        ...req.body
    })

    try {
        await order.save()
        res.status(201).send(order)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/congratulations', (req, res) => {
    res.render('congratulations')
})

module.exports = router