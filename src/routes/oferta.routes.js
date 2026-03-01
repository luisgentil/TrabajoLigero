import { Router } from "express";
import {
  createNewOferta, 
  renderOferta,
  renderOfertaSevilla,
  renderOfertaAndalucia,
  renderOfertasRecientes,
  renderNuevasOfertas,
  renderOfertaEspana,
  renderOfertaMundo,
  renderFormBusqueda,
  renderEncontrar,
  testFunc,
  ofertasNewsletter,
  renderOfertaID,
  renderOfertasPorEmpresa,

} from "../controllers/oferta.controller.js";
import { isAuthenticated } from "../helpers/auth.js";

const router = Router();

// 
router.get("/ofertas", renderOferta);
router.get("/ofertas/oferta/:id", renderOfertaID); // Para ver una oferta específica por ID
router.get("/ofertas/nuevas", renderNuevasOfertas);  // últimas 6 h
router.get("/ofertas/recientes",  renderOfertasRecientes);  // últimas 24 h
router.get("/ofertas/sevilla",  renderOfertaSevilla);
router.get("/ofertas/andalucia", renderOfertaAndalucia);
router.get("/ofertas/espana",  renderOfertaEspana);
router.get("/ofertas/mundo", renderOfertaMundo);
router.get("/ofertas/buscar",  renderFormBusqueda);
router.post("/ofertas/encontrado",  renderEncontrar);
router.get("/ofertas/newsletter",  ofertasNewsletter);
router.get("/ofertas/empresa/:empresa",  renderOfertasPorEmpresa);

export default router;
