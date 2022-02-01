import React from 'react';
import modalInformation from '../Data/modal';
import { useSearchingContext } from '../Context/SearchingContext';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import '../Styles/modal.css';

const Modal = () => {
  const { setModal, setModalPage, modalPage } = useSearchingContext();

  return (
    <div className="modal-background">
      <div className="modal-container">
        <button onClick={() => setModal(false)} className="exit-button">
          <AiOutlineCloseCircle className="exit-icon" />
        </button>
        {modalInformation.map((info, idx) => {
          const { page, title, p1, p2, url } = info;
          if (page === modalPage) {
            return (
              <div className="modal-information">
                <div className="title">{title}</div>
                <div className="body">
                  <p>{p1}</p>
                  <p>{p2}</p>
                  {url && (
                    <img className="modal-gif" src={url} alt="wall gif" />
                  )}
                </div>
              </div>
            );
          }
        })}
        <div className="modal-footer">
          <button
            className="back-button"
            onClick={() => setModalPage(modalPage - 1)}
          >
            Back
          </button>
          <button
            className="next-button"
            onClick={() => setModalPage(modalPage + 1)}
          >
            Next
          </button>
        </div>
        <div className="modal-page">
          <span>{modalPage}/6</span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
