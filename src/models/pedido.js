import { Schema, model } from "mongoose";

const pedidoSchema = new Schema({
  usuario: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
    required: true
  },
  productos: [{
    type: Schema.Types.ObjectId,
    ref: "Producto",
    required: true
  }],
  fecha: {
    type: Date,
    default: Date.now
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
    minLength: 2,
    maxLength: 30
  }
});

const Pedido = model("pedido", pedidoSchema);

export default Pedido;
