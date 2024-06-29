const express = require("express");
const router = express.Router();
const answer = require("../network/answers");
const purpushController = require("../modules/purpush/index");
const { auth } = require("../middleware/auth");


router.use(auth(['admin']));
router.get("/actived", allActivePurchases);
router.get("/canceled",allCanceledPurchases);
router.post("/add", addPurchase);
router.post("/pay",payPurchase);
async function allActivePurchases(req,res){
    try{
        const items=await purpushController.getActivePurpushs(req.body);
        answer.success(req, res, items, 200);
    }catch(err){
        answer.error(req,res,err,500);
    }
}
async function allCanceledPurchases(req,res){
    try{
        const items=await purpushController.getCanceledPurpushs(req.body);
        answer.success(req, res, items, 200);
    }catch(err){
        answer.error(req,res,err,500);
    }
}
async function addPurchase(req,res){
    try{
        const item=await purpushController.registerPurpush(req.body);
        answer.success(req, res, "Compra agregada", 200);
    }catch(err){
        answer.error(req,res,err,500);
    }
}
async function payPurchase(req,res){
    try{
        const item=await purpushController.setCompletedPurpush(req.body);
        let msg="";
        if(item['affectedRows'])msg="Pago Exitoso";
        else msg="Algo salio mal"
        answer.success(req, res, {"response":msg}, 200);
    }catch(err){
        answer.error(req,res,err,500);
    }
}

module.exports  =   router;