// Cargar carrito desde localStorage
function cargarCarrito() {
    const datos = localStorage.getItem("carrito");
    return datos ? JSON.parse(datos) : [];
  }
  
  // Guardar carrito en localStorage
  function guardarCarrito(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
  
  // Añadir producto al carrito
  function agregarAlCarrito(producto) {
    let carrito = cargarCarrito();
    
    // Verificar si el producto ya está en el carrito
    const productoExistente = carrito.find(item => item.id === producto.id);
    if (productoExistente) {
      productoExistente.cantidad += 1; // Incrementar cantidad
    } else {
      carrito.push({ ...producto, cantidad: 1 }); // Añadir nuevo producto
    }
    
    guardarCarrito(carrito);
    alert(`${producto.nombre} se ha añadido al carrito`);
  }
  
  // Escuchar clics en los botones "Añadir al carrito"
  document.addEventListener("DOMContentLoaded", () => {
    const botonesAgregar = document.querySelectorAll(".btn-agregar");
    
    botonesAgregar.forEach(boton => {
      boton.addEventListener("click", () => {
        const producto = {
          id: parseInt(boton.dataset.id),
          nombre: boton.dataset.nombre,
          precio: parseInt(boton.dataset.precio)
        };
        agregarAlCarrito(producto);
      });
    });
  });
  