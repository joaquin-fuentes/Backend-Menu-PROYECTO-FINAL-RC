import { Schema, model } from "mongoose";

const usuarioSchema = new Schema({
  nombreUsuario: {
    type: String,
    minLength: 2,
    maxLength: 50,
    required: true
  },
  email: {
    type: String,
    minLength: 2,
    maxLength: 50,
    unique: true,
    required: true
  },
  password: {
    type: String,
    minLength: 8,
    maxLength: 200,
    required: true
  },
  Estado: {
    Type: Boolean
  },
  Perfil: {
    Type: String,
    Required: true
  }
});

const Usuario = model("usuario", usuarioSchema)

export default Usuario
