import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { 
    createNumCancha, 
    deleteNumCancha, 
    getNumCancha, 
    getNumCanchas, 
    updateNumCancha } from "../controllers/numcancha.js";

const router = express.Router();

//CREATE
router.post("/:canchaId", verifyAdmin, createNumCancha);

//UPDATE
router.put("/:id",verifyAdmin, updateNumCancha);

//DELETE
router.delete("/:id/:canchaId",verifyAdmin,deleteNumCancha);
//GET
router.get("/:id",getNumCancha);
//GET ALL
router.get("/",getNumCanchas);



export default router;