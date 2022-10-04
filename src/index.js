import debounce from 'lodash.debounce';
import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';

const DEBOUNCE_DELAY = 300;
const refInput = document.querySelector('#search-box');
const refInfo = document.querySelector('.country-info');
const refList = document.querySelector('.country-list');

refInput.addEventListener(
  'input',
  debounce(event => {
    let countryInput = event.target.value.trim();
    refList.innerHTML = '';
    refInfo.innerHTML = '';
    if (countryInput === '') {
      return;
    }
    fetchCountries(countryInput);
  }, DEBOUNCE_DELAY)
);
