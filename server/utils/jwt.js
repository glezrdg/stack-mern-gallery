import jwt from "jsonwebtoken";

export const signToken = (info) => {
  return jwt.sign({ ...info }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};
