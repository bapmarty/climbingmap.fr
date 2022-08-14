import {FaBeer, FaCircle, FaGithub, FaHeart} from 'react-icons/fa';
import {useState} from "react";
import ReactMapGL from "react-map-gl";

function App() {

  const [viewport, setViewport] = useState({
    latitude: 47.0811658,
    longitude: 2.399125,
    zoom: 5
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
        <ReactMapGL
          initialViewState={{...viewport}}
          style={{width: "100vw", height: "100vh"}}
          mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN_PUBLIC}
          onViewportChange={viewport => setViewport(viewport)}
          mapStyle="mapbox://styles/bapmarty/cl6takgdd000z15npvbgta64u"
        >
          maaarrkers
        </ReactMapGL>
      </section>
    </section>
  );
}

export default App;
