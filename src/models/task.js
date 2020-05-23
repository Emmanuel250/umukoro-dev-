const moongose = require('mongoose')
const validator = require('validator')

const taskSchema = moongose.Schema({
    level: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: true,
        trim: true
    },
    subject: {
        type: String,
        required: true,
        trim: true
    },
    institution: {
        type: String,
        required: true,
        trim: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    details: {
        type: String,
        required: true,
        trim: true
    },
    file: {
        type: String,
        trim: true
    },
    deadline: {
        type: Date,
        required: true,
        trim: true
    },
    taskphoto: {
        type: Buffer
    }
})

const Task = moongose.model('Task', taskSchema)

module.exports = Task