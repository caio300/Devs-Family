import React, { useContext } from "react";
import devsContext from "../context/Context";

const MessageModal = ({value}) => {
  const { showModalEdit, setShowModalEdit, setShowModalAdd } = useContext(devsContext);
  const { infoModal, setInfoModal, setEditDevModal } = value;

  const handleClick = () => {
    setInfoModal({...infoModal, modal: false});
    setShowModalAdd(false);
    setShowModalEdit(!showModalEdit);
    setEditDevModal(false);
  };

  return (
    <div>
      <div>
        <h2>{infoModal.message}</h2>
        <button onClick={() => handleClick()}>Sair</button>
      </div>
    </div>
  );
};

export default MessageModal;
