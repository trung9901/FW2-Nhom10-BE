import mongoose, { Schema } from "mongoose";
const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    // status: {
    //     type: Number,
    //     required: true,
    // },
    image: {
        type: String,
    },

}, { timestamps: true })
export default mongoose.model('Category', categorySchema)