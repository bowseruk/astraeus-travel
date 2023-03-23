import React, { useEffect, useState } from "react"; 

const base_url = "https://api.le-systeme-solaire.net/rest/bodies/"
// data=englishName,moons,mass,vol,gravity,discoveredBy,discoveryData"
// planet IDs: mercure, venus, terre, mars, jupiter, saturne, uranus, neptune. 

function useSolaire (planetID) {
    let planet
    // switch case to change planet to french id
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
    // set up data and error consts 
    console.warn("function has run")
    const [data, setData] = useState(null)
    const [error, setError] = useState("")
    const queryUrl = base_url + planet
    // console.log(`query: ${queryUrl}`)

    // do api query every time planet changes
    useEffect(() => {
        fetch(queryUrl)
        .then(res => res.json())
        .then(newData => {
        setData(newData)
    })
    .catch(err => {
        setError(err)
    })  
    }, [planet])

    // return the api response
    return { data, error }
}

export default useSolaire; 


// docs for api here: https://api.le-systeme-solaire.net/en/