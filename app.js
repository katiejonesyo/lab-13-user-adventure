import { saveUser } from './storage-utils.js';

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();


    const data = new FormData(form);

   saveUser({
        name: data.get('name'),
        class: data.get('class'),

    });

    window.location.href = './map/';

});