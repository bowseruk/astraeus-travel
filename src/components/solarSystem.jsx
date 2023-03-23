import { useNavigate } from "react-router-dom";
import './solarSystem.css';

function SolarSystem(props) {
    const navigate = useNavigate()
    return (
        <div className="solar-system" onClick={(event) => {navigate(`/planet/${event.target.id}`)}}>
            <div className="sun" />
            <div className="inner-system orbit orbit-mercury">
                <div id="mercury" className="planet planet-mercury"></div>
            </div>
            <div className="inner-system orbit orbit-venus ">
                <div id="venus" className="planet planet-venus"></div>
            </div>
            <div className="inner-system orbit orbit-earth">
                <div id="earth" className="planet planet-earth"></div>
                <div className="moon-orbit moon-orbit-moon">
                    <div id="moon" className="moon moon-moon"></div>
                </div>
            </div>
            <div className="inner-system orbit orbit-mars">
                <div id="mars" className="planet planet-mars"></div>
                <div className="moon-orbit moon-orbit-moon">
                    <div id="moon" className="moon moon-moon"></div>
                </div>
                <div className="moon-orbit moon-orbit-moon">
                    <div id="moon" className="moon moon-moon"></div>
                </div>
            </div>
            <div className="outer-system orbit orbit-ceres">
                <div id="ceres" className="planet planet-ceres"></div>
            </div>
            <div className="outer-system orbit orbit-jupiter">
                <div id="jupiter" className="planet planet-jupiter"></div>
            </div>
            <div className="outer-system orbit orbit-saturn">
                <div id="saturn" className="planet planet-saturn"></div>
            </div>
            <div className="outer-system orbit orbit-uranus">
                <div id="uranus" className="planet planet-uranus"></div>
            </div>
            <div className="outer-system orbit orbit-neptune">
                <div id="neptune" className="planet planet-neptune"></div>
            </div>
            <div className="dwarf-planet outer-system orbit orbit-pluto">
                <div id="pluto" className="planet planet-pluto"></div>
                <div className="moon-orbit moon-orbit-moon">
                    <div id="moon" className="moon moon-moon"></div>
                </div>
                <div className="moon-orbit moon-orbit-moon">
                    <div id="moon" className="moon moon-moon"></div>
                </div>
                <div className="moon-orbit moon-orbit-moon">
                    <div id="moon" className="moon moon-moon"></div>
                </div>
                <div className="moon-orbit moon-orbit-moon">
                    <div id="moon" className="moon moon-moon"></div>
                </div>
            </div>
            <div className="dwarf-planet outer-system orbit orbit-haumea">
                <div id="haumea" className="planet planet-haumea"></div>
                <div className="moon-orbit moon-orbit-hiiaka">
                    <div id="hiiaka" className="moon moon-hiiaka"></div>
                </div>
                <div className="moon-orbit moon-orbit-namaka">
                    <div id="namaka" className="moon moon-namaka"></div>
                </div>
            </div>
            <div className="dwarf-planet outer-system orbit orbit-makemake">
                <div id="makemake"  className="planet planet-makemake"></div>
            </div>
            <div className="dwarf-planet outer-system orbit orbit-eris">
                <div id="eris"  className="planet planet-eris"></div>
                <div className="moon-orbit moon-orbit-dysnomia">
                    <div id="dysnomia" className="moon moon-dysnomia"></div>
                </div>
            </div>
        </div>
    )
}

export default SolarSystem