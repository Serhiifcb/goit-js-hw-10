import debounce from 'lodash.debounce';
import './css/styles.css';

const DEBOUNCE_DELAY = 300;
// let name = peru;
const refInput = document.querySelector('#search-box');
const refInfo = document.querySelector('.country-info');
const refList = document.querySelector('.country-list');

refInput.addEventListener(
  'input',
  debounce(event => {
    let countryInput = event.target.value;
    refList.innerHTML = '';
    refInfo.innerHTML = '';
    if (countryInput === '') {
      return;
    }
    // console.log(countryInput);
    fetchCountries(countryInput);
  }, DEBOUNCE_DELAY)
);
function fetchCountries(Input) {
  fetch(
    'https://restcountries.com/v2/name/' +
      Input +
      '?fields=name,capital,population,flags,languages'
  )
    .then(response => {
      return response.json();
    })
    .then(data => {
      // console.log(data);
      if (data.length === 1) {
        const markupInfo = `
        <div class="flag-and-name">
        <img src="${data[0].flags.svg}" class="flag">
        <div class="country-item">${data[0].name}</div>
        </div>
        <div class="country-item"><p class="item-name">Capital: </p>${data[0].capital}</div>
        <div class="country-item"><p class="item-name">Population: </p>${data[0].population}</div>
        `;
        // console.log('Name: ', data[0].name);
        // console.log('Capital: ', data[0].capital);
        // console.log('Population: ', data[0].population);
        // console.log('Flag: ', data[0].flags.svg);
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
        // for (let i = 0; i < data.length; i++) {
        //   console.log(data[i].name);
        // }
        const markupList = data
          .map(country => `<li class="list-item">${country.name}</li>`)
          .join('');
        refList.innerHTML = markupList;
      }
    })
    .catch(error => {
      console.log('Not found country');
    });
}
