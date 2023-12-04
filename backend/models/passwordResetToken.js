const mongoose = require("mongoose")
const dayjs = require('dayjs')
const bcrypt = require("bcrypt")
let now = dayjs()

const passwordResetTokenSchema = mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    token: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        expires: 3600,
        default: now.toString()
    },
});
passwordResetTokenSchema.pre('save', async function (next) {
    if (this.isModified('token')) {
        this.token = await bcrypt.hash(this.token, 10)
    }
    next();
})
passwordResetTokenSchema.methods.compaireToken = async function (token) {
    const result = await bcrypt.compare(token, this.token);
    return result;
}

module.exports = mongoose.model("PasswordResetToken", passwordResetTokenSchema)