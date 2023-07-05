import Router from "express";
import FormController from "./FormController.js";

const router = Router();

router.post("/", FormController.create);
router.get("/", FormController.getAll);
// router.get("/:streamerId");
// router.put("/:streamerId/:vote");

export default router;
