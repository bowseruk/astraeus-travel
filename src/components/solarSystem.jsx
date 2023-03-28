import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import './solarSystem.css';

const planets = [
    {name: "mercury", position: "inner", dwarf: false, moons: []},
    {name: "venus", position: "inner", dwarf: false, moons: []},
    {name: "earth", position: "inner", dwarf: false, moons: [{name: "moon"}]},
    {name: "mars", position: "inner", dwarf: false, moons: [{name: "phobos"}, {name: "deimos"}]},
    {name: "ceres", position: "outer", dwarf: true, moons: []},
    {name: "jupiter", position: "outer", dwarf: false, moons: []},
    {name: "saturn", position: "outer", dwarf: false, moons: []},
    {name: "uranus", position: "outer", dwarf: false, moons: []},
    {name: "neptune", position: "outer", dwarf: false, moons: []},
    {name: "pluto", position: "outer", dwarf: true, moons: []},
    {name: "haumea", position: "outer", dwarf: true, moons: []},
    {name: "makemake", position: "outer", dwarf: true, moons: []},
    {name: "eris", position: "outer", dwarf: true, moons: []}
]

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