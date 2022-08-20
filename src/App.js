import {FaBeer, FaCircle, FaGithub, FaHeart} from 'react-icons/fa';
import Map, {
  Marker
} from "react-map-gl";
import {useEffect, useState} from "react";
import GymInformation from "./components/GymInformation";

function App() {
  const [climbingGymList, setClimbingGymList] = useState(null);
  const [viewState, setViewState] = useState({
    latitude: 48.8827730395998,
    longitude: 2.338991783024761,
    zoom: 12.5
  });

  useEffect(() => {
    const OPTIONS = { method: 'GET',
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "*"
      }
    }

    const fetchData = async () => {
      const res = await fetch("http://localhost:3001/api/v1/climbing-gym/all", OPTIONS);
      const json = await res.json();
      setClimbingGymList(json);
    }
    fetchData();
  }, [setClimbingGymList]);

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

      {climbingGymList ? (<GymInformation gymList={climbingGymList} />) : null}

      <section className={"map-container"}>
        <Map
          initialViewState={{...viewState}}
          style={{width: "100vw", height: "100vh"}}
          mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN_PUBLIC}
          onMove={evt => setViewState(evt.viewState)}
          mapStyle="mapbox://styles/bapmarty/cl6takgdd000z15npvbgta64u">
          {climbingGymList ? climbingGymList.map(gym => {
            return (
              <Marker key={gym.id} longitude={gym.longitude} latitude={gym.latitude}>
                <img className={"marker-logo"} src={gym.filename} alt={gym.name}/>
              </Marker>
            )
          }) : null
          }
        </Map>
      </section>
    </section>
  );
}

export default App;
