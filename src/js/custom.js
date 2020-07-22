const menuToggle = document.querySelector('.header__menu-toggle');
const nav = document.querySelector('.header__nav');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('header__menu-toggle_active');
    nav.classList.toggle('nav_active');
  });
}

const popupShow = document.querySelector('.header__btn');
const success = document.querySelector('.popup__success');
const form = document.querySelector('.popup__form');
if (popupShow) {
  popupShow.addEventListener('click', () => {
    document.body.classList.add('popup_active');
    form.style.display = 'flex';
    success.style.display = 'none';
  });
}

const close = document.querySelectorAll('.form__close');
close.forEach((e) => {
  e.addEventListener('click', () => {
    document.body.classList.remove('popup_active');
    document.body.classList.remove('popup_success');
  });
});

const submit = document.querySelector('.form__submit');

if (submit) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.add('popup_success');
    setTimeout(() => {
      form.style.display = 'none';
      success.style.display = 'block';
    }, 600);
  });
}

const popupSelect = document.querySelector('.form__select-placeholder');
const optionsSelect = document.querySelector('.form__select-options');

const toggleSelect = () => {
  popupSelect.classList.toggle('form__select-placeholder_active');
  optionsSelect.classList.toggle('form__select-options_active');
};

const popupSelectValue = document.querySelector('.form__select-placeholder span');
const changeValue = (event) => {
  popupSelectValue.dataset.value = event.target.dataset.value;
  popupSelectValue.textContent = popupSelectValue.dataset.value;
  toggleSelect();
};

if (popupSelect || optionsSelect) {
  popupSelect.addEventListener('click', toggleSelect);
  optionsSelect.addEventListener('click', changeValue);
}

const doc = document.documentElement;
const hearts = document.querySelectorAll('.heart');
const windowWidth = doc.clientWidth;
const windowHeight = doc.clientHeight;

doc.addEventListener('mousemove', (e) => {
  hearts.forEach((heart, i) => {
    heart.setAttribute('style', `transform: translate(${-e.clientX / 30}px, ${-e.clientY / 20}px)`);
  });
});
