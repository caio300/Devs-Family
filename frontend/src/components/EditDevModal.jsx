import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import devsContext from "../context/Context";
import Header from "./Header";
import MessageModal from "./MessageModal";

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
    <div>
      <div>
        <Header />
        {infoModal.modal && <MessageModal value={{infoModal, setInfoModal, setEditDevModal}} />}
        <div>
          <h2>Adiconar Dev</h2>
          <form onSubmit={handleSubmmit}>
            <label htmlFor="name">
              Nome
              <input value={newDev.name} id="name" type="text" onChange={({target}) => setNewDev({...newDev, name: target.value})}/>
            </label>
            <label htmlFor="idade">
              Idade
              <input value={newDev.age} id="idade" type="text" onChange={({target}) => setNewDev({...newDev, age: parseInt(target.value)})}/>
            </label>
            <label htmlFor="area">
              Área
              <input value={newDev.area} id="area" type="text" onChange={({target}) => setNewDev({...newDev, area: target.value})}/>
            </label>
            <label htmlFor="linkedin">
              Linkedin
              <input value={newDev.linkedin} id="linkedin" type="text" onChange={({target}) => setNewDev({...newDev, linkedin: target.value})}/>
            </label>
            <label htmlFor="github">
              Github
              <input value={newDev.github} id="github" type="text" onChange={({target}) => setNewDev({...newDev, github: target.value})}/>
            </label>
            <label htmlFor="imagem">
              URL da imagem
              <input value={newDev.img} id="imagem" type="text" onChange={({target}) => setNewDev({...newDev, img: target.value})}/>
            </label>
            <button disabled={disableButton} type="submmit">Salvar</button>
            <button type="button" onClick={() => setEditDevModal(false)}>Cancelar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditDevModal;
