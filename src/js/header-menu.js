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
  menuIcon.setAttribute('href', isOpen ? '/img/sprite.svg#icon-close' : '/img/sprite.svg#icon-navbar');
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

// Закрытие меню по клику на якорь
document.querySelectorAll('.navbar-link').forEach(link => {
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
