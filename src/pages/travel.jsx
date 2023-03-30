// Import external modules
import Layout from '../components/layout.jsx'
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
// CSS
import './travel.css';
// Images
import shuttle from '../assets/images/shuttle.png'
// display a transition page before the actual page.
function Travel(props) {
    const [counter, setCounter] = useState(5)
    const { planetID = "mars" } = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            if (counter <= 0) {
                console.log('test')
                navigate(`/planet/${planetID}`)
            }
            else if (counter > 0) {
                setCounter(counter - 1);
            }
        }, 1000);
      }, [counter]);
    return (
        <div className="travel">
            <Layout>
                <div className="travel-window d-flex flex-column justify-content-center align-items-center">
                    <img className="shuttle" src={shuttle} />
                    <h2>You are now travelling to {`${planetID.charAt(0).toLocaleUpperCase() + planetID.slice(1).toLocaleLowerCase()}`}</h2>
                    <p>Launching in t-minus:</p>
                    <span>{counter} seconds</span>
                </div>
            </Layout>
        </div>
    )
}

export default Travel;