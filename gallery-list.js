import arrayImages from './gallery-items.js';

const refs = {
  gallery: document.querySelector('.js-gallery'),
  lightbox: document.querySelector('.js-lightbox'),
  lightboxImage: document.querySelector('.lightbox__image'),
  lightboxButton: document.querySelector('.lightbox__button'),
  lightboxOverlay: document.querySelector('.lightbox__overlay'),
};

console.log(refs.lightboxImage);

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

refs.gallery.insertAdjacentHTML('beforeend', createArrayLi.join(''));

// const largeImage = document.querySelector('.gallery__image');

refs.gallery.addEventListener('click', event => {
  event.preventDefault();
  // console.log(event.target);

  if (event.target.nodeName != 'IMG') {
    return;
  }

  const imageRef = event.target;
  const largeImageUrl = imageRef.dataset.source;

  refs.lightbox.classList.add('is-open');
  refs.lightboxImage.src = largeImageUrl;

});

let valueSrc = refs.lightboxImage.src;

window.addEventListener('keydown', (event) => {
  if (event.code === 'Escape') {
    valueSrc = "";
    refs.lightbox.classList.remove('is-open');
  };
});

refs.lightboxOverlay.addEventListener('click', () => {
  valueSrc = "";
  refs.lightbox.classList.remove('is-open');
});

refs.lightboxButton.addEventListener('click', () => {
  valueSrc = "";
  refs.lightbox.classList.remove('is-open');
});