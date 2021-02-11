import Photo from './Photo/index.js';

window.addEventListener("DOMContentLoaded", () => {
  Photo.load();    
});

// Select image
document.getElementById("select-image").onclick = function () {
  document.getElementById('photo-file')
  .click();
};

// cortar imagem
Photo.cropButton.onclick = () => Photo.crop()

// Download
Photo.downloadButton.onclick = () => Photo.download();
