const {con} = require("../services/mysql.services");


const createUser = async (email, password, nickname) => {
    try {
        const response = await con.query(`
            INSERT INTO users(email, password, usertype, nickname, confirmed_policy)
            VALUES(?, ?, ?, ?)
    ;`, [email, password, 2, nickname, 1])

        console.log(response)
    } catch (e) {
        console.log(e)
    }

}

const getUserData =  (email, password) => {
        return new Promise(resolve => {
            con.query(
                `SELECT email,id, nickname AS user FROM users WHERE email=? AND password=?;`, [email, password],
                function (err, rows) {
                    resolve(JSON.stringify(rows[0]))
                }
            )
        })
}

module.exports = {
    createUser,
    getUserData,
}