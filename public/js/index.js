/* eslint-disable */
// import "core-js/stable";
// import "regenerator-runtime/runtime";

import '@babel/polyfill';
import { displayMap } from './mapbox';
import { login } from './login';

if (mapBox) {
  const locations = JSON.parse(mapBox.dataset.locations);
  displayMap(locations);
}

if (loginForm) {
  loginForm.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });
}
