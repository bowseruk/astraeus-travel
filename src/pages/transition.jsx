import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Navigation from '../components/navigation'
import SolarSystem from '../components/solarSystem'
import './home.css';

// display transition image before loading planet

function Transition( { Component, pageProps }) {
    return (
        <AnimatePresence exitBeforeEnter>
            {/* 'exitBeforeenter' ensures only one component is rendered at a time */}
            <motion.div 
                key= {router.route}
                initial="initialState"
                animate="animateState"
                exit="exitState"
                className="base-page-size"

                variants={{
                    initialState: {
                        // state when first loads
                        opacity: 0,
                    },

                    animateState: {
                        // state after it has finished animating
                        opacity: 1,
                    },

                    exitState: {
                        // state once it exits the screen
                    },
                }}
            >
                <Component {...pageProps} />
            </motion.div>
        </AnimatePresence>
    )
}

export default Transition;
