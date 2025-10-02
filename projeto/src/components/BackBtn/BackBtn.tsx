import { useNavigate } from "react-router-dom"
import styles from "./Back.module.css"

function BackBtn () {
    const navigate = useNavigate()
    return (
        <button onClick={() => navigate(-1)} className={`border-0 align-items-center ${styles.back_btn}`}>Voltar</button>
    )
}
export default BackBtn