const express = require('express');
const router = express.Router();

const { DeviceDiscovery } = require('sonos');

router.get('/home', (req, res, next) => {
  DeviceDiscovery((device) => {
    const zoneName = device.getName();
    const currentTrack = device.currentTrack();

    Promise.all([zoneName, currentTrack])
      .then(([zone, { title, artist, album, albumArtURL: image }]) => {
        res.render('layout', { title, artist, album, image, zone });
      })
  });
});

module.exports = router;
