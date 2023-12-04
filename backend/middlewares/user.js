const { isValidObjectId } = require('mongoose');
const PasswordResetToken = require('../models/passwordResetToken');
const { sendError } = require('../utils/Helper');

exports.isValidPasswordResetToken = async (req, res, next) => {
    const { token, userId } = req.body

    if (!token.trim() || !isValidObjectId(userId))
        return sendError(res, "Invalid request!")

    const resetToken = await PasswordResetToken.findOne({ owner: userId });
    if (!resetToken) return sendError(res, 'Unauthorized access, Invalid request!')

    const matched = await resetToken.compaireToken(token)
    if (!matched) return sendError(res, "Unauthorized access, Invalid request!")

    req.resetToken = resetToken;
    next()
}