const express = require("express");
const router = express.Router();
const answer = require("../network/answers");
const purpushController = require("../modules/purpush/index");
const { auth } = require("../middleware/auth");


router.use(auth(['admin']));
router.get("/actived", allActivePurpushs);
router.get("/canceled",allCanceledPurpushs);
router.post("/add", addPurpush);
async function allActivePurpushs(req,res){
    try{
        const items=await purpushController.getActivePurpushs(req.body);
        answer.success(req, res, items, 200);
    }catch(err){
        answer.error(req,res,err,500);
    }
}
async function allCanceledPurpushs(req,res){
    try{
        const items=await purpushController.getCanceledPurpushs(req.body);
        answer.success(req, res, items, 200);
    }catch(err){
        answer.error(req,res,err,500);
    }
}
async function addPurpush(req,res){
    try{
        const item=await purpushController.registerPurpush(req.body);
        answer.success(req, res, item, 200);
    }catch(err){
        answer.error(req,res,err,500);
    }
}

module.exports  =   router;