import { Router } from "express";
import { obtenerPedidos } from "../controllers/pedidos.controllers.js";

const router = Router();

router.route('/pedidos').get(obtenerPedidos)

export default router
