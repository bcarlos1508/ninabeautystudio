let carrito = [];

    document.addEventListener("DOMContentLoaded", () => 
    {
        const botones = document.querySelectorAll(".add-to-cart");
        const carritoCantidad = document.getElementById("carrito-cantidad");

        if (!carritoCantidad) {
            console.error("No se encontró el elemento #carrito-cantidad");
            return;
        }

        botones.forEach(boton => {
            boton.addEventListener("click", () => {
                const nombre = boton.getAttribute("data-name");
                const precio = parseFloat(boton.getAttribute("data-price"));

                carrito.push({ nombre, precio });
                carritoCantidad.textContent = carrito.length;

                alert(`${nombre} añadido al carrito.`);
            });
        });
    });




    

