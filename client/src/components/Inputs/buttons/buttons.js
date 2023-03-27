import { Link } from 'react-router-dom'
import styles from './css/buttons.module.css'

function ButtonExplore({text, width}) {
    return(
        <Link to={"/explore"} className={`${styles.link} ${styles.btnExplore}`} style={{width:width}}>{text}</Link>
    )
}
function ButtonCreate({text, width}) {
    return(
        <Link to={"/create"}  className={`${styles.link} ${styles.btnCreate}`} style={{width:width}}>{text}</Link>
    )
}



export {ButtonExplore, ButtonCreate}