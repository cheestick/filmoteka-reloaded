import { movieInfoModal } from './Markup';

const MODAL_ID = '#movie__info__modal';

class MovieInformationModal {
  constructor(info = null) {
    this.markup = movieInfoModal;
    this.info = info;
    this.create();
    this.modal = this.getInstance();
    this.modal.focus();
    this.addCloseHandlers();
  }

  create() {
    document.body.insertAdjacentHTML('beforeend', this.fillWithData());
    return this;
  }

  destroy() {
    this.modal?.remove();
    this.removeCloseHandlers();
    this.modal = null;
  }

  getInstance() {
    return document.querySelector(MODAL_ID);
  }

  fillWithData() {
    console.log(this.info);
    return this.markup(this.info);
  }

  getInfo() {
    return this.info;
  }

  addCloseHandlers() {
    this.onClose = onClose.bind(this);
    this.modal.addEventListener('click', this.onClose);
    this.modal.addEventListener('keydown', this.onClose);
  }

  removeCloseHandlers() {
    this.modal.removeEventListener('click', this.onClose);
    this.modal.removeEventListener('keydown', this.onClose);
  }
}

function onClose(e) {
  e.type === 'click' && onClick.call(this, e);
  e.type === 'keydown' && onEscape.call(this, e);
}

const wasCloseButtonClicked = element => element.classList.contains('js-modal-close');

function onClick(e) {
  e.preventDefault();
  wasCloseButtonClicked(e.target) && this.destroy();
}

const wasEscapePressed = code => code === 'Escape';

function onEscape(e) {
  wasEscapePressed(e.code) && this.destroy();
}

//function onTouch(e) {
//   e.preventDefault();
//   this.isMovieModalCloseClicked(e.target) && this.destroy()
// }

export default MovieInformationModal;
