import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";
import Usuario from "../models/usuario";
const validarPedido = [
  check("usuario")
    .notEmpty()
    .withMessage("El id del usuario es obligatorio")
    .isMongoId()
    .withMessage("Id no valido")
    .custom(async (value) => {
      const result = await Usuario.findById(value)
      console.log(Usuario)
      if (result !== null) {
        return true
      }
      throw new Error("No se encontro este usuario")
    }),
  check("productosDelMenu")
    .notEmpty()
    .withMessage("Los productos son obligatorios en el pedido")
    .isArray()
    .withMessage("Los pedidos deben venir como array"),
  check("fecha")
    .notEmpty()
    .withMessage("La fecha es obligatoria")
    .isLength({ min: 1, max: 50 })
    .withMessage("Demasiados carateres"),
  check("estado")
    .notEmpty()
    .withMessage("El estado es un dato obligatorio")
    .isBoolean()
    .withMessage("El estado debe ser true o false"),
  check("subTotal")
    .notEmpty()
    .withMessage("El subTotal es un dato obligatorio")
    .isNumeric()
    .withMessage("El subTotal debe ser un numero"),
  check("nota")
    .isString()
    .withMessage("La nota debe ser un string")
    .isLength({ min: 0, max: 50 })
    .withMessage("La nota puede tener como maximo 50 caracteres"),
  (request, response, next) => {
    resultadoValidacion(request, response, next);
  }
];

export default validarPedido;
