import { Router } from "express";
import { crearUsuario, login, obtenerUsuarios, obtenerUsuario, editarUsuario } from "../controllers/usuarios.controllers.js";
import validarUsuario from "../helpers/validacionUsuario.js";

const router = Router();

router.route('/usuarios').get(obtenerUsuarios).post(login)
router.route('/usuarios/:id').get(obtenerUsuario).put(editarUsuario)
router.route('/usuarios/registro').post(validarUsuario, crearUsuario)

export default router
