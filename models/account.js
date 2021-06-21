const mongoose = require("mongoose")

const accountShema = new mongoose.Schema({

    name: {
        type: String,
        required: true,

    },
    accountNumber:
    {
        type: String,
        required: true

    }
})

module.exports = mongoose.model('account', accountShema);