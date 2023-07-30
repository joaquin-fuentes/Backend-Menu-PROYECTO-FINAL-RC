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
  estado: {
    type: Boolean,
    required: true
  },
  isAdmin: {
    type: Boolean,
    required: true
  }
});

const Usuario = model("usuario", usuarioSchema)

export default Usuario
