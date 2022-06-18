import { galleryItems } from "./gallery-items.js";
// Change code below this line

const photos = galleryItems.map(({ original, preview, description }) => {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
});

const galleryList = document.querySelector(".gallery");
galleryList.insertAdjacentHTML("beforeend", photos.join(""));

galleryList.addEventListener("click", onImageClick);

function onImageClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);
  instance.show();
  //esc
  addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}
