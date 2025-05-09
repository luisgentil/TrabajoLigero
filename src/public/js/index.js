// Para el aviso de cookies 
// 01/05/2025

document.addEventListener('DOMContentLoaded', function() {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptButton = document.getElementById('accept-cookies');
    const rejectButton = document.getElementById('reject-cookies');
    const configureButton = document.getElementById('configure-cookies');

    // Función para guardar la preferencia de cookies
    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    // Función para obtener el valor de una cookie
    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // Comprobar si ya se ha aceptado
    if (getCookie('cookieConsent') === 'accepted') {
        if (cookieBanner) {
            cookieBanner.style.display = 'none';
        }
        // Aquí podrías iniciar la carga de cookies no esenciales
    } else {
        if (cookieBanner) {
            cookieBanner.classList.add('show');
        }
    }

    if (acceptButton) {
        acceptButton.addEventListener('click', function() {
            setCookie('cookieConsent', 'accepted', 365); // Guarda la aceptación por un año
            if (cookieBanner) {
                cookieBanner.classList.remove('show');
            }
            // Aquí podrías iniciar la carga de todas las cookies
        });
    }

    if (rejectButton) {
        rejectButton.addEventListener('click', function() {
            setCookie('cookieConsent', 'rejected', 30); // Guarda el rechazo por un mes (ejemplo)
            if (cookieBanner) {
                cookieBanner.classList.remove('show');
            }
            // Aquí podrías iniciar la carga solo de las cookies esenciales
        });
    }

    if (configureButton) {
        configureButton.addEventListener('click', function() {
            window.location.href = '/legal'; // Redirige a la página de configuración
        });
    }
});

// para popup de suscripción 
// 
// 
document.addEventListener('DOMContentLoaded', function() {
  function verificarMostrarPopup() {
    const cookieRespuesta = obtenerCookie("respuesta");

    if (cookieRespuesta) {
      const fechaGuardado = new Date(obtenerCookie("fechaGuardado"));
      const ahora = new Date();
      let diasTranscurridos = 0;

      if (cookieRespuesta === "aceptado") {
        diasTranscurridos = (ahora - fechaGuardado) / (1000 * 60 * 60 * 24);
        if (diasTranscurridos < 365) {
          console.log("El usuario aceptó hace menos de un año. No se muestra el popup.");
          return;
        }
      } else if (cookieRespuesta === "cancelado") {
        diasTranscurridos = (ahora - fechaGuardado) / (1000 * 60 * 60 * 24);
        if (diasTranscurridos < 30) {
          console.log("El usuario canceló hace menos de 30 días. No se muestra el popup.");
          return;
        }
      }
      console.log("La cookie de respuesta ha expirado o la lógica requiere mostrar el popup de nuevo.");
    }

    // Obtener el modal
    const modalElement = document.getElementById('miModal');
    const modal = new bootstrap.Modal(modalElement);
    const botonAceptar = document.getElementById('botonAceptar');
    const botonCancelar = document.getElementById('botonCancelar');

    // Esperar 10 segundos antes de mostrar el modal
    setTimeout(function() {
      modal.show(); // Mostrar el modal de Bootstrap
    }, 10000);

    // Event listeners para los botones
    botonAceptar.addEventListener('click', function() {
      guardarRespuestaEnCookie("aceptado", 365);
      modal.hide(); // Ocultar el modal de Bootstrap
      console.log("El usuario hizo clic en Aceptar. Respuesta guardada en cookie por 1 año.");
      window.location.href = '/me-suscribo'; // Redirección
    });

    botonCancelar.addEventListener('click', function() {
      guardarRespuestaEnCookie("cancelado", 30);
      modal.hide(); // Ocultar el modal de Bootstrap
      console.log("El usuario hizo clic en Cancelar. Respuesta guardada en cookie por 30 días.");
    });
  }

  function guardarRespuestaEnCookie(valor, dias) {
    const fechaExpiracion = new Date();
    fechaExpiracion.setDate(fechaExpiracion.getDate() + dias);
    const ahora = new Date();
    const cookieRespuesta = `respuesta=${valor}; expires=${fechaExpiracion.toUTCString()}; path=/`;
    const cookieFechaGuardado = `fechaGuardado=${ahora.toUTCString()}; expires=${fechaExpiracion.toUTCString()}; path=/`;
    document.cookie = cookieRespuesta;
    document.cookie = cookieFechaGuardado;
  }

  function obtenerCookie(nombre) {
    const nombreEQ = nombre + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1, cookie.length);
      }
      if (cookie.indexOf(nombreEQ) === 0) {
        return cookie.substring(nombreEQ.length, cookie.length);
      }
    }
    return null;
  }

  // Llama a la función principal para iniciar la lógica
  verificarMostrarPopup();
});
  