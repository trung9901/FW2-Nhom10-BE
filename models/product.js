import mongoose from "mongoose";
import { Schema, ObjectId } from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    slug: {
        type: String,
        lowercase: true,
        unique: true,
        index: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
    },
    // quantity: {
    //     type: Number,
    //     required: true
    // },
    description: {
        type: String,

    },
    status: {
        type: Number,

    },
    category: {
        type: ObjectId,
        ref: "Category"
    },
}, { timestamps: true })
productSchema.index({ "$**": 'text' });

export default mongoose.model('Product', productSchema);