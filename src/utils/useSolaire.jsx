import React, { useEffect, useState } from "react"; 

const base_url = "https://api.le-systeme-solaire.net/rest/bodies/"
// data=englishName,moons,mass,vol,gravity,discoveredBy,discoveryData"
// planet IDs: mercure, venus, terre, mars, jupiter, saturne, uranus, neptune. 

function useSolaire (planetID) {
    const [data, setData] = useState(null)
    const [error, setError] = useState("")
    const queryUrl = base_url + planetID

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

    return { data, error }
}

export default useSolaire; 


// docs for api here: https://api.le-systeme-solaire.net/en/