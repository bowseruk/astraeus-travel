import React from 'react';
import './planetDescription.css';
import planetJson from "./planetDescription.json"

function PlanetDescription(props) {
     const planetObj = planetJson.filter(pnt => pnt.name === props.planet)[0]

    return <div id='planetDescription'>
        <div className='bgFilter'>
            <p>{planetObj.Description}</p>
        </div>
    </div>
    
}

export default PlanetDescription