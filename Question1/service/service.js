const axios = require('axios');

const ecommerceAPIs = [
    'http://20.244.56.144/test/companies/AMZ',
    'http://20.244.56.144/test/companies/FLP',
    'http://20.244.56.144/test/companies/SNP',
    'http://20.244.56.144/test/companies/MYN',
    'http://20.244.56.144/test/companies/AZO'
];

const fetchProductsFromEcommerceAPIs = async (categoryname, top, minPrice, maxPrice) => {
    const token = process.env.ACCESS_TOKEN;  // to access environment variables
    if (!token) {
        throw new Error('ACCESS_TOKEN is not defined');
    }
    // will map through the ecommernceApis array
    const requests = ecommerceAPIs.map(api => 
        axios.get(`${api}/categories/${categoryname}/products`, {
            params: { 
                top, 
                minPrice, 
                maxPrice 
            },
            headers: {
                'Authorization':` Bearer ${token}`
            }
        })
    );

    const responses = await Promise.all(requests);

    let products = [];
    responses.forEach(response => {
        products = products.concat(response.data);
    });

    return products;
};

module.exports = {
    fetchProductsFromEcommerceAPIs
};