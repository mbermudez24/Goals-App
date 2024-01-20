import styles from './Principal.module.css'
import Link from './Link';
import { ReactComponent as ListSVG } from "../../img/list.svg";
import { ReactComponent as NewSVG } from "../../img/new.svg";

function Principal({ children }) {
    return (
        <div className={styles.principal}>
            <aside className={styles.aside}>
                <Link
                    to="/list"
                    text="List of goals"
                    Icon={ListSVG}
                />

                <Link
                    to="/new"
                    text="New Goal"
                    Icon={NewSVG}
                />
            </aside>
            <main className={styles.main}>
                {children}
            </main>

        </div>
    );
}

export default Principal;
