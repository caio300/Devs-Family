import React, {useContext, useState} from 'react';
import Header from '../components/Header';
import '../style/Home.css';
import Buttons from '../components/ButtonsSetings'
import devsContext from '../context/Context';
import DevModal from '../components/DevModal';

const Home = () => {
  const {devs, setDevShowInfo, showModal, setShowModal} = useContext(devsContext);

  const renderDev = (dev) => {
    const objDev = {
      name: dev.name,
      age: dev.age,
      img: dev.img,
      area: dev.area,
      linkedin: dev.linkedin,
      github: dev.github
    }
    return (
      <div key={dev.id} className="dev">
        <img id={dev.id} src={dev.img} alt={dev.name} className="img-dev" onClick={() => {setDevShowInfo(objDev); setShowModal(true)}}/>
        <p>{dev.name}</p>
        <p className='text-dev'>{dev.area}</p>
        <Buttons />
      </div>
    )
  };

  return (
    <div className='page-home'>
      { showModal && <DevModal /> }
      <Header />
      <section className='section-home'>
        <div className='header-section'>
          <h1>Devs</h1>
          <button>Adicionar Devs</button>
        </div>
        <div className='cards-devs'>
          {devs && devs.map((dev) => renderDev(dev))}
        </div>
      </section>
    </div>
  );
};

export default Home;
