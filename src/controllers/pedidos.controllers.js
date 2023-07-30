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

export const crearPedido = async (request, response) => {
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

export const cancelarPedido = async (request, response) => {
  const { id } = request.params;
  try {
    await Pedido.findByIdAndDelete(id);
    response.status(200).json({
      mensaje: "Pedido cancelado con exito"
    });
  } catch (error) {
    console.log(error);
    response.status(404).json({
      mensaje: `Error al cancelar el pedido, verifica que el id enviado`
    });
  }
};

export const pedidoEntregado = async (request, response) => {
  const { id } = request.params;
  const { body } = request;
  console.log(body.estado)
  try {
    await Pedido.findByIdAndUpdate(id, body);
    response.status(200).json({
      mensaje: "Pedido entregado"
    });
  } catch (error) {
    console.log(error);
    response.status(404).json({
      mensaje: `Error al entregar el producto`
    });
  }
};
