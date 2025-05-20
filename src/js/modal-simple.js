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