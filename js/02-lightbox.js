import { galleryItems } from './gallery-items.js';
// Change code below this line


const shownGallery = document.querySelector(".gallery")

const addedGallery = galleryItems
.map(el => `<a class="gallery__item" href="${el.original}">
<img class="gallery__image" src="${el.preview}" alt="${el.description}" />
</a>`)
.join("")
shownGallery.insertAdjacentHTML("afterbegin",addedGallery)

const lightBox = new SimpleLightbox('.gallery a', { 
    captionType: "alt",
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
 });