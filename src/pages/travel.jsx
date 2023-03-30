// Import external modules
import Layout from '../components/layout.jsx'
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
// CSS
import './travel.css';
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
                <h2>Your are now travelling to {`${planetID.charAt(0).toLocaleUpperCase() + planetID.slice(1).toLocaleLowerCase()}`}</h2>
                <p>Launching in t-minus: <span>{counter}</span></p>
            </Layout>
        </div>
    )
}

export default Travel;