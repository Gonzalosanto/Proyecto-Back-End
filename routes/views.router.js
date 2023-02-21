import express from "express";
import productos from "../database/products.json" assert{type: "json"}
import { productController } from "../controller/productController.js";

const router = express.Router();
const getProd = productController.getProductById;

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/', (req, res) => {
    res.render('productos', productController.getProductById);
});

export default router;