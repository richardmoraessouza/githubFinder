import { FaSpinner } from "react-icons/fa";
import styles from "./Loader.module.css"
function Loader() {
    return (
        <>
        <FaSpinner className={`d-flex justify-content-center align-items-center ${styles.loader}`} />
        </>
    )
}
export default Loader