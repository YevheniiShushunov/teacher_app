const {getUser} = require("../services/user.services");

const authorization = async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await getUser(email, password)
        console.log('auth:', user)
        res.status(200).send(`${user}`)

    } catch (e) {
        console.error('error:', 'ERROR');
        res.status(404).send(`${e}`);
    }
}

const authentication = async (req, res) => {
    const user = {user:req.email, userid:req.userId};
    res.status(200).json(user);

};

module.exports = {
    authorization,
    authentication
}