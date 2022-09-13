import mongoose, { Schema } from "mongoose";
import { createHmac } from 'crypto';
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxLength: 30
    },
    email: {
        type: String,
        required: true
    },
    salt: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        default: 0
    },
    status: {
        type: Number,
        default: 1
    }
}, { timestamps: true });

userSchema.methods = {
    authenticate(password) { //123456
        return this.password == this.encrytPassword(password);
    },
    encrytPassword(password) {
        if (!password) return
        try {
            return createHmac("sha256", "abcs").update(password).digest("hex");
        } catch (error) {
            console.log(error)
        }
    }
}

userSchema.pre("save", function(next) {
    this.password = this.encrytPassword(this.password);
    next();
})
export default mongoose.model('User', userSchema);