import Producto from "../models/producto";

export const obtenerProductos = async (_request, response) => {
  try {
    const productos = await Producto.find();
    response.status(200).json(productos);
  } catch (error) {
    console.log(error);
    response.status(404).json({
      mensaje: "Error al buscar los productos"
    });
  }
};

export const obtenerProducto = async (request, response) => {
  const { id } = request.params
  try {
    const producto = await Producto.findById(id);
    response.status(200).json(producto);
  } catch (error) {
    console.log(error);
    response.status(404).json({
      mensaje: "Error al buscar el producto"
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

export const borrarProducto = async (request, response) => {
  const { id } = request.params;
  try {
    await Producto.findByIdAndDelete(id);
    response.status(200).json({
      mensaje: "Producto eliminado con exito"
    });
  } catch (error) {
    console.log(error);
    response.status(404).json({
      mensaje: `Error al eliminar producto, verifica que el id enviado: ${id} sea correcto`
    });
  }
};

export const editarProducto = async (request, response) => {
  const { id } = request.params;
  const { body } = request;
  try {
    await Producto.findByIdAndUpdate(id, body);
    response.status(200).json({
      mensaje: "Producto editado correctamente"
    });
  } catch (error) {
    console.log(error);
    response.status(404).json({
      mensaje: `Error al editar producto`
    });
  }
};
