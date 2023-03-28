import { 
    motion,
    AnimatePresence,
    useScroll
} from "framer-motion";
import Home from './home.jsx';
import './transition.css';

// display opening page before animating to homepage

function Transition(props) {

    const { scrollYProgress } = useScroll();

    return (
        <AnimatePresence>
            
            <div className="start-journey">
                
                <h1 className="transition-title">start your journey across the stars...</h1>
                <p className="transition-subtitle">scroll to begin</p>
                <span className="transition-subtitle-arrows">
                    <p>⌄⌄⌄</p>
                </span>

                    <motion.div
                        style={{ scaleX: scrollYProgress }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <Home />

                    </motion.div>

            </div>
            
        </AnimatePresence>

        
        

    )
}

export default Transition;