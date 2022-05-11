import { addToButton } from './Markup';

class AddToButton {
  constructor(type, parent) {
    this.type = type;
    this.parent = parent;
    this.markup = addToButton;
    this.create();
    this.button = this.getInstance();
    this.addClickHandler();
  }

  create() {
    this.parent?.insertAdjacentHTML('beforeend', this.markup(this.type));
  }

  destroy() {
    this.button.remove();
    this.button.removeClickHandler();
    this.button = null;
  }

  getInstance() {
    return this.parent?.querySelector(`#${this.type}__control`);
  }

  addClickHandler() {
    this.onClick = onClick.bind(this);
    this.button.addEventListener('click', this.onClick);
  }

  removeClickHandler() {
    this.button.removeEventListener('click', this.onClick);
  }
}

function onClick(e) {
  console.log(e.target.id);
}

export default AddToButton;
