const express = require("express");
const {
    create,
    verifyEmail,
    resendEmailVerificationToken,
    forgetPassword,
    sendResetPasswordTokenStatus,
    resetPassword,
    signIn,
} = require("../Controllers/UserController");
const {
    userValidator,
    validate,
    validatePassword,
    signInValidator,
} = require("../middlewares/validator");
const { isValidPasswordResetToken } = require("../middlewares/user");

const router = express.Router();

router.post("/create", userValidator, validate, create);
router.post("/signin", signInValidator, validate, signIn);
router.post("/verify-email", verifyEmail);
router.post("/resend-email_verification", resendEmailVerificationToken);
router.post("/forget-password", forgetPassword);
router.post(
    "/verify-password-reset-token",
    isValidPasswordResetToken,
    sendResetPasswordTokenStatus
);
router.post(
    "/reset-password",
    validatePassword,
    validate,
    isValidPasswordResetToken,
    resetPassword
);

module.exports = router;
