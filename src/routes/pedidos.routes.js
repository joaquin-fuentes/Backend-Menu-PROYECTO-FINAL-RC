import { Router } from "express";
import { crearPedido, obtenerPedidos } from "../controllers/pedidos.controllers.js";

const router = Router();

router.route('/pedidos').get(obtenerPedidos).post(crearPedido)

export default router
