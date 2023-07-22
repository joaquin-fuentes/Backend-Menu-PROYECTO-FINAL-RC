import Usuario from "../models/usuario";
import bcrypt from 'bcrypt';

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

export const crearUsuario = async (request, response) => {
  try {
    const { email, password } = request.body;

    let usuario = await Usuario.findOne({ email });

    if (usuario) {
      return response.status(400).json({
        mensaje: "El correo ya esta registrado"
      });
    }

    usuario = new Usuario(request.body);

    const salt = bcrypt.genSaltSync(10);
    usuario.password = bcrypt.hashSync(password, salt)
    await usuario.save();

    response.status(201).json({
      mensaje: "usuario creado",
      nombre: usuario.nombreUsuario,
      uid: usuario._id
    });
  } catch (error) {
    console.log(error);
    response.status(400).json({
      mensaje: "El usuario no pudo ser creado"
    });
  }
};
