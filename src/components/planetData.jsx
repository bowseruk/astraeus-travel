import React from 'react';
import './planetData.css';
import useSolaire from '../utils/useSolaire';
import planetJson from "./planetDescription.json"

function PlanetData(props) {
    const { data, error } = useSolaire(props.planet); 
    const planetObj = planetJson.filter(pnt => pnt.name === props.planet)[0]

    // create list of moons
    const moonList = []
    if (data?.moons) {
        let i = 0;
        while(i < 10) {
            if (data.moons[i]) {
                moonList.push(data.moons[i])
            }
            i ++; 
        }
    }

    // return data
    return <div id="planetData">
        <table>
            <tbody>
                <tr>
                    <th>Moons (Max 10)</th>
                    <td> 
                        <ul>
                        {/* add each moon in <li> */}
                        {moonList.length ? 
                        moonList.map((moon, index) => {
                              return (<li key={moon.moon}>{moon.moon}</li>)
                              }
                        )
                        : "none"}
                        </ul>
                    </td>
                </tr>
                <tr>
                    <th>Mass</th>
                    <td>
                      {data?.mass.massValue}<sup>{data?.mass.massExponent}</sup> kg
                    </td>
                </tr>
                <tr>
                    <th>Volume</th>
                    <td>
                      {data?.vol.volValue}<sup>{data?.vol.volExponent}</sup> km<sup>3</sup>
                    </td>
                </tr>
                <tr>
                    <th>Gravity</th>
                    <td>
                      {data?.gravity} m/s<sup>2</sup>
                    </td>
                </tr>
                <tr>
                    <th>Type</th>
                    <td>
                      {planetObj.Type}
                    </td>
                </tr>
                <tr>
                    <th>Year Length</th>
                    <td>
                      {`${planetObj['length of year']} Earth Days`}
                    </td>
                </tr>
                <tr>
                    <th>Distance From Sun</th>
                    <td>
                      {`${planetObj['Distance from sun']} mil km`}
                    </td>
                </tr>
                <tr>
                    <th>Velocity</th>
                    <td>
                      {`${planetObj.Velocity} m/s`}
                    </td>
                </tr>
                <tr>
                    <th>Region</th>
                    <td>
                      {planetObj['Area of Solar System']}
                    </td>
                </tr>
                <tr>
                    <th>Discovered By</th>
                    <td>
                      {data?.discoveredBy ? data?.discoveredBy : "Unknown"}
                    </td>
                </tr>
                <tr>
                    <th>Discovery Date</th>
                    <td>
                      {data?.discoveryDate ? data?.discoveryDate : "Unknown"}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
}

export default PlanetData; 