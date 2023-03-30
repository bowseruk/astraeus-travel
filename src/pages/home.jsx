import { 
    motion,
    useScroll
} from "framer-motion";
import Layout from "../components/layout.jsx"
import PlanetModal from "../components/planetModal.jsx";
import SolarSystem from "../components/solarSystem.jsx";
import './home.css';

// display opening page before animating to homepage
function Home(props) {
    const { scrollYProgress } = useScroll();
    return (
        <div className="transition">
            <Layout>
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
                    <PlanetModal />
                    <div className="row">
                        <div className="col">              
                        <SolarSystem />
                        </div>
                    </div>  
                    </motion.div>
            </div> 
            </Layout>
        </div>
    )
}

export default Home;