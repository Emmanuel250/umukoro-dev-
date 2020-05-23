const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/umukoro', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const Order = mongoose.model('Order', {
    fname: {
        type: String
    },
    lname: {
        type: String
    }
})

const me = new Order({
    fname: 'Emmanuel',
    lname: 'NTIVUGRUZWA'
})

me.save().then(() => {
    console.log(me)
}).catch((e) => {
    console.log(e)
})