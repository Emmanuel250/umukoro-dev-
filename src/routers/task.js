const express = require('express')
const router = new express.Router()
const multer = require('multer')
const Task = require('../models/task')

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/aboutUs', (req, res) => {
    res.render('aboutUs')
})

router.get('/howItWorks', (req, res) => {
    res.render('howItWorks')
})

router.get('/contact', (req, res) => {
    res.render('contact')
})





router.get('/orderForm', (req, res) => {
    res.render('orderForm')
})

const upload = multer({
    limits: {
        fileSize: 7000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('Please Upload an Image File'))
        }
        cb(undefined, true)
    }
})
router.post('/orderForm', upload.single('avatar'), async(req, res) => {
    const task = new Task({
        ...req.body
    })

    try {
        const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toBuffer()
        task.avatar = buffer
        await task.save()
        return res.status(201).send(task)
    } catch (e) {
        res.status(400).send({ Error: e })
    }
})







router.get('/moneyBackGuarantee', (req, res) => {
    res.render('moneyBackGuarantee')
})

router.get('/discountPolicy', (req, res) => {
    res.render('discountPolicy')
})

router.get('/revisionPolicy', (req, res) => {
    res.render('revisionPolicy')
})


router.get('/privacyPolicy', (req, res) => {
    res.render('privacyPolicy')
})

router.get('/termsAndConditions', (req, res) => {
    res.render('termsAndConditions')
})


module.exports = router