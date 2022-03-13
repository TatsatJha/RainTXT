import mongoose from "mongoose"
var Schema = mongoose.Schema

const docSchema = new Schema({
    title:{
        type:String,
        required: true
    },
    content:{
        type:String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    dir:{
        type: String,
        required: true
    }
})

mongoose.models = {}

var doc = mongoose.model("doc", docSchema)
export default doc