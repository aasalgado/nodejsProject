/* eslint-disable */
export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiYXNhbGdhZG8iLCJhIjoiY201aGxnODNkMG01NzJscHdoMGZoZnRsdiJ9.-VrAGV4v0O9pvBZdayP7FA';
  0;
  const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/asalgado/cm5j75agi001v01rdfxbkfc2b',
    scrollZoom: false,
    //   center: [-118.113491, 34.111745],
    //   zoom: 9,
    //   interactive: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
