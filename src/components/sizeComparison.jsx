import React from 'react';
import "./sizeComparison.css"
import planetJson from "./planetDescription.json"

function SizeComparison(props) {
     const planetObj = planetJson.filter(pnt => pnt.name === props.planet)[0]
     const diameterRatio = (planetObj.Diameter/12742) * 20 + "vw"
     console.log("diameter: " + diameterRatio)

    return <div id='sizeComparison'>
        <h2>SIZE OF {props.planet.toUpperCase()}</h2>
        <div className='earth' style={{width: "20vw", height: "20vw"}}>
            <p>Earth</p>
        </div>
        <div className="compPlanet" 
      style={{width: diameterRatio, height: diameterRatio}}>
        </div>
    </div>
}

export default SizeComparison