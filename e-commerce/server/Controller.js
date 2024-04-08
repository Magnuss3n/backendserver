const Product  = require('./Model.js');

const Product = require('../models/product');

exports.addProduct = async (req, res) => {
    try {
        // Find the last product to determine the new product ID
        const lastProduct = await Product.findOne().sort({ id: -1 });

        let id = 1;
        if (lastProduct) {
            id = lastProduct.id + 1;
        }

        // Create a new product instance
        const productData = {
            id: id,
            name: req.body.name,
            image: req.body.image,
            category: req.body.category,
            new_price: req.body.new_price,
            old_price: req.body.old_price,
        };

        const product = new Product(productData);

        // Save the product to the database
        await product.save();

        console.log("Product saved:", product);
        
        // Respond with success message and product details
        res.status(201).json({
            success: true,
            product: productData,
        });
    } catch (err) {
        console.error("Error adding product:", err);

        // Handle errors
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
