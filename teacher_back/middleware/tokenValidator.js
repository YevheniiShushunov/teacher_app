const jwt = require("jsonwebtoken");
const {getUser} = require('../services/user.services')

function tokenCheck(req, res, next) {
    const header = req.headers(['Authorization']);
    const token = header && header.split(' ')[1];

    if (token === null) {
        return req.status(401);
    }

    jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
        if (err) {
            return req.status(401);
        }

        try {
            await getUser(user.email);
            req.user = user.email;
            req.userId = user.id;
            next();

        } catch (e) {
            return req.status(401);
        }
    })
}

module.exports = {
    tokenCheck
}