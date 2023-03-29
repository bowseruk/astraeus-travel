import { 
    motion,
    AnimatePresence,
    useScroll
} from "framer-motion";
import Home from './home.jsx';
import SolarSystem from "../components/solarSystem.jsx";
import Navigation from "../components/navigation.jsx";
import './transition.css';

// display opening page before animating to homepage

function Transition(props) {
    const { scrollYProgress } = useScroll();
    return (
        <div className="transition">
            <Navigation/> 
            <div className="start-journey">
                <h1 className="transition-title">Start your journey across the stars...</h1>
                <p className="transition-subtitle">scroll to begin</p>
                <span className="transition-subtitle-arrows">
                    <p>⌄⌄⌄</p>
                </span>
                <div className="spacer"></div>
                    <motion.div
                        style={{ scaleX: scrollYProgress }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                          
                    <div className="row">
                        
                        <div><SolarSystem /></div>
                        <div><p>Click on a planet to start your journey.</p></div>
                    </div>
                        
                        
                    </motion.div>
            </div> 
        </div>
    )
}

export default Transition;