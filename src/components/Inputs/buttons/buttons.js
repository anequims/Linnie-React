import './css/buttons.css'

function ButtonExplore(props) {
    return(
        <button className="btn-explore">{props.text}</button>
    )
}
function ButtonCreate(props) {
    return(
        <button className="btn-create">{props.text}</button>
    )
}



export {ButtonExplore, ButtonCreate}