import JSON from '@ungap/json';
import CustomEvent from '@ungap/custom-event';
import URLSearchParams from '@ungap/url-search-params';
import dialogPolyfill from 'dialog-polyfill';
import $ from '../tools';

const dialog = $.el('dialog');
dialogPolyfill.registerDialog(dialog);
console.log(CustomEvent, URLSearchParams, JSON);
