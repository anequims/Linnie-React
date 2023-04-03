//CSS
import styles from './css/home.module.css';

//Imagens
import lin from './img/linniê_logo_TCC_-_VERSÃO_3.png'
import nie from './img/amigo_do_lin_-_VERSÃO_2.png'
import blueprint from './img/blueprint.png'
//Partials
import DevCardsList from "../../partials/HomePartials/DevCardsList"

//Modules
import React from 'react';
import { Link } from 'react-router-dom';

//Components
import {ButtonPink, ButtonYellow} from "../../components/Inputs/buttons/buttons.js"


function Home() {
  return (
    <>
      <div className={styles.area}>
        <div className={`${styles.a1} col-sm-12 col-md-8 col-lg-8 col-xl-7 col-xxl-6 m-auto`}>
          <h1>
            Venha
            <span>transformar</span>
          </h1>
          <h1>
            sua ideia em 
            <span>realidade</span>
          </h1>
          <div className={styles.buttons}>
            <ButtonPink text="Comece a criar" width="15rem" link="/create"/>
            <ButtonYellow text="Explore ideias" width="10rem" link="/explore"/>
          </div>
        </div>
        <div className={`${styles.a2} col-sm-10 col-md-4 col-lg-4 col-xl-5 col-xxl-5 m-auto`}>
          <Link  to="/create" style={{color:'#C25E84'}}>
            <h1>Crie</h1>
            <img src={lin} alt="Lin" />
          </Link>
          <Link to="/explore" style={{color:'#FCD074'}}>
            <h1>Explore</h1>
            <img src={nie} alt="nie" />
          </Link>
        </div>
      </div>
      <div className={styles.blueprint}><img src={blueprint} alt="mold"/></div>
      <div className={styles.devsArea}>
        <DevCardsList/>
      </div>
    </>
  );
}

export default Home;
