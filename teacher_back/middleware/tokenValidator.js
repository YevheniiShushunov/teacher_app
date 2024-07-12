const jwt = require("jsonwebtoken");
const {getUserByEmail} = require('../services/user.services')

function tokenCheck(req, res, next) {
    const token = req.get('authorization');
    if (token === null) {
        return req.status(401);
    }

    jwt.verify(token, process.env.JWT_SECRET,  async function (err, user)  {
        if (err || !user?.email) {
            return res.status(401).send(err);
        }

        try {
            await getUserByEmail(user.email);
            req.email = user.email;
            req.userId = user.userId;
            next();

        } catch (e) {
            return res.status(401);
        }
    })
}

module.exports = {
    tokenCheck
}