import React from 'react';
import '../Styles/modal.css';

const Modal = ({ setModal }) => {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="title">Tutorial</div>
        <div className="body">
          <p>Placeholder</p>
          <p>Placeholder 1</p>
        </div>
        <div className="footer"></div>
        <button onClick={() => setModal(false)}>Cancel</button>
        <button>Continue</button>
      </div>
    </div>
  );
};

export default Modal;
