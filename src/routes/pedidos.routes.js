import { Router } from "express";
import { cancelarPedido, crearPedido, obtenerPedidos, pedidoEntregado } from "../controllers/pedidos.controllers.js";
import validarPedido from "../helpers/validacionPedido.js";

const router = Router();

router.route('/pedidos').get(obtenerPedidos).post(validarPedido, crearPedido)
router.route('/pedidos/:id').delete(cancelarPedido).put(validarPedido, pedidoEntregado)
export default router
