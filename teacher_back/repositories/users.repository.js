const {con} = require("../services/mysql.services");


const createUser = async (email, password, nickname) => {
    try {
        return await con.query(`
            INSERT INTO users(email, password, usertype, nickname, confirmed_policy)
            VALUES(?, ?, ?, ?)
    ;`, [email, password, 2, nickname, 1])

    } catch (e) {
        console.log(e)
    }

}

const getUserData = (email, password) => {
    return new Promise(resolve => {
        con.query(
            `SELECT email,id, nickname AS user FROM users WHERE email=? AND password=?;`, [email, password],
            function (err, rows) {
                resolve(JSON.stringify(rows[0]))
            }
        )
    })
}

const findUser = (email) => {
    return new Promise(resolve => {
        con.query(
            `SELECT email AS user FROM users WHERE email=?;`, [email], function (err, rows) {
                resolve(rows[0])
            }
        )
    })
}

module.exports = {
    createUser,
    getUserData,
    findUser
}