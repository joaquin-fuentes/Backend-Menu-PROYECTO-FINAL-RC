import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validarUsuario = [
  check("nombreUsuario")
    .notEmpty()
    .withMessage("El nombre del usuario es un dato obligatorio")
    .isLength({ min: 2, max: 50 })
    .withMessage("El nombre del usuario debe contener entre 2 y 50 caracteres inclusive"),
  check("email")
    .notEmpty()
    .withMessage("El email es un dato obligatorio")
    .isLength({ min: 2, max: 50 })
    .withMessage("El email como maximo puede tener 50 caracteres")
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    .withMessage("Formato de email invalido"),
  check("password")
    .notEmpty()
    .withMessage("La contraseña es obligatoria")
    .isLength({ min: 8, max: 16 })
    .withMessage("La contraseña debe contener entre 8 y 16 caracteres")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
    .withMessage("La contraseña debe contener 8 caracteres (al menos 1 letra mayúscula, 1 letra minúscula y 1 número) y puede incluir caracteres especiales"),
  check("estado")
    .isBoolean()
    .withMessage("El estado es obligatorio y booleano"),
  check("isAdmin")
    .isBoolean()
    .withMessage("isAdmin es obligatorio y booleano"),
  (request, response, next) => {
    resultadoValidacion(request, response, next);
  }
]

export default validarUsuario
