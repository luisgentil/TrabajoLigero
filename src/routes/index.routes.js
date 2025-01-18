import { Router } from "express";
import { renderIndex, renderAbout, renderSitemap } from "../controllers/index.controller.js";

const router = Router();

router.get("/", renderIndex);
router.get("/about", renderAbout);
router.get("/sitemap", renderSitemap);

export default router;
