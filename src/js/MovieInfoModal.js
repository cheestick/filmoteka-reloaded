import { movieInfoModal } from './Markup';
import AddToButton from './AddToButton';

const MODAL_ID = '#movie__info__modal';
const MODAL_CONTROLS = '.description__controls';
const BUTTON_TYPE = {
  WATCHED: 'watched',
  QUEUE: 'queue',
};

class MovieInfoModal {
  constructor(info = null) {
    this.markup = movieInfoModal;
    this.info = info;
    console.log(info);
    this.create();
    this.modal = this.getInstance();
    this.watchedRef = new AddToButton(
      { type: BUTTON_TYPE.WATCHED, info: this.info },
      parent(MODAL_CONTROLS),
    );
    this.queueRef = new AddToButton(
      { type: BUTTON_TYPE.QUEUE, info: this.info },
      parent(MODAL_CONTROLS),
    );
    this.modal.focus();
    this.addCloseHandlers();
  }

  create() {
    document.body.insertAdjacentHTML('beforeend', this.fillWithData());
  }

  destroy() {
    this.modal?.remove();
    this.watchedRef.destroy();
    this.queueRef.destroy();
    this.removeCloseHandlers();
    this.modal = null;
  }

  getInstance() {
    return document.querySelector(MODAL_ID);
  }

  fillWithData() {
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

function parent(name) {
  return document.querySelector(name);
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

export default MovieInfoModal;
