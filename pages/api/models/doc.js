import mongoose from "mongoose"
var Schema = mongoose.Schema

const docSchema = new Schema({
    title:{
        type:String,
        required: true
    },
    content:{
        type:String,
        required: false
    },
    date:{
        type: String,
        required: true
    },
    dir:{
        type: String,
        required: false
    }
})

mongoose.models = {}

var doc = mongoose.model("doc", docSchema)
export default doc