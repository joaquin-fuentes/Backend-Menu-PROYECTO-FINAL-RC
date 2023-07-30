import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validarProducto = [
  check("nombreProducto")
    .notEmpty()
    .withMessage("El nombre del producto es un dato obligatorio")
    .isLength({ min: 2, max: 80 })
    .withMessage("El nombre del producto debe contener entre 2 y 80 caracteres inclusive")
    .matches(/^[A-Z][A-Za-z\s0-9]{1,49}$/)
    .withMessage("El nombre del producto debe comenzar con letra mayúscula además solo puede contener letras y numeros entre 2 y 80 carácteres"),
  check("estado")
    .notEmpty()
    .withMessage("El estado es obligatorio"),
  check("precio")
    .notEmpty()
    .withMessage("El precio es obligatorio")
    .isNumeric()
    .withMessage("El precio debe ser un número")
    .custom((value) => {
      if (value >= 1 && value <= 30000) {
        return true;
      } else {
        throw new Error("El precio debe estar entre 1 y 30000");
      }
    }),
  check("detalle")
    .notEmpty()
    .withMessage("El detalle del producto es un dato obligatorio")
    .matches(/^(?=.*[A-Z])[A-Za-zÁÉÍÓÚáéíóúÑñ0-9:,.\s]{7,199}$/)
    .withMessage("El detalle del producto debe comenzar con mayúscula y debe contener como mínimo 8 carácteres y como máximo 150 carácteres (puede usar letras, números y signos de puntuación)")
    .isLength({ min: 8, max: 150 })
    .withMessage(
      "El detalle del producto debe contener entre 8 y 150 caracteres inclusive"
    ),
  check("categoria")
    .notEmpty()
    .withMessage("La categoria es un dato obligatorio")
    .isIn(["pastas", "sandwich", "pizzas", "postres", "bebidas", "al plato"])
    .withMessage("Debe ingresar una categoria valida"),
  check("imagen")
    .notEmpty()
    .withMessage("La imagen es un dato obligatorio")
    .matches(/^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|png|svg|webp)$/)
    .withMessage("La imagen debe tener el formato adecuado (jpg, jpeg, png, svg o webp)"),
  (request, response, next) => {
    resultadoValidacion(request, response, next);
  }
];

export default validarProducto;
