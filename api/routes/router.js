import express from "express";
import { getCarros} from "../controlers/crudCarros.js";

const router = express.Router()
router.get("/getCarros", getCarros)
export default router