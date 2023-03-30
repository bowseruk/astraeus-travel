// External Module
// Custom Module
import AboutPictureLoader from "./aboutPictureLoader.jsx";
// CSS
import './aboutCard.css'

function AboutCard(props) {
    return (
        <div className="team-card card">
            <img className="card-img-top" src={AboutPictureLoader(props.picIndex)} alt={props.fullName + " chosen avatar."} />
            <div className="card-body">
                <h5 className="card-title">{props.fullName}</h5>
                <p className="quote-text card-text">"{props.quote}"</p>
                <div className="card-spacer"></div>
                <p className="attribute-text card-text">{props.quoteAttributed}</p>
                <a href={props.github} className="btn btn-dark">
                    <i className="fa-brands fa-github" />
                </a>
            </div>
        </div>
    )
}

export default AboutCard