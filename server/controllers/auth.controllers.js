import User from "../models/users.js";
import { signToken } from "../utils/jwt.js";

export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const userExist = await User.findOne({ username });
    if (userExist && userExist.matchPassword(password)) {
      res.status(200).json({
        token: signToken({ id: userExist._id, isAdmin: false }),
      });
    } else {
      res.status(400).json("wrong username or password");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const register = async (req, res) => {
  const { username, password } = req.body;
  try {
    const userExist = await User.findOne({ username });
    if (userExist) res.status(400).json("El usuario ya  existe");
    const newUser = await User.create({
      username,
      password,
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
