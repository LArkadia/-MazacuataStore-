const express   =   require("express");
const router    =   express.Router();
const answer    =   require("../network/answers");
const sellController    =   require("../modules/sell/index");
const { auth }  =   require("../middleware/auth");

router.use(auth(['vendedor']));
router.post("/", pointOfSale);
router.get("/", getAllSells);

async function getAllSells(req, res) {
    try {
        const items = await sellController.getAllSells();
        answer.success(req, res, items, 200);
    } catch (err) {
        answer.error(req, res, err, 500);
    }
}

async function pointOfSale(req, res, next) {
    try {
        const body = {
            venta: {
                id_usuario: req.body.id_usuario,
                created_at: new Date(),
                updated_at: new Date()
            },
            detalles: req.body.detalles // Suponiendo que `detalles` es un array de objetos con `isbn` y `total`
        };

        const result = await sellController.pointOfSale(body);
        answer.success(req, res, 'Sold!', 201);
    } catch (err) {
        next(err);
    }
}


module.exports  =   router;