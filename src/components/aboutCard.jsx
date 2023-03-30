// External Module
// Custom Module
import AboutPictureLoader from "./aboutPictureLoader.jsx";
// CSS
import './aboutCard.css'

function AboutCard(props) {
    return (
        <div className="team-card card">
            <img className="card-img-top" src={AboutPictureLoader(props.picIndex)} alt={props.fullName + " chosen avatar."} />
            <div className="card-body d-flex flex-column justify-content-between">
                <div>
                <h5 className="card-title">{props.fullName}</h5>
                <p className="quote-text card-text">"{props.quote}"</p>
                <p className="attribute-text card-text">{props.quoteAttributed}</p>
                </div>
                <div class="card-spacer"></div>
                <div className="card-social d-flex justify-content-around">
                { props.github && <a href={props.github} className="btn btn-dark">
                    <i className="fa-brands fa-github" />
                </a> }
                { props.linkedin && <a href={props.linkedin} className="btn btn-primary">
                    <i className="fa-brands fa-linkedin" />
                </a> }
                { props.twitter && <a href={props.twitter} className="btn btn-primary">
                    <i className="fa-brands fa-twitter" />
                </a> }
                </div>
            </div>
        </div>
    )
}

export default AboutCard