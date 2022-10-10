import {Component} from 'react';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';


class MapContainer extends Component {
  render() {
    return (
<Map
google = {this.props.google}
style={{height: '100%', width: '100%'}}
zoom = {10}
initialCenter = {
{
  lat: 33.883333,
  lng: 10.116667000000007
}

}>
 
  <Marker/>
 
</Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: '************************'
})(MapContainer)
