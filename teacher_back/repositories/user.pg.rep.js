const pool = require("../services/pg.services");

const createUser = async (email, password, nickname) => {
    try {
        const client = pool;
        const result = await client.query(`
            INSERT INTO users(email, password, usertype, nickname, confirmed_policy)
            VALUES($1, $2, $3, $4) RETURNING *
        ;`, [email, password, 2, nickname, 1]);
        return result.rows[0];
    } catch (e) {
        console.log(e);
    }
}

const getUserData = (email, password) => {
    console.log("CREDS:", email, password);
    return new Promise(async (resolve) => {
        try {
            const client = pool;
            const result = await client.query(
                `SELECT email, user_id, nickname AS user FROM users WHERE email=$1 AND password=$2;`,
                [email, password]
            );
            console.log(result.rows[0]);
            resolve(JSON.stringify(result.rows[0]));
        } catch (err) {
            console.log(err);
        }
    });
}

const findUser = (email) => {
    return new Promise(async (resolve) => {
        try {
            const client = pool;
            const result = await client.query(
                `SELECT email AS user FROM users WHERE email=$1;`,
                [email]
            );
            resolve(result.rows[0]);
        } catch (err) {
            console.log(err);
        }
    });
}

module.exports = {
    createUser,
    getUserData,
    findUser
}