// Фильтры работ: All / Shopify / WordPress
const filterButtons = document.querySelectorAll('.filters button');
const cards = document.querySelectorAll('.card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((b) => b.setAttribute('aria-pressed', String(b === button)));
    cards.forEach((card) => {
      card.hidden = filter !== 'all' && card.dataset.category !== filter;
    });
  });
});

// Раздел Service: открыт только один пункт
const accItems = document.querySelectorAll('.acc-item');

accItems.forEach((item) => {
  const head = item.querySelector('.acc-item__head');
  head.addEventListener('click', () => {
    const wasOpen = item.classList.contains('is-open');
    accItems.forEach((other) => {
      other.classList.remove('is-open');
      other.querySelector('.acc-item__head').setAttribute('aria-expanded', 'false');
    });
    if (!wasOpen) {
      item.classList.add('is-open');
      head.setAttribute('aria-expanded', 'true');
    }
  });
});

// Смена фото по нажатию на телефонах (на компьютере работает наведение)
const photo = document.querySelector('.hero__photo');

if (photo && window.matchMedia('(hover: none)').matches) {
  photo.addEventListener('click', () => photo.classList.toggle('is-swapped'));
}
