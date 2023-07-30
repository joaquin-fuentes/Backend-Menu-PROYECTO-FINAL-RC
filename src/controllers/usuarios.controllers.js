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

export const obtenerUsuario = async (request, response) => {
  const { id } = request.params
  try {
    const producto = await Usuario.findById(id);
    response.status(200).json(producto);
  } catch (error) {
    console.log(error);
    response.status(404).json({
      mensaje: "Error al buscar el usuario"
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

export const editarUsuario = async (request, response) => {
  const { id } = request.params;
  const { body } = request;
  try {
    await Usuario.findByIdAndUpdate(id, body);
    response.status(200).json({
      mensaje: "Usuario Editado correctamente"
    });
  } catch (error) {
    console.log(error);
    response.status(404).json({
      mensaje: `Error al editar el Usuario`
    });
  }
};

export const login = async (request, response) => {
  try {
    const { email, password } = request.body;
    const usuario = await Usuario.findOne({ email });

    if (!usuario) {
      return response.status(400).json({
        mensaje: "Correo o password invalido"
      });
    }

    const passwordValido = bcrypt.compareSync(password, usuario.password);

    if (!passwordValido) {
      return response.status(400).json({
        mensaje: "Correo o password invalido"
      });
    }

    response.status(200).json({
      mensaje: "Logueado correctamente",
      uid: usuario._id,
      nombre: usuario.nombreUsuario,
      estado: usuario.estado,
      isAdmin: usuario.isAdmin
    });
  } catch (error) {
    console.log(error);
    response.status(400).json({
      mensaje: "usuario o contraseña invalido"
    });
  }
};
