const mongoose = require('mongoose')
const validator = require('validator')
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password connot contain "password"')
            }
        }
    },
    age: {
        type: Number,
        validate(value){
            if(value < 0){
                throw new Error('Age must be a positive number')
            }
        }
    },
    date: {
        type: Date
    }
})

const me = new User({
    name: '   Tanawat    ',
    age: 26,
    password: 'PASSword',
    email: 'TEST@GMAIL.Com',
    date: new Date()
})

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log(error)
})