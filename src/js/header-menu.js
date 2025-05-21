import spritePath from '../img/sprite.svg?url';
console.log('✅ spritePath:', spritePath);

const menuToggleBtn = document.getElementById('menuToggleBtn');
const menuIcon = document.getElementById('menuIcon');
const modal = document.querySelector('[data-modal]');
const header = document.querySelector('.hide-on-scroll');
let isOpen = false;
let lastScrollTop = 0;
let disableHideOnScroll = false;

// Переключение иконки и меню
menuToggleBtn?.addEventListener('click', () => {
  isOpen = !isOpen;
  modal.classList.toggle('is-open');
 menuIcon.setAttribute('href', isOpen
  ? `${spritePath}#icon-close`
  : `${spritePath}#icon-navbar`
);
});

// Скролл — показать/спрятать хедер (если разрешено)
window.addEventListener('scroll', () => {
  if (disableHideOnScroll || modal.classList.contains('is-open')) return;

  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.classList.add('hidden');
  } else {
    header.classList.remove('hidden');
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Якорные ссылки — плавно и без скрытия хедера
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);

    if (!target) return;

    e.preventDefault();
    disableHideOnScroll = true;

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    setTimeout(() => {
      disableHideOnScroll = false;
    }, 1000);
  });
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

// Закрытие data-modal по якорю и скролл
const burgerMenu = document.querySelector('[data-modal]');

document.querySelectorAll('.navbar-link, .navbar-link-join, .link-join').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    // Закрываем бургер-меню
    if (burgerMenu?.classList.contains('is-open')) {
      burgerMenu.classList.remove('is-open');
      isOpen = false; // ⬅️ обязательно сбросить флаг
      menuIcon.setAttribute('href', `${spritePath}#icon-navbar`); // ⬅️ меняем иконку обратно
      document.body.style.overflow = '';
    }

    // Скроллим к нужной секции
    if (targetSection) {
      disableHideOnScroll = true;

      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      setTimeout(() => {
        disableHideOnScroll = false;
      }, 1000);
    }
  });
});

