import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import devsContext from "../context/Context";
import MessageModal from "./MessageModal";
import close from '../icon-close.png';
import '../style/EditDevModal.css';

const EditDevModal = ({value}) => {
  const { setEditDevModal } = value;
  const { showModalEdit, setShowModalEdit, devShowInfo } = useContext(devsContext);
  const [ disableButton, setDisableButtom ] = useState(true)
  const [ infoModal, setInfoModal ] = useState({
    message: '',
    modal: false,
  })
  const [newDev, setNewDev ] = useState({
    name: '',
    age: '',
    area: '',
    img: '',
    linkedin: '',
    github: ''
  });

  const handleSubmmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const addDev = await axios.put(`http://localhost:3001/devs/${devShowInfo.id}`, { ...newDev }, {headers: { authorization: token }});
      setInfoModal({message: addDev.data.message, modal: true});
      setShowModalEdit(!showModalEdit);
    }
    catch (error) {
      console.log(error.response.data.message);
      setInfoModal({message: error.response.data.message, modal: true});
    }
  }
  
  const isDisable = () => {
    const { name, age, area, img, linkedin, github } = newDev; 
    if(name && age && area && img && linkedin && github) {
      setDisableButtom(false);
    }
  };

  useEffect(() => {
    setNewDev({...devShowInfo});
  },[]);

  useEffect(() => {
    isDisable();
  }, [newDev]);

  return (
    <div className="modal-background-editDev">
      <div className="component-modal-editDev">
        {infoModal.modal && <MessageModal value={{infoModal, setInfoModal, setEditDevModal}} />}
        <div className="modal-infos-editDev">
          <h2>Adiconar Dev</h2>
          <form onSubmit={handleSubmmit}>
            <div>
              <label htmlFor="name">
                Nome
                <input value={newDev.name} id="name" type="text" onChange={({target}) => setNewDev({...newDev, name: target.value})}/>
              </label>
              <label htmlFor="idade">
                Idade
                <input value={newDev.age} id="idade" type="text" onChange={({target}) => setNewDev({...newDev, age: parseInt(target.value)})}/>
              </label>
            </div>
            <div>
              <label htmlFor="area">
                Área
                <input value={newDev.area} id="area" type="text" onChange={({target}) => setNewDev({...newDev, area: target.value})}/>
              </label>
              <label htmlFor="linkedin">
                Linkedin
                <input value={newDev.linkedin} id="linkedin" type="text" onChange={({target}) => setNewDev({...newDev, linkedin: target.value})}/>
              </label>
            </div>
            <div>
              <label htmlFor="github">
                Github
                <input value={newDev.github} id="github" type="text" onChange={({target}) => setNewDev({...newDev, github: target.value})}/>
              </label>
              <label htmlFor="imagem">
                URL da imagem
                <input value={newDev.img} id="imagem" type="text" onChange={({target}) => setNewDev({...newDev, img: target.value})}/>
              </label>
            </div>
            <div className="button-save-editDev">
              <button disabled={disableButton} type="submmit">Salvar</button>
            </div>
          </form>
        </div>
        <button className="img-close-editDev" type="button" onClick={() => setEditDevModal(false)}>
          <img src={close} alt="Fechar" />
        </button>
      </div>
    </div>
  );
};

export default EditDevModal;
