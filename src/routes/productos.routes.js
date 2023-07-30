import { Router } from "express";
import {
  borrarProducto,
  crearProducto,
  editarProducto,
  obtenerProducto,
  obtenerProductos
} from "../controllers/productos.controllers";
import validarProducto from "../helpers/validacionProducto";

const router = Router();

router.route("/productos").get(obtenerProductos).post(validarProducto, crearProducto);
router
  .route("/productos/:id")
  .delete(borrarProducto)
  .put(validarProducto, editarProducto)
  .get(obtenerProducto);

export default router;
