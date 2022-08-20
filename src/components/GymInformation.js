import "../assets/scss/GymInformation.scss";
import {FaCircle} from "react-icons/fa";

const GymInformation = ({ gymList }) => {
  return (
    <section className={"gym-information-section"}>
      {gymList ? gymList.map(gym => {
        return (
          <div key={gym.id} className={"gym-information"}>
            <div>
              <img src={gym.filename} alt=""/>
            </div>
            <div>
              <h4>{gym.name}</h4>
              <h6>{gym.address}</h6>
              <h6>{gym.phone} <span>{gym.phone && gym.mail ? (<FaCircle />) : null}</span> {gym.mail}</h6>
            </div>
          </div>
        )
      }) : null}
    </section>
  )
}

export default GymInformation;
