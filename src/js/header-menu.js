
const menuToggleBtn = document.getElementById('menuToggleBtn');
const menuIcon = document.getElementById('menuIcon');
const modal = document.querySelector('[data-modal]');

let isOpen = false;

menuToggleBtn.addEventListener('click', () => {
  isOpen = !isOpen;
  modal.classList.toggle('is-open'); // добавь этот класс в CSS

  if (isOpen) {
    menuIcon.setAttribute('href', '/img/sprite.svg#icon-close');
  } else {
    menuIcon.setAttribute('href', '/img/sprite.svg#icon-navbar');
  }
});

let lastScrollTop = 0;
const header = document.querySelector('.hide-on-scroll');

window.addEventListener('scroll', () => {
const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

if (scrollTop > lastScrollTop) {
  // Скролл вниз — прячем хедер
  header.classList.add('hidden');
} else {
  // Скролл вверх — показываем хедер
  header.classList.remove('hidden');
}

lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});



// Бургер-меню
const menuRefs = {
  openBtn: document.querySelector('[data-menu-open]'),
  closeBtn: document.querySelector('[data-menu-close]'),
  menu: document.querySelector('[data-menu]'),
};

menuRefs.openBtn?.addEventListener('click', () => {
  menuRefs.menu.classList.add('is-open');
  document.body.style.overflow = 'hidden';
});

menuRefs.closeBtn?.addEventListener('click', () => {
  menuRefs.menu.classList.remove('is-open');
  document.body.style.overflow = '';
});

// Закрытие меню по клику на ссылку
const navLinks = document.querySelectorAll('.navbar-link');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    menuRefs.menu.classList.remove('is-open');
    document.body.style.overflow = '';

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});