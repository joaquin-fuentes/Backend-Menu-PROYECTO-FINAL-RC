import Usuario from "../models/usuario";

export const obtenerUsuarios = async (_request, response) => {
  try {
    const usuarios = await Usuario.find()
    response.status(200).json(usuarios)
  } catch (error) {
    console.log(error);
    response.status(404).json({
      mensaje: "Error al buscar los usuarios"
    });
  }
};
