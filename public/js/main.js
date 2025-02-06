require("regenerator-runtime/runtime");
require("core-js/modules/es.regexp.flags.js");
require("core-js/modules/es.typed-array.set.js");
require("core-js/modules/web.immediate.js");
var $6JWY2$axios = require("axios");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
/* eslint-disable */ 



/* eslint-disable */ const $9380380b0f8e95e3$export$4c5dd147b21b9176 = (locations)=>{
    mapboxgl.accessToken = 'pk.eyJ1IjoiYXNhbGdhZG8iLCJhIjoiY201aGxnODNkMG01NzJscHdoMGZoZnRsdiJ9.-VrAGV4v0O9pvBZdayP7FA';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/asalgado/cm5j75agi001v01rdfxbkfc2b',
        scrollZoom: false
    });
    const bounds = new mapboxgl.LngLatBounds();
    locations.forEach((loc)=>{
        // Create marker
        const el = document.createElement('div');
        el.className = 'marker';
        // Add marker
        new mapboxgl.Marker({
            element: el,
            anchor: 'bottom'
        }).setLngLat(loc.coordinates).addTo(map);
        // Add popup
        new mapboxgl.Popup({
            offset: 30
        }).setLngLat(loc.coordinates).setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`).addTo(map);
        // Extend map bounds to include current location
        bounds.extend(loc.coordinates);
    });
    map.fitBounds(bounds, {
        padding: {
            top: 200,
            bottom: 150,
            left: 100,
            right: 100
        }
    });
};


/* eslint-disable */ 
/* eslint-disable */ const $99f1ab01dcb3b4ee$export$516836c6a9dfc573 = ()=>{
    const el = document.querySelector('.alert');
    if (el) el.parentElement.removeChild(el);
};
const $99f1ab01dcb3b4ee$export$de026b00723010c1 = (type, msg)=>{
    $99f1ab01dcb3b4ee$export$516836c6a9dfc573();
    const markup = `<div class="alert alert--${type}">${msg}</div>`;
    document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
    window.setTimeout($99f1ab01dcb3b4ee$export$516836c6a9dfc573, 5000);
};


const $0a5b4f30ba3d68de$export$596d806903d1f59e = async (email, password)=>{
    console.log(email, password);
    try {
        const res = await (0, ($parcel$interopDefault($6JWY2$axios)))({
            method: 'POST',
            url: 'http://127.0.0.1:3000/api/v1/users/login',
            data: {
                email: email,
                password: password
            }
        });
        if (res.data.status === 'success') {
            (0, $99f1ab01dcb3b4ee$export$de026b00723010c1)('success', 'Logged in successfully!');
            window.setTimeout(()=>{
                location.assign('/');
            }, 1500);
        }
    } catch (err) {
        (0, $99f1ab01dcb3b4ee$export$de026b00723010c1)('error', err.response.data.message);
    }
};
const $0a5b4f30ba3d68de$export$a0973bcfe11b05c9 = async ()=>{
    try {
        const res = await (0, ($parcel$interopDefault($6JWY2$axios)))({
            method: 'GET',
            url: 'http://127.0.0.1:3000/api/v1/users/logout'
        });
        res.data.status = 'success';
        location.reload(true);
    } catch (err) {
        console.log(err.response);
        (0, $99f1ab01dcb3b4ee$export$de026b00723010c1)('error', 'Error logging out! Try again.');
    }
};


/* eslint-disable */ 

const $5a9b1cd588251d2b$export$f558026a994b6051 = async (data, type)=>{
    try {
        const url = type === 'password' ? 'http://127.0.0.1:3000/api/v1/users/updateMyPassword' : 'http://127.0.0.1:3000/api/v1/users/updateMe';
        const res = await (0, ($parcel$interopDefault($6JWY2$axios)))({
            method: 'PATCH',
            url: url,
            data: data
        });
        if (res.data.status === 'success') (0, $99f1ab01dcb3b4ee$export$de026b00723010c1)('success', `${type.toUpperCase()} updated successfully!`);
    } catch (err) {
        (0, $99f1ab01dcb3b4ee$export$de026b00723010c1)('error', err.response.data.message);
    }
};


const $fc7abcdcd4d7604b$var$mapBox = document.getElementById('map');
const $fc7abcdcd4d7604b$var$loginForm = document.querySelector('.form--login');
const $fc7abcdcd4d7604b$var$logOutBtn = document.querySelector('.nav__el--logout');
const $fc7abcdcd4d7604b$var$userDataForm = document.querySelector('.form-user-data');
if ($fc7abcdcd4d7604b$var$mapBox) {
    const locations = JSON.parse($fc7abcdcd4d7604b$var$mapBox.dataset.locations);
    (0, $9380380b0f8e95e3$export$4c5dd147b21b9176)(locations);
}
if ($fc7abcdcd4d7604b$var$loginForm) $fc7abcdcd4d7604b$var$loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    (0, $0a5b4f30ba3d68de$export$596d806903d1f59e)(email, password);
});
if ($fc7abcdcd4d7604b$var$logOutBtn) $fc7abcdcd4d7604b$var$logOutBtn.addEventListener('click', (0, $0a5b4f30ba3d68de$export$a0973bcfe11b05c9));
if ($fc7abcdcd4d7604b$var$userDataForm) $fc7abcdcd4d7604b$var$userDataForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    (0, $5a9b1cd588251d2b$export$f558026a994b6051)({
        name: name,
        email: email
    }, 'data');
});


//# sourceMappingURL=main.js.map
