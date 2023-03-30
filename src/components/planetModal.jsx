
import React, { useState } from 'react';
import './planetModal.css';

const PlanetModal = () => {
  const [showModal, setShowModal] = useState(true);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      {showModal && (
        <div className="modal-background">
          <div className="modal-info">
          <h2 className="heading-one">You have now entered outer space!</h2>
            <p className="heading-two">Click on a planet to find out more information and fun facts</p>
            <button className="my-button" onClick={toggleModal}>Start your space journey</button> 
          </div>
        </div>
      )}
    </div>
  );
};

export default PlanetModal;
