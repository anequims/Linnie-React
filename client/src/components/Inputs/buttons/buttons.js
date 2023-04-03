import { Link } from 'react-router-dom'
import styles from './css/buttons.module.css'

function ButtonPink({text, width, link}) {
    return(
        <Link to={link} className={`${styles.link} ${styles.btnExplore}`} style={{width:width}}>{text}</Link>
    )
}
function ButtonYellow({text, width, link}) {
    return(
        <Link to={link}  className={`${styles.link} ${styles.btnCreate}`} style={{width:width}}>{text}</Link>
    )
}



export {ButtonPink, ButtonYellow}