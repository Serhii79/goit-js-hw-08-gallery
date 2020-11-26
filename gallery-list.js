import arrayImages from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');

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
  console.log(event.target);
  
});