import Producto from "../models/producto";

export const obtenerProductos = async (_request, response) => {
  try {
    const productos = await Producto.find();
    response.status(200).json(productos);
  } catch (error) {
    console.log(error);
    response.status(404).json({
      mensaje: "Error al bsucar los productos"
    });
  }
};

export const crearProducto = async (request, response) => {
  try {
    const productoNuevo = new Producto(request.body);
    await productoNuevo.save();
    response.status(201).json({
      mensaje: "Producto creado con exito"
    });
  } catch (error) {
    console.log(error);
    response.status(404).json({
      mensaje: "Error al crear el productos"
    });
  }
};
