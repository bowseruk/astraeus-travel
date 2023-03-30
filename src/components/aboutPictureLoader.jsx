// Import the pictures for the about page
import image0 from "../assets/images/about-0.png";
import image1 from "../assets/images/about-1.jpg";
import image2 from "../assets/images/about-2.jpg";
import image3 from "../assets/images/about-3.jpg";
import image4 from "../assets/images/about-4.jpg";
import image5 from "../assets/images/about-5.png";

// Loader the string of the location into an array
const imageArray = [
    image0,
    image1,
    image2,
    image3,
    image4,
    image5
];
// Return the correct string to the index. Return to the starting image if there is an overflow.
function AboutPictureLoader(index) {
    return imageArray[index % imageArray.length];
}
// Export the function
export default AboutPictureLoader;