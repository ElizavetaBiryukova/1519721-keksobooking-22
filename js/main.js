import './data.js'
import './util.js'
import './popup.js'
import './form.js'
import './map.js'
import './fetch.js'
import './submitting-form.js'
import {createMapIcon} from './map.js'
import {getData} from './fetch.js';

getData((offers) => {
  createMapIcon(offers);
});
