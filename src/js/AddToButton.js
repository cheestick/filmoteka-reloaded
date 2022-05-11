import { addToButton } from './Markup';
import LocalStorage from './LocalStorage';

class AddToButton {
  constructor({ type, info = null, flag = true }, parent) {
    this.type = type;
    this.info = info;
    this.flag = flag;
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
    this.removeClickHandler();
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
  saveToLocalLib(this.info, this.type);
}

function saveToLocalLib(info, type) {
  const libData = LocalStorage.load('myLib');
  // console.log(libData);
  if (isAlreadyInLS(info.id, libData)) {
    console.log('SaveToLocalLib if', libData);
    changeLibRecord(info, type, libData);
  } else {
    console.log('SaveToLocalLib else', libData);
    addNewLibRecord(info, type, libData);
  }
  // console.log(info);
  console.dir(libData);
  LocalStorage.save('myLib', libData);
}

function addNewLibRecord(info, type, libData) {
  console.log('addNewLibRecord start', libData);
  info.myLib = { watched: false, queue: false };
  info.myLib[type] = true;
  libData.push({ ...info });
  console.log('addNewLibRecord end', libData);
}

function changeLibRecord(info, type, libData) {
  console.log('changeLibRecord start', libData);
  if (hasTheSameType(info, type)) {
    console.log('changeLibRecord if', libData);
    removeLibRecord(info, libData);
    return;
  }
  const patch = { watched: false, queue: false };
  patch[type] = true;
  info.myLib = { ...patch };
  changeLibByID(info.id, patch, libData);
  console.log('changeLibRecord end', libData);
}

function removeLibRecord(info, libData) {
  const patch = { watched: false, queue: false };
  info.myLib = { ...patch };
  const index = libData.findIndex(movie => movie.id === info.id);
  console.log(index);
  libData.splice(index, 1);
}

function changeLibByID(id, patch, libData) {
  console.log('changeLibByID start ', libData);
  libData.find(movie => movie.id === id).myLib = { ...patch };
  console.log('changeLibByID end ', libData);
}

function isAlreadyInLS(id, libData) {
  if (!libData?.length) return;
  return libData.find(movie => movie.id === id);
}

function hasTheSameType(info, type) {
  console.log('hasTheSameType start', info);
  return info.myLib[type];
}

export default AddToButton;
