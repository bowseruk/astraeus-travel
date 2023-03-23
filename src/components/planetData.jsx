import React from 'react';
import './planetData.css';
import useSolaire from '../utils/useSolaire';

// data=englishName,moons,mass,vol,gravity,discoveredBy,discoveryData"

function PlanetData(props) {
    const { data, error } = useSolaire(props.planet); 

    return <div>
        <h1>Planet Data</h1>
        <p>Name: {data?.englishName}</p>
        <p>Moons: {data.moons.map(moon => {
            return moon.moon
        })}</p>
        <p>Mass: {data?.mass.massValue} ** {data?.mass.massExponent}</p>
        <p>Vol: {data?.vol.volValue} ** {data?.vol.volExponent}</p>
        <p>Gravity: {data?.gravity}</p>
        <p>Discovered By: {data?.discoveredBy ? data?.discoveredBy : "Unknown"}</p>
        <p>Discovery Date: {data?.discoveryDate ? data?.discoveryDate : "Unknown"}</p>
    </div>
}

export default PlanetData