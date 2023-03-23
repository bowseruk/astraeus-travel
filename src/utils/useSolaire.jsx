import React, { useEffect, useState } from "react"; 

const base_url = "https://api.le-systeme-solaire.net/rest/bodies/"
// data=englishName,moons,mass,vol,gravity,discoveredBy,discoveryData"
// planet IDs: mercure, venus, terre, mars, jupiter, saturne, uranus, neptune. 

function useSolaire (planetID) {
    let planet
    switch (planetID) {
        case "Mercury" || "mercury":
            planet = "mercure"
            break;
        case "Earth" || "earth":
            planet = "terre"
            break;
        case "Saturn" || "saturn":
            planet = "saturne"
            break;
        default:
            planet = planetID.toLowerCase(); 
            break;
    }
    const [data, setData] = useState(null)
    const [error, setError] = useState("")
    const queryUrl = base_url + planet

    useEffect(() => {
        fetch(queryUrl)
    .then(res => res.json())
    .then(newData => {
        setData(newData)
    })
    .catch(err => {
        setError(err)
    })
        
    }, [planetID])
    
    console.log(data)
    return { data, error }
}

export default useSolaire; 


// docs for api here: https://api.le-systeme-solaire.net/en/