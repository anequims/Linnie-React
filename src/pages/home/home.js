import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../../index.css";
import "./css/home.css";
import {ButtonExplore, ButtonCreate} from "../../components/Inputs/buttons/buttons.js"
import lin from './img/linniê_logo_TCC_-_VERSÃO_3.png'
import nie from './img/amigo_do_lin_-_VERSÃO_2.png'


function Home() {
    return(
        <>
            <div className="area">
                <div className="a1 col-sm-5 col-md-4 col-lg-3 col-xl-3 col-xxl-6">
                    <h1>
                        Venha 
                        <span>transformar</span>
                    </h1>
                    <h1>
                        sua ideia em 
                        <span>realidade</span>
                    </h1>
                    <ButtonExplore text="AAAA"/>
                    <ButtonCreate text="BBBB"/>
                </div>
                <div className="a2 col-sm-5 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                    <div>
                        <h1>Crie</h1>
                        <img src={lin} alt="Lin" />
                    </div>
                    <div>
                        <h1>Crie</h1>
                        <img src={nie} alt="nie" />
                    </div>
                </div>
            </div>
       </>
    )
}

export default Home