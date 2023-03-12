import mongoose from "mongoose";

const { Schema, model } = mongoose;
const Role = new Schema({
  value: { type: String, default: "USER", unique: true },
});

export default model("Role", Role);
