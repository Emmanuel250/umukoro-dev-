const path = require('path')
const express = require('express')
require('./db/moongose')
const hbs = require('hbs')
const app = express()
const orderRouter = require('./routers/order')
const taskRouter = require('./routers/task')

const port = process.env.PORT

// Define Path for Expore Configuration
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../template/views')
const partialPath = path.join(__dirname, '../template/partials')

// Set Up handbars Engine and views Location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
app.use(express.static(publicDirectoryPath))
hbs.registerPartials(partialPath)

app.use(express.json())
app.use(taskRouter)
app.use(orderRouter)

app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})