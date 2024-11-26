// Array para almacenar los productos en el carrito
let carrito = [
    { nombre: 'Producto 1', precio: 25000, cantidad: 1 },
    { nombre: 'Producto 2', precio: 25000, cantidad: 1 },
    { nombre: 'Producto 3', precio: 25000, cantidad: 1 }
];

// Función para actualizar el carrito en la interfaz
function actualizarCarrito() {
    const tablaCarrito = document.querySelector('table');
    const totalElement = document.querySelector('.precio-total table');
    let subtotal = 0;
    
    // Limpiar la tabla antes de actualizar
    tablaCarrito.innerHTML = `
        <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
        </tr>
    `;

    // Agregar productos a la tabla
    carrito.forEach((producto, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>
                <div class="info-carrito">
                    <img src="images/buy-${index + 1}.jpg" alt="${producto.nombre}">
                    <div>
                        <p>${producto.nombre}</p>
                        <small>Precio: $${producto.precio}</small>
                        <br>
                        <a href="#" onclick="quitarProducto(${index})">Quitar</a>
                    </div>
                </div>
            </td>
            <td><input type="number" value="${producto.cantidad}" min="1" onchange="actualizarCantidad(${index}, this.value)"></td>
            <td>$${producto.precio * producto.cantidad}</td>
        `;
        tablaCarrito.appendChild(tr);
        subtotal += producto.precio * producto.cantidad;
    });

    // Actualizar precio total
    const impuestos = subtotal * 0.13; // 13% de impuestos
    const total = subtotal + impuestos;

    totalElement.innerHTML = `
        <tr>
            <td>Subtotal</td>
            <td>$${subtotal}</td>
        </tr>
        <tr>
            <td>Impuestos</td>
            <td>$${impuestos}</td>
        </tr>
        <tr>
            <td>Total</td>
            <td>$${total}</td>
        </tr>
    `;
}

// Función para actualizar la cantidad de un producto
function actualizarCantidad(index, cantidad) {
    carrito[index].cantidad = parseInt(cantidad);
    actualizarCarrito();
}

// Función para quitar un producto
function quitarProducto(index) {
    carrito.splice(index, 1); // Eliminar el producto del carrito
    actualizarCarrito(); // Actualizar la vista del carrito
}

// Inicializar el carrito al cargar la página
window.onload = actualizarCarrito;


function renderCarrito() {
    const carrito = cargarCarrito();
    const tablaCarrito = document.querySelector("table tbody");
    
    tablaCarrito.innerHTML = ""; // Limpiar tabla
  
    let subtotal = 0;
  
    carrito.forEach(producto => {
      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td>
          <div class="info-carrito">
            <img src="images/buy-${producto.id}.jpg">
            <div>
              <p>${producto.nombre}</p>
              <small>Precio: $${producto.precio.toLocaleString()}</small>
              <br>
              <a href="#" data-id="${producto.id}" class="quitar-producto">Quitar</a>
            </div>
          </div>
        </td>
        <td><input type="number" value="${producto.cantidad}" min="1" data-id="${producto.id}" class="cantidad-producto"></td>
        <td>$${(producto.precio * producto.cantidad).toLocaleString()}</td>
      `;
      tablaCarrito.appendChild(fila);
  
      subtotal += producto.precio * producto.cantidad;
    });
  
    // Actualizar totales
    const impuestos = subtotal * 0.13; // 13% de impuestos
    const total = subtotal + impuestos;
  
    document.querySelector(".precio-total table tr:nth-child(1) td:nth-child(2)").textContent = `$${subtotal.toLocaleString()}`;
    document.querySelector(".precio-total table tr:nth-child(2) td:nth-child(2)").textContent = `$${impuestos.toLocaleString()}`;
    document.querySelector(".precio-total table tr:nth-child(3) td:nth-child(2)").textContent = `$${total.toLocaleString()}`;
  }
  
  // Inicializar la página del carrito
  document.addEventListener("DOMContentLoaded", renderCarrito);
  