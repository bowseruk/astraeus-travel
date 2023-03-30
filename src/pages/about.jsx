// External Modules
import React from "react";
// Custom Modules
import Layout from "../components/layout.jsx";
import AboutGallery from "../components/aboutGallery.jsx";
// CSS
import "./about.css";
// This function is what is launched when the About page is selected
function About() {
    return (
        <section className="aboutPage">
            <Layout>
                <h2>About page</h2>
                <h3>The Team</h3>
                <AboutGallery />
            </Layout>
        </section>
    );
}

export default About;