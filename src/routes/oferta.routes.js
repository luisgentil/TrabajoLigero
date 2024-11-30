import { Router } from "express";
import {
  createNewOferta, 
  renderOferta,
  renderOfertaSevilla,
  renderOfertaAndalucia,
  renderOfertasRecientes,
  renderNuevasOfertas,
} from "../controllers/oferta.controller.js";
// import { isAuthenticated } from "../helpers/auth.js";

const router = Router();

// 
router.get("/ofertas", renderOferta);
router.get("/nuevasofertas", renderNuevasOfertas);
router.get("/ofertasrecientes", renderOfertasRecientes);
router.get("/ofertas/sevilla", renderOfertaSevilla);
router.get("/ofertas/andalucia", renderOfertaAndalucia);


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
