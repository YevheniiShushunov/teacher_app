const jwt = require("jsonwebtoken");

function generateAccessToken(user) {
    return jwt.sign(user, process.env.JWT_SECRET, {expiresIn: '2d'});
}

module.exports = {
    generateAccessToken
};