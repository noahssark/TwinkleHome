const express = require('express');
const fetch = require('node-fetch');
const cors = require('./cors');

let router = express.Router();


router.get('/:locationName', cors.cors ,(req, res) => {
    const locationName = req.params.locationName;
    console.log(locationName);
    
    const url = "https://www.metaweather.com/api/location/search/?query=" + locationName;
    console.log(url);
    let woeid; 

    fetch(url)
      .then(response => { return response.json(); })
        .then(data => { 
          console.log(data); 
          // res.send({woeid: data[0].woeid});
          woeid = data[0].woeid;          
          fetch('https://www.metaweather.com/api/location/' + woeid + '/')
            .then(r => {
              return r.json();
            })
              .then(d => {
                res.send(d);
            })
              .catch(err => {
                  console.log(err); 
              });          
        })
          .catch(err => { console.log(err); });        
});

module.exports = router;