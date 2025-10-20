import { Router } from "express";
import * as BruxoController from './../controllers/bruxoController.js'

const router = Router();

//rota getAll em /
router.get("/", BruxoController.listarTodos);





export default router