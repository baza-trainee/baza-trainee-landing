export function langMenuToggle(): void {
  const activeLangBtn = document.querySelector('#active-lang')!;
  const langList = document.querySelector('#lang-list')!;

  activeLangBtn.addEventListener('click', () => {
    const [textActiveLangBtn, arrowActiveLangBtn] = activeLangBtn.innerHTML
      .trim()
      .split(/\s(.+)/);
    if (!langList.classList.contains('header__lang-list--visible')) {
      activeLangBtn.innerHTML = `<span>${textActiveLangBtn}</span> ${arrowActiveLangBtn}`;

      const [arrow] = activeLangBtn.children[1].children;
      arrow.setAttribute('href', '/img/sprite.svg#arrow-top');

      langList.classList.add('header__lang-list--visible');
    } else {
      activeLangBtn.innerHTML = `${textActiveLangBtn.slice(
        6,
        8
      )} ${arrowActiveLangBtn}`;

      const [arrow] = activeLangBtn.children[0].children;
      arrow.setAttribute('href', '/img/sprite.svg#arrow-bottom');
      
      langList.classList.remove('header__lang-list--visible');
    }
  });
}
