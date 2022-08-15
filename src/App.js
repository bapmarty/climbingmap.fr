import {FaBeer, FaCircle, FaGithub, FaHeart} from 'react-icons/fa';
import Map, {
  Marker
} from "react-map-gl";
import {useState} from "react";

function App() {
  const [viewState, setViewState] = useState({
    latitude: 48.8827730395998,
    longitude: 2.338991783024761,
    zoom: 12.5
  });

  return (
    <section className={"app"}>
      <section className={"navbar-container"}>
        <div className={"navbar-header"}>
          <h1 className={"title"}>Climbing'Map</h1>
          <h5 className={"sub-title"}>Your climbing gym in Europe <span className={"beer"}><FaBeer /></span></h5>
        </div>
        <div>

        </div>

        <div className={"navbar-footer"}>
          <code>
            Made with <span className={"heart"}><FaHeart /></span> by <a href={"https://bapmarty.fr"} target={"_blank"} rel={"noreferrer"}>Bapmarty</a>
            <span className={"circle"}><FaCircle /></span>
            <a href="https://github.com/bapmarty/climbingmap.fr"><span className={"github"}><FaGithub /></span></a>
            <span className={"circle"}><FaCircle /></span><span className={"version"}>v{process.env.REACT_APP_VERSION}</span>
          </code>
        </div>
      </section>

      <section className={"map-container"}>
        <Map
          initialViewState={{...viewState}}
          style={{width: "100vw", height: "100vh"}}
          mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN_PUBLIC}
          onMove={evt => setViewState(evt.viewState)}
          mapStyle="mapbox://styles/bapmarty/cl6takgdd000z15npvbgta64u">
          <Marker latitude={48.8827730395998} longitude={2.338991783024761}>
              <img className={"marker-logo"} src={"/assets/images/vertical-art.png"} alt={"vertical_art_logo"}/>
          </Marker>
          <Marker latitude={48.833831117622736} longitude={2.3686782136033813}>
              <img className={"marker-logo"} src={"/assets/images/vertical-art.png"} alt={"vertical_art_logo"}/>
          </Marker>
        </Map>
      </section>
    </section>
  );
}

export default App;
