import jwt from "jsonwebtoken";
import config from "../config.js";

export default function (req, res, next) {
  if (req.method === "OPTIONS") {
    next();
  }

  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Not authorized" });
    }

    const { secret } = config;
    const decodedData = jwt.verify(token, secret);

    req.user = decodedData;

    next();
  } catch (e) {
    res.status(401).json({ message: "Not authorized" });
  }
}
