var $6JWY2$axios = require("axios");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
/* eslint-disable */ // import 'core-js/stable';
// import 'regenerator-runtime/runtime';
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
        // const res = axios
        //   .post('http://127.0.0.1:3000/api/v1/users/login', {
        //     email: 'user@example.com',
        //     password: 'yourpassword',
        //   })
        //   .then((response) => console.log(response))
        //   .catch((error) => console.error(error));
        if (res.data.status === 'success') {
            alert('Logged in successfully!');
            window.setTimeout(()=>{
                location.assign('/');
            }, 1500);
        }
    } catch (err) {
        alert(err.response.data.message);
    }
};


const $fc7abcdcd4d7604b$var$mapBox = document.getElementById('map');
const $fc7abcdcd4d7604b$var$loginForm = document.querySelector('.form--login');
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


//# sourceMappingURL=main.js.map
