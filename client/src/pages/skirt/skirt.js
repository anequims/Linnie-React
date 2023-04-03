import React, { useState } from "react";

import styles from './css/skirt.module.css';

import test from './img/test.png';
import test2 from './img/test2.png';
import test3 from './img/test3.PNG';

function Skirt() {
  const [imagem, setImagem] = useState(test);
  const [visibility, setVisibility] = useState(true);

  function handleSelected(opcao) {
    switch (opcao) {
      case "opcao1":
        setImagem(test);
        break;
      case "opcao2":
        setImagem(test2);
        break;
      case "opcao3":
        setImagem(test3);
        break;
      default:
        setImagem();
    }
  }

  function toggleDropdown() {
    setVisibility(!visibility);
  }

  return (
    <div className="container">
        <div className={`${styles.options} row mt-4`}>
            <div className="col">
                <button className="btn fs-2" onClick={toggleDropdown}>
                Modelos de Saias
                </button>
                <div
                className="d-flex flex-column align-items-start"
                style={{ visibility: visibility ? "hidden" : "visible" }}
                >
                <button className="btn" onClick={() => handleSelected("opcao1")}>
                    Saia Circular
                </button>
                <button className="btn" onClick={() => handleSelected("opcao2")}>
                    Saia Semi Circular
                </button>
                <button className="btn" onClick={() => handleSelected("opcao3")}>
                    Saia Três Quartos
                </button>
                </div>
            </div>
        </div>

        <div className="row">
            <div className={`${styles.skirExemple} col-sm-12 col-lg-6`}>
            {imagem && <img src={imagem} alt="imagem do filtro" />}
            </div>

            <div className={`${styles.Forms} col-sm-12 col-lg-6 `}>
                <form className="d-flex flex-column align-self-start align-items-center">

                    <h3 className="mb-4">Centímetros ou polegadas?</h3>
                    <div className={`${styles.FormCheck} form-check`}>

                        <input type="radio" className="btn-check" name="options" id="cm" autoComplete="off" defaultChecked/>
                        <label className="btn btn-secondary" htmlFor="cm">
                            <p> cm </p>
                        </label>
                        
                        <input type="radio" className="btn-check" name="options" id="in" autoComplete="off" />
                        <label className="btn btn-secondary" htmlFor="in">
                            <p> in </p>
                        </label>

                    </div>

                    <h3>Medida da cintura</h3>
                    <div>
                        <input className="form-control" type="number" />
                        <button className="btn btn-dark" type="submit"><p>Enviar</p></button>
                    </div>

                    <h3>Medida em centímetros</h3>
                    <div>
                        <input className="form-control" type="number" />
                        <button className="btn btn-dark" type="submit"><p>Enviar</p></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
}

export default Skirt;
