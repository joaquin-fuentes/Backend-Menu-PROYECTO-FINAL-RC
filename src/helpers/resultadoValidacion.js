import { validationResult } from "express-validator";

const resultadoValidacion = (request, result, next) => {
  const errors = validationResult(request);

  if (!errors.isEmpty()) {
    return result.status(400).json({ errores: errors.array() });
  }

  next();
};

export default resultadoValidacion;
