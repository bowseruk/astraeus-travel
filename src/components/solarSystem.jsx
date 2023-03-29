import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import './solarSystem.css';
import planets from '../assets/data/planets.json';

const styles = {};

function SolarSystem(props) {
    const navigate = useNavigate();
    return (
        <div className="solar-system" onClick={(event) => {navigate(`/planet/${event.target.id}`)}}>
            <div className="sun" />
            { planets.map((planet) => (<div key={`orbit-${planet.name}`} className={`${planet.position}-system${(planet.dwarf) ? " dwarf-planet": ""} orbit orbit-${planet.name}`} >
                <div key={planet.name} id={planet.name} className={`planet planet-${planet.name}`} />
                { planet.moons.map((moon) => (<div key={moon.name} id={moon.name} className={`moon-orbit moon-${moon.name}`}><div className={`moon moon-${moon.name}`} /></div>)) }
                </div>)) }
        </div>
    )
}

export default SolarSystem