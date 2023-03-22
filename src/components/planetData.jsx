import React from 'react';
import './planetData.css';
import useSolaire from '../utils/useSolaire';

function PlanetData(props) {
    const { data, error } = useSolaire(props.planet); 
    console.log(data)
    console.log(data?.moons)

    return <div>
        <h1>Planet Data</h1>
        <p>Moons:</p>
    </div>
}

export default PlanetData