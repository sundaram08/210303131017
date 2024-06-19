const  { fetchProductsFromEcommerceAPIs } = require('../service/service');

const getProducts = async (req, res) => {
    try {
        const { categoryname } = req.params;
        const { top, minPrice, maxPrice } = req.query;

        const products = await fetchProductsFromEcommerceAPIs(categoryname, top, minPrice, maxPrice);
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getProducts
};