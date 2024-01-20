import styles from './Goal.module.css'

function Goal({ icon, events, period, details, goal, completed }) {

    return (
        <div className={styles.goal + " card"}>
            <div className="flex items-center">
                <div className={styles.icon}>{icon}</div>
                <p className="text-xl ml-5 mr-10">{events}
                    <sub className="text-xs text-gray-500 ml-1">/ {period}</sub>
                </p>
                <p>{details}</p>
            </div>
            <div className="flex">
                <div className="relative m-2 mx-5">
                    <p className="text-center">{completed} of {goal}</p>
                    <div className={styles.greybar}>
                        <div
                            style={{ width: `${Math.round((completed / goal) * 100)}%` }}
                            className={styles.bluebar}>

                        </div>
                    </div>
                </div>
                <button className="boton boton--gris">Completed</button>

            </div>
        </div>
    );
}

export default Goal;
