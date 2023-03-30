// Custom Modules
import AboutCard from "./aboutCard";
// JSON
import team from "../assets/data/team.json";
// CSS
import './aboutGallery.css';
// This makes a gallery of cards for the team members in the json file
function AboutGallery(props) {
    return (
        <div className="team-gallery row justify-content-around gx-3 gy-2 m-1">
            {team.map(member => <div key={member.id + "Div"} className="col-xl-3 col-lg-4 col-md-6 col-12"><AboutCard key={member.id} {...member} /></div>)}
        </div>
    )
}

export default AboutGallery;