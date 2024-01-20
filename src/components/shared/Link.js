import styles from './Link.module.css'
import { Link as RouterLink } from 'react-router-dom';


function Link({ Icon, text, to }) {
    return (
        <RouterLink to={to} className={styles.link}>
            <Icon className={styles.icon} />
            {text && <span className={styles.text}>{text}</span>}
        </RouterLink>

    );
}

export default Link;