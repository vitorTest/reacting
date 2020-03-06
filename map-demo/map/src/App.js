import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import mapboxgl from 'mapbox-gl';
import ReactMapGL from 'react-map-gl';
// import mapglToken from './../credentials/mapbox.json';
mapboxgl.accessToken = require('./../credentials/mapbox.json').token;

class App extends Component {

  constructor(props){
    super(props);
    this.state = { 
      lng: -73.6102,
      lat: 45.5002,
      zoom: 8,
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
    container: this.mapContainer,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [this.state.lng, this.state.lat],
    zoom: this.state.zoom
    });

    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }

  render() {
    return (
      <div className="App">
        {/*<ReactMapGL {...this.state.viewport} mapStyle="mapbox://styles/mapbox/outdoors-v11" 
        mapboxApiAccessToken={mapglToken} onViewportChange={(viewport => this.setState(viewport))}>
        </ReactMapGL>*/}
        <div className='sidebarStyle'>
          <div>
            Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}
          </div>
        </div>
        <div ref={el => this.mapContainer = el} className="mapContainer" />
      </div>
    );
  }
}

export default App;
