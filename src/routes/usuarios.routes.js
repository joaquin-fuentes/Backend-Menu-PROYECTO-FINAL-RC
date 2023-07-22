import { Router } from "express";
import { crearUsuario, login, obtenerUsuarios } from "../controllers/usuarios.controllers.js";

const router = Router();

router.route('/usuarios').get(obtenerUsuarios).post(login)
router.route('/usuarios/registro').post(crearUsuario)

export default router
