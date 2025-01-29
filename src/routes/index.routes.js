import { Router } from "express";
import { renderIndex, renderAbout, renderLegal } from "../controllers/index.controller.js";

const router = Router();

router.get("/", renderIndex);
router.get("/about", renderAbout);
router.get("/legal", renderLegal);

export default router;
