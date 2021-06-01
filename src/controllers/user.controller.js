const pool = require('../database')

const userController = {}

userController.readAll = async (req, res) => {
    try {
        const response = await pool.query('select * from usertab');
        return res.status(200).json(response.rows)

    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server Error');

    }

}

userController.readUser = async (req, res) => {
    try {
        const response = await pool.query('select * from usertab where iduser=$1', [req.params.id]);
        return res.status(200).json(response.rows)

    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server Error');

    }

}

userController.createUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const response = await pool.query(`insert into usertab  values ($1,$2)`, [username, password]);
        return res.status(200).json(response.rows)

    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server Error');

    }

}

userController.updateUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const response = await pool.query(`update  usertab set username=$2 , password=$3 where iduser=$1 `, [req.params.id, username, password]);
        return res.status(200).json(response.rows)

    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server Error');

    }

}

userController.deleteUser = async (req, res) => {
    try {
        const response = await pool.query(`delete from usertab where iduser=$1 `, [req.params.id]);
        return res.status(200).json(response.rows)

    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server Error');

    }

}

module.exports = userController