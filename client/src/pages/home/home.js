import React from 'react';
import styles from './css/home.module.css';
import {ButtonExplore, ButtonCreate} from "../../components/Inputs/buttons/buttons.js"
import lin from './img/linniê_logo_TCC_-_VERSÃO_3.png'
import nie from './img/amigo_do_lin_-_VERSÃO_2.png'
import blueprint from './img/blueprint.png'
import DevCardsList from "../../partials/HomePartials/DevCardsList"

function Home() {
  return (
    <>
      <div className={styles.area}>
        <div className={`${styles.a1} col-sm-8 col-md-8 col-lg-6 col-xl-6 col-xxl-6`}>
          <h1>
            Venha
            <span>transformar</span>
          </h1>
          <h1>
            sua ideia em 
            <span>realidade</span>
          </h1>
          <div className={styles.buttons}>
            <ButtonExplore text="Comece a criar" width="15rem"/>
            <ButtonCreate text="Explore ideias" width="10rem"/>
          </div>
        </div>
        <div className={`${styles.a2} col-sm-5 col-md-4 col-lg-5 col-xl-5 col-xxl-5`}>
          <div>
            <h1>Crie</h1>
            <img src={lin} alt="Lin" />
          </div>
          <div>
            <h1>Explore</h1>
            <img src={nie} alt="nie" />
          </div>
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
