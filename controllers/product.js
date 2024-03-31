const ProductModel = require('../model/product');

// Controller to create a product
exports.create = async (req, res) => {
    if (!req.body.name && !req.body.category && !req.body.price ) {
        res.status(400).send({ message: "Content can not be empty!" });
    }

        const product = new ProductModel({
            name: req.body.name,
            category: req.body.category,
            price: req.body.price
        });

        await product.save().then(data => {
            res.send({
                message:"product created successfully!!",
                product:data
            });
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating user"
            });
        });
};

// Controller to show all products
exports.showAll = async (req, res) => {
    try {
        const products = await ProductModel.find();
        res.status(200).send(products);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving products"
        });
    }
};
