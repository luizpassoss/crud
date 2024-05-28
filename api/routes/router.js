import express from "express";
import { getCarros, getCarrosByModel, updateCarros, removeCarros, addCarros} from "../controlers/crudCarros.js";

const router = express.Router()
router.get("/getCarros", getCarros)
router.get("/getCarrosByModel", getCarrosByModel)
router.post("/addCarros", addCarros)
router.put("/updateCarros", updateCarros)
router.delete("/removeCarros", removeCarros)



export default router