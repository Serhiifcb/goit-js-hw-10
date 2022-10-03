import './css/styles.css';

const DEBOUNCE_DELAY = 300;
// let name = peru;
const refInput = document.querySelector('#search-box');
refInput.addEventListener('input', event => {
  let countryInput = event.target.value;
  // console.log(countryInput);
  fetchCountries(countryInput);
});
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
        console.log('Name: ', data[0].name);
        console.log('Capital: ', data[0].capital);
        console.log('Population: ', data[0].population);
        console.log('Flag: ', data[0].flags.svg);
        if (data[0].languages.length === 1) {
          console.log('Language: ', data[0].languages[0].name);
        } else {
          for (let k = 0; k < data[0].languages.length; k++) {
            console.log(data[0].languages[k].name);
          }
        }
      } else {
        for (let i = 0; i < data.length; i++) {
          console.log(data[i].name);
        }
      }
    })
    .catch(error => {
      console.log('Not found country');
    });
}
