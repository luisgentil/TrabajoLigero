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
} from "../controllers/oferta.controller.js";
import { isAuthenticated } from "../helpers/auth.js";

const router = Router();

// 
router.get("/ofertas", renderOferta);
router.get("/ofertas/nuevas", renderNuevasOfertas);  // últimas 2 h
router.get("/ofertas/recientes",  renderOfertasRecientes);  // últimas 24 h
router.get("/ofertas/sevilla",  renderOfertaSevilla);
router.get("/ofertas/andalucia", renderOfertaAndalucia);
router.get("/ofertas/espana",  renderOfertaEspana);
router.get("/ofertas/mundo", renderOfertaMundo);
router.get("/ofertas/buscar",  renderFormBusqueda);
router.post("/ofertas/encontrado",  renderEncontrar);
/* // Para cuando estar registrado sea obligatorio
router.get("/ofertas", isAuthenticated, renderOferta);
router.get("/ofertas/nuevas", isAuthenticated, renderNuevasOfertas);  // últimas 2 h
router.get("/ofertas/recientes", isAuthenticated, renderOfertasRecientes);  // últimas 24 h
router.get("/ofertas/sevilla", isAuthenticated, renderOfertaSevilla);
router.get("/ofertas/andalucia", isAuthenticated, renderOfertaAndalucia);
router.get("/ofertas/espana", isAuthenticated, renderOfertaEspana);
router.get("/ofertas/mundo", isAuthenticated, renderOfertaMundo);
router.get("/ofertas/buscar", isAuthenticated, renderFormBusqueda);
router.post("/ofertas/encontrado", isAuthenticated, renderEncontrar);
 */
router.get("/ofertas/test", isAuthenticated, testFunc);
// borrar más adelante
// router.post("/ofertas/new-oferta", createNewOferta);
/* 
// router.get("/oferta/add", isAuthenticated, renderNoteForm);
// Get All Notes
router.get("/notes", isAuthenticated, renderNotes);

// Edit Notes
router.get("/notes/edit/:id", isAuthenticated, renderEditForm);

router.put("/notes/edit-note/:id", isAuthenticated, updateNote);

// Delete Notes
router.delete("/notes/delete/:id", isAuthenticated, deleteNote);

*/

export default router;
