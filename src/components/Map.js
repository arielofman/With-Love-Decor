import React from 'react' 
import Pulse from 'react-reveal/Pulse';
function Map() {
    return (
        <Pulse> 
        <div className="map"> 
            <iframe className="w-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2870.1514685005614!2d-79.46949708452898!3d43.99759457911095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ad5dac05453eb%3A0x54567f108175cbbd!2sWith%20Love%20Event%20Decor%20%26%20Flowers!5e0!3m2!1sen!2sca!4v1622760241725!5m2!1sen!2sca"
                title="Flower Shop Location" height={"400px"} allowFullScreen="" loading="lazy"></iframe>
        </div>
        </Pulse>
    )
}

export default Map
