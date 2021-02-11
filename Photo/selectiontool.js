export default function (Photo) {
  Photo.selection = document.getElementById("selection-tool");  
  Photo.startSelection = false;

  const events = {
    mouseover() {
      this.style.cursor = "crosshair";
    },
    mousedown(event) {
      const { clientX, clientY, offsetX, offsetY } = event;
      Photo.startX = clientX;
      Photo.startY = clientY;
      Photo.relativeStartX = offsetX;
      Photo.relativeStartY = offsetY;
      Photo.startSelection = true;
    },
    mousemove(event) {
      Photo.endX = event.clientX;
      Photo.endY = event.clientY;

      if (Photo.startSelection) {
        Photo.selection.style.display = "initial";
        Photo.selection.style.top = Photo.startY + "px";
        Photo.selection.style.left = Photo.startX + "px";
        Photo.selection.style.width = Photo.endX - Photo.startX + "px";
        Photo.selection.style.height = Photo.endY - Photo.startY + "px";
      }
    },
    mouseup(event) {
      Photo.startSelection = false;
      Photo.relativeEndX = event.layerX;
      Photo.relativeEndY = event.layerY;

      // mostrar o botão de corte
      Photo.cropButton.style.display = "initial";
    },
  };

  /* Este código irá criar um array contendo todos os nomes das chamadas de função para cada um dos eventos.
Por isso o nome da função dentro do objeto events deve ser o mesmo nome do listener.*/

  Object.keys(events).forEach((eventName) => {
    Photo.photoPreview.addEventListener(eventName, events[eventName]);
  });
}
