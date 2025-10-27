import { Router } from "express";
import * as BruxoController from './../controllers/bruxoController.js'

const router = Router();

//rota getAll em /
router.get("/", BruxoController.listarTodos);
//rota GetGyID
router.get("/:id", BruxoController.listarUm)
//rota create
router.post("/", BruxoController.criar)
//rota delete
router.delete("/:id", BruxoController.apagar)
//rota update
router.put("/:id", BruxoController.atualizar)






export default router