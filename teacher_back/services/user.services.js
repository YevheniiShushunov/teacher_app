const {generateAccessToken} = require("./tokenGenerator.services");
const {createUser, getUserData, findUser} = require("../repositories/users.repository");


const doRegistration = (email, password) => {
   return createUser(email, password);
}

const getUser = async (email, password) => {
    const response = await getUserData(email, password);
    if(!response) {
        throw new Error('user not found');
    }

    const body = JSON.parse(response);
    const token = generateAccessToken({
        email: body.email,
        userId: body.id,
    })
    const data = {
        email: body.email,
        userId: body.id,
        token: token
    }
    const userData = JSON.stringify(data);

    return userData;
}

const getUserByEmail = async (email) => {
    return findUser(email);
}

const postAuthData = async (login, password) => {
    const response = await signIn(login, password);

    const token = generateAccessToken({
        login: response.login,
        userid: response.user_id
    });
    const userid = response.user_id;
    return {token: `${token}`, login: `${login}`, userid: `${userid}`};
};

module.exports = {
    doRegistration,
    postAuthData,
    getUser,
    getUserByEmail
};