import Navigation from '../components/navigation'
import PlanetPicture from '../components/planetPicture';
import PlanetDescription from '../components/planetDescription';
import PlanetData from '../components/planetData';
import './planet.css'
import {motion, AnimatePresence } from "framer-motion";

function Earth(props) {
    const planetID = "earth"

    // reduce stutter on fadeInUp
    const easing = [0.6, -0.05, 0.01, 0.99];

    // fade up animation
    const fadeInUp = {
        initialState: {
            y: 60,
            opacity: 0
        },
        animateState: {
            y: 0,
            opacity: 1,
            transition: {
                duration: .6,
                ease: easing
            }
        }
    };

    // use this to stagger elements on page (i.e. several cards in a row)
    const stagger = {
        animateState: {
            transition: {
                // delay transition of children components
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div>
            <AnimatePresence mode='wait'> 
            {/* mode='wait'same as exitBeforeEnter which allows each animation to complete before the next starts */}
                <motion.div
                    // defines initial state of animation
                    initial="initialState"

                    // defintes animation
                    animate="animateState"

                    // defines animation on completion
                    exit="exitState"

                    // set duration of animation
                    transition={{ duration: 0.75 }}

                    variants={{
                        initialState: { opacity: 0 },
                        animateState: { opacity: 1 },
                        exitState: { opacity: 0 }
                    }}
                >

                    <motion.div>
                        <PlanetPicture planet={planetID} />

                    </motion.div>

                    <motion.div>
                        <div id='planetDescription'>
                            <div className='bgFilter'>
                                <p>Mostly Harmless</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeInUp}>
                            <Navigation/>
                            <div class="push">
                            <PlanetData planet={planetID} />
                            </div>
                    </motion.div>

                </motion.div>

            </AnimatePresence>
        </div>
    )
}

export default Earth;