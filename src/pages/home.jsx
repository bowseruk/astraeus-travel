import Navigation from '../components/navigation'
import SolarSystem from '../components/solarSystem'
import './home.css'

function Home(props) {
    return (
        <div>
            <Navigation />
            <SolarSystem />
            <p>Description</p>
            {/* Modal */}

        </div>
    )
}

export default Home