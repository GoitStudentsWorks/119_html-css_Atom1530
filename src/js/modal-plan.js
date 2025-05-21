const modal = document.querySelector('.backdrop-one');
const modalPlan = document.querySelector('.modal-plan');
const modalPrice = document.querySelector('.modal-price');
const closeBtn = document.querySelector('[data-modal-close]');
const openBtns = document.querySelectorAll('.card-button');

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


document.querySelectorAll('.navigation-item-link').forEach(link => {
  link.addEventListener('click', function () {
    document.querySelectorAll('.navigation-item-link').forEach(el => {
      el.classList.remove('current');
    });
    this.classList.add('current');
  });
});

