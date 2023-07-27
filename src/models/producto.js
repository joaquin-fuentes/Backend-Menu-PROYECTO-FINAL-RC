import { Schema, model } from 'mongoose';

const productoSchema = new Schema({
  nombreProducto: {
    type: String,
    minLength: 2,
    maxLength: 80,
    unique: true,
    required: true
  },
  estado: {
    type: Boolean,
    required: true
  },
  precio: {
    type: Number,
    min: 1,
    max: 30000,
    required: true
  },
  detalle: {
    type: String,
    minLength: 8,
    maxLength: 150,
    required: true
  },
  categoria: {
    type: String,
    required: true
  },
  imagen: {
    type: String,
    required: true
  }
});

const Producto = model('producto', productoSchema)

export default Producto
