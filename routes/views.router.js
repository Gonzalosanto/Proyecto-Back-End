import express from "express";
import productos from "../database/products.json" assert{type: "json"}

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index',{productos:productos});
});


export default router;