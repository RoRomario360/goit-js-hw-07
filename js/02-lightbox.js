import { galleryItems } from "./gallery-items.js";
// Change code below this line

const photos = galleryItems.map(({ original, preview, description }) => {
  return `<div class="gallery__item">
  <a class="gallery__item" href="${original}">
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

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
