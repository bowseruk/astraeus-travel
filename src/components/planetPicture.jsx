import './planetPicture.css'; 
import mercuryUrl from "../assets/images/1-Mercury.png"
import venusUrl from "../assets/images/2-Venus.png"
import earthUrl from "../assets/images/3-Earth.png"
import marsUrl from "../assets/images/4-Mars.png"
import jupiterUrl from "../assets/images/5-Jupiter.png"
import saturnUrl from "../assets/images/6-Saturn.png"
import uranusUrl from "../assets/images/7-Uranus.png"
import neptuneUrl from "../assets/images/8-Neptune.png"
import plutoUrl from "../assets/images/9-Pluto.png"

function PlanetPicture(props) {
    let planet = props.planet

    // choose correct planet url
    let roundSrc;
    switch (planet) {
        case "mercury":
            roundSrc = mercuryUrl;
            break; 
        case "venus":
            roundSrc = venusUrl;
           break; 
        case "earth":
            roundSrc = earthUrl;
            break; 
         case "mars":
            roundSrc = marsUrl;
            break; 
        case "jupiter":
            roundSrc = jupiterUrl;
            break; 
         case "saturn":
            roundSrc = saturnUrl;
            break; 
        case "uranus":
            roundSrc = uranusUrl;
            break; 
         case "neptune":
            roundSrc = neptuneUrl;
            break; 
         case "pluto":
            roundSrc = plutoUrl;
            break; 
        default:
            break; 
    }

    return <div id="planetPicture">
            <h1 className='cutout text'>{planet[0].toUpperCase() + planet.slice(1)}</h1>
            <img src={roundSrc} className="round-image"/>
    </div>;
}

export default PlanetPicture
