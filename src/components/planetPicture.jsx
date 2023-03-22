import './planetPicture.css';

function PlanetPicture(props) {
    let planet = props.planet

    return <div id="planetPicture">
            <h1 className='cutout text'>{planet}</h1>
            {/* <img src={`../assets/images/${planet}-round.jpg`} className="round-image"/>
            <img src={`../assets/images/${planet}-square.jpg`} className="square-image"/> */}
            <img src={`../assets/images/pink-nebula.jpg`} className="square-image"/>
    </div>;
}

export default PlanetPicture
