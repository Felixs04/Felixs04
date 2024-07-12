
    // Cambio de color al pasar el mouse sobre los elementos de navegación
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.color = '#007bff';
        });
        link.addEventListener('mouseout', function() {
            this.style.color = '';
        });
    });


    // Modal para la política de privacidad
    const privacyLink = document.querySelector('a[data-bs-target="#privacyModal"]');
    privacyLink.addEventListener('click', function(e) {
        e.preventDefault();
        const modal = new bootstrap.Modal(document.getElementById('privacyModal'));
        modal.show();
    });


    // aplicamos tema oscuro
    const temaOscuro = () => {
        document.querySelector("body").setAttribute("data-bs-theme", "dark");
        document.querySelector("#dl-icon").setAttribute("class", "bi bi-sun-fill");
    
    }


    // aplicamos tema claro
    const temaClaro = () => {
        document.querySelector("body").setAttribute("data-bs-theme", "light");
        document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-fill");
    }


    // funcion para cambiar de tema
    const cambiarTema = () => {
        document.querySelector("body").getAttribute("data-bs-theme") === "light"?
        temaOscuro() : temaClaro();
    }

    //Funcion para mostrar receta
    function showInfo(event) {
        const infoBox = event.target.nextElementSibling;
        infoBox.style.display = 'block';
    }

    //funcion para ocultar receta
    function hideInfo(event) {
        const infoBox = event.target.nextElementSibling;
        infoBox.style.display = 'none';
    }
