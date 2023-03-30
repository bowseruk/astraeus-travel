// Import external modules
import Layout from '../components/layout.jsx'
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// CSS
import './travel.css';
// display a transition page before the actual page.
function Travel(props) {
    const {planetID = "mars"} = useParams()
    const navigate = useNavigate();
    setTimeout(()=>{ navigate(`/planet/${planetID}`) }, 3000);
    return (
        <div className="travel">
            <Layout>
                <h2>Your are now travelling to {`${planetID.charAt(0).toLocaleUpperCase() + planetID.slice(1).toLocaleLowerCase()}`}</h2>
                <p>It is ... miles away</p>
                <p>You could fit all the planets in the solar system ... times in the distance travelled.</p>
                <p>At a 1/4 the speed of light this will take ... days.</p>
                <p>The next launch window for an efficient Hohmann transfer orbit is ...</p>
            </Layout>
        </div>
    )
}

export default Travel;