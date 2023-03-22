import { User } from "../models/user.js";

export const getAllUsers = async (req, res) => {
    const users = await User.find({});
    res.json({
        success: true,
        users
    })
}

export const specialUser = async (req, res) => {
    res.status(200).json({
        success: true,
        message: "This is special route"
    })
}

export const getSpecificUser = async (req, res) => {
    const { id } = req.params;
    console.log(req.params);
    const user = await User.findById(id);
    res.json({
        success: true,
        user
    })
}

export const createNewUser = async (req, res) => {
    const { name, email, password } = req.body;
    await User.create({
        name,
        email,
        password,
    })
    res.status(201).cookie("temp", "lol").json({
        success: true,
        message: "Registered successfully"
    })
}

export const updateUser = (req, res) => {
    res.json({
        success: true,
        message: "User Updated Successfully"
    })
}

export const deleteUser = (req, res) => {
    res.json({
        success: true,
        message: "User Deleted!"
    })
}