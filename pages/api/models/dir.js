import mongoose from "mongoose"
var Schema = mongoose.Schema

const dirSchema = new Schema({
    title:{
        type:String,
        required: true
    },
    docs:{
        type:Array,
        required: true
    },
    dirs:{
        type: Array,
        required: true
    },
    parent:{
        type: Number,
        required: false
    }
})

mongoose.models = {}

var dir = mongoose.model("dir", dirSchema)
export default dir