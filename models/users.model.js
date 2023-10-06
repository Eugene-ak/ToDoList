const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        select: false
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("user", usersSchema);
