import React, { useEffect, useState } from "react";

// not possible to hide key without backend
const API_Key = "coR9aw9nfJCPhUTWHrKtN2rQHXqdLJRrHrojgNG4"
const base_url = "https://api.nasa.gov/"

function NasaAPI (...queries) {
    // need if statment/switch for base urls
    let base_url
    const [data, setdata] = useState(null)
    const [error, setError] = useState("")

    useEffect(() => {
        fetch(queryUrl)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        setdata(res)
    })
    .catch(err => {
        setError(err)
    })
        
    }, [planetID])

    return { data, error }
}

export default NasaAPI

// docs for api here: https://api.nasa.gov/#browseAPI

// mars rover: mars-photos/api/v1/rovers/curiosity/photos?
//   earth_date=2015-6-3&api_key=DEMO_KEY

// picture of day: planetary/apod?api_key=DEMO_KEY

