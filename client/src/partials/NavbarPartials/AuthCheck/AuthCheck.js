import 'bootstrap/dist/css/bootstrap.min.css'
import avatar from './img/avatar.png'
import {ButtonPink, ButtonYellow} from "../../../components/Inputs/buttons/buttons"
import styles from './css/authcheck.module.css'
import { Link } from 'react-router-dom';
import MobileDropdown from '../MobileDropdown/MobileDropdown'
export default function AuthCheck() {
    const Login = true;
    if (Login) {
        return(
            <>
                <div className={`${styles.dropdown} dropdown`}>
                    <button className="btn dropdown-toggle" styles={{border:"none"}} type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={avatar} width="50" height="50" alt="" />
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{left:"-5rem", top:"4.4rem"}}>
                        <li><Link className="dropdown-item" to="/user"> Perfil  </Link></li>
                        <li><Link className="dropdown-item" to="/settings">Configurações</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item" to=""> Sair </Link></li>
                    </ul>
                </div>
                <MobileDropdown/>
            </>
      )
      }else{
          return(
            <div className='d-flex'>
                <ButtonPink text="Entrar" width="4rem" link="/login"/>
                <ButtonYellow text="Cadastrar" width="6rem" link="/register"/>
            </div>
        )
      }
}