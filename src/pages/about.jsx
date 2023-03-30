// External Modules
import React from "react";
// Custom Modules
import Layout from "../components/layout.jsx";
import AboutGallery from "../components/aboutGallery.jsx";
// CSS
import "./about.css";

function About() {
    return (
        <section className="aboutPage">
            <Layout>
                <h2>About page</h2>
                <AboutGallery />
            </Layout>
        </section>
    );
}

export default About;