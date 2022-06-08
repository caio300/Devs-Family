import React, { useEffect, useState } from "react";
import devsContext from "./Context";
import axios from "axios";

const Provider = ({children}) => {
  const [ devs, setDevs ] = useState('');
  const [ devShowInfo, setDevShowInfo] = useState({});
  const [ deleteDev, setDeleteDev ] = useState(false);
  const [ showModal, setShowModal ] = useState(false);
  const [ showModalAdd, setShowModalAdd ] = useState(false);

  const fetchDevs = async () => {

    const response = await axios.get('http://localhost:3001/devs');
    setDevs(response.data);
  };

  useEffect(() => {
    fetchDevs();
  }, []);

  useEffect(() => {
    fetchDevs();
  }, [showModalAdd, deleteDev]);

  const data = {
    devs,
    devShowInfo,
    setDevShowInfo,
    showModal,
    setShowModal,
    showModalAdd,
    setShowModalAdd,
    deleteDev,
    setDeleteDev
  };

  return (
    <devsContext.Provider value={data}>
      {children}
    </devsContext.Provider>
  )
};

export default Provider;
