import express from "express";
import { getUsers} from "../controlers/user.js";

const router = express.Router()
router.get("/", getUsers)
export default router