import { Router } from "express";
import { cancelarPedido, crearPedido, obtenerPedidos } from "../controllers/pedidos.controllers.js";

const router = Router();

router.route('/pedidos').get(obtenerPedidos).post(crearPedido)
router.route('/pedidos/:id').delete(cancelarPedido)
export default router
