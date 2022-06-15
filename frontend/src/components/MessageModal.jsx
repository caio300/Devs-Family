import React, { useContext } from "react";
import devsContext from "../context/Context";
import '../style/MessageModal.css';

const MessageModal = ({value}) => {
  const { showModalEdit, setShowModalEdit, setShowModalAdd } = useContext(devsContext);
  const { infoModal, setInfoModal, setEditDevModal } = value;

  const handleClick = () => {
    setInfoModal({...infoModal, modal: false});
  };

  return (
    <div className="modal-background-message">
      <div className="component-modal-message">
        <div className="modal-infos-message">
          <h2>{infoModal.message}</h2>
          <div className="button-message">
            <button onClick={() => handleClick()}>Sair</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageModal;
