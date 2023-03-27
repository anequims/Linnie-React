import linError from './img/lin_error.png'
import './css/errorPage.module.css'
function ErrorPage() {
    return(
        <h1>
            <img src={linError} alt="Erro" />
            <p>Erro 404</p>
        </h1>
    )
}

export default ErrorPage