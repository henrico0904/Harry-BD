import { Router } from "express";
import * as BruxoController from './../controllers/bruxoController.js'

const router = Router();

//rota getAll em /
router.get("/", BruxoController.listarTodos);
//rota GetGyID
router.get("/:id", BruxoController.listarUm)
//rota create
router.post("/", BruxoController.criar)






export default router