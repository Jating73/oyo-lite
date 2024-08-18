const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { USER_TYPE } = require('../helpers/constants');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: [
            USER_TYPE.CUSTOMER,
            USER_TYPE.HOTEL_ADMIN,
            USER_TYPE.SUPER_ADMIN
        ],
        required: true
    }
}, {
    timestamps: true
});

// Hash password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Verify password
userSchema.methods.verifyPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

userSchema.statics.findByRole = function (role) {
    return this.find({ role });
};

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;