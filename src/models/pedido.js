import { Schema, model } from "mongoose";

const pedidoSchema = new Schema({
  usuario: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
    required: true
  },
  productosDelMenu: [{
    type: Schema.Types.ObjectId,
    ref: "Producto",
    required: true
  }],
  fecha: {
    type: Date,
    required: true
  },
  estado: {
    type: Boolean,
    required: true
  },
  subTotal: {
    type: Number,
    required: true
  },
  nota: {
    type: String,
    minLength: 0,
    maxLength: 50
  }
});

const Pedido = model("pedido", pedidoSchema);

export default Pedido;
