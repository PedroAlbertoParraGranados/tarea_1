// Función que se ejecuta cuando el ratón pasa sobre una imagen
function upDate(previewPic) {
    // Verifica que el evento se dispara correctamente
    console.log("Evento onmouseover disparado");
  
    // Muestra en la consola el atributo alt y src de la imagen
    console.log("Alt:", previewPic.alt);
    console.log("Src:", previewPic.src);
  
    // Cambia el texto del div con ID 'imagen' al atributo alt de la imagen
    let div = document.getElementById("imagen");
    div.innerHTML = previewPic.alt;
  
    // Cambia la imagen de fondo del div 'imagen' al atributo src de la imagen
    div.style.backgroundImage = `url('${previewPic.src}')`;
  }
  
  // Función que se ejecuta cuando el ratón deja de estar sobre una imagen
  function deshacer() {
    // Verifica que el evento se dispara correctamente
    console.log("Evento onmouseout disparado");
  
    // Restaura el texto original del div con ID 'imagen'
    let div = document.getElementById("imagen");
    div.innerHTML = "Pase el ratón por encima de una imagen para mostrarla aquí";
  
    // Restaura la imagen de fondo original (vacía)
    div.style.backgroundImage = "url('')";
  }
  