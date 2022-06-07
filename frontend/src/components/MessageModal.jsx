import React, { useContext } from "react";
import devsContext from "../context/Context";

const MessageModal = ({value}) => {
  const { setShowModalAdd } = useContext(devsContext);
  const { infoModal, setInfoModal } = value;

  return (
    <div>
      <div>
        <h2>{infoModal.message}</h2>
        <button onClick={() => {setInfoModal({...infoModal, modal: false}); setShowModalAdd(false)}}>Sair</button>
      </div>
    </div>
  );
};

export default MessageModal;
