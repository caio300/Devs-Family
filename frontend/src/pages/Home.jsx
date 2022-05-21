import React, {useContext, useState} from 'react';
import Header from '../components/Header';
import '../style/Home.css';
import apagar from '../icon-apagar.png';
import editar from '../icon-editar.png';
import devsContext from '../context/Context';
import DevModal from '../components/DevModal';

const Home = () => {
  const {devs, setDevShowInfo} = useContext(devsContext);
  const [ showModal, setShowModal ] = useState(false); 

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
        <div className='icons-div'>
          <img className='icon' src={apagar} alt="Icon apagar" />
          <img className='icon' src={editar} alt="Icon editar" />
        </div>
      </div>
    )
  };

  return (
    <div className='page-home'>
      <Header />
      { showModal && <DevModal setShowModal={setShowModal}/> }
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
