import React, { useEffect, useState } from "react";
import devsContext from "./Context";
import axios from "axios";

const Provider = ({children}) => {
  const [ devs, setDevs ] = useState('');
  const [ devShowInfo, setDevShowInfo] = useState({});
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
  }, [showModalAdd]);

  const data = {
    devs,
    devShowInfo,
    setDevShowInfo,
    showModal,
    setShowModal,
    showModalAdd,
    setShowModalAdd
  };

  return (
    <devsContext.Provider value={data}>
      {children}
    </devsContext.Provider>
  )
};

export default Provider;
