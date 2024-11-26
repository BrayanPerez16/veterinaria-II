// Selecciona todos los inputs de cantidad
const quantityInputs = document.querySelectorAll('input[type="number"]');
const removeLinks = document.querySelectorAll('a[href=""]');
const totalPriceElement = document.querySelector(".precio-total table");

// Función para actualizar los totales
function updateTotals() {
    let subtotal = 0;
    let taxRate = 0.16; // 16% de impuestos
    const rows = document.querySelectorAll("table tr");

    rows.forEach((row, index) => {
        if (index === 0) return; // Salta el encabezado de la tabla
        const priceText = row.querySelector("small").textContent;
        const price = parseFloat(priceText.replace("Precio: $", "").replace(".", ""));
        const quantity = parseInt(row.querySelector('input[type="number"]').value);
        const rowSubtotal = price * quantity;

        if (!isNaN(rowSubtotal)) {
            subtotal += rowSubtotal;
            row.querySelector("td:last-child").textContent = `$${rowSubtotal.toLocaleString("es-CO")}`;
        }
    });

    const taxes = subtotal * taxRate;
    const total = subtotal + taxes;

    // Actualiza la tabla de precios
    const totalRows = totalPriceElement.querySelectorAll("td");
    totalRows[1].textContent = `$${subtotal.toLocaleString("es-CO")}`;
    totalRows[3].textContent = `$${taxes.toLocaleString("es-CO")}`;
    totalRows[5].textContent = `$${total.toLocaleString("es-CO")}`;
}

// Maneja el cambio en cantidad
quantityInputs.forEach((input) => {
    input.addEventListener("input", () => {
        if (parseInt(input.value) < 1) input.value = 1; // Evita cantidades negativas o cero
        updateTotals();
    });
});

// Maneja la eliminación de productos
removeLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const row = link.closest("tr");
        row.remove(); // Elimina la fila del producto
        updateTotals();
    });
});

// Inicializa los totales
updateTotals();
