const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    username:String,
<<<<<<< HEAD
    name:String,
    email:String,
    password:String,
})

module.exports = mongoose.model('user', userSchema)
=======
    password:String,
})

module.exports = mongoose.model('user', userSchema)
>>>>>>> ab3d42834c2dcb2f190931327f385847398103da
