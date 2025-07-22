document.addEventListener('DOMContentLoaded', function() {
    const menuCheckbox = document.getElementById('menu');
    const menuContainer = document.querySelector('.menu-container');

    menuCheckbox.addEventListener('click', function() {
        menuContainer.classList.toggle('menu-hidden');
    });
});

const modal = document.querySelector('.modal');
const imgModal = document.getElementById('imgModal');
const caption = document.getElementById('caption');
const closeModal = document.getElementById('closeModal');

document.querySelectorAll('.img-card img').forEach(img => {
  img.addEventListener('click', () => {
    imgModal.src = img.src;
    imgModal.alt = img.alt;
    caption.textContent = img.alt;
    modal.classList.add('active');
  });
});

closeModal.addEventListener('click', e => {
  e.stopPropagation();
  modal.classList.remove('active');
});

modal.addEventListener('click', () => {
  modal.classList.remove('active');
});


