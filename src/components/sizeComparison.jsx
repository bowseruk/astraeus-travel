import React from 'react';
import "./sizeComparison.css"
import planetJson from "./planetDescription.json"

function SizeComparison(props) {
     const planetObj = planetJson.filter(pnt => pnt.name === props.planet)[0]
     const diameterRatio = (planetObj.Diameter/12742) * 150 + "px"
     console.log("diameter: " + diameterRatio)

     const earthStyle = {
        width: "150px", height: "150px"
     }
     const compStyle = {
        width: diameterRatio, height: diameterRatio
     }

    return <div id='sizeComparison'>
        <h2>EARTH <span>{props.planet.toUpperCase()}</span></h2>
        <div className='earth' style={earthStyle}>
        </div>
        <div className="compPlanet" 
      style={compStyle}>
        </div>
    </div>
}

export default SizeComparison