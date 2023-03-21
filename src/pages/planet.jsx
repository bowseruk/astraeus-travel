import { useParams } from "react-router-dom";
import './planet.css'

function Planet(props) {
    const {planetID} = useParams()
    return (
        <div>
            <h1>{planetID} Page</h1>
        </div>
    )
}

export default Planet