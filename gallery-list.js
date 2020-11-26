import arrayImages from './gallery-items.js';

const galleryRef = document.querySelector('.js-gallery');
const lightboxRef = document.querySelector('js-lightbox');
const lightboxImageRef = document.querySelector('.lightbox__image');

const createLi = ({ preview, original, description }) => `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;

const createArrayLi = arrayImages.map((item) => createLi(item));
galleryRef.insertAdjacentHTML('beforeend', createArrayLi.join(''));

const largeImage = document.querySelector('.gallery__image');

galleryRef.addEventListener('click', event => {
  event.preventDefault();
  // console.log(event.target);

  if (event.target.nodeName != 'IMG') {
    return;
  }

  const imageRef = event.target;
  const largeImageUrl = imageRef.dataset.source;

  console.log(largeImageUrl);
  // lightboxRef.classList.add('.is-open');
  // lightboxImageRef.scr = largeImageUrl;

});