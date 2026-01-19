import iconsPath from '../img/icon.svg';

const svgAccess = document.querySelector('.dribble-line-icon');
const svgSource = svgAccess.querySelector('.dribble-line-source');
const mobScreen = window.matchMedia('(max-width: 767px)');
const tabScreen = window.matchMedia(
  '(min-width: 768px) and (max-width: 1439px)'
);
const deskScreen = window.matchMedia('(min-width: 1440px)');

const svgMarkup = `      <svg class="dribble-line-icon" width="${}">
        <use class="dribble-line-source" href="${}" ></use>
      </svg>`;

function changeSvg() {
  if (mobScreen.matches) {
    svgAccess.setAttribute('width', '320');
    svgSource.setAttribute('href', `${iconsPath}#icon-dribbleline-mobile`);
  }

  if (tabScreen.matches) {
    svgAccess.setAttribute('width', '688');
    svgSource.setAttribute('href', `${iconsPath}#icon-dribbleline-tablet`);
  }

  if (deskScreen.matches) {
    svgAccess.setAttribute('width', '1076');
    svgSource.setAttribute('href', `${iconsPath}#icon-dribbleline-desktop`);
  }
}

changeSvg();
