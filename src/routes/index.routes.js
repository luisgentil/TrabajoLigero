import { Router } from "express";
import { renderIndex, renderAbout, renderLegal, renderSuscribirse } from "../controllers/index.controller.js";

const router = Router();

router.get("/", renderIndex);
router.get("/about", renderAbout);
router.get("/legal", renderLegal);
router.get("/me-suscribo", renderSuscribirse);

export default router;
