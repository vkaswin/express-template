import mongoose from "mongoose";
import User from "../models/user";
import { asyncHandler } from "../utils/asyncHandler";

const getAllUsers = asyncHandler((req, res) => {
  res.status(200).send({ message: "Success" });
});

export { getAllUsers };
