import { galleryItems } from './gallery-items.js';
// Change code below this line
const shownGallery = document.querySelector(".gallery")

const addedGallery = galleryItems
.map(el => `<div class="gallery__item">
<a class="gallery__link" href="${el.original}">
  <img
    class="gallery__image"
    src="${el.preview}"
    data-source="${el.original}"
    alt="${el.description}"
  />
</a>
</div>`)
.join("")








shownGallery.insertAdjacentHTML("afterbegin",addedGallery)
function galleryShow(event){
    event.preventDefault()

 if(event.target.nodeName !== "IMG"){
    return;
 }
 const picture = event.target.dataset.source;
 const instance = basicLightbox.create( `<img src="${picture}" width="800" height="600">`);
instance.show()
const closingModal = (event) =>{
  if(event.key === "Escape"){
    instance.close()
    window.removeEventListener("keydown", closingModal)
  }
}
window.addEventListener("keydown", closingModal )

}

shownGallery.addEventListener("click",galleryShow)
