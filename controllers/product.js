import Product from "../models/product"
import slugify from 'slugify';
// API list sản phẩm
export const list = async (req, res) => {
    try {
        const products = await Product.find().sort({ 'createdAt': -1 }).exec();
        res.json(products);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}
export const read = async (req, res) => {
    const filter = { _id: req.params.id }
    try {
        const product = await Product.findOne(filter);
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}

// API thêm sản phẩm
export const create = async (req, res) => {
    req.body.slug = slugify(req.body.name);
    try {
        const product = await new Product(req.body).save()
        res.json(product);

    } catch (error) {
        res.status(400).json({ message: "không thêm được sản phẩm" })
    }

}

// API xóa sản phẩm
export const remove = async (req, res) => {
    const conditions = { _id: req.params.id }
    try {
        const product = await Product.findOneAndDelete(conditions);
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
    // res.json(products.filter(item => item.id !== +req.params.id));
}
export const update = async (req, res) => {
    const conditions = { _id: req.params.id }
    const doc = req.body
    const options = { new: true }
    try {
        const product = await Product.findByIdAndUpdate(conditions, doc, options);
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }

}

export const search = async (req, res) => {
    console.log(req.query);
    const searchString = req.query.q ? req.query.q : "";
    const result = await Product.find({ $text: { $search: searchString } }).exec();
    res.json(result)
}