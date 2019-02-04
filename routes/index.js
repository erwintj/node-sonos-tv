const express = require('express');
const router = express.Router();

const { DeviceDiscovery } = require('sonos');

router.get('/home', (req, res, next) => {
  DeviceDiscovery((device) => {
    const zoneName = device.getName();
    const queue = device.getQueue();

    Promise.all([zoneName, queue])
      .then(([zone, { items }]) => {
        const tracks = items.map(({ title, artist, album, albumArtURI: image }) => ({ title, artist, album, image }));

        res.render('layout', { tracks, zone });
      })
      .catch(err => console.error(err));
  });
});

module.exports = router;
