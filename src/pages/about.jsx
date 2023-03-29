import React from "react";
import "./about.css"
import Navigation from "../components/navigation"

import image1 from "../assets/images//hs-2015-29-a-xlarge_web.jpg"
import image2 from "../assets/images//jupiterjpg.jpg"
import image3 from "../assets/images//blackhole.png"
import image4 from "../assets/images//stsci-h-p1943a-f-2076x1484 (1).png"
import image5 from "../assets/images//main_image_star-forming_region_carina_nircam_final-5mb.jpg"




function About() {
    return (

        <section className="aboutPage">
            <Navigation />
            <header >About page</header>
            <br></br>
            <br></br>
            <br></br>








            <div className="container5">
                <figure><img src = {image1}  width="1000" height="750" alt="Supernova remnant" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title"><em>Christos Laios</em></h2>
                    <p> <em> I would like to die on Mars. Just not on impact. - Elon Musk

                    </em> </p>
                    <div className="card-actions justify-end">
                        <a href="https://github.com/ChrisCode3" target="_blank" >
                            <button className="btn btn-primary">GitHub</button>
                        </a>
                    </div>
                </div>
            </div>


            <div className="container5">
                <figure><img src = {image2} width="1000" height="750" alt="Jupiter" /></figure>
                <div className="card-body">
                    <h2 className="card-title"><em>Claire Ingram</em></h2>
                    <p> <em>"Make it so!" - Jean-Luc Picard</em>
                    </p>
                    <div className="card-actions justify-end">
                        <a href="https://github.com/Ing3rs" target="_blank" >
                            <button className="btn btn-primary">GitHub</button>
                        </a>
                    </div>
                </div>
            </div>


            <div className="container5">
                <figure><img src= {image3} width="1000" height="750" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title"><em>Adam Bolsover</em></h2>
                    <p> <em>"The only way to discover the limits of the possible is to go beyond them into the impossible." - Arthur C. Clarke
                    </em> </p>
                    <div className="card-actions justify-end">
                        <a href="https://github.com/bowseruk" target="_blank" >
                            <button className="btn btn-primary">GitHub</button>
                        </a>
                    </div>
                </div>
            </div>


            <div className="container5">
                <figure><img src= {image4} width="1000" height="750" alt="Saturn" /></figure>
                <div className="card-body">
                    <h2 className="card-title"><em>Daisy Everard</em></h2>
                    <p> <em>“monoculture, turned inward in an everlasting round of tedium.  <br></br>Only by accepting the other can it truly find diversion and inspiration; <br></br> only by allowing the universe to be separate from it can it have the infinite variety it craves.” <br></br> ― Adrian Tchaikovsky, Children of Ruin
                    </em> </p>
                    <div className="card-actions justify-end">
                        <a href="https://github.com/DaisyEverard" target="_blank" >
                            <button className="btn btn-primary">GitHub</button>
                        </a>
                    </div>
                </div>
            </div>

            <div className="container5">
                <figure><img src={image4} width="1000" height="750" alt="Solar Flare" /></figure>
                <div className="card-body">
                    <h2 className="card-title"><em>Clarissa Cole</em></h2>
                    <p> <em>so much universe so little time </em>
                    </p>
                    <div className="card-actions justify-end">
                        <a href="https://github.com/RissaC2" target="_blank" >
                            <button className="btn btn-primary">GitHub</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="container5">
                <figure><img src= {image5} width="1000" height="750" alt="Nebula" /></figure>
                <div className="card-body">
                    <h2 className="card-title"><em>Anil Jassi</em></h2>
                    <p> <em>Modern science says: 'The sun is the past, the earth is the present, the moon is the future.'<br></br> From an incandescent mass we have originated, and into a frozen mass we shall turn. <br></br> Merciless is the law of nature, and rapidly and irresistibly we are drawn to our doom. <br></br> ― Nikola Tesla
                    </em> </p>
                    <div className="card-actions justify-end">
                        <a href="https://github.com/Skyline199" target="_blank" >
                            <button className="btn btn-primary">GitHub</button>
                        </a>
                    </div>
                </div>
            </div>






        </section>
    );
}

export default About;