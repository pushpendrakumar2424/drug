const mongoose = require('mongoose')

const drugSchema = new mongoose.Schema({
    label: { type: String, required: true },
    key: { type: String, required : true },
    order: { type: Number,required : true },
    unit: { type: String },
    type : { type : String, enum : ["number", "date","dropdown"], trim : true }, 
    items: [{
        value: {
             type:String,
        },
        text: {
             type: String
            },
            _id:false
      }],
    isRequired: { type: Boolean },
    isReadonly: { type: Boolean, required : true },
})



module.exports = mongoose.model('Drug', drugSchema)