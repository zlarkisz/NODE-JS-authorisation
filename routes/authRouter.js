import Router from "express";
import { check } from "express-validator";
import controller from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

const router = new Router();

router.post(
  "/registration",
  [
    check("username", "The username cannot be empty").notEmpty(),
    check(
      "password",
      "The password must be longer than 4 and shorter than 10"
    ).isLength({ min: 4, max: 10 }),
  ],
  controller.registration
);
router.post("/login", controller.login);
router.get("/users", roleMiddleware(["ADMIN"]), controller.getUsers);

export default router;
