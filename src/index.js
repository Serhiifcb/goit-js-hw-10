import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import './css/styles.css';

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

function fetchCountries(name) {
  fetch(
    `https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,languages`
  )
    .then(response => {
      return response.json();
    })
    .then(data => {
      if (data.length > 10) {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
        return;
      }
      if (data.length === 1) {
        const markupInfo = `
        <div class="flag-and-name">
        <img src="${data[0].flags.svg}" class="flag">
        <div class="country-item">${data[0].name}</div>
        </div>
        <div class="country-item"><p class="item-name">Capital: </p>${data[0].capital}</div>
        <div class="country-item"><p class="item-name">Population: </p>${data[0].population}</div>
        `;
        let markupLanguage = '';
        if (data[0].languages.length === 1) {
          markupLanguage = `
          <div class="country-item">
            <p class="item-name">Languages: </p>${data[0].languages[0].name}
          </div>
          `;
          refInfo.innerHTML = markupInfo + markupLanguage;
        } else {
          markupLanguage = `
          <div class="country-item">
            <p class="item-name">Languages: </p>${data[0].languages[0].name}
          `;
          for (let k = 1; k < data[0].languages.length; k++) {
            markupLanguage = markupLanguage + ', ' + data[0].languages[k].name;
          }
          refInfo.innerHTML = markupInfo + markupLanguage + `</div>`;
        }
      } else {
        const markupList = data
          .map(
            country =>
              `<li class="list-item"><img src="${country.flags.svg}" class="flag-list">${country.name}</li>`
          )
          .join('');
        refList.innerHTML = markupList;
      }
    })
    .catch(error => {
      Notiflix.Notify.failure('Oops, there is no country with that name');
    });
}
