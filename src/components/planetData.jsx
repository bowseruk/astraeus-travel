import React from 'react';
import './planetData.css';
import useSolaire from '../utils/useSolaire';

// data=englishName,moons,mass,vol,gravity,discoveredBy,discoveryData"

function PlanetData(props) {
    const { data, error } = useSolaire(props.planet); 

    return <div>
        <h1>Data</h1>
        <p>Name: {data?.englishName}</p>
        <p>Moons: {data?.moons ? 
        data?.moons?.map((moon, index) => {
            if(index < 10) {
                return (moon.moon + " ")
            } else {
                return; 
            }
        }) : 
        "None"}</p>
        <p>Mass: {data?.mass.massValue}<sup>{data?.mass.massExponent}</sup> kg</p>
        <p>Vol: {data?.vol.volValue}<sup>{data?.vol.volExponent}</sup> km<sup>3</sup></p>
        <p>Gravity: {data?.gravity}m/s<sup>2</sup></p>
        <p>Discovered By: {data?.discoveredBy ? data?.discoveredBy : "Unknown"}</p>
        <p>Discovery Date: {data?.discoveryDate ? data?.discoveryDate : "Unknown"}</p>
    </div>
}

export default PlanetData