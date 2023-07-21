import { Router } from "express";
import { obtenerUsuarios } from "../controllers/usuarios.controllers.js";

const router = Router();

router.route('/usuarios').get(obtenerUsuarios)

export default router
