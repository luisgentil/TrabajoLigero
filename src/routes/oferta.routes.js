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
} from "../controllers/oferta.controller.js";
// import { isAuthenticated } from "../helpers/auth.js";

const router = Router();

// 
router.get("/ofertas", renderOferta);
router.get("/ofertas/nuevas", renderNuevasOfertas);
router.get("/ofertas/recientes", renderOfertasRecientes);
router.get("/ofertas/sevilla", renderOfertaSevilla);
router.get("/ofertas/andalucia", renderOfertaAndalucia);
router.get("/ofertas/espana", renderOfertaEspana);
router.get("/ofertas/mundo", renderOfertaMundo);


// borrar más adelante
router.post("/ofertas/new-oferta", createNewOferta);
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
