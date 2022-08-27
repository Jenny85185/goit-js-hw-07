import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const imgGallery = onCreate(galleryItems);
gallery.insertAdjacentHTML("beforeend", imgGallery);

function onCreate(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      />
  </a>
</div>`;
    })
    .join("");
}
gallery.addEventListener("click", imgClick);

function imgClick(event) {
  event.preventDefault();
  const imgCard = event.target.classList.contains("gallery__image");
  if (!imgCard) {
    return;
  }
  const swatchUrlEl = event.target.dataset.source;
  const instance = basicLightbox.create(
    `<img class="modal__image" src="${swatchUrlEl}" width="800" height="600"/>`
  );
  instance.show();
  const modal = document.querySelector("modal__image");
  window.addEventListener("keydown", onEscPress);
  function onEscPress(event) {
    const ESC_KEY_CODE = "Escape";

    if (event.code === ESC_KEY_CODE) {
      instance.close();
      window.removeEventListener("keydown", onEscPress);
    }
  }
}
