const pool = require('../database')

const productController = {}

productController.readAll = async (req, res) => {
    try {
        const response = await pool.query('select * from product');
        return res.status(200).json(response.rows)

    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server Error');

    }

}

productController.readProduct = async (req, res) => {
    try {
        const response = await pool.query('select * from product where idproduct=$1', [req.params.id]);
        return res.status(200).json(response.rows)

    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server Error');

    }

}
productController.createProduct = async (req, res) => {
    const { name, price, stock } = req.body;
    try {
        const response = await pool.query(`insert into usertab values ($1,$2,$3)`, [name, price, stock]);
        return res.status(200).json(response.rows)

    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server Error');

    }

}
productController.updateProduct = async (req, res) => {
    const { name, price, stock } = req.body;
    try {
        const response = await pool.query(`update  usertab set name=$2 , price=$3,stock=$4 where idproduct=$1 `, [req.params.id, name, price, stock]);
        return res.status(200).json(response.rows)

    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server Error');

    }

}

productController.deleteProduct = async (req, res) => {
    try {
        const response = await pool.query(`delete from product where idproduct=$1 `, [req.params.id]);
        return res.status(200).json(response.rows)

    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server Error');

    }

}

module.exports=productController;