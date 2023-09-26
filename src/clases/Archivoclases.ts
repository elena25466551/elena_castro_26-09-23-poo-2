// Clase Producto
class Producto {
    constructor(
      public id: number,
      public nombre: string,
      public descripcion: string,
      public precio: number,
      public cantidadEnStock: number
    ) {}
  
    calcularPrecio(cantidad: number): number {
      return this.precio * cantidad;
    }
  }
  
  // Clase Inventario
  class Inventario {
    private productos: Producto[] = [];
  
    agregarProducto(producto: Producto): void {
      this.productos.push(producto);
    }
  
    buscarProductoPorNombre(nombre: string): Producto | undefined {
      return this.productos.find((p) => p.nombre === nombre);
    }
  }
  
  // Crear un inventario
  const inventario = new Inventario();
  
  // Agregar productos al inventario
  inventario.agregarProducto(new Producto(1, "HELADERA", "HOLA", 10, 100));
  inventario.agregarProducto(new Producto(2, "PROCESADORA", "ESLABÓN ", 10, 30));
  inventario.agregarProducto(new Producto(3, "LICUADORA", "PHILIPS" , 10000,50));

  
  // Obtener referencia al botón y al campo de entrada en HTML
  const botonAgregar = document.getElementById("btnAgregar");
  const inputNombre = document.getElementById("nombreProducto") as HTMLInputElement;
  
  // Manejador de eventos para el botón Agregar
  botonAgregar?.addEventListener("click", () => {
    const nombreProducto = inputNombre.value;
    const productoEncontrado = inventario.buscarProductoPorNombre(nombreProducto);
  
    if (productoEncontrado) {
      alert(`Producto encontrado: ${productoEncontrado.nombre}`);
    } else {
      alert("Producto no encontrado");
    }
  });
  

