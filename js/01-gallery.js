import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

const imagesMarkup = createGalleryItem(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imagesMarkup);

function createGalleryItem(items) {
  return galleryItems
    .map(({ preview, original, description }) => {
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
    })
    .join("");
}

galleryContainer.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const imgFullSrc = event.target.dataset.source;
  console.log(imgFullSrc);

  const instance = basicLightbox.create(
    `<img src="${imgFullSrc}" width="800" height="600">`
  );
  instance.show();

  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
      console.log(`Катя, зроби вже щось нормальне! Нема сил вже!`);
    }
  });
});
