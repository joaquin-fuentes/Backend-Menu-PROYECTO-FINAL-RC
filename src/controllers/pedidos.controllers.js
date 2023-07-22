import Pedido from "../models/pedido";

export const obtenerPedidos = async (_request, response) => {
  try {
    const pedidos = await Pedido.find();
    response.status(200).json(pedidos);
  } catch (error) {
    console.log(error);
    response.status(404).json({
      mensaje: "Error al buscar los pedidos"
    });
  }
};

export const crearProducto = async (request, response) => {
  try {
    const pedidoNuevo = new Pedido(request.body);
    await pedidoNuevo.save();
    response.status(201).json({
      mensaje: "Pedido creado con exito"
    });
  } catch (error) {
    console.log(error);
    response.status(404).json({
      mensaje: "Error al crear el pedido"
    });
  }
};
