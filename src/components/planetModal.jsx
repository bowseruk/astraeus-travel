
import React, { useState } from 'react';
import './PlanetModal.css';

const PlanetModal = () => {
  const [showModal, setShowModal] = useState(true);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      {showModal && (
        <div className="modal-background">
          <div className="modal">
          <h2 class="heading">You have now entered outer space!</h2>
            <p class="heading-two">Click on a planet to find out more information and fun facts</p>
            <button className="my-button" onClick={toggleModal}>Start your space journey</button> 
          </div>
        </div>
      )}
    </div>
  );
};

export default PlanetModal;
