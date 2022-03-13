import mongoose from "mongoose"
var Schema = mongoose.Schema

const dirSchema = new Schema({
    title:{
        type:String,
        required: true
    },
    docs:{
        type:JSON,
        required: true
    }
})

mongoose.models = {}

var dir = mongoose.model("dir", dirSchema)
export default dir