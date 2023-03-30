// External Module
// Custom Module
import AboutPictureLoader from "./aboutPictureLoader.jsx";

function AboutCard(props) {
    return (
        <div className="team-card card">
            <img className="card-img-top" src={AboutPictureLoader(props.picIndex)} alt={props.fullName + " chosen avatar."} />
            <div className="card-body">
                <h5 className="card-title">{props.fullName}</h5>
                <p className="card-text">"{props.quote}"</p>
                <p className="card-text">{props.quoteAttributed}</p>
                <a href={props.github} className="btn btn-primary">
                    <i className="fa-brands fa-github" />
                </a>
            </div>
        </div>
    )
}

export default AboutCard