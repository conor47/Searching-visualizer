import React from 'react';
import modalInformation from '../Data/modal';
import { useSearchingContext } from '../Context/SearchingContext';
import '../Styles/modal.css';

const Modal = () => {
  const { setModal, setModalPage } = useSearchingContext();

  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="title">Tutorial</div>
        <div className="body">
          <p>Placeholder</p>
          <p>Placeholder 1</p>
        </div>
        <div className="footer"></div>
        <button onClick={() => setModal(false)}>Back</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default Modal;
