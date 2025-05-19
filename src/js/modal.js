const modal = document.querySelector('.backdrop-one');
const modalPlan = document.querySelector('.modal-plan');
const modalPrice = document.querySelector('.modal-price');
const closeBtn = document.querySelector('[data-modal-close]');
const openBtns = document.querySelectorAll('.butontwo');

openBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const plan = btn.getAttribute('data-plan');
    const price = btn.getAttribute('data-price');

    modalPlan.textContent = plan;
    modalPrice.textContent = price;
    modal.classList.add('is-open');
  });
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('is-open');
});


(() => {
  // Простая модалка
  const modalRefs = {
    openBtn: document.querySelector('[data-modal-open]'),
    closeBtn: document.querySelector('[data-modal-close-simple]'), // ОБРАТИ ВНИМАНИЕ: другой селектор!
    modal: document.querySelector('[data-modal]'),
  };

  modalRefs.openBtn?.addEventListener('click', () => {
    modalRefs.modal.classList.toggle('is-open');
    document.body.style.overflow = 'hidden';
  });

  modalRefs.closeBtn?.addEventListener('click', () => {
    modalRefs.modal.classList.toggle('is-open');
    document.body.style.overflow = '';
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
})();

