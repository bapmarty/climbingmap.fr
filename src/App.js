import { MapContainer, TileLayer} from 'react-leaflet';
import {FaBeer, FaCircle, FaGithub, FaHeart} from 'react-icons/fa';

function App() {
  return (
    <section className={"app"}>
      <section className={"navbar-container"}>
        <div className={"navbar-header"}>
          <h1 className={"title"}>Climbing'Map</h1>
          <h4 className={"sub-title"}>Find your climbing gym <span className={"beer"}><FaBeer /></span></h4>
        </div>
        <div>

        </div>

        <div className={"navbar-footer"}>
          <code>
            Made with <span className={"heart"}><FaHeart /></span> by <a href={"https://bapmarty.fr"} target={"_blank"} rel={"noreferrer"}>Bapmarty</a>
            <span className={"circle"}><FaCircle /></span>
            <a href="https://github.com/bapmarty/climbingmap.fr"><span className={"github"}><FaGithub /></span></a>
            <span className={"circle"}><FaCircle /></span><span className={"version"}>{process.env.REACT_APP_VERSION}</span>
          </code>
        </div>
      </section>
      <MapContainer center={[47.416, 6.27]} zoom={6.4} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.mapbox.com/styles/v1/bapmarty/cl6t1gdsw000g14lfv2jot8av/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYmFwbWFydHkiLCJhIjoiY2w2dDFiMm1tMWpzMTNicW96ZmtuNmhuMCJ9.uuLMM2lBsl95m5x1l03Epg"/>
      </MapContainer>
    </section>
  );
}

export default App;
