//Modules
import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

//CSS
import styles from './css/auth.module.css'

//imagens
import logo from './img/Logo.png'

function Login() {
    useEffect(() => {
        document.body.classList.add(styles.background); // adiciona classe ao body
        return () => {
          document.body.classList.remove(styles.background); // remove classe do body
        };
      }, []);
  return (
    <div className="container mt-5">
      <div className={`${styles.row} row`}>
        <div className="col-sm-12 col-md-9 col-lg-6 col-xl-5 col-xxl-5 m-auto">
          <form method="post" action="">
            <div className="d-flex justify-content-center"><img src={logo} alt="" /></div>
                <h1>Seja Bem-Vindo</h1>
                <p>
                    <label htmlFor="user_email">E-mail</label>
                    <input name="user_email" type="text" required="required" />
                </p>

                <p>
                    <label htmlFor="user_password">Senha</label>
                    <input name="user_password" type="text" required="required" />
                </p>

                <div className="d-flex flex-column align-items-center">
                    <Link to="/password">Esqueceu sua senha?</Link>
                    <button className={styles.btnC25E84} type="submit">
                        Entrar
                    </button>

                    <div className={styles.icons}>
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faTwitter} />
                    </div>
                    <div className="d-flex">
                        <p>Não tem conta?</p>
                        <Link to="/register">Crie uma</Link>
                    </div>
                </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
