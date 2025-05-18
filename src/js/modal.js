const modal = document.querySelector('.backdrop-one');
const modalPlan = document.querySelector('.modal-plan');
const modalPrice = document.querySelector('.modal-price');
const closeBtn = document.querySelector('[data-modal-close]');
const openBtns = document.querySelectorAll('.open-modal-btn');

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
