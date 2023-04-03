//React
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//CSS
import styles from './css/user.module.css'

//Banco de dados
import { getExploreData } from '../../api';

//Imagens
import machine from './img/machine.png'
import button from './img/button.png'
import button2 from './img/button2.png'

function UserCards() {
    const [models, setModels] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        const data = await getExploreData();
        setModels(data);
      }
      fetchData();
    }, []);
  
    return (
      <div className="container pt-5">
        <div className="d-flex flex-column align-items-center mb-5">
          <h1
            style={{
              fontFamily: 'POSTERMAN',
              letterSpacing: '1px',
              fontSize: '60px',
            }}
          >
            O melhor do Linniê
          </h1>
          <h4>os projetos no destaque de hoje</h4>
        </div>
        <div className="row">
          {models.map((model) => {
            const image = model.imageUrl;
            return (
              <div
                key={model.id}
                className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-5"
              >
                
                  <div className="shadow-lg card card-link">
                    <Link
                      to={`/model/${model.id}`}
                      className="text-decoration-none"
                      style={{ color: 'black' }}
                    >
                      <img
                        src={image}
                        alt={model.name}
                        className="card-img-top"
                        style={{ height: '400px' }}
                      />
                      <div className="mask card-img-overlay" ></div>
                    </Link>
                  </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

function User() {
    const [models, setModels] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        const data = await getExploreData();
        setModels(data);
      }
      fetchData();
    }, []);
    return(
        <>
                <div className="container-fluid">
                <div className="row">
                    <div className={`${styles.sidebar} col-sm-5 col-md-4 col-lg-3 col-xl-3 col-xxl-3 p-5`}>

                      <div className="row d-flex justify-content-center">
                        <img src={models[1]?.userAvatarUrl} alt="foto de Perfil inteira" className={styles.userImg}/> 
                      </div>
                      
                      <div className="row d-flex justify-content-center">
                        <Link to="" className="btn btn-fcd074 mb-4 fs-5" style={{width: "14vw"}}>Editar Perfil</Link>
                      </div>

                      <div className="row d-flex justify-content-center">
                        <p className="fs-5">dignissimos accusamus reiciendis provident commodi cum quod facere molestias aliquam cupiditate?</p>
                      </div>

                      <div className="row">
                        <img src={machine} alt=""/>
                      </div>

                    </div>
                    <div className={`${styles.potifolio} col pb-3`}>
                        <div className="row p-3">
                            <h1 className="ms mb-5 text-center">Portfólio</h1>
                            <UserCards/>
                        </div>
                    </div>

                </div>
            </div>
            <Link to="/create" className={styles.createBtn}>
                <img src={button} alt="" className={styles.imgBtn}/>
                <img src={button2} alt="" className={styles.imgBtnHv}/>
            </Link>
        </>
    )
}

export default User