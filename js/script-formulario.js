document.getElementById("formularioTurno").addEventListener("submit", function (e) 
    {
        e.preventDefault();
        const errores = [];

        const nombre = document.getElementById("nombre");
        const email = document.getElementById("email");
        const fecha = document.getElementById("fecha");
        const edad = document.getElementById("edad");
        const whatsapp = document.getElementById("whatsapp");

        // Reset estilos
        [nombre, email, fecha, edad, whatsapp].forEach(input => 
            {
                input.style.border = "";
            });

        // Validación nombre
        if (!nombre.value.trim()) 
        {
            errores.push("El nombre es obligatorio.");
            nombre.style.border = "2px solid red";
        }

        // Validación email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) 
        {
            errores.push("El email no es válido.");
            email.style.border = "2px solid red";
        }

        // Validación fecha
        const fechaIngresada = new Date(fecha.value);
        const hoy = new Date();
        if (isNaN(fechaIngresada.getTime()) || fechaIngresada < hoy) 
        {
            errores.push("La fecha debe ser válida y futura.");
            fecha.style.border = "2px solid red";
        }

        // Validación edad
        if (edad.value && (!Number.isInteger(Number(edad.value)) || Number(edad.value) <= 0)) 
        {
            errores.push("La edad debe ser un número entero mayor a 0.");
            edad.style.border = "2px solid red";
        }

        // Validación WhatsApp
        if (whatsapp.value && !/^\+?[1-9]\d{1,14}$/.test(whatsapp.value)) 
        {
            errores.push("El WhatsApp debe ser un número válido.");
            whatsapp.style.border = "2px solid red";
        }

        const erroresDiv = document.getElementById("errores");
        erroresDiv.innerHTML = "";
        if (errores.length > 0) 
        {
            errores.forEach(err => 
            {
                const p = document.createElement("p");
                p.style.color = "red";
                p.textContent = err;
                erroresDiv.appendChild(p);
            });
        } else 
        {
            alert("Formulario enviado correctamente");
            this.reset();
        }
    });