import mongoose from "mongoose";
import { Schema, ObjectId } from "mongoose";

const newSchema = new Schema({
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    }
}, { timestamps: true })
newSchema.index({ "$**": 'text' });

export default mongoose.model('New', newSchema);