import { useParams } from "react-router-dom";
import Navigation from '../components/navigation'
import PlanetPicture from '../components/planetPicture';
import PlanetData from '../components/planetData';
import PlanetDescription from "../components/planetDescription";
import './planet.css'

function Planet(props) {
    const {planetID} = useParams()
    return (
        <div>
            <Navigation/>
            <PlanetPicture planet={planetID} />
            <PlanetDescription planet={planetID} />
            <PlanetData planet={planetID} />
        </div>
    )
}

export default Planet