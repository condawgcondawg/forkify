import View from './View.js';
import PreviewView from './previewView.js';
import icons from 'url:../../img/icons.svg';
import previewView from './previewView.js';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errormessage = `No bookmarks yet. Find a nice recipe and bookmark it🤣`;

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new BookmarksView();
