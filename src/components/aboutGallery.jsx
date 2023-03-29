// Custom Modules
import AboutCard from "./aboutCard";
// JSON
import team from "../assets/data/team.json";
// CSS
import './aboutGallery.css';

function AboutGallery(props) {
    return (
        <div className="team-gallery row gx-3 gy-2">
            {team.map(member => <div key={member.id + "Div"} className="col-xl-3 col-lg-4 col-md-6 col-12"><AboutCard key={member.id} {...member} /></div>)}
        </div>
    )
}

export default AboutGallery;