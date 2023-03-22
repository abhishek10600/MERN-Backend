import express from "express";
import {
    createNewUser,
    deleteUser,
    getAllUsers,
    getSpecificUser,
    specialUser,
    updateUser
} from "../controllers/user.js";

const router = express.Router();

router.post("/new", createNewUser);

router.get("/all", getAllUsers);

router.get("/special", specialUser);

router.get("/:id", getSpecificUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

export default router;