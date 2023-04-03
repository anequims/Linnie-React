//Modules
import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

//CSS
import styles from './css/auth.module.css'

//imagens
import logo from './img/Logo.png'

function Register() {
  useEffect(() => {
    document.body.classList.add(styles.background); // adiciona classe ao body
    return () => {
      document.body.classList.remove(styles.background); // remove classe do body
    };
  }, []);
  return (
    <div className="container  mt-3">
      <div className={`${styles.row} row`}>
        <div className="col-sm-12 col-md-9 col-lg-6 col-xl-5 col-xxl-5 m-auto">
          <form method="post" action="">
            <div className="d-flex justify-content-center"><img src={logo} alt="" /></div>
            <h1>Crie sua conta</h1>
            <p>
              <label htmlFor="user_name">Nome de usuário</label>
              <input name="user_name" type="text" required="required" />
            </p>

            <p>
              <label htmlFor="user_email">E-mail</label>
              <input name="user_email" type="text" required="required" />
            </p>

            <p>
              <label htmlFor="user_password">Senha</label>
              <input name="user_password" type="text" required="required" />
            </p>

            <p className="mb-5">
              <label htmlFor="user_password_confirm">Confirme sua senha</label>
              <input name="user_password_confirm" type="text" required="required" />
            </p>

            <div className="d-flex flex-column align-items-center">

              <button className={styles.btnC25E84} type="submit"> Cadastrar </button>
              <div className={styles.icons}>
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faTwitter} />
              </div>
              <div className="d-flex">
                <p>Já tem uma conta?</p>
                <Link to="/login">Entrar</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
