const ctaButton = document.querySelector('#cta-button');
const ctaModal = document.querySelector('#cta-modal');
const ctaModalClose = document.querySelector('.modal-close');

ctaButton.addEventListener('click', () => {
    ctaModal.classList.add('show');
});

ctaModalClose.addEventListener('click', () => {
    ctaModal.classList.remove('show');
});