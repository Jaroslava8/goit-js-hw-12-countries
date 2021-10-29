// import countryCardTpl from './partials/country-card.hbs';

// const refs = {
//   cardContainer: document.querySelector('.js-card-container'),
//   searchForm: document.querySelector('.js-search-form'),
// };
// refs.searchForm.addEventListener('submit', onSearch);
// refs.searchForm.addEventListener('input', _.debounce(onInput, 500));

// function onSearch(e) {
//   e.preventDefault();

//   const form = e.currentTarget;
//   const searchQuery = form.elements.query.value;

//   fetchCountry(searchQuery)
//     .then(renderCountryCard)
//     .catch(error => console.log(error))
//     .finally(() => {
//       form.reset();
//     });
// }

// function fetchCountry(countryId) {
//   return fetch('https://restcountries.com/v2/name/{name}/').then(response => {
//     return response.json();
//   });
// }

// function renderCountryCard(country) {
//   const markup = countryCardTpl(country);
//   refs.cardContainer.innerHTML = markup;
// }

//kazkas naujo
// const searchByName = 'https://restcountries.com/v2/name/';
// const searchByAlpha = 'https://restcountries.com/v2/alpha/';

// const fetchCountries = country => {
//   const getUrl = new UrlSearch({
//     fields: 'name,flag,capital,population,languages,alpha3Code',
//   });
//   return fetch(`${searchByName}${country}?${getUrls}`).then(res => res.json());
// };

// const fetchCountrybyAlpha = alphaCode => {
//   return fetch(`${searchByName}${alphaCode}`).then(res => res.json());
// };

// export { fetchCountries, fetchCountrybyAlpha };

//dar

//NAUJAS

export default function fetchCountries(e) {
  const searchCountry = e.target.value;

  const url = `https://restcountries.com/v2/name/${searchCountry}`;
  return fetch(url)
    .then(response => response.json())
    .then(data => data);
}
