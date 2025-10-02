import { MdErrorOutline } from 'react-icons/md'
import styles from './Error.module.css'

function Error() {
    return (
        <div className={`${styles.error} d-flex flex-column align-items-center`}>
            <MdErrorOutline className={`${styles.error_icon}`} />
            <h3>Usuário não encontrado!</h3>
            <p>Verifique se o nome de usuário está correto e tente novamente.</p>
        </div>
    )
}

export default Error