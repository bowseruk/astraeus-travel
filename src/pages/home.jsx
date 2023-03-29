import Navigation from '../components/navigation'
import SolarSystem from '../components/solarSystem'
import { motion, AnimatePresence } from "framer-motion"
import './home.css'


function Home(props) {
    return (
        <div>
            {/* added fade in for home page when loaded */}
            <AnimatePresence>
                <motion.div
                // defines initial state of animation
                initial={{ opacity: 0 }}

                // defintes animation
                animate={{ opacity: 1 }}

                // defines animation on completion
                exit={{ opacity: 0 }}

                // set duration of animation
                transition={{ duration: 0.5 }}
                >
                    
                    <SolarSystem />
                    <p>Description</p>
                    {/* Modal */}

                </motion.div>
            </AnimatePresence>

        </div>
    )
}

export default Home